import './home.css'
import foodimg from './hero-food.webp'
import React, { useEffect, useRef, useContext, memo } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { globalContext } from '../context/context.js'
import Map from '../map.jsx'
gsap.registerPlugin(ScrollTrigger)

//=== linear btn  
let Menulink = memo(({value,reff}) => {
  const { contextSafe } = useGSAP({ scope: '.homePage' });

  let btnmouse = contextSafe((event) => {
    gsap.to(reff.current, { background: `-webkit-linear-gradient(${event.nativeEvent.offsetX}deg, hsla(43, 84%, 85%, 1) 0%, hsla(325, 71%, 70%, 1) 50%, hsla(236, 67%, 55%, 1) 100%)`, duration: 0.3 })
  })

  return (
    <Link to="/menu" ref={reff} onMouseMove={btnmouse} className={`svgbtn outLine linear-btn font-medium tracking-[0.5px] py-[0.625rem] text-center rounded-[6px] text-white px-[1.1875rem] min-w-[50%] text-nowrap flex gap-2 justify-center items-center shadow-xl hover:shadow-2xl [textShadow:0.125rem_1px_3px_#3b3b3b94]`}>
      <span>{value}</span>
      <svg className='w-[1.1875rem] h-[1.1875rem]' viewBox="0 0 24 24" fill="none">
        <path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
})

// reasons 
const ReasonAndtiming = memo(() => {
  console.log('ReasonAndtiming rendered')
  return (
    <section className='p-[1.25rem]'>
      <h3 className='capitalize font-semibold text-xl pb-6 text-center tracking-[0.7px] [textShadow:0.125rem_1px_3px_#3b3b3b94]'>why & when you should visit</h3>

      <div className="reason sm:w-[70%] mx-auto pb-3 text-[1rem]">
        <h3 className='capitalize text-lg px-3 pb-6 text-center [textShadow:0.125rem_1px_10px_#3b3b3b94]'>we are open everyday from <strong className='inline-block tracking-[1px]'>&nbsp;10AM - 2AM</strong></h3>
        <ol>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb1' />
            <label htmlFor="cb1" className='flex detail cursor-pointer bg-[#80808016] backdrop-blur-[150px] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize text-[1.0625em] tracking-[0.8px]'>1. &nbsp; Fresh Flavors, Friendly Prices</label>
            <p className='check-content shadow-xl hover:shadow-2xl max-h-[0px] overflow-hidden px-2 bg-[#80808016] backdrop-blur-[150px] sm:text-[1em] text-[0.95em]'>
              We use only the freshest ingredients to create mouthwatering dishes at budget-friendly prices.
            </p>
          </li>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb2' />
            <label htmlFor="cb2" className='flex detail cursor-pointer bg-[#80808016] backdrop-blur-[150px] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize text-[1.0625em] tracking-[0.8px]'>2. &nbsp; fast free wifi</label>
            <p className='check-content shadow-xl hover:shadow-2xl max-h-[0px] overflow-hidden px-2 bg-[#80808016] backdrop-blur-[150px] sm:text-[1em] text-[0.95em]'>
              Stay connected while you dine! We offer complimentary Wi-Fi for all our customers. Catch up on work, browse the web, or share your meal with friends online.</p>
          </li>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb3' />
            <label htmlFor="cb3" className='flex detail cursor-pointer bg-[#80808016] backdrop-blur-[150px] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize text-[1.0625em] tracking-[0.8px]'>3. &nbsp; More Than Just a Meal</label>
            <p className='check-content shadow-xl hover:shadow-2xl max-h-[0px] overflow-hidden px-2 bg-[#80808016] backdrop-blur-[150px] sm:text-[1em] text-[0.95em]'>
              It's an experience! Come enjoy the perfect combination of fresh flavors, affordable prices, and satisfying portions in our welcoming atmosphere. We know you'll love it!</p>
          </li>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb4' />
            <label htmlFor="cb4" className='flex detail cursor-pointer bg-[#80808016] backdrop-blur-[150px] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize text-[1.0625em] tracking-[0.8px]'>4. &nbsp; Come for the Food, Stay for the Experience</label>
            <p className='check-content shadow-xl hover:shadow-2xl max-h-[0px] overflow-hidden px-2 bg-[#80808016] backdrop-blur-[150px] sm:text-[1em] text-[0.95em]'>
              Our restaurant is more than just a meal; it's an experience. Enjoy delicious food made with fresh ingredients, friendly service, and a welcoming atmosphere. We offer free Wi-Fi to keep you connected, making it the perfect spot for a relaxing lunch or a fun dinner with friends.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
})
export { ReasonAndtiming, Menulink }

function LoopSlide() {
  return (
    <div className="flex flex-nowrap gap-[1.875rem] pl-[1.875rem] will-change-scroll">
      {
       Array(5).fill('made with love').map((el, ind) => (
          <p key={ind} className={`text-[0.9rem] sm:text-[1rem] flex items-center gap-3 bg-[#1c1c1c] backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-[.55rem] rounded-full shadow-md ${ind % 2 === 0 ? 'border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>{el} <span className='text-inherit leading-[100%]'> <svg className='w-[1.2rem] h-[1.2rem]' viewBox="0 0 24 24">

            <path fill="red" d="M16 3.23Q17.065 2 18.7 2c.91 0 1.67.33 2.3 1s.96 1.43 1 2.3c0 .7-.33 1.51-1 2.46s-1.32 1.74-1.97 2.39q-.975.96-3.03 2.85q-2.085-1.89-3.06-2.85c-.975-.96-1.31-1.44-1.97-2.39S10 6 10 5.3c0-.91.32-1.67.97-2.3s1.43-.96 2.34-1c1.07 0 1.96.41 2.69 1.23" />

            <path fill='currentColor' d="M22 19v1l-8 2.5l-7-1.94V22H1V11h7.97l6.16 2.3A2.89 2.89 0 0 1 17 16h2c1.66 0 3 1.34 3 3M5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.57-.9-.57h-5.35c-.54 0-1.07-.08-1.58-.25l-2.38-.79l.63-1.9l2.38.79c.3.1 2.3.15 2.3.15c0-.37-.23-.7-.57-.83L8.61 13H7v5.5l6.97 1.91z" />
          </svg></span></p>
        ))
      }
    </div>
  )
}
function LoopSlide2() {
  return (
    <div className="flex flex-nowrap gap-[1.875rem] pl-[1.875rem] will-change-scroll">
      {
        Array(5).fill('you will love every bite').map((el, ind) => (
          <p key={ind} className={`text-[0.9rem] sm:text-[1rem] flex items-center gap-3 bg-[#1c1c1c] tracking-[.5px]  backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-[.55rem] rounded-full shadow-md  ${ind % 2 === 0 ? 'border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>{el} &#128175;</p>
        ))
      }
    </div>
  )
}

//==== main home compo 
const Home = memo(() =>{
  let linearline = useRef(null)
  let pureveg = useRef(null)
  let mealimg = useRef(null)
  let mealDiv = useRef(null)
  let infi = useRef(null)
  let infi2 = useRef(null)
  let homecard = useRef(null)
  let homecardsImg = useRef(null)
  let menubtn = useRef(null)
  let ourspecial = useRef(null)
  let render = useRef(0)
  const timeout1 = useRef(null);
  const timeout2 = useRef(null);
  const tm = useRef(gsap.timeline());

  const { mode, menucard, setmenucard,notificationMsgs, NotificationTimings,  setnotificationState, WhatsAppLink, CartIcon, CartRmvIcon, CartAddIcon } = useContext(globalContext)
  // fitering these arrays values start 
  let specialItems = [];
  let arr = ['butter paneer masala', 'Daal baafle', 'Daal fry', 'kadai paneer', 'paneer chilli', 'paneer nudals', 'kheer']
  for (let i = 0; i < menucard.length; i++) {
    for (let ii = 0; ii < arr.length; ii++) {
      if (menucard[i].heading === arr[ii]) {
        specialItems[ii] = menucard[i]
      }
    }
  }

  useEffect(() => {
    document.title = 'Mannu Dhaba & Restaurant'
  }, [])

  useGSAP((context) => {
    gsap.from(infi.current.children, {
      ease: 'none',
      x: '-300px',
      scrollTrigger: {
        trigger: infi.current,
        scrub: 3
      }
    })
    gsap.from(infi2.current.children, {
      ease: 'none',
      x: '300px',
      scrollTrigger: {
        trigger: infi2.current,
        scrub: 3
      }
    })

    gsap.utils.toArray('.homecardimg').forEach(element => {
      gsap.fromTo(element, { scale: 1.2 }, {
        scale: 1,
        // top: '140px',
        // rotate: '79deg',
        position: 'relative',
        // stagger: 0.9,
        scrollTrigger: {
          trigger: element.parentElement,
          start: 'top bottom',
          end: 'bottom 80%',
          scroller: 'body',
          scrub: 1,
          // markers: true,
        }
      })
    })

    gsap.fromTo(menubtn.current,
      { y: '100%' },
      {
        ease: "power4.out", y: "0%",
        scrollTrigger: {
          trigger: menubtn.current,
          scrub: 1,
          // markers: true,
          start: 'bottom bottom',
          end: 'center 80%',
        }
      })
    gsap.fromTo(menubtn.current.nextElementSibling,
      { y: '140%' },
      {
        ease: "power4.out", y: "0%",
        scrollTrigger: {
          trigger: menubtn.current,
          scrub: 1,
          // markers: true,
          start: 'bottom bottom',
          end: 'center 80%',
        }
      })
  }, [])

  useGSAP(() => {
    if (mode === 'dark') {
      gsap.fromTo(ourspecial.current, {
        background: 'linear-gradient(0deg, #7d539b, black, black, #aabdcd)',
      }, { background: 'linear-gradient(360deg, #7d539b, black, black, #aabdcd)', duration: 8, repeat: -1, yoyo: true, ease: 'none' })
    } else {
      gsap.fromTo(ourspecial.current, {
        background: 'linear-gradient(0deg, #be8acd, white, white, #d2e4f4)',
      }, { background: 'linear-gradient(360deg, #be8acd, white, white, #d2e4f4)', duration: 8, repeat: -1, yoyo: true, ease: 'none' })
    }
  }, { dependencies: [mode] })

  useGSAP(() => {
    //== pure veg and linear anm     
    tm.current.fromTo(pureveg.current, { webkitTextStroke: 0 + 'px #de8dff' }, { webkitTextStroke: 1 + 'px #de8dff', duration: 1, })
      .fromTo(mealimg.current, { transform: 'rotate3d(1,1,1, 70deg)' }, { transform: 'rotate3d(1,1,1,0deg)', duration: 1, delay: -.5 })
      .fromTo(linearline.current, { backgroundSize: '0% 100%' }, {
        backgroundSize: '100% 100%', scrollTrigger: {
          trigger: linearline.current, start: 'top bottom', end: 'top center', scrub: 1
        }
      })
  })


  const { contextSafe } = useGSAP();
  let mealDivover = contextSafe((e) => {

    mealimg.current.style.zIndex = '-1'
    gsap.to(mealimg.current, { position: 'absolute', transform: 'rotate3d(0, 0, 1, -25deg)', left: e.nativeEvent.offsetX - 125 + 'px', duration: 1.2, ease: 'power3', translate: '0%' })

    clearTimeout(timeout1.current);
    clearTimeout(timeout2.current);

    timeout2.current = setTimeout(() => {
      gsap.to(mealimg.current, {
        transform: 'rotate3d(1,1,1, 0deg)', ease: 'power3', duration: 1
      })
    }, 1300)

    timeout1.current = setTimeout(() => {
      console.log("Mouse stopped moving!");
      gsap.to(mealimg.current, {
        left: '50%',
        translate: '-50%', ease: 'power3',
        duration: 1.5
      })
    }, 2000);
  })

  const updateCart = (variety, heading) => {
    const updatedCards = menucard.map(card => {
      if (card.heading === heading && card.variety === variety) {
        if (card.inCart) {
          setnotificationState(prev => ({ ...prev, msg: notificationMsgs.itemRemoved, time: NotificationTimings.get(notificationMsgs.itemRemoved) }))
        } else {
          setnotificationState(prev => ({ ...prev, msg: notificationMsgs.itemAdded, time: NotificationTimings.get(notificationMsgs.itemAdded) }))
        }
        return { ...card, inCart: !card.inCart };
      }
      return card;
    });
    setmenucard(updatedCards)
  }

  return (
    <section className='homePage'>
      <div className='backdrop-blur-[100px]'>
        <div className='hero flex items-center overflow-x-hidden min-h-[90vh] relative p-[1.25rem]'>
          <div className="homecontent mx-auto py-14 px-[1.25rem] sm:w-[75%] lg:max-xl:w-[60%] xl:w-[55%] flex flex-col items-center gap-8">
            <div className='overflow-y-hidden'>
              <h1 className='relative uppercase max-sm:text-[2.15rem] max-sm:leading-[2.5rem] sm:text-4xl text-center'>Taste the different: <span className='whitespace-nowrap'><span className='text-stroke inline-block [textShadow:1px_1px_1px_aliceblue,_4px_3px_0.125rem_black]' ref={pureveg}>pure veg </span> Now</span></h1>
            </div>

            {/* food img */}
            <div className={`h-[15.625rem] relative self-stretch`} ref={mealDiv} onMouseMove={mealDivover}>
              <Link to='/menu' className='h-full w-full flex justify-center'>
                <img ref={mealimg} src={foodimg} alt="img" className='md:absolute translate-x-0 sm:h-[15.625rem] sm:w-[15.625rem] h-[14.625rem] w-[14.625rem] drop-shadow-[0_1.25rem_2.1875rem_rgba(0,0,0,63%)] dark:drop-shadow-[0_1.25rem_2.1875rem_rgba(255,255,255,25%)] sm:dark:drop-shadow-[0_1.25rem_2.1875rem_rgba(255,255,255,45%)]' />
              </Link>
            </div>

            <h3 className='text-center capitalize intro-line max-sm:text-[1.15rem] max-sm:leading-[1.75rem] sm:text-xl relative dark:text-white text-black'>Unforgettable flavors await, delicious dishes packed with flavor, <span className='intro-line-main tracking-[2px] [filter:drop-shadow(0_1px_1px_rgb(0_0_0))_drop-shadow(0_0px_0px_rgb(0_0_0))]' ref={linearline}>family-friendly atmosphere.</span> Gather, connect, and make memories! At your new favorite spot.
            </h3>

            {/* btn  */}
            <div className='flex flex-col items-center gap-4 md:w-1/2 min-w-[50%]'>
              <WhatsAppLink number={7999741488} msg='Hello! Mannu Dhaba and Family Restaurant.'>
                <svg viewBox="0 0 24 24" className='dark:hover:text-[#25D366] dark:text-[#00ff5f] text-[#00cd4d] hover:text-[#25d366] sm:w-[2.1875rem] sm:h-[2.1875rem] w-[2rem] h-[2rem]' fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </WhatsAppLink>

              <Menulink value='Menu' reff={menubtn} />
              <Link to="/about-us" className='svgbtn w-full outLine font-medium tracking-[0.5px] py-[0.625rem] text-center rounded-[6px] dark:text-white dark:bg-[rgb(13,13,13)] bg-[#f5fffa] px-[1.1875rem] flex gap-2 justify-center items-center border transition-all shadow-xl hover:shadow-2xl [textShadow:0.125rem_1px_3px_#3b3b3b94] leading-[100%]'>
                <svg className={`w-[1.5rem] h-[1.5rem]`} color={mode === 'dark' ? 'white' : 'black'} viewBox="0 0 12 12"><path fill="currentColor" d="M6 2a2.5 2.5 0 0 0-2.5 2.5c0 .453.259 1.04.691 1.674c.42.617.953 1.204 1.387 1.641c.238.24.606.24.844 0c.434-.437.966-1.024 1.387-1.64C8.24 5.54 8.5 4.952 8.5 4.5A2.5 2.5 0 0 0 6 2M2.5 4.5a3.5 3.5 0 1 1 7 0c0 .77-.408 1.568-.865 2.238c-.469.687-1.048 1.323-1.503 1.781a1.585 1.585 0 0 1-2.264 0c-.455-.458-1.034-1.094-1.503-1.781C2.908 6.068 2.5 5.269 2.5 4.5m4.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2.42 8.065c.122-.125.267-.236.427-.336c.21.277.43.54.643.782a1.5 1.5 0 0 0-.36.256C3.017 8.884 3 8.962 3 9s.016.116.13.233c.118.118.312.248.592.368C4.28 9.84 5.085 10 6 10s1.72-.16 2.278-.399c.28-.12.474-.25.591-.368C8.984 9.116 9 9.038 9 9s-.016-.116-.13-.233q-.122-.125-.36-.256c.214-.241.433-.505.643-.782q.242.15.428.336c.239.242.419.559.419.935s-.18.693-.42.935c-.236.24-.554.434-.908.585c-.71.304-1.654.48-2.672.48s-1.963-.176-2.672-.48c-.354-.151-.672-.345-.909-.585C2.18 9.693 2 9.376 2 9s.18-.693.42-.935" strokeWidth='1.75' /></svg>
                <span>
                  <span>Location</span>
                  <span> & </span>
                  <span className='inline-block'>About us</span>
                </span> <svg className='w-[1.375rem] h-[1.375rem]' viewBox="0 0 24 24" color={mode === 'dark' ? 'white' : 'black'} fill="none">
                  <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* our special  */}
        <div className="page2 py-[1.25rem]">
          <h3 className='text-xl pb-6 text-center [textShadow:0.125rem_1px_3px_#3b3b3b94]'>
            <span ref={ourspecial} className='capitalize font-semibold tracking-[0.5px] inline-block p-2 px-6 rounded text-center mx-auto origin-top shadow-xl'>our special</span>
          </h3>
          <h3 className='capitalize text-lg px-3 pb-6 text-center [textShadow:0.125rem_1px_2px_#3b3b3b94] font-medium'>A Taste of Tradition, A Touch of Innovation</h3>

          {/*==== food cards  ====*/}
          <div className="flex p-[1.25rem] flex-wrap justify-center gap-y-[3.125rem] gap-5">
            {
              specialItems.map((menu, index) => (
                <div key={index} ref={homecard} className="homecard ar-one-sans relative grid overflow-hidden w-[18.75rem] min-h-[18.75rem] bg-[#00000012] border border-white shadow-[0_2.1875rem_3.75rem_-0.9375rem_rgba(0,0,0,0.3)] rounded-lg backdrop-blur-[100px]">
                  <div className="absolute right-3 top-3 z-[1]">
                    <button onClick={(e) => { updateCart(menu.variety, menu.heading); }} className={`p-[0.35rem] transition-[scale] duration-200 active:scale-[.95] rounded-[.35rem] inline-block dark:bg-white shadow-[1px_2px_0.25rem_#00000063] bg-black ${menu.inCart ? 'bg-[linear-gradient(to_right,_#f2baba,_#ec8ebb,_#6a57d2)] dark:bg-[linear-gradient(to_right,#6E4882,#000000)]' : ''}`}>
                      {
                        menu.inCart ?
                          <CartRmvIcon strokeWidth='1.5' classes={`dark:text-black dark:drop-shadow-[0.25rem_0.0625rem_0.0625rem_black] drop-shadow-[0.1875rem_0px_0.0625rem_black] text-white w-[1.3rem] h-[1.3rem] ${menu.inCart ? 'dark:text-white text-white' : ''}`} />
                          :
                          <CartAddIcon strokeWidth='1.5' classes={`dark:text-black text-white w-[1.3rem] h-[1.3rem] ${menu.inCart ? 'dark:text-white text-white' : ''}`} />
                      }
                    </button>
                  </div>
                  <div className="max-h-[11.25rem] mx-auto relative">
                    <img ref={homecardsImg} src={menu.img} className='homecardimg w-full h-full object-contain' alt={menu.heading + ' image'} />
                  </div>

                  <div className="card-body p-[0.9375rem] self-end">
                    <h3 className="dark:text-white tracking-[.5px] text-slate-950 max-md:text-[0.975rem] font-medium capitalize">{menu.heading}</h3>
                    <h4 className="max-md:text-[0.955rem] font-semibold"> &#8377; {menu.price}</h4>
                  </div>
                  <div className="flex text-[0.875rem] font-medium self-end">
                    {
                      menu.inCart ?
                        <Link to={'/cart'} className={`svgbtn flex items-center justify-center gap-2 flex-1 transition duration-300 ease-[cubic-bezier(0.18,_0.89,_0.32,_1.28)] dark:bg-[linear-gradient(to_right,#6e4882,transparent)] dark:hover:bg-[linear-gradient(360deg,transparent,#6e4882)] bg-[linear-gradient(to_right,#d69ec6,transparent)] hover:bg-[linear-gradient(360deg,transparent,#d69ec6)] cursor-pointer`}>
                          <span>{`Go to cart`}</span>
                          <CartIcon color={mode === 'dark' ? 'white' : 'black'} classes='w-[1.1625rem] h-[1.1625rem]' />
                        </Link>
                        :
                        <button className={`svgbtn flex items-center justify-center gap-2 flex-1 transition duration-300 ease-[cubic-bezier(0.18,_0.89,_0.32,_1.28)] dark:bg-[linear-gradient(to_right,#6e4882,transparent)] dark:hover:bg-[linear-gradient(360deg,transparent,#6e4882)] bg-[linear-gradient(to_right,#d69ec6,transparent)] hover:bg-[linear-gradient(360deg,transparent,#d69ec6)] cursor-pointer`} onClick={(e) => { updateCart(menu.variety, menu.heading); }}>
                          <span>Add to cart</span>
                          <CartIcon color={mode === 'dark' ? 'white' : 'black'} classes='w-[1.1625rem] h-[1.1625rem]' />
                        </button>
                    }

                    <Link to={'/cart'} className='orderbtn flex items-center justify-center gap-2 bg-white text-black text-sm flex-1 text-center py-[0.5rem]'><span>Order</span>
                      <svg className='w-[1.3125rem] h-[1.3125rem]' viewBox="0 0 24 24" color='black' fill="none">
                        <path d="M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M14.5 17.5H9.5M2 4H12C13.4142 4 14.1213 4 14.5607 4.43934C15 4.87868 15 5.58579 15 7V15.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5M2 13V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 7H8M2 10H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="py-[3.75rem] infi select-none">
            <div className="flex justify-end sm:py-5 py-3 flex-nowrap whitespace-nowrap overflow-hidden" ref={infi2}>
              <LoopSlide />
              <div className="flex flex-nowrap gap-[1.875rem] pl-[1.875rem] will-change-scroll">
                {
                  Array(5).fill('made with love').map((el, ind) => (
                    <p key={ind} className={`text-[0.9rem] sm:text-[1rem] flex items-center gap-3 bg-[#1c1c1c]  backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-[.55rem] rounded-full shadow-md ${ind % 2 !== 0 ? 'border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>{el} <span className='text-inherit leading-[100%]'><svg className='w-[1.2rem] h-[1.2rem]' viewBox="0 0 24 24">

                      <path fill="red" d="M16 3.23Q17.065 2 18.7 2c.91 0 1.67.33 2.3 1s.96 1.43 1 2.3c0 .7-.33 1.51-1 2.46s-1.32 1.74-1.97 2.39q-.975.96-3.03 2.85q-2.085-1.89-3.06-2.85c-.975-.96-1.31-1.44-1.97-2.39S10 6 10 5.3c0-.91.32-1.67.97-2.3s1.43-.96 2.34-1c1.07 0 1.96.41 2.69 1.23" />

                      <path fill='currentColor' d="M22 19v1l-8 2.5l-7-1.94V22H1V11h7.97l6.16 2.3A2.89 2.89 0 0 1 17 16h2c1.66 0 3 1.34 3 3M5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.57-.9-.57h-5.35c-.54 0-1.07-.08-1.58-.25l-2.38-.79l.63-1.9l2.38.79c.3.1 2.3.15 2.3.15c0-.37-.23-.7-.57-.83L8.61 13H7v5.5l6.97 1.91z" />
                    </svg>
                    </span></p>
                  ))
                }
              </div>
              <LoopSlide />
            </div>
            <div className="flex sm:py-5 py-3 flex-nowrap  whitespace-nowrap overflow-hidden" ref={infi}>
              <LoopSlide2 />
              <div className="flex flex-nowrap gap-[1.875rem] pl-[1.875rem] will-change-scroll">
                {
                   Array(5).fill('you will love every bite').map((el, ind) => (
                    <p key={el + ind} className={`text-[0.9rem] sm:text-[1rem] flex items-center gap-3 bg-[#1c1c1c] tracking-[.5px]  backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-[.55rem] rounded-full shadow-md ${ind % 2 !== 0 ? 'border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>{el} &#128175;</p>
                  ))
                }
              </div>
              <LoopSlide2 />
            </div>
          </div>
        </div>
        <ReasonAndtiming />
        <section className='h-[18.75rem]'>
          <Map />
        </section>
      </div>

    </section>
  )
})

export default Home