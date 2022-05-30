import React, { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/modal/MyModal";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePost";
import { getPageCount, getPagesArray } from "../utils/pages";

function Posts() {

    const lastElement = useRef()
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })
    const [posts, setPosts] = useState([])
    
    useObserver(lastElement, page < totalPages, isPostsLoading, ()=> {setPage(page + 1)})
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    function createPost(title, body) {
        setPosts([...posts, {
            id: posts.length, title, body
        }])
        setModal(false)
        setTitle('')
        setContent('')
    }
    function deletePost(post) {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    return (
        <>
            <button onClick={() => setModal(true)}>Добавить пост</button>
            <PostFilter filter={filter} setFilter={setFilter} />
            <MyModal visible={modal} setVisible={setModal} children={
                <PostForm create={createPost} title={title} setTitle={setTitle} content={content} setContent={setContent} />} />
            {postError && <h2>Произошла ошибка</h2>}
            {isPostsLoading && <Loader />}
            <PostList posts={sortedAndSearchedPosts} title={'Список постов'} deletePost={deletePost} />
            <div ref={lastElement} style={{height: '1px', width: '80%'}}/>
        </>
    );
}

export default Posts;
