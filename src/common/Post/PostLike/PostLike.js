import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { postLike, postUnlike } from '../../../services/post.service';
import './PostLike.scss';

function PostLike({ postId, likes }) {

    const { user } = useContext(UserContext);
    const [likesCount, setLikesCount] = useState(likes.length);
    const [hasLiked, setHasLiked] = useState(likes.includes(user._id));

    function like() {
        setHasLiked(true);
        setLikesCount(prev => prev + 1);
        postLike(postId).catch(() => setHasLiked(false));
    }

    function unlike() {
        setHasLiked(false);
        setLikesCount(prev => prev - 1);
        postUnlike(postId).catch(() => setHasLiked(true));
    }

    return (
        <div className="post_like">
            {hasLiked
                ? <button onClick={unlike} className="like_btn"><FontAwesomeIcon icon={faHeart} className="heart_unlike" onclick="ani()" size="lg" /></button>
                : <button onClick={like} className="like_btn"><FontAwesomeIcon icon={faHeart} className="heart_like" onclick="ani()" size="lg" /></button>}
            <span className="likes_count">{likesCount} Likes</span>
        </div>
    );
}

export default PostLike;