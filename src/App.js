import React, { useState } from "react";
import PostItem from "./components/PostItem";

function App() {
  const [posts, setPosts] = useState([
    {id : 1, title: "JS", body: "Content"},
    {id: 2, title: "Pyhton", body: "Content" },
  ])




  return (
    <div className="App">
      {posts.map(post => <PostItem post={{ id: post.id, title: post.title, body: post.body }} key={post.id} /> )}

    </div>
  );
}

export default App;
