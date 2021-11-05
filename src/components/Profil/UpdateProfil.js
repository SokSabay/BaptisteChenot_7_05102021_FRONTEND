import React from "react";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  // const [bio, setBio] = useState("");
  // const [updateForm, setUpdateForm] = useState(false);
  return (
    <div classname="profil-container">
      <h1>Profil de {localStorage.getItem("username")}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src="" alt="user-pic" />
          <UploadImg />
          {/* <p>{errors.mazSize}</p>   
            <p>{errors.format}</p>    */}
        </div>
        <div className="right-part">
          <div className="bio-update">
            <>
              {/* <p onClick={() => setUpdateForm(!updateForm)}> ma bio</p> */}
              {/* <button onClick={() => setUpdateForm(!updateForm)}>Modifier bio</button> */}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
