import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function DataFetchingAxios() {
  const [posts, setposts] = useState([]);
  const [title, settitle] = useState('')

  useEffect(() => {
    settitle("Data From Dummy JSON Server")
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setposts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
        <h1 style={{justifyContent:"center",display:"flex"}}>{title}</h1>
      <ul style={{listStyleType: "none"}}>
        {posts.map((post) => (
        <>
          <li><h3>Title: {post.title}</h3></li>
          <li><span style={{fontWeight:"bold"}}>Body:</span> {post.body}</li>
        </>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingAxios;
