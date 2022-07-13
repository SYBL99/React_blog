import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostForm from "../components/PostForm";
import PostInfinte from "../components/PostInfinite";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/modal/MyModal";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePost";
import { getPageCount} from "../utils/pages";

const Posts = () => {

    const lastElement = useRef()
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter] = useState({ sort: '', query: '' });
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })
    const [posts, setPosts] = useState([]);
    
    useObserver(lastElement, page < totalPages, isPostsLoading, ()=> {setPage(page + 1)});
    useEffect(() => { fetchPosts(limit, page) }, [page, limit]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    function createPost(title, body) {
        setPosts([{
            id: posts.length, title, body
        }, ...posts]);
        setModal(false);
        setTitle('');
        setContent('');
    }
    function deletePost(post) {
        setPosts(posts.filter(item => item.id !== post.id));
    }

    return (
        <>
            <button onClick={() => setModal(true)}>Добавить пост!</button>
            <MyModal visible={modal} setVisible={setModal} children={
                <PostForm create={createPost} title={title} setTitle={setTitle} content={content} setContent={setContent} />} />
            {postError && <h2>Произошла ошибка</h2>}
            {isPostsLoading && <Loader />}
            <PostInfinte posts={sortedAndSearchedPosts} title={'Список постов'} deletePost={deletePost} />
            <div className='observer__element' ref={lastElement} />
        </>
    );
};

export default Posts;
