import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Layout from "./components/Layout";
import Home  from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path='/posts' element={<Posts />} />
          <Route path="*" element={<div>Страница не найдена!</div>}/>
        </Route>
      </Routes>
    </>

  )
}

export default App;
