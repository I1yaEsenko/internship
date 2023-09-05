import React from 'react';
import logo from './img/logo.svg'
import burger from './img/menu_row.png'

import './style.css'


export const Header = () => {
   return (
     <React.Fragment>
         <div className="header">
            <div className="container">
               <div className="header__wrapper">
                  <div className="header__top">
                     <div className="header__logo">
                        <img src={logo} />
                     </div>
                     <div className="header__actions">
                        <div className="header__button btn">Заказать разработку</div>
                        <div className="header__burger">
                           <img src={burger}/>
                        </div>
                     </div>
                  </div>
                  <div className="header__navigation navigation">
                     <ul className="navigation__list">
                        <li className="navigation__item">
                           <a href="#" className="navigation__link">Главная</a>
                        </li>
                        <li className="navigation__item">
                           <a href="#" className="navigation__link">Кейсы</a>
                        </li>
                        <li className="navigation__item">
                           <a href="#" className="navigation__link">Clover Research </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
     </React.Fragment>
   );
};

