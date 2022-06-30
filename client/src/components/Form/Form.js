import React, { useState } from 'react';
// import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts'

// GET THE CURRENT ID POST



const Form = () => {
    // const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
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