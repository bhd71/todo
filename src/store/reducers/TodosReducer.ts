import {todos, todosInitialState, todosState, todosTypes} from "../types/Todos";


export const todosReducer = (state = todosInitialState, action: todosState): todos => {
    switch (action.type) {
        case (todosTypes.ADD_TODO): {
            return ({
                listOfTodos: [...state.listOfTodos, action.payload]
            })
        }
        case (todosTypes.DELETE_TODO): {
            return ({
                listOfTodos: state.listOfTodos.filter(value => {
                    return value.id !== action.payload
                })
            })
        }
        case (todosTypes.CHANGE_TYPE): {
            return ({
                listOfTodos: state.listOfTodos.map(element => {
                    if (element.id === action.payload.id) return {...element, type: action.payload.newType}
                    return element
                })
            })
        }


        default: {
            return state
        }
    }
}