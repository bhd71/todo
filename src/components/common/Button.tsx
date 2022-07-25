import React from 'react';
import {IButton} from "../../assets/interfaces/interfaces";




const Button: React.FC<IButton> = ({text, onClick, clasName}) => {
    return (
        <button className={clasName} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;