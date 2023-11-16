import React, { useState } from "react";
import "./App.css";
import CreatePost from "./components/createPost";
import GetRequest from "./components/GetRequest";
import { Routes, Route } from "react-router-dom";
import PutRequest from "./components/PutRequest";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<GetRequest />}></Route>
        <Route path="/CreatePost" element={<CreatePost />}></Route>
        <Route path="/PutRequest/:id" element={<PutRequest />}></Route>
      </Routes>
    </div>
  );
}

export default App;
