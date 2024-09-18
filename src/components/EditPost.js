// src/components/EditPost.js
import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { useParams, useHistory } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await firestore.collection("posts").doc(id).get();
      setTitle(post.data().title);
      setContent(post.data().content);
    };
    fetchPost();
  }, [id]);

  const handleEditPost = async () => {
    await firestore.collection("posts").doc(id).update({ title, content });
    history.push("/");
  };

  const handleDeletePost = async () => {
    await firestore.collection("posts").doc(id).delete();
    history.push("/");
  };

  return (
    <div>
      <h2>Edit Post</h2>
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
      <button onClick={handleEditPost}>Save</button>
      <button onClick={handleDeletePost}>Delete</button>
    </div>
  );
};

export default EditPost;
