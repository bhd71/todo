import {newITodo, typeTypes} from "./newTodoTypes";

export interface todos {
    listOfTodos: newITodo[]
}

export const todosInitialState: todos = {
    listOfTodos: []
}

export enum todosTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    CHANGE_TYPE = 'CHANGE_TYPE'
}

interface todosActionAdd {
    type: todosTypes.ADD_TODO,
    payload: newITodo
}

interface changeTypeObject {
    id: string,
    newType: typeTypes
}


interface todosActionChangeType {
    type: todosTypes.CHANGE_TYPE,
    payload: changeTypeObject
}

interface todosActionDelete {
    type: todosTypes.DELETE_TODO,
    payload: string
}

export type todosState = todosActionAdd | todosActionDelete | todosActionChangeType