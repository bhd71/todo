import React from 'react';
import TodoList from "./components/todoList/TodoList";

import './Main.css'
import {typeTypes} from "../../store/types/newTodoTypes";

const Main: React.FC = () => {
    return (
        <main>
            <TodoList type={typeTypes.TODO} text={'Todo'}/>
            <TodoList type={typeTypes.IN_PROCESS} text={'in process'}/>
            <TodoList type={typeTypes.DONE} text={'done'}/>
        </main>
    );
};

export default Main;