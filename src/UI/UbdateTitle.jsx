import React from 'react'

export default function UbdateTitle({titleBig,titleSmall}) {
  return (
    <div className='section__title ubdate-title-secion'>
       
        <h1 className='big-title'>{titleBig}</h1>
        <h5 className='small-title' >{titleSmall}</h5>
    </div>
  )
}
