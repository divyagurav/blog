// src/components/Home.js
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await firestore.collection("posts").get();
      setPosts(
        postsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create">Create New Post</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Link to={`/edit/${post.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
