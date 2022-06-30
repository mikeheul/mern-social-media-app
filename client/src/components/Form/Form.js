import React, { useState, useEffect } from 'react';
// import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'
import FileBase from 'react-file-base64';

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
        clear();
    }
    
    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }

    return (
        <div className="paper">
            <h4>Posts</h4>
            <form noValidate className="form" onSubmit={handleSubmit}>
                <h6>{ currentId ? 'Editing' : 'Creating' } a Memory</h6>
                <input 
                    type="text" 
                    name="creator" 
                    placeholder="Creator..." 
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
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
                    <FileBase
                        multiple={false} 
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
                    />
                </div>

                <input 
                    type="submit" 
                    className="btn btn-submit" 
                    value="Send" />
                <input 
                    type="button" 
                    onClick={clear} 
                    className="btn btn-clear" 
                    value="Clear" />
            </form>
        </div>
    );
};

export default Form;