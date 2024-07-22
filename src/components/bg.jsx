import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function bg() {
 useGSAP(()=>{
  let timeline = gsap.timeline()
  timeline.fromTo('.ball:nth-of-type(1)',{top:'0%'},{top:'',bottom:'0%',yoyo:true,yoyoEase:'none',repeat:-1,duration:12,ease:'none'},'same')
  .fromTo('.ball:nth-of-type(2)',{bottom:'0%'},{bottom:'',top:'0%',yoyo:true,yoyoEase:'none',repeat:-1,duration:12,ease:'none'},'same')

 })
  return (
    <div className='fixed  w-screen' style={{height:'calc(100vh - var(--navHeight))', top:'var(--navHeight)'}}>
        <div className="ball left-[-10%] xl:left-[-125px] sm:w-[250px] sm:h-[250px] w-[150px] h-[150px] absolute rounded-full rotate-[200px]"></div>
      <div className="ball lg:bottom-[-75px] bottom-[-40px] right-[-5%] sm:w-[250px] sm:h-[250px]  w-[150px] h-[150px] absolute rounded-full"></div>
    </div>
  )
}

export default bg