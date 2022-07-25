import {typeTypes} from "../../store/types/newTodoTypes";

export interface IButton {
    text: string,
    onClick?: () => void;
    clasName: any
}

export interface ITodoList {
    text: string,
    type: typeTypes
}