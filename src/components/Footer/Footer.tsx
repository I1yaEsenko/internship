import React, {Fragment} from 'react';
import './style.css'
import '../Form/style.css'
import Form from "../Form/Form";
import social from '../../styles/img/social.svg'
import telegram from './img/telegram.svg'

export const Footer = () => {
   return (
     <React.Fragment>
        <div className="footer">
           <div className="container">
              <div className="footer__wrapper">
                 <div className="footer__contact">
                    <div className="footer__contacts contacts">
                       <div className="contacts__wrapper">
                          <div className="footer__title contacts__title">Контакты</div>
                          <div className="contacts__telegram">Telegram <img src={telegram}/></div>
                          <div className="contacts__phone">8 800 234 32 62</div>
                          <div className="contacts__mail">hello@joy-dev.com</div>
                          <div className="contacts__address">Россия, 127282, Москва г, Студёный проезд, дом 4, корпус 1, Э 1/ПОМ V/К 14/ОФ 87</div>
                          <div className="contacts__social social">
                             <div className="social__wrapper">
                                <div className="social__title">Подписывайтесь</div>
                                <div className="social__links">
                                   <img src={social}/>
                                   <a href="#" className="social__link"></a>
                                   <a href="#" className="social__link"></a>
                                   <a href="#" className="social__link"></a>
                                   <a href="#" className="social__link"></a>
                                   <a href="#" className="social__link"></a>
                                   <a href="#" className="social__link"></a>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="footer__form form">
                       <div className="form__wrapper">
                          <div className="footer__title form__title">Давайте знакомиться!</div>
                          <div className="form__description">Мы всегда рады сотрудничеству и новым проектам</div>
                          <div className="form__items">
                             <Form/>
                          </div>
                       </div>
                    </div>
                 </div>

              </div>
           </div>
           <div className="footer__privacy">
              2023 Joy Dev. Все права защищены.&nbsp;<a href="#!" className="footer__privacy-link">Политика конфиденциальности</a>
           </div>
        </div>
     </React.Fragment>
   );
};

