// src/components/CreatePost.js
import React, { useState } from "react";
import { firestore, auth } from "../firebase";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleCreatePost = async () => {
    const { uid } = auth.currentUser;
    await firestore.collection("posts").add({
      title,
      content,
      uid,
      createdAt: new Date(),
    });
    history.push("/");
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button onClick={handleCreatePost}>Publish</button>
    </div>
  );
};

export default CreatePost;
