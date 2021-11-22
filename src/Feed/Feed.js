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
        <div className="feed">
            <div className="feed_wrapper">
				{posts.map((post) => <Post data={post} key={post._id} />)}
			</div>
        </div>
    );
};

export default Feed;