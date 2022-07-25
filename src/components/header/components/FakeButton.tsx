import React from 'react';
import {IButton} from "../../../assets/interfaces/interfaces";
import {Link} from "react-router-dom";


const FakeButton: React.FC<IButton> = ({clasName, onClick, text}) => {
    return (
        <Link to={'create'}>
            <div className={clasName}>
                <p>{text}</p>
            </div>
        </Link>
    );
};

export default FakeButton;