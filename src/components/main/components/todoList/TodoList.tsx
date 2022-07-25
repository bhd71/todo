import React from 'react';
import './TodoList.css'
import {useTypedSelector} from "../../../../store/hooks/useAppSelector";
import TodoComponent from "../todoComponent/TodoComponent";

import {ITodoList} from "../../../../assets/interfaces/interfaces";

const TodoList: React.FC<ITodoList> = ({text, type}) => {
    const {listOfTodos} = useTypedSelector(state => state.TodosList)
    let isEmpty = true
    listOfTodos.forEach((value) => {
        if (value.type === type) {
            isEmpty = false
        }
    })


    if (isEmpty) {
        return <div className={'todo main_border'}>
            <p className={'main_title'}>
                {text}
            </p>
            <h3>Todo list is empty</h3>
        </div>
    }

    return (
        <div className={'todo main_border'}>
            <p className={'main_title'}>
                {text}
            </p>
            {listOfTodos.map(todo => {
                if (todo.type === type)
                    return <TodoComponent {...todo} key={todo.id}/>
            })}
        </div>
    );
};

export default TodoList;