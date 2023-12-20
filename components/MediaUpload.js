"use client";

import { useEffect, useState } from "react";

const uploadImage = async (imageData, fileType) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/drwcm1tej/${
          fileType.includes("image") ? "image" : "video"
        }/upload`,
        {
          method: "POST",
          body: imageData,
        }
      );
      const response = await res.json();
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export default function MediaUpload({
  onSuccessUpload,
  onInitialUpload,
  isMultiple = true,
  children,
}) {
  const [fileList, setFileList] = useState(null);

  const onImageUploadHandler = async (files) => {
    const allImagePromises = [];
    files.forEach((file, i) => {
      const imageData = new FormData();
      imageData.append("file", file);
      imageData.append("upload_preset", "ravi_raushan_ka_apna_facebook");
      imageData.append("cloud_name", "drwcm1tej");
      allImagePromises.push(uploadImage(imageData, file.type));
    });
    Promise.all(allImagePromises)
      .then((medias) => {
        setFileList(null);
        const mainMedia = medias.map((media) => {
          const { asset_id, resource_type, secure_url, url } = media;
          return { asset_id, resource_type, secure_url, url };
        });
        onSuccessUpload(mainMedia);
      })
      .catch((error) => {
        console.log("There is some error while uploading media", error);
      });
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
        onClick={(e) => {
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
