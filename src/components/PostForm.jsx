import React from "react";

const PostForm = ({create, title, setTitle, content, setContent}) => {
    return (
        <div className="post__form">
            <form action="">
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Заголовок" type="text" />
                <input value={content} onChange={e => setContent(e.target.value)} placeholder="Текст поста" type="text" />
                <button onClick={e => {create(title, content) ; e.preventDefault()}}>Опубликовать</button>
            </form>
        </div>
    );
};
export default PostForm;