import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, deletePost}) => {
    if (!posts.length){
        return (
            <h2 className="title">Посты не найдены!</h2> 
        )
    }
    return (
        <div className="posts__wrapper">
            <h2 className="subtitle">
                {title}</h2>
            {posts.map((post, index) => <PostItem number={index+1} post={post} key={index} deletePost={deletePost}/>)}
        </div>
    );
};
export default PostList;