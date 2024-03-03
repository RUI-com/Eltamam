import React from 'react'

import Case from './CasePage/CasePage'
import Question from './QuestionPage/QuestionPage'
import Ubdate from './UbdatePage/UbdatePage'
import Contact from './ContactPage/ContactPage'
export default function index() {
  return (
   <>
    <main className="main">
  
    <Case/>
    <Question/>
    <Ubdate/>
    <Contact/>
  
    </main>
   </>
  )
}
