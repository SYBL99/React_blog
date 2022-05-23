import React, { useState } from "react";
import PostList from "./components/PostList";
import MyModal from "./components/UI/modal/MyModal";

function App() {
  const [modal, setModal] = useState(false)
  const [posts, setPosts] = useState([
    {id: 0, title: "JS", body: "«Золотая осень» — пейзаж русского художника Исаака Левитана (1860—1900), написанный в 1895 году. Принадлежит Государственной Третьяковской галерее в Москве (инв. 1490). Размер картины — 82 × 126 см. Левитан начал работу над полотном осенью 1895 года, когда он жил в усадьбе Горка в Тверской губернии; там же были написаны первые этюды. Исследователи творчества художника полагают, что на картине изображена река Съежа. По-видимому, работа над произведением была завершена в конце года в Москве."},
    {id: 1, title: "Pyhton", body: "Content"},
    {id: 2, title: "Python", body: "«Золотая осень» — пейзаж русского художника Исаака Левитана (1860—1900), написанный в 1895 году. Принадлежит Государственной Третьяковской галерее в Москве (инв. 1490). Размер картины — 82 × 126 см. Левитан начал работу над полотном осенью 1895 года, когда он жил в усадьбе Горка в Тверской губернии; там же были написаны первые этюды. Исследователи творчества художника полагают, что на картине изображена река Съежа. По-видимому, работа над произведением была завершена в конце года в Москве." },

  ])

  function deletePost(post) {
    console.log(posts)
    setPosts(posts.filter(p => p.id !== post.id))
    console.log(posts)
  }

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal} children={<div>YES</div>}/>
      <button onClick={() => setModal(true)}>Добавить пост</button>
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
