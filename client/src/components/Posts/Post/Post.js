import React from 'react';
// import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import { Buffer } from 'buffer';

const Post = ({ post, setCurrentId }) => {
    // const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-title">
                <h1>{ post.title }</h1>
            </div>
            <div className="card-media">
                <img src={ Buffer.from(post.selectedFile, 'base64').length > 0 ? Buffer.from(post.selectedFile, 'base64') : 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="" />
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
                <button onClick={() => dispatch(likePost(post._id))}>Like { post.likeCount }</button>
                <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
            </div>
        </div>
    );
};

export default Post;