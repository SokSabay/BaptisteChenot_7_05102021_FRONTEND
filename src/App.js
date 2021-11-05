import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      // console.log(localStorage.getItem("token"));
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/posts`,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, []);
  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
