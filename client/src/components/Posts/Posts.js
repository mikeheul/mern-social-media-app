import React from 'react';
import Post from './Post/Post'
// import { useStyles } from './styles';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    // const classes = useStyles();

    const posts = useSelector((state) => state.posts);

    posts.map((post, index) => (
        console.log(post._id)
    ))

    return (
        !posts.length ? "No posts found" : (
            <div className="posts-container">
                { posts.map((post) => (
                    <div className="post-item" key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    );
};

export default Posts;