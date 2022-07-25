import React, {useState} from 'react';
import {newITodo, newTodoTypes, typeTypes} from "../../../../store/types/newTodoTypes";
import './TodoComponent.css'
import {getFullDate} from "../../../../assets/functions/getFullDate";
import Button from "../../../common/Button";
import {useAppDispatch} from "../../../../store/hooks/useAppDispatch";
import {todosTypes} from "../../../../store/types/Todos";
import {getDateToString} from "../../../../assets/functions/getDateToString";

const TodoComponent: React.FC<newITodo> =
    ({type, title, date, id, description}) => {

        const dispatch = useAppDispatch()
        const [clicked, setClicked] = useState(false)
        let newDate: string | Date = '00:00'
        if (date) {
            newDate = getDateToString(date)
        }

        let arrOfTypes = Object.keys(typeTypes)


        if (clicked) {
            return <div className={'todoComponent'} onClick={e => {
                setClicked(!clicked)
            }}>
                <div className={'todoComponent-flex__row'}>
                    <p>move to</p>
                    <div className={'todoComponent-flex__column'}>
                        {arrOfTypes.map((element) => {
                            if (element !== type) {
                                return <Button
                                    text={element.toLocaleLowerCase()}
                                    key={element}
                                    clasName={'todoComponent-btn'}
                                    onClick={() => {
                                        dispatch({
                                            type: todosTypes.CHANGE_TYPE,
                                            payload: {id, newType: element}
                                        })
                                    }
                                    }/>
                            }
                        })}
                    </div>
                </div>
                <Button text={'delete'} clasName={'todoComponent-btn__delete todoComponent-btn'}
                        onClick={() => {
                        dispatch({type: todosTypes.DELETE_TODO, payload: id})
                        }
                        }/>
            </div>
        }


        return (
            <div className={'todoComponent'} onClick={e => {
                setClicked(!clicked)
            }}>
                <p className={'todoComponent-title'}>{title}</p>
                <p className={'todoComponent-description'}>{description}</p>
                <p className={'todoComponent-date'}>{newDate}</p>
            </div>
        );
    };

export default TodoComponent;