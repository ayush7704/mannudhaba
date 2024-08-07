import React, { useContext, useEffect, useRef, useState } from 'react'
import { ReasonAndtiming } from '../home/home'
import { counterContext } from '../context/context'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Map from '../map'
gsap.registerPlugin(ScrollTrigger)

function aboutUs() {
  const secondPRef = useRef(null)
  const { value, setfixedMsg, PageHeading, } = useContext(counterContext)
  let render = useRef(0)
  useEffect(() => {
    render.current = render.current + 1
    console.log('aboutus ' + render.current)
  })


  useEffect(() => {
    document.title = 'Mannu Dhaba AboutUs'
  }, [])

  function copyNumber(e) {
    navigator.clipboard.writeText(e.target.innerText)
    navigator.vibrate(20)
    setfixedMsg(prev => ({ ...prev, msg: 'number copied', initial: !prev.initial, random: !prev.random }))

  }

  useEffect(() => {
    console.log('aboutus render')
  })

  useGSAP(() => {
    try {
      gsap.fromTo('.secondPCharSpan', { color: 'rgb(96 96 96 / 38%)' }, {
        color: '#000000', stagger: 0.2, scrollTrigger: {
          trigger: secondPRef.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1,
          // markers: true
        }
      })
      gsap.fromTo('.dark-secondPCharSpan', { color: '#606060' }, {
        color: 'white', stagger: 0.2, scrollTrigger: {
          trigger: secondPRef.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1,
          // markers: true
        }
      })
    } catch (error) {

    }
  }, [value])

  return (
    <section>
      <div className='dark:text-white text-black backdrop-blur-[70px]'>
        {/* <div className=' backdrop-blur-[70px]'> */}
        <PageHeading heading={'about us'} />

        <div className="p-[20px] mb-4">
          <p className='sm:w-[75%] mx-auto'>
            We Mannu Dhaba & Restaurant are located on Khajoori Sadak, Bhopal sehore road, Madhya Pradesh 462030. The average rating of our Dhaba is 4.8 out of 5 stars. And the street address is 67W2+3C , Bhopal, Madhya Pradesh 462030, India. </p>

          <div className="map h-[340px] py-[20px]">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.486984201125!2d77.25028019195072!3d23.24498154910111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c614107f0d14d%3A0x17c8d7aee88d59fa!2sMannu%20Dhaba%20%26%20family%20Restaurant!5e0!3m2!1sen!2sin!4v1709424647844!5m2!1sen!2sin" className='border border-white w-full h-[300px]' allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <Map/>
          </div>

          <h2 className=' text-2xl capitalize  mb-4'>more about mannu dhaba</h2>
          <p ref={secondPRef} className=' mb-2 sm:w-[75%] mx-auto text-justify text-[17px]'>
            {"mannu dhaba & restaurant at Khajoori Sadak Bhopal sehore road is a reliable name in the industry as we aim to deliver the best experience of pure veg dishes to our customers in our family friendly atmoshphere since year 2000 . This has helped us build up a loyal customer base. And as we are exactly located at on Khajuri Sadak , Indore Bhopal Highway 18, Bairagarh-462030 , it is easy to locate us on the map. For any kind of assistance or questions, feel free to call us directly on these numbers.".split(' ').map((char, charind) => (
              <span key={charind}>
                <span className={`${value === 'dark' ? 'dark-secondPCharSpan' : 'secondPCharSpan'} dark:text-[#606060] text-[#606060] ${char === 'pure' || char === 'veg' || char === "cousin's" || char === 'family' || char === 'friendly' || char === 'year' || char === '2000' || char === 'atmoshphere' ? 'font-extrabold' : ''}`}>{`${char} `}</span>
                {char === '2000' ? (<span>&#128519;</span>) : ""}
                {char === 'on' && charind > 80 ? (<span>&#128071; </span>) : ""}
              </span>
            ))}
          </p>
          <div className='flex flex-wrap gap-x-5 justify-evenly'>
            <p title='copy phone number' className='cursor-pointer' onClick={copyNumber}>7999741488</p>
            <p title='copy phone number' className='cursor-pointer' onClick={copyNumber}>9669087745</p>
            <p title='copy phone number' className='cursor-pointer' onClick={copyNumber}>9754742477</p>
          </div>
        </div>
        {/* </div> */}
        <ReasonAndtiming />
      </div>
    </section >
  )
}

export default aboutUs