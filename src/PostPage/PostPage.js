import config from '../config/index';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOnePost } from '../services/post.service';
import './PostPage.scss';

function PostPage() {

    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getOnePost(id)
            .then(data => setPost(data))
            .catch(console.log)
    }, [id]);

    return (
        <div className="PostPage">
            {post && <div>
                <h1>My post</h1>
                <img src={config.apiUrl + '/' + post.image} />
                <div>
                    <strong>{post.author.username}</strong>
                </div>
                <p>{post.body}</p>
            </div>}
            <div className="PostPage_comments">
                <h3>Comments</h3>
            </div>
        </div>
    );
}

export default PostPage;