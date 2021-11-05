import React from "react";
import axios from "axios";

const Logout = () => {


const logout =  () => {
  localStorage.clear();
axios.defaults.headers.common["Authorization"] = `Bearer null`;
window.location = "/";
};


  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};

export default Logout;
