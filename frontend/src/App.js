import React from 'react';
import './App.css';
import Series from "./components/Series";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Add from "./components/Add";
import Find from "./components/find";


const App = () => {
  return <div className="App">
    <Home/>
    <Routes>
      <Route path={'/all'} element={<Series/>}/>
      <Route path={'/add'} element={<Add/>}/>
      <Route path={'/find'} element={<Find/>}/>
    </Routes>
  </div>
}

export default App;
