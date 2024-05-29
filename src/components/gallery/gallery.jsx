import React, { useContext } from 'react'
import { counterContext } from '../context/context'

function gallery() {
  let {value, PageHeading}= useContext(counterContext)
  return (
    <section className='relative backdrop-blur-[70px]'>
     <PageHeading mode={value} heading={'gallery'}/>
     <div className=' p-[20px]'>
      <h1 className='mt-5 text-center'>work remaining</h1>
     </div>
      {/* <Sidenav links={['hello', 'world', 'kese ho']} /> */}
    </section>
  )
}

export default gallery