import React from 'react';
// import useStyles from './styles';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
    // const classes = useStyles();
    return (
        <div className="card">
            <div className="card-title">
                <h1>{ post.title }</h1>
            </div>
            <div className="card-media">
                <img src="" alt="" />
            </div>
            <div className="overlay">
                <h6>{ post.creator }</h6>
                <span className="post-date">{ moment(post.createdAt).fromNow()}</span>
            </div>
            <div className="overlay-2">
                <button 
                    onClick={() => setCurrentId(post._id)} >Edit
                </button>
            </div>
            <div className="details">
                <span className="post-tags">{ post.tags.map((tag) => `#${tag} `) }</span>
            </div>
            <div className="card-content">
                <h5>{ post.message }</h5>
            </div>
            <div className="card-actions">
                <button onClick={() => {}}>Like { post.likeCount }</button>
                <button onClick={() => {}}>Delete</button>
            </div>
        </div>
    );
};

export default Post;