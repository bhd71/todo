import {newTodoReducer} from "./newTodo";
import {store} from "../index";
import {combineReducers} from "redux";
import {todosReducer} from "./TodosReducer";


export const rootReducer = combineReducers({
    newTodo: newTodoReducer,
    TodosList: todosReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
