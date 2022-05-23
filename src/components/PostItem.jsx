import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__text">
                <div className="post__title">
                    {props.post['id']}. {props.post.title}
                </div>
                <div className="post__body">
                    <div className="post__content">
                        {props.post.body}
                    </div>
                    
                </div>
            </div>
            <div>
                <button className="post__btn">Удалить</button>
            </div>

        </div>
    );
};
export default PostItem;