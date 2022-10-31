import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import{db} from './firebase'
import { collection, getDoc, getDocs } from 'firebase/firestore'
function Feed() {
  const [posts, setPosts] = useState([]);
  const userCollectionRef = collection(db, 'posts')
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(userCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);
  return (
    <div className="feed">
    <div className="feed__header">
      <h2>Home</h2>
      <TweetBox />
      {posts.map(post => (
        <Post 
      displayName={post.displayName} 
      username={post.username}
      verified={post.verified}
      image={post.image}
      text={post.text}
      avatar={post.avatar}
      />
      ))}
    </div>
    </div>
  )
}

export default Feed