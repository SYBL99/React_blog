import {Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import OpenPost from "./components/OpenPost";
import Layout from "./components/Layout";
import Home  from "./pages/Home";
import Infinite from "./pages/Infinite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path={'posts'} element={<Posts/>} />
          <Route path='posts/:id' element={<OpenPost />} />
          <Route path='infinite' element={<Infinite/>} />
          <Route path='infinite/:id' element={<OpenPost />} />
          <Route path="*" element={<div>Страница не найдена!</div>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
