import React from 'react'
import  Link  from 'next/link';
function aboutl() {
  return (
    <>
    <h1 className='about-heading'>this is about page</h1>
    <div className='font-roboto'>page about</div>
    <Link href="/">
      back
    </Link>
    
    </>
  )
}

export default aboutl;