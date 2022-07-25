export enum typeTypes {
    TODO = 'TODO',
    IN_PROCESS = 'IN_PROCESS',
    DONE = 'DONE'
}


export enum newTodoTypes {
    CHANGE_TODO_TITLE = 'NEW_TODO_TITLE',
    CHANGE_TODO_DESCRIPTION = 'NEW_TODO_DESCRIPTION',
    CHANGE_TODO_DATE = 'NEW_TODO_DATE',
    CHANGE_TODO_TYPE = 'NEW_TODO_TYPE',
    CHANGE_TODO_ID = 'NEW_TODO_ID'

}

export interface newITodo {
    title: string,
    description: string,
    readonly id?: string
    type: typeTypes
    date?: Date | string
}

export const initialState = {
    title: '',
    description: '',
    type: typeTypes.TODO
}

interface newTodoAddTitle {
    type: newTodoTypes.CHANGE_TODO_TITLE,
    payload: string
}

interface newTodoAddDescription {
    type: newTodoTypes.CHANGE_TODO_DESCRIPTION,
    payload: string
}

interface newTodoAddDate {
    type: newTodoTypes.CHANGE_TODO_DATE,
    payload: Date
}

interface newTodoAddID {
    type: newTodoTypes.CHANGE_TODO_ID,
    payload: string
}

interface newTodoChangeType {
    type: newTodoTypes.CHANGE_TODO_TYPE,
    payload: typeTypes
}

export type newTodoState = newTodoAddDate | newTodoAddTitle | newTodoAddDescription | newTodoChangeType | newTodoAddID








