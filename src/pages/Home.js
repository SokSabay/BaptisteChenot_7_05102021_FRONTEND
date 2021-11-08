import React, { useContext } from "react";
import Threads from "../components/Threads";
import { UidContext } from "../components/AppContext";

const Home = () => {
    const uid = useContext(UidContext);
    console.log(uid);
    if (!uid){
      window.location = "/profil";
    } else {
      return (
        <div className="home">
          <div className="main">
            <Threads />
          </div>
        </div>
      );
    }
};

export default Home;
