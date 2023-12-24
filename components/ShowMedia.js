import Image from "next/image";

export default function ShowMedia({ mediaType, url, style = {} }) {
  const styleObj = { width: "100%", height: "auto", ...style };
  return (
    <>
      {mediaType === "image" ? (
        <Image
          src={url}
          alt="mediaUploadDialogImg"
          sizes="100vw"
          height={0}
          width={0}
          style={styleObj}
        />
      ) : (
        <video autoPlay={true} muted loop style={styleObj}>
          <source src={url} />
        </video>
      )}
    </>
  );
}
