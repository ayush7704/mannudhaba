import React from 'react'

function bg() {
 
  return (
    <div className='fixed  w-screen' style={{height:'calc(100vh - var(--navHeight))', top:'var(--navHeight)'}}>
        <div className="ball left-[-10%] xl:left-[-125px] sm:w-[250px] sm:h-[250px] w-[150px] h-[150px] absolute rounded-full rotate-[200px]"></div>
      <div className="ball lg:bottom-[-100px] bottom-[-60px] right-[-10%] sm:w-[250px] sm:h-[250px]  w-[150px] h-[150px] absolute rounded-full"></div>
    </div>
  )
}

export default bg