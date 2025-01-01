import { useContext, useEffect, useRef, useLayoutEffect } from 'react'
import { ReasonAndtiming } from '../home/home'
import { globalContext } from '../context/context'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Map from '../map'
gsap.registerPlugin(ScrollTrigger)

function aboutUs() {
  const secondPRef = useRef(null)
  const { value, setfixedMsg, PageHeading, } = useContext(globalContext)
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

  useLayoutEffect(() => {
    gsap.set('.pCharSpan', { color: 'rgb(96 96 96 / 38%)' })
    gsap.set('.dark-pCharSpan', { color: '#606060' })

    try {

      gsap.fromTo('.pCharSpan', { color: 'rgb(96 96 96 / 38%)' }, {
        color: 'rgb(0 0 0)', stagger: 0.2, scrollTrigger: {
          trigger: secondPRef.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1, immediateRender: true,
          // markers: true
        }
      })

      gsap.fromTo('.dark-pCharSpan', { color: '#606060' }, {
        color: '#ffffff', stagger: 0.2, scrollTrigger: {
          trigger: secondPRef.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1, immediateRender: true,
          // markers: true
        }
      })

      ScrollTrigger.refresh();

    } catch (error) {

    }
  }, [value])




  return (
    <section>
      <div className='dark:text-white text-black backdrop-blur-[70px]'>
        {/* <div className=' backdrop-blur-[70px]'> */}
        <PageHeading heading={'about us'} />

          <p className='sm:w-[75%] p-[1.25rem] mx-auto text-[0.9375rem]'>
            We Mannu Dhaba & Restaurant are located on Khajoori Sadak, Bhopal sehore road, Madhya Pradesh 462030. The average rating of our Dhaba is 4.8 out of 5 stars. And the street address is <a className='underline' href="https://maps.app.goo.gl/q7Kjxds8koCrG4dg6">67W2+3C</a> , Bhopal, Madhya Pradesh 462030, India.
          </p>

          <div className="map h-[21.25rem] py-[1.25rem]">
            <Map />
          </div>
        <div className="mb-4 p-[1.25rem]">
          <h2 className='text-[1.1925rem] sm:text-xl capitalize mb-4'>more about mannu dhaba</h2>
          <h2 className='mb-2 sm:w-[75%] mx-auto text-justify text-[1.1025rem] sm:text-[1.1325rem] font-semibold'>Best Pure Veg Restaurant on the Indore-Bhopal Highway.</h2>
          <p ref={secondPRef} className='mb-2 sm:w-[75%] mx-auto text-justify text-[1.0325rem] sm:text-[1.0625rem]'>
            {"Mannu dhaba & restaurant at Khajoori Sadak Bhopal sehore road is a reliable name in the industry as we aim to deliver the best experience of pure veg dishes to our customers in our family friendly atmoshphere since year 2000 . This has helped us build up a loyal customer base. And as we are exactly located at on Khajuri Sadak , Indore Bhopal Highway 18, Bairagarh-462030 , it is easy to locate us on the map. For any kind of assistance or questions, feel free to call us directly on these numbers.".split(' ').map((char, charind) => (
              <span key={charind}>
                <span className={`${value === 'dark' ? 'dark-pCharSpan dark:text-[#606060]' : 'pCharSpan text-[rgb(96_96_96_/_38%)]'} ${char === 'pure' || char === 'veg' || char === "cousin's" || char === 'family' || char === 'friendly' || char === 'year' || char === '2000' || char === 'atmoshphere' ? 'font-bold' : ''}`}>{`${char} `}</span>
                {char === '2000' ? (<span>&#128519;</span>) : ""}
                {char === 'on' && charind > 80 ? (<span>&#128071; </span>) : ""}
              </span>
            ))}
          </p>
          <div className='flex flex-wrap gap-x-5 justify-evenly'>
            {
              [
                {number:7999741488,title:'copy calling number',icon:( <svg className={`text-inherit w-[1.2rem] h-[1.2rem]`} viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z" /></svg>)},
                {number:9669087745,title:'copy whatsApp number',icon:(<svg className={`text-inherit w-[1.2rem] h-[1.2rem]`} viewBox="0 0 16 16"><path fill="currentColor" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"></path></svg>)},
                {number:9165308504,title:'copy whatsApp number',icon:( <svg className={`text-inherit w-[1.2rem] h-[1.2rem]`} viewBox="0 0 16 16"><path fill="currentColor" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"></path></svg>)},
              ].map((numberSet)=>(                                
                <button title={numberSet.title} className='flex gap-2 items-center' onClick={copyNumber}>{numberSet.icon} {numberSet.number}</button>                
              ))
            }
          </div>
        </div>
        {/* </div> */}
        <ReasonAndtiming />
      </div>
    </section >
  )
}

export default aboutUs