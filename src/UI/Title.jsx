import React from 'react'

export default function Title({titleBig,titleSmall}) {
  return (
    <div className='section__title'>
        <h5 className='small-title' >{titleSmall}</h5>
        <h1 className='big-title'>{titleBig}</h1>
    </div>
  )
}
