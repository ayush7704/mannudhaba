import { useContext, useEffect, useRef } from 'react'
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

        <div className="p-[1.25rem] mb-4">
          <p className='sm:w-[75%] mx-auto text-[0.9375rem]'>
            We Mannu Dhaba & Restaurant are located on Khajoori Sadak, Bhopal sehore road, Madhya Pradesh 462030. The average rating of our Dhaba is 4.8 out of 5 stars. And the street address is <a className='underline' href="https://maps.app.goo.gl/q7Kjxds8koCrG4dg6">67W2+3C</a> , Bhopal, Madhya Pradesh 462030, India. </p>

          <div className="map h-[21.25rem] py-[1.25rem]">
            <Map />
          </div>

          <h2 className=' text-xl capitalize mb-4'>more about mannu dhaba</h2>
          <p ref={secondPRef} className='mb-2 sm:w-[75%] mx-auto text-justify text-[1.0625rem]'>
            {"Mannu dhaba & restaurant at Khajoori Sadak Bhopal sehore road is a reliable name in the industry as we aim to deliver the best experience of pure veg dishes to our customers in our family friendly atmoshphere since year 2000 . This has helped us build up a loyal customer base. And as we are exactly located at on Khajuri Sadak , Indore Bhopal Highway 18, Bairagarh-462030 , it is easy to locate us on the map. For any kind of assistance or questions, feel free to call us directly on these numbers.".split(' ').map((char, charind) => (
              <span key={charind}>
                <span className={`${value === 'dark' ? 'dark-secondPCharSpan dark:text-[#606060]' : 'secondPCharSpan text-[rgb(96_96_96_/_38%)]'} ${char === 'pure' || char === 'veg' || char === "cousin's" || char === 'family' || char === 'friendly' || char === 'year' || char === '2000' || char === 'atmoshphere' ? 'font-bold' : ''}`}>{`${char} `}</span>
                {char === '2000' ? (<span>&#128519;</span>) : ""}
                {char === 'on' && charind > 80 ? (<span>&#128071; </span>) : ""}
              </span>
            ))}
          </p>
          <div className='flex flex-wrap gap-x-5 justify-evenly'>
            <button title='copy phone number' onClick={copyNumber}>7999741488</button>
            <button title='copy phone number' onClick={copyNumber}>9669087745</button>
            <button title='copy phone number' onClick={copyNumber}>9754742477</button>
          </div>
        </div>
        {/* </div> */}
        <ReasonAndtiming />
      </div>
    </section >
  )
}

export default aboutUs