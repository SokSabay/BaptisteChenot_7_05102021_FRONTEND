
import axios from 'axios';
import React, { useEffect } from "react";
const Threads = () => {
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
              console.log(res.data);
              localStorage.setItem("Post", JSON.stringify(res.data));
            })
            .catch((err) => console.log("No token"));
        };
        fetchToken();
      });
    // axios
    //   .get(`${process.env.REACT_APP_API_URL}api/posts/`)
    //   .then((response) =>
    //     this.setState({ totalReactPackages: response.data.total })
    //   );
    return (
        <div>
            Thread
        </div>
    );
};

export default Threads;