import React from 'react';
import './Layout.css'
import FakeButton from "./components/FakeButton";
import {Link, Navigate} from "react-router-dom";


const Layout: React.FC = () => {
    return (
        <div className={'layout_display'}>
            <Link to={'/'}>
                <p className={'neonText layout_title'}>ToDo</p>
            </Link>
            <FakeButton text={'Add new todos'} clasName={'button'} />
        </div>

    );
};

export default Layout;