import React from 'react';
import { NavLink } from 'react-router-dom';

import './cssfiles/PagesLinks.css';

class PagesLinks extends React.Component {

    render() {

        return (
            <div className='LinkContainer'>
                <div><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink></div>
                <div><NavLink to="/keyfeatures" className="PageLink" activeClassName="ActivePageLink">Ключевые функции</NavLink></div>
                <div><NavLink to="/ourapp" className="PageLink" activeClassName="ActivePageLink">We Walk App</NavLink></div>
                <div><NavLink to="/whatsnew" className="PageLink" activeClassName="ActivePageLink">Что нового?</NavLink></div>
            </div>
        );

    }

}

export default PagesLinks;