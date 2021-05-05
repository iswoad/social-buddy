import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../../Comment/Comment';

const PostDetails = () => {
    const { id } =useParams();
    const [post, setPost] = useState({});
    const [ comments, setComments ] = useState({});
    useEffect( ()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h1>This is post details</h1>
            <p> Posted By:  {post.userId}</p>
            <p> Post Title: {post.title}</p>
            <p>Post: {post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment ={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;