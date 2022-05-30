import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
    if (!props.posts.length){
        return (
                <h2 style={{ fontWeight: 600, fontSize: '3rem', textAlign: "center" }} >Посты не найдены!</h2> 
        )
    }
    return (
        <>
            <h2 style={{fontWeight: 600, fontSize: '3rem', textAlign: "center"}}>
                {props.title}</h2>
            {props.posts.map((post, index) => <PostItem number={index+1} post={post} key={index} deletePost={props.deletePost}/>)}
        </>
    );
};
export default PostList;