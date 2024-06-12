import React, { useContext, useEffect, useRef, useState } from 'react'
import { ReasonAndtiming } from '../home/home'
import { counterContext } from '../context/context'

function aboutUs() {
  const copy = useRef(null)
  const { value, setvalue, Fixed,PageHeading} = useContext(counterContext)
  const [val, setval] = useState(0)
  useEffect(() => {
    document.title='Mannu Dhaba AboutUs'
  },[])
  function copyNumber(e) {
    copy.current.classList.toggle('hidden')
    copy.current.classList.toggle('opacity-0')
    navigator.clipboard.writeText(e.target.innerText)
    navigator.vibrate([50, 50, 100])
    setTimeout(() => {
      copy.current.classList.toggle('opacity-0')
      copy.current.classList.toggle('hidden')
    }, 2000)

  }
  return (
    <section>
      <div className='dark:text-white text-black backdrop-blur-[70px]'>
        <div className=' backdrop-blur-[70px]'>
          <PageHeading mode={value} heading={'about us'}/>

          <div className="p-[20px] mb-4">
            <p className='sm:w-[75%] mx-auto'>
              Mannu Dhaba & Restaurant is a restaurant located on Khajoori Sadak, Bhopal, Madhya Pradesh 462030. The average rating of our <strong>Dhaba</strong> is 4.8 out of 5 stars. And the street address is 67W2+3C , Bhopal, Madhya Pradesh 462030, India. </p>

            <div className="map py-[20px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.486984201125!2d77.25028019195072!3d23.24498154910111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c614107f0d14d%3A0x17c8d7aee88d59fa!2sMannu%20Dhaba%20%26%20family%20Restaurant!5e0!3m2!1sen!2sin!4v1709424647844!5m2!1sen!2sin" className='border border-white w-full h-[300px]' allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <h2 className=' text-2xl capitalize  mb-4'>more about mannu dhaba</h2>
            <p onClick={() => { setval(val + 1) }} className=' mb-2 sm:w-[75%] mx-auto text-justify'>mannu dhaba & restaurant in , Khajoori Sadak, Bhopal is a reliable name in the industry as we aim to deliver the best experience to our customers. This has helped us build up a loyal customer base. we started our journey in <strong className=' font-bold'> year 2000 </strong>. As we are located at exactly on Khajuri Sadak , Indore Bhopal Highway 18, Bairagarh-462030 , it is easy to locate mannu dhaba & restaurant on the map. For any kind of assistance or questions, it is best to contact us directly on
            </p>
            <div className='flex flex-wrap gap-x-5 justify-evenly'>
              <p title='copy phone number' className='cursor-pointer' onClick={copyNumber}>7999741488</p>
              <p title='copy phone number' className='cursor-pointer' onClick={copyNumber}>9669087745</p>
              <p title='copy phone number' className='cursor-pointer' onClick={copyNumber}>9754742477</p>
            </div>
          </div>
        </div>
        <ReasonAndtiming />
      </div>
      <div ref={copy} className='hidden opacity-0 transition duration-500'>
        {<Fixed />}
      </div>
    </section>
  )
}

export default aboutUs