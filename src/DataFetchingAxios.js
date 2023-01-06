import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function DataFetchingAxios() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
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
      <ul style={{listStyleType: "none"}}>
        {posts.map((post) => (
        <>
          <li><h3>Title: {post.title}</h3></li>
          <li>Body: {post.body}</li>
        </>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingAxios;
