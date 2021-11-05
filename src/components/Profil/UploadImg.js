import React, { useState } from "react";

const UploadImg = () => {
  const [file, setFile] = useState();

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", localStorage.getItem("username"));
    data.append("userId", localStorage.getItem("userId"));
    data.append("file", file);
  };
  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        id="file"
        accept=" .jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <input type="submit" value="envoyer" />
    </form>
  );
};

export default UploadImg;
