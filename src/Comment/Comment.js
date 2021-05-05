import React from 'react';

const Comment = (props) => {
    console.log(props.comment);
    const{ name, email } = props.comment;
    return (
        <div>
            {name}:{email}
        </div>
    );
};

export default Comment;