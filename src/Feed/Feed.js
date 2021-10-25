import React, { useEffect, useState } from 'react';
import { getFeed } from '../services/post.service';
import Post from './../common/Post/Post';
import './Feed.scss';

function Feed() {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const posts = await getFeed();
                setPosts(posts);
            } catch (err) {
                console.log(err);
            }
        }
        getPosts();
    }, [])

    return (
        <div>
            {posts.map((post) => <Post data={post} />)}
        </div>
    );
};

export default Feed;