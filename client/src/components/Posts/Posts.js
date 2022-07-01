import React from 'react';
import Post from './Post/Post'
// import { useStyles } from './styles';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    // const classes = useStyles();

    const posts = useSelector((state) => state.posts);
    // const sortedPosts = posts.sort((a, b) => Date.parse(new Date(b.createdAt)) - Date.parse(new Date(a.createdAt)));

    return (
        !posts.length ? "No posts found" : (
            <div className="posts-container">
                { posts
                    .map((post) => (
                    <div className="post-item" key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    );
};

export default Posts;