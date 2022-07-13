import React from "react";

const PostComment = ({name, body}) => {
    return (
        <>
            <div className="post__comment">
                <h2>{name}</h2>
                <p>{body}</p>
            </div>
        </>

    );
};
export default PostComment;