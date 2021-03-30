import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
  const[posts, setPosts] = useState([]);
  useEffect(() => {
  
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))




  }, [])


    return (
        <div>
            <h2>this is home</h2>
            <h3>{posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;