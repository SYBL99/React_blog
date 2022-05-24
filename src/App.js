import React, { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyModal from "./components/UI/modal/MyModal";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [modal, setModal] = useState(false)
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState([
    {id: 0, title: "JS", body: "«Золотая осень» — пейзаж русского художника Исаака Левитана (1860—1900), написанный в 1895 году. Принадлежит Государственной Третьяковской галерее в Москве (инв. 1490). Размер картины — 82 × 126 см. Левитан начал работу над полотном осенью 1895 года, когда он жил в усадьбе Горка в Тверской губернии; там же были написаны первые этюды. Исследователи творчества художника полагают, что на картине изображена река Съежа. По-видимому, работа над произведением была завершена в конце года в Москве."},
    {id: 2, title: "Python", body: "Золотая осень» — пейзаж русского художника Исаака Левитана (1860—1900), написанный в 1895 году. Принадлежит Государственной Третьяковской галерее в Москве (инв. 1490). Размер картины — 82 × 126 см. Левитан начал работу над полотном осенью 1895 года, когда он жил в усадьбе Горка в Тверской губернии; там же были написаны первые этюды. Исследователи творчества художника полагают, что на картине изображена река Съежа. По-видимому, работа над произведением была завершена в конце года в Москве." },
    {id: 1, title: "Pyhton", body: "Абсень" },
    {id: 3, title: "АА", body: 'АА'},
  ])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const sortedPosts = useMemo(() => {
    console.log("Работаем")
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))}
    return posts;
  } , [selectedSort, posts])
  const sortedAndSearchedPosts = useMemo(()=>
  { return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))}, 
  [searchQuery,sortedPosts])

  function sortPosts(sort) {
    setSelectedSort(sort);  }

  function createPost(title, body){
    setPosts([...posts, { id: posts.length, title, body }])
    setModal(false)
    setTitle('')
    setContent('')
  }
  function deletePost(post) {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  return (
    <div className="App">
      <input value={searchQuery}
      onChange={e=>setSearchQuery(e.target.value)}
      placeholder={'Поиск'}
      />
      <button onClick={() => setModal(true)}>Добавить пост</button>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка по"
        options={[
          {value: "title", name: "По названию"},
          {value: "body", name: "По описанию" }
        ]} 
      />
      <MyModal visible={modal} setVisible={setModal} children={
        <PostForm create={createPost} title={title} setTitle={setTitle} content={content} setContent={setContent} />} />
        <hr/>
      {posts.length === 0 
        ? <h2 style={{ fontWeight: 600, fontSize: '3rem', textAlign: "center" }} >Посты не найдены!</h2> 
        : <PostList posts={sortedAndSearchedPosts} title={'Список постов'} deletePost={deletePost} /> }

      

    </div>
  );
}

export default App;
