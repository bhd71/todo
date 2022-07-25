import React from 'react';
import './CreateTodo.css'
import {useTypedSelector} from "../../store/hooks/useAppSelector";
import {useAppDispatch} from "../../store/hooks/useAppDispatch";
import {newTodoTypes} from "../../store/types/newTodoTypes";
import Button from "../common/Button";
import {v4 as uuidv4} from 'uuid';
import {todosTypes} from "../../store/types/Todos";

const CreateTodo: React.FC = () => {

    const createTodos = () => {
        dispatch({
            type: todosTypes.ADD_TODO, payload: {
                title, description, date, id: uuidv4(), type
            }
        })
        dispatch({type: newTodoTypes.CHANGE_TODO_TITLE, payload: ''})
        dispatch({type: newTodoTypes.CHANGE_TODO_DESCRIPTION, payload: ''})
    }

    const changeTitle = (value: string) => {
        dispatch({type: newTodoTypes.CHANGE_TODO_TITLE, payload: value})
    }

    const changeDescription = (value: string) => {
        dispatch({type: newTodoTypes.CHANGE_TODO_DESCRIPTION, payload: value})
    }

    const changeDate = (value: string) => {
        dispatch({type: newTodoTypes.CHANGE_TODO_DATE, payload: value})
    }


    const {description, date, title, id, type} = useTypedSelector((state) => state.newTodo)
    const dispatch = useAppDispatch()
    return (
        <div className={'createTodo__display'}>
            <label className={'createTodo-title'}>
                <p>Title</p>
                <input type="text" value={title} className={'createTodo-input__border'} onChange={event => {
                    changeTitle(event.target.value)
                }}/>
            </label>
            <label className={'createTodo-textarea'}>
                <p>Description</p>
                <textarea value={description} className={'createTodo-input__border'} onChange={event => {
                    changeDescription(event.target.value)
                }}/>
            </label>
            <label>
                <p>Date</p>
                <input type={"datetime-local"} className={'createTodo-input__border'} onChange={event => {
                    changeDate(event.target.value)
                }}/>
            </label>
            <Button text={'create'} onClick={() => {
                createTodos()
            }} clasName={'createTodo-btn'}/>
        </div>
    );
};

export default CreateTodo;