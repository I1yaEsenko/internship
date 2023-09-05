import React from 'react';
import './style.css'
import phone from './img/phone.png'

export const Application = () => {
   return (
     <div>
         <div className="application">
            <div className="container">
               <div className="application__wrapper">
                  <div className="application__title title">Наша команда разработала приложение для ОС Android</div>
                  <div className="application__body">
                        <img src={phone} alt="phone" className="application__img"/>
                     <div className="application__tech"> <span className='application__span'>Технологии:</span>  MVVM, Retrofit, Kotlin Coroutines, Pagging 3, Socket.io, Room

                     </div>

                  </div>
                  
               </div>
            </div>
         </div>
     </div>
   );
};

