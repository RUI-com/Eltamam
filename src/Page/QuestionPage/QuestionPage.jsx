import React from 'react'
import leftbutton from '../../../public/image/left.svg'
import rightbutton from '../../../public/image/right.svg'
// Data
import {question_person} from '../../data/Question'
// Swiper
import {Autoplay,Navigation,Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

//import Title
import Title from '../../UI/Title'
export default function QuestionPage() {
  const breackpoint = {
     
    900:{
      slidesPerView:3,
      spaceBetweenSlides:30
  },
  700:{
      slidesPerView:2,
      spaceBetweenSlides:10
  },
  0:{
      slidesPerView:1,
      spaceBetweenSlides:0
  },
    
    
}
  return (
<section className="specs section grid" id="specs">
    <Title titleSmall="اراء العملاء" titleBig="ماذا قال عملاؤنا"/>
    <div className="specs__container container grid">
    <Swiper
     modules={[ Navigation]}

     slidesPerView='auto'
     centeredSlides={true}
     spaceBetween={30}
     loop={true}
     breakpoints={breackpoint}
    
     navigation={{
        prevEl:'.button-prev-slide',
        nextEl:'.button-next-slide'
      }}
    
   >
    {
         question_person.map((person) => (
            <SwiperSlide key={person.id} >
             <div className='person'>
             <div className='border-img'>
             <img className='person-img' src={person.image} alt=''/>
             </div>
              <div className="pesonal">
              <h1 className='person-title'>{person.name_persone}</h1>
              <h5 className='person-gop'>{person.gop}</h5>
              </div>
              <p className='person-discription'>{person.discription}</p>
             </div>
            </SwiperSlide>
          ))
    }
    <div className='slider-button-div'>
    <div className='button-prev-slide slidebutton'>
   <img src={leftbutton}/>
    </div>
    <div className='button-next-slide slidebutton'>
   
    <img src={ rightbutton}/>
    </div>
    </div>

   </Swiper>
    </div>
    
    </section>
     
  )
}
