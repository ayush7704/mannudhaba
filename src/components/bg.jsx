import {memo} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Bg = memo(() => {
  useGSAP(() => {
    let timeline = gsap.timeline()
    timeline.fromTo('.ball:nth-of-type(1)', { top: '0%' }, { top: '', bottom: '0%', yoyo: true, yoyoEase: 'none', repeat: -1, duration: 12, ease: 'none' }, 'same')
      .fromTo('.ball:nth-of-type(2)', { bottom: '0%' }, { bottom: '', top: '0%', yoyo: true, yoyoEase: 'none', repeat: -1, duration: 12, ease: 'none' }, 'same')

  },[])
  return (    
    <section className='fixed w-screen h-[calc(100vh_-_var(--navHeight))] top-[--navHeight] left-0'>
      <div className="ball left-[-10%] xl:left-[-7.8125rem] sm:w-[15.625rem] sm:h-[15.625rem] w-[9.375rem] h-[9.375rem] absolute rounded-full rotate-[200px] will-change-[top,bottom]">
      </div>
      <div className="ball lg:bottom-[-4.6875rem] bottom-[-2.5rem] right-[-5%] sm:w-[15.625rem] sm:h-[15.625rem]  w-[9.375rem] h-[9.375rem] absolute rounded-full will-change-[top,bottom]">
      </div>
    </section>
  )
})

export default Bg