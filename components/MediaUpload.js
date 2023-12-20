"use client";

import { useEffect, useState } from "react";

const uploadImageOnCloud = async (imageData, fileType) => {
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    }/${fileType.includes("image") ? "image" : "video"}/upload`,
    {
      method: "POST",
      body: imageData,
    }
  );
  const json = await res.json();
  return json;
};

export default function MediaUpload({
  onSuccessUpload,
  onInitialUpload,
  isMultiple = true,
  children,
}) {
  const [fileList, setFileList] = useState(null);

  const onImageUploadHandler = async (files) => {
    try {
      const allImagePromises = [];
      files.forEach((file) => {
        const imageData = new FormData();
        imageData.append("file", file);
        imageData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );
        imageData.append(
          "cloud_name",
          process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
        );
        allImagePromises.push(uploadImageOnCloud(imageData, file.type));
      });
      const medias = await Promise.all(allImagePromises);
      const mainMedia = medias.map((media) => {
        const { asset_id, resource_type, secure_url, url } = media;
        return { asset_id, resource_type, secure_url, url };
      });
      setFileList(null);
      onSuccessUpload(mainMedia);
    } catch (error) {
      console.log("There is some error while uploading media", error);
    }
  };

  useEffect(() => {
    const files = fileList ? [...fileList] : [];
    if (files.length) {
      (async () => {
        await onImageUploadHandler(files);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileList]);

  return (
    <>
      <span
        onClick={() => {
          document.getElementById("selectedFile").click();
        }}
      >
        {children}
      </span>
      <input
        style={{ display: "none" }}
        className="fileInput"
        id="selectedFile"
        type="file"
        multiple={isMultiple}
        onChange={(e) => {
          onInitialUpload(e.target.files);
          setFileList(e.target.files);
        }}
      />
    </>
  );
}
