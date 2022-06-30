import React, { useState, useEffect } from 'react';
// import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
    // const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
    }
    
    const clear = () => {}

    return (
        <div className="paper">
            <h4>Posts</h4>
            <form action="" noValidate className="form" onSubmit={handleSubmit}>
                <h6>Creating a Memory</h6>
                <input 
                    type="text" 
                    name="creator" 
                    placeholder="Creator..." 
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
                    required
                />
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title..." 
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                    required
                />
                <input 
                    type="text" 
                    name="message" 
                    placeholder="Message..." 
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                    required
                />
                <input 
                    type="text" 
                    name="tags" 
                    placeholder="Tags..." 
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
                    required
                />
                <div className="fileInput">
                    <input type="file" name="selectedFile" />
                </div>
                <input type="submit" className="btn-submit" value="Send" />
                <input type="button" onClick={clear} className="btn-submit" value="Clear" />
            </form>
        </div>
    );
};

export default Form;