import React,{useEffect} from 'react'
import './scss/styles.scss'

import PagesWebsite from './Page/index'



const App = () =>{
  // useEffect(()=>{
  //   const script = document.createElement('script')
  //   script.src='./Animation/ActiveLink/ActiveLink.js';
  //   script.async=true;
  //   document.body.appendChild(script)
  //   return()=>{
  //     document.body.removeChild(script)
  //   }
  // },[])
 
 
  return (
  <>

  <PagesWebsite/>
 
  </>
  )
}
export default App;
