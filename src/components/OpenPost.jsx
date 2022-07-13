import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import PostComment from "./PostComment";
import Loader from "./UI/loader/Loader";

const OpenPost = () => {
    const [comments, setComments] = useState([])
    const {id} = useParams();
    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(id);
    setComments(response.data);
    })
    useEffect(() => {
        fetchPost()
    }, [])
    return (
        <>
        <h2 className="subtitle">Комментарии к посту</h2>
            {postError && <h2>Произошла ошибка</h2>}
            {isPostLoading
                ? <Loader/>
                : comments.map(comment => (<PostComment name={comment.name} body={comment.body} key={comment.id} />))
            }

        </>
    );
};
export default OpenPost;