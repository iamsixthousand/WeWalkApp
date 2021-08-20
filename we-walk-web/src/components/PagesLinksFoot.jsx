import React from 'react';
import { NavLink } from 'react-router-dom';

import './cssfiles/PagesLinksFoot.css';

class PagesLinksFoot extends React.PureComponent {

    render() {

        return (
            <div className='LinkContainer'>
                <div><NavLink to="/" exact className="PageLink">Главная</NavLink></div>
                <div><NavLink to="/keyfeatures" className="PageLink">Ключевые функции</NavLink></div>
                <div><NavLink to="/ourapp" className="PageLink">We Walk App</NavLink></div>
                <div><NavLink to="/whatsnew" className="PageLink">Что нового?</NavLink></div>
            </div>
        );

    }

}

export default PagesLinksFoot;