import React, { useState } from 'react';
// import useStyles from './styles';

const Form = () => {
    // const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    
    const handleSubmit = () => {}
    const clear = () => {}

    return (
        <div className="paper">
            <form action="" noValidate class="form" onSubmit={handleSubmit}>
                <h6>Creating a Memory</h6>
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
                />
                <input 
                    type="text" 
                    name="message" 
                    placeholder="Message..." 
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <input 
                    type="text" 
                    name="tags" 
                    placeholder="Tags..." 
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
                />
                <div className="fileInput">
                    <input type="file" name="selectedFile" />
                </div>
                <input type="submit" class="btn-submit" value="Send" />
                <input type="button" onClick={clear} class="btn-submit" value="Clear" />
            </form>
        </div>
    );
};

export default Form;