import {initialState, newITodo, newTodoState, newTodoTypes} from "../types/newTodoTypes";


export const newTodoReducer = (state = initialState, action: newTodoState): newITodo => {
    switch (action.type) {
        case (newTodoTypes.CHANGE_TODO_TITLE): {
            return {...state, title: action.payload}
        }
        case (newTodoTypes.CHANGE_TODO_DESCRIPTION): {
            return {...state, description: action.payload}
        }
        case (newTodoTypes.CHANGE_TODO_DATE): {
            return {...state, date: action.payload}
        }

        default: {
            return state
        }
    }
}