import axios from "axios";
import React from "react";
import Card from "./Post/card";
// import { Link } from 'react-router-dom';

const baseURL = `${process.env.REACT_APP_API_URL}api/posts`;

export default function Threads() {
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
      const data = response.data;
      console.log(data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="thread-container">
        <ul>
          {post.map((post) => {
            return <Card post={post} key={post.id} />
          })}
        </ul>
      </div>
    </>
  );
}
// }
// const Threads = () => {
//       useEffect(() => {
//         const fetchToken = async () => {
//           // console.log(localStorage.getItem("token"));
//           const token = localStorage.getItem("token");
//           axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//           await axios({
//             method: "get",
//             url: `${process.env.REACT_APP_API_URL}api/posts`,
//             headers: { "Content-Type": "application/json" },
//             withCredentials: true,
//           })
//             .then((res) => {
//               console.log(res.data);
//               localStorage.setItem("Post", JSON.stringify(res.data));
//             })
//             .catch((err) => console.log("No token"));
//         };
//         fetchToken();
//       });
//     // axios
//     //   .get(`${process.env.REACT_APP_API_URL}api/posts/`)
//     //   .then((response) =>
//     //     this.setState({ totalReactPackages: response.data.total })
//     //   );
//     return (
//       <div className="thread-container">
//         <ul>
//           <li>{localStorage.getItem("Post.content")}</li>
//         </ul>
//       </div>
//     );
// };

// export default Threads;

// {
//   post.map((post) => (
//     <div>
//       <h2>{post.title}</h2>
//       <img src={post.attachment} alt="funny GIF" width="" />
//     </div>
//   ));
// }
