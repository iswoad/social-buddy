import React from 'react';

const Comment = (props) => {
    const {Id, Name, Email, Body} = props.comment;
    return (
        <div>
            <h3>Commented By: {Id}</h3>
            <p>Name: {Name}</p>
            <p>Email: {Email}</p>
            <p>Comment: {Body}</p>
        </div>
    );
};

export default Comment;