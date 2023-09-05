import React from 'react';
import './style.css'
import chatbot from './img/chatbot.png'
import quiz from './img/quiz.png'
import quizInfo from './img/quizinfo.png'
import data from './img/data.svg'
import quizIcon from './img/quiz.svg'
import register from './img/register.svg'

export const ChatBot = () => {
   return (
     <React.Fragment>
         <div className="chatbot">
            <div className="container">
               <div className="chatbot__info info">
                  <div className="info__img">
                     <img src={chatbot} alt=""/>
                  </div>
                  <div className="info__box">
                     <div className="info__box-title title">Фишка проекта
                        <span className='info__span'>чат-бот</span></div>
                     <div className="info__text">Хелп-деск помогает пользователям заполнять данные</div>
                     <ul className="info__list">
                        <li className="info__list-item"><img src={data} alt={data}/>Личные данные</li>
                        <li className="info__list-item"><img src={register} alt={register}/>Регистрация</li>
                        <li className="info__list-item"><img src={quizIcon} alt={quizIcon}/>Опросы</li>
                     </ul>
                  </div>
               </div>
               <div className="chatbot__quiz quiz">
                  <div className="quiz__box">
                     <div className="quiz__box-title title green-line">Разные виды
                        вопросов</div>
                     <ul className="quiz__list">
                        <li className="quiz__list-item">Скринеры определяют, подходит ли пользователю опрос</li>
                        <li className="quiz__list-item">С простыми или условными переходами зависят от ответов пользователей</li>
                     </ul>
                     <div className="quiz__highlighted highlighted">Прост в использовании</div>
                  </div>
                  <div className="quiz__img">
                     <img src={quiz} alt=""/>
                     <img src={quizInfo} alt=""/>
                  </div>
               </div>

            </div>
         </div>
     </React.Fragment>
   );
};

