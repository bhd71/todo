import React from 'react';
import './style.css'
import Layout from "./components/header/Layout";
import Main from "./components/main/Main";

import {Route, Router, Routes} from "react-router-dom";
import CreateTodo from "./components/createTodo/CreateTodo";

function App() {

    return (
        <div className="App">
            <Layout/>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path={'/create'} element={<CreateTodo/>}/>
            </Routes>
        </div>
    );
}

export default App;
