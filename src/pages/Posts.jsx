import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/modal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import PaginationMobile from "../components/UI/pagination/PaginationMobile";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePost";
import { getPageCount} from "../utils/pages";

const Posts = () => {

    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll(limit, page);
        setPosts(posts.data);
        const totalCount = posts.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
    }, [page]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    function createPost(title, body) {
        setPosts([{ id: posts.length, title, body }, ...posts])
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
            <PostFilter filter={filter} setFilter={setFilter} />
            <MyModal visible={modal} setVisible={setModal} children={
                <PostForm create={createPost} title={title} setTitle={setTitle} content={content} setContent={setContent} />} />
            {postError && <h2>Произошла ошибка</h2>}
            {isPostsLoading || posts.length === 0
                ? <Loader />
                : <PostList posts={sortedAndSearchedPosts} title={'Список постов'} deletePost={deletePost} />
            }
            <Pagination page={page} changePage={setPage} totalPages={totalPages} />
            <PaginationMobile page={page} changePage={setPage} totalPages={totalPages} />
        </>
    );
};

export default Posts;
