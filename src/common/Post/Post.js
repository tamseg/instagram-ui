import './Post.scss';
import React, { useMemo } from 'react';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';
import config from '../../config/index'
// import PostDate from './PostDate/PostDate';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function Post( {data} ) {
    const createdAt = useMemo(() => {
        const date = new Date(data.createdAt);
        return months[date.getMonth()] + '' + date.getDate();
    }, [data.createdAt]);

    return (
        <div className="Post_wrapper">
        <article className="Post">
            <header>
                <div className="Post__user">
                <Avatar size="md" image={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"} />

                    <Link to={'/profile/' + data.author.username}>
                        <span className="Post__user__username">{data.author.username}</span>
                    </Link>
                </div>
                <div className="Post__date">
                    {/* <PostDate date={data.createdAt} /> */}
                    {createdAt}
                </div>
            </header>
            <div className="Post__image">
                <Link to={'/post/' + data._id}>
                    <img src={config.apiUrl + '/' + data.image} className="Post__image" alt="" />
                </Link>
            </div>
            <div className="Post__content">
                <h1 className="Post__description">{data.body}</h1>
            </div>
        </article>
    </div>
    );
}

export default Post;