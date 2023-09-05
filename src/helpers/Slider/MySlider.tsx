import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

import First from './img/1.png'
import Second from './img/2.png'
import Third from './img/3.png'


function SampleNextArrow(props:any) {
   const { onClick } = props;
   return (
     <div
       className='next-arrow'
       onClick={onClick}
     />
   );
}

export const MySlider = () => {
   const settings = {
      dots: true, // Отображение точек для индикации текущего слайда
      infinite: true, // Бесконечная прокрутка слайдов
      speed: 500, // Скорость прокрутки слайдов в миллисекундах
      slidesToShow: 1, // Количество видимых слайдов одновременно
      slidesToScroll: 1, // Количество слайдов, прокручиваемых за раз
      autoplay: false, // Автоматическая прокрутка слайдов
      autoplaySpeed: 2000, // Интервал автоматической прокрутки в миллисекундах'
      nextArrow: <SampleNextArrow/>,
   };


   return (
     <React.Fragment>

        <Slider  {...settings}>


           <div className='slider__item'>
              <img src={First} alt=""/>
           </div>
           <div className='slider__item'>
              <img src={Second} alt=""/>
           </div>
           <div className='slider__item'>
              <img src={Third} alt=""/>
           </div>


        </Slider>
     </React.Fragment>
   );

};

