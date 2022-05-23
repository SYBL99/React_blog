import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__text">
                <div className="post__title">
                    {props.number}. {props.post.title}
                </div>
                <div className="post__body">
                    <div className="post__content">
                        {props.post.body}
                    </div>
                    
                </div>
            </div>
            <div>
                <button className="post__btn" onClick={() => props.deletePost(props.post)}>Удалить</button>
            </div>

        </div>
    );
};
export default PostItem;