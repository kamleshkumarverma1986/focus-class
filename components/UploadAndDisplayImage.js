"use client"

import { useState } from 'react';

const UploadAndDisplayImage = () => {
  const [file, setFile] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    const res = await fetch("http://localhost:3000/api/upload-image", {
      mode: 'cors',
      method: "POST",
      body: data,
    });
    const resData = await res.json();
    console.log("resData ", resData);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="file" onChange={(e) => {
        setFile(e.target.files[0])
      }} />
      <button type="submit">Upload Image on server</button>
    </form>
  );
};

export default UploadAndDisplayImage;
