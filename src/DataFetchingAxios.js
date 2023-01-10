import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function DataFetchingAxios() {
  const [posts, setposts] = useState([]);
  const [title, settitle] = useState("title");

  useEffect(() => {
    settitle("Data From JSONPlaceholder Server");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        setposts(response.data);
      })
      .catch((err) => { 
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 style={{ justifyContent: "center", display: "flex" }}>{title}</h1>
      <hr />
      <ul style={{ listStyleType: "none" }}>
        {posts.map((post) => (
          <>
            <li>
              <h5><b>Title: {post.title}</b></h5>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Body:</span> {post.body}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingAxios;
