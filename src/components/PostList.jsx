import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
    return (
        <div>
            <h2 style={{fontWeight: 600, fontSize: '3rem', textAlign: "center"}}>
                Список постов</h2>
            {props.posts.map((post, index) => <PostItem number={index+1} post={post} key={post.id} deletePost={props.deletePost}/>)}
        </div>
    );
};
export default PostList;