import React from "react";
const PostForm = (props) => {
    return (
        <div className="post__form">
            <form action="">
                <input value={props.title} onChange={e => props.setTitle(e.target.value)} placeholder="Заголовок" type="text" />
                <input value={props.content} onChange={e => props.setContent(e.target.value)} placeholder="Текст поста" type="text" />
                <button onClick={e => {props.create(props.title, props.content) ; e.preventDefault()}}>Опубликовать</button>
            </form>
        </div>
    );
};
export default PostForm;