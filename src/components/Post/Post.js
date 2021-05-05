import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments = userId =>{
        const url = `post/${userId}`;
        history.push(url);
    }
    
    return (
        <div>
            <h4>Id: {id}</h4>
            <h2>Title: {title}</h2>
            <h3>{body}</h3>
            <button onClick = {() => showComments(id)}>See Post</button>
        </div>
    );
};

export default Post;