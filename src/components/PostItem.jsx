import React from "react";
import { useNavigate } from "react-router-dom";
const PostItem = (props) => {
    let navigate = useNavigate();
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
            <div className="btn__box">
                <button className="post__btn" onClick={() => navigate(`${props.number}`)}>Открыть</button>
                <button className="post__btn" onClick={() => props.deletePost(props.post)}>Удалить</button>
            </div>

        </div>
    );
};
export default PostItem;