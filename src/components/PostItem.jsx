import React from "react";
import { useNavigate } from "react-router-dom";

const PostItem = ({number, post, deletePost}) => {
    let navigate = useNavigate();
    return (
        <div className="post">
            <div className="post__text">
                <div className="post__title">
                    {number}. {post.title}
                </div>
                <div className="post__body">
                    <div className="post__content">
                        {post.body}
                    </div>
                    
                </div>
            </div>
            <div className="btn__box">
                <button className="post__btn" onClick={() => navigate(`${number}`)}>Открыть</button>
                <button className="post__btn" onClick={() => deletePost(post)}>Удалить</button>
            </div>

        </div>
    );
};
export default PostItem;