import React from 'react'
//import data
import {Update_card} from '../../data/update'
//import button navigation
import leftbutton from '../../../public/image/left.svg'
import rightbutton from '../../../public/image/right.svg'
// Swiper
import {Autoplay,Navigation,Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

//import Title
import UbdateTitle from '../../UI/UbdateTitle'
export default function UbdatePage() {
    const breackpoint = {
     
        1024:{
            slidesPerView:3,
            spaceBetweenSlides:30
        },
        700:{
            slidesPerView:2,
            spaceBetweenSlides:20
        },
        0:{
            slidesPerView:1,
            spaceBetweenSlides:0
        },
        
        
    }
  return (
    <section className="specs section grid" id="specs">
             <UbdateTitle  titleSmall="أخبارنا و مدوناتنا"  titleBig="كل التحديثات الجديدة" />
           <div className="specs__container container grid">
         
    <Swiper
     modules={[ Navigation]}

     slidesPerView='auto'
     centeredSlides={true}
     spaceBetween={10}
     loop={true}
     breakpoints={breackpoint}
    
     navigation={{
        prevEl:'.button-prev-slide',
        nextEl:'.button-next-slide'
      }}
    
   >
    {
         Update_card.map((Update) => (
            <SwiperSlide key={Update.id} >
             <div className='Update'>
             <div className='Update-image'>
                <img src={Update.image}/>

             </div>
             <div className='Update_Data'>
                <div className='date'>
                    <div className='colmun'>
                        <img src={Update.date_icon} className='date-icon'/>
                        <h1 className='date-title'>{Update.date_title}</h1>
                    </div>
                    <div className='colmun'>
                        <img src={Update.comment_icon} className='date-icon'/>
                        <h1 className='date-title'>{Update.comment_title} ( {Update.comment_number} )</h1>
                    </div>
                </div>
                <div className='Update_title'>
                <h5>{Update.update_title}</h5>
             </div>
             <a href='#' className='button'>
              تصفح المزيد
                <img src={leftbutton}/>

             </a>
             </div>
            
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
