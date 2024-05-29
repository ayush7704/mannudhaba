import './home.css'
import Bg from '../bg.jsx'
import imgg from '../table1.jpg'
import foodimg from './hero-food.webp'
import React, { useEffect, useState, useRef, useContext ,memo} from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { counterContext } from '../context/context.js'
// import { SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

//=== linear btn  
export function Menulink(props) {

  let btnmouse = (event) => {
    gsap.to(props.reff.current, { background: `-webkit-linear-gradient(${event.nativeEvent.offsetX}deg, hsla(43, 84%, 85%, 1) 0%, hsla(325, 71%, 70%, 1) 50%, hsla(236, 67%, 55%, 1) 100%)`, duration: 0.3 })
  }

  return (
    <Link to="/menu" ref={props.reff} onMouseMove={btnmouse} className='svgbtn linear-btn font-semibold  py-[10px] text-center rounded-[6px] text-white px-[19px] w-1/2 flex gap-2 justify-center items-center'>
      <span>{props.value}</span>
      <svg className='shrink-0' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none">
        <path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg></Link>
  )
}

// reasons 
 const ReasonAndtiming = memo(()=> {
  console.log('ReasonAndtiming rendered')
  return (
    <section className='p-[20px]'>
      <h3 className='capitalize font-semibold text-xl pb-6 text-center' style={{ textShadow: '2px 1px 3px #3b3b3b94' }}>why & when you should visit</h3>

      <div className="reason sm:w-[70%] mx-auto pb-3">
        <h3 className='capitalize text-lg px-3 pb-6 text-center' style={{ textShadow: '2px 1px 16px #3b3b3b94' }}>we are open everyday from <strong className='inline-block'>&nbsp;10AM - 2AM</strong></h3>
        <ol>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb1' />
            <label htmlFor="cb1" className='flex detail cursor-pointer hover:bg-[#80808036] bg-[#80808024] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize'>1. &nbsp; Fresh Flavors, Friendly Prices</label>
            <p className='check-content max-h-[0px] overflow-hidden px-2 bg-[#80808024]'>
              We use only the freshest ingredients to create mouthwatering dishes at budget-friendly prices.
            </p>
          </li>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb2' />
            <label htmlFor="cb2" className='flex detail cursor-pointer bg-[#80808024] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize'>2. &nbsp; fast free wifi</label>
            <p className='check-content max-h-[0px] overflow-hidden px-2 bg-[#80808024]'>
              Stay connected while you dine! We offer complimentary Wi-Fi for all our customers. Catch up on work, browse the web, or share your meal with friends online.</p>
          </li>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb3' />
            <label htmlFor="cb3" className='flex detail cursor-pointer bg-[#80808024] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize'>3. &nbsp; More Than Just a Meal</label>
            <p className='check-content max-h-[0px] overflow-hidden px-2 bg-[#80808024]'>
              It's an experience! Come enjoy the perfect combination of fresh flavors, affordable prices, and satisfying portions in our welcoming atmosphere. We know you'll love it!</p>
          </li>
          <li className='relative sm:p-4 py-3'>
            <input type="checkbox" className='acco opacity-0 absolute' name='accourding' id='cb4' />
            <label htmlFor="cb4" className='flex detail cursor-pointer bg-[#80808024] text-center gap-3 rounded-sm mb-1 p-2 items-center justify-between font-bold capitalize'>4. &nbsp; Come for the Food, Stay for the Experience</label>
            <p className='check-content max-h-[0px] overflow-hidden px-2 bg-[#80808024]'>
              Our restaurant is more than just a meal; it's an experience. Enjoy delicious food made with fresh ingredients, friendly service, and a welcoming atmosphere. We offer free Wi-Fi to keep you connected, making it the perfect spot for a relaxing lunch or a fun dinner with friends.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
})
export {ReasonAndtiming}

function LoopSlide() {
  return (
    <div className="flex flex-nowrap gap-[30px] pl-[30px] will-change-scroll">
      {
        ['made with love', 'made with love', 'made with love', 'made with love', 'made with love'].map((el, ind) => (
          <p key={ind} className={`flex items-center gap-3 bg-[#1c1c1c]  backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-3 rounded-full ${ind % 2 === 0 ? 'shadow-md border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>made with love <span className='text-[red] text-lg'>&#9829;</span></p>
        ))
      }
    </div>
  )
}
function LoopSlide2() {
  return (
    <div className="flex flex-nowrap gap-[30px] pl-[30px] will-change-scroll">
      {
        ['you will love every bite', 'you will love every bite', 'you will love every bite', 'you will love every bite', 'you will love every bite'].map((el, ind) => (
          <p key={ind} className={`flex items-center gap-3 bg-[#1c1c1c]  backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-3 rounded-full ${ind % 2 === 0 ? 'shadow-md border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>you will love every bite &#128175;</p>
        ))
      }
    </div>
  )
}

//=== btns hover  anm 
//==== main home compo 
function home(props) {

  let linearline = useRef(null)
  let pureveg = useRef(null)
  let mealimg = useRef(null)
  let mealDiv = useRef(null)
  let infi = useRef(null)
  let infi2 = useRef(null)
  let homecard = useRef(null)
  let homecardsImg = useRef(null)
  let menubtn = useRef(null)
  const {value,setvalue, Fixed} = useContext(counterContext)
  let homecardObj = [
    { heading: 'paneer pasanda', variety: 'paneer special', img: foodimg, price: 240 },
    { heading: 'veg kofta', variety: 'paneer special', img: imgg, price: 180 },
    { heading: 'Daal snacks', variety: 'Daal special', img: foodimg, price: 120 },
    { heading: 'paneer chilli', variety: 'chinees special', img: foodimg, price: 200 },
    { heading: 'paneer nudals', variety: 'chinees special', img: foodimg, price: 130 },
    { heading: 'paneer paratha', variety: 'paratha special', img: foodimg, price: 80 },
  ]

  // strokeWidth

  useGSAP(() => {
    setTimeout(function initialStart() {

      //== pure veg and linear anm 
      let tm = gsap.timeline()
      tm.fromTo(pureveg.current, { webkitTextStroke: 0 + 'px #de8dff' }, { webkitTextStroke: 1 + 'px #de8dff', duration: 1, })
        .fromTo(mealimg.current, { transform: 'rotate3d(1,1,1, 70deg)' }, { transform: 'rotate3d(1,1,1,0deg)', duration: 1, delay: -.5 })
        .fromTo(linearline.current, { backgroundSize: '0% 100%' }, {
          duration: 1.3, backgroundSize: '100% 100%', scrollTrigger: {
            trigger: linearline.current, start: 'top 80%', end: 'top 60%', scrub: 1,
          }
        })

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

      // infi.current.addEventListener('mouseenter', () => { infitm.pause() })
      // infi2.current.addEventListener('mouseenter', () => { infi2tm.pause() })
      // infi.current.addEventListener('mouseleave', () => { infitm.resume() })
      // infi2.current.addEventListener('mouseleave', () => { infi2tm.resume() })
    }, 3300)

    // initialStart()
    // console.log(value.mode)
    // function scrolling() {
    gsap.utils.toArray('.homecardimg').forEach(element => {
      gsap.from(element, {
        top: '140px',
        rotate: '79deg',
        position: 'relative',
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

    gsap.from(menubtn.current,{
      y:'100%',
      scrollTrigger:{
        trigger:menubtn.current,
        scrub:1,
        // markers:true,
        start:'bottom bottom',
        end:'center 80%',
      }
    })
    gsap.from(menubtn.current.nextElementSibling,{
      y:'100%',
      scrollTrigger:{
        trigger:menubtn.current.nextElementSibling,
        scrub:1,
        // markers:true,
        start:'bottom bottom',
        end:'center 80%',
      }
    })
  })


  let timeout1;
  let timeout2;
  let mealDivover = (e) => {
    mealimg.current.style.zIndex = '-1'
    gsap.to(mealimg.current, { position: 'absolute', transform: 'rotate3d(0, 0, 1, -25deg)', left: e.nativeEvent.offsetX - 125 + 'px', duration: 0.4, ease: 'none', translate: '0%' })

    console.log(getComputedStyle(mealDiv.current).background)
    clearTimeout(timeout1);
    clearTimeout(timeout2);

    timeout2 = setTimeout(() => {
      gsap.to(mealimg.current, {
        transform: 'rotate3d(1,1,1, 0deg)', duration: 1
      })
    }, 500)

    timeout1 = setTimeout(() => {
      console.log("Mouse stopped moving!");
      gsap.to(mealimg.current, {
        left: '50%',
        translate: '-50%',
        duration: 1.5
      })
    }, 2000);
  }
  return (
    <section>
      <div className='grid alert justify-center items-center h-screen fixed z-[-5] w-screen bg-[#000000c4]'>
        <h1 className='text-lg'>we are under development</h1>
      </div>
      <div className='backdrop-blur-[70px]'>
        <div className='hero  flex items-center overflow-x-hidden min-h-[90vh] relative p-[20px]'>
          <div className="homecontent mx-auto py-14 px-[20px] sm:w-[75%] flex flex-col items-center gap-4">
            <div className='overflow-y-hidden '>
              <h1 className='relative uppercase text-4xl text-center'>Taste the different: <span className='text-stroke' ref={pureveg}>pure veg </span> Now</h1>
            </div>

            {/* food img */}
            <div className={`h-[250px] relative self-stretch`} ref={mealDiv} onMouseMove={mealDivover}>
              <Link to='/menu' className='h-full w-full flex justify-center'>
                <img ref={mealimg} src={foodimg} alt="img" className='md:absolute translate-x-0 h-[250px] w-[250px] drop-shadow-[0_30px_35px_rgba(0,0,0,63%)]' />
              </Link>
            </div>


            <h3 className='text-center capitalize intro-line text-xl relative dark:text-white text-black'>Unforgettable flavors await (Fresh), delicious dishes packed with flavor, <span className='intro-line-main' ref={linearline}>family-friendly atmosphere.</span> Gather, connect, and make memories! At your new favorite spot.
            </h3>


            {/* btn  */}
            {/* #00cd4d */}
            <a href="https://wa.me/919754742477">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='dark:hover:text-[#25D366] dark:text-[#00ff5f] text-[#00cd4d] hover:text-[#25d366] sm:w-[35px] sm:h-[35px] w-[32px] h-[32px]' fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <Menulink value='Menu' reff={menubtn}/>
            <Link to="/about Us" className='svgbtn font-semibold  py-[10px] text-center rounded-[6px] dark:text-white px-[19px] md:w-1/2 flex gap-2 justify-center items-center capitalize border shadow-md transition-all  hover:shadow-xl' style={{ lineHeight: '100%' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={value === 'dark' ? 'white' : 'black'} fill="none">
              <path d="M21.1677 7C22.2774 9.54466 22.2774 12.4569 21.1677 15.0015M2.83226 15.0015C1.72258 12.4569 1.72258 9.54466 2.83226 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.3472 19.9619C12.9858 20.3071 12.5028 20.5 12.0002 20.5C11.4975 20.5 11.0145 20.3071 10.6531 19.9619C7.34389 16.7821 2.90913 13.2299 5.07183 8.07272C6.24118 5.28428 9.04815 3.5 12.0002 3.5C14.9522 3.5 17.7591 5.28428 18.9285 8.07272C21.0885 13.2234 16.6646 16.793 13.3472 19.9619Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="1.5" />
            </svg> <span>location & about us </span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color={value === 'dark' ? 'white' : 'black'} fill="none">
                <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>

            </Link>
          </div>
        </div>

        {/* our special  */}
        <div className="page2 py-[20px]">
          <h3 className='capitalize font-semibold text-xl pb-6 text-center' style={{ textShadow: '2px 1px 3px #3b3b3b94' }}>our special</h3>
          <h3 className='capitalize text-lg px-3 pb-6 text-center' style={{ textShadow: '2px 1px 16px #3b3b3b94' }}>A Taste of Tradition, A Touch of Innovation </h3>
          {/* (Combines familiar flavors with new twists) */}

          {/*==== food cards  ====*/}
          <div className="flex p-[20px] flex-wrap justify-center gap-y-[50px] gap-5">
            {
              homecardObj.map((elm, index) => (
                <div key={index} ref={homecard} className="homecard pt-4 grid overflow-hidden w-[300px] min-h-[300px] bg-[#00000012] border border-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg ">
                  <div className="w-[60%] mx-auto relative">
                    <img ref={homecardsImg} src={elm.img} className='homecardimg rounded-full w-full' alt="food img" />
                  </div>

                  <div className="card-body p-[15px]">
                    <h3 className="dark:text-white text-slate-950  font-bold capitalize">{elm.heading}</h3>
                    <h4 className="text-[rgb(232 124 187)] font-semibold font-serif"> &#8377; {elm.price}</h4>
                  </div>
                  <div className="flex ">
                    <Link to={'/menu'} className='svgbtn flex items-center justify-center gap-2 text-sm flex-1  outline-[gray] rounded-sm text-center py-[8px] bg-gradient-to-r dark:from-[#6e4882] from-[#d69ec6] to-[transparent]'><span>Full menu</span>
                      <svg className='shrink- 0' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none">
                        < path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke={value === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke={value === 'dark' ? 'white' : 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <Link to={'/menu'} className='orderbtn flex items-center justify-center gap-2 bg-white color text-black text-sm flex-1 rounded-sm  text-center py-[8px]'><span>Order</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" color='black' fill="none">
                        <path d="M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M14.5 17.5H9.5M2 4H12C13.4142 4 14.1213 4 14.5607 4.43934C15 4.87868 15 5.58579 15 7V15.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5M2 13V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 7H8M2 10H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg></Link>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="py-[30px] infi" style={{ userSelect: 'none' }}>
            <div className="flex justify-end py-5  flex-nowrap  whitespace-nowrap overflow-hidden" ref={infi2}>
              <LoopSlide />
              <div className="flex flex-nowrap gap-[30px] pl-[30px] will-change-scroll">
                {
                  ['made with love', 'made with love', 'made with love', 'made with love', 'made with love'].map((el, ind) => (
                    <p key={ind} className={`flex items-center gap-3 bg-[#1c1c1c]  backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-3 rounded-full ${ind % 2 !== 0 ? 'shadow-md border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>made with love <span className='text-[red] text-lg'>&#9829;</span></p>
                  ))
                }
              </div>
              <LoopSlide />
            </div>
            <div className="flex py-5 flex-nowrap  whitespace-nowrap overflow-hidden" ref={infi}>
              <LoopSlide2 />
              <div className="flex flex-nowrap gap-[30px] pl-[30px] will-change-scroll">
                {
                  ['you will love every bite', 'you will love every bite', 'you will love every bite', 'you will love every bite', 'you will love every bite'].map((el, ind) => (
                    <p key={el+ind} className={`flex items-center gap-3 bg-[#1c1c1c]  backdrop-blur-[10px] px-4 py-2 sm:px-7 sm:py-3 rounded-full ${ind % 2 !== 0 ? 'shadow-md border bg-[transparent] text-black dark:text-white' : 'dark:bg-[#ffffff] bg-[#1c1c1c] dark:text-black text-white'}`}>you will love every bite &#128175;</p>
                  ))
                }
              </div>
              <LoopSlide2 />
            </div>
          </div>
        </div>
        <ReasonAndtiming />
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.486984201125!2d77.25028019195072!3d23.24498154910111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c614107f0d14d%3A0x17c8d7aee88d59fa!2sMannu%20Dhaba%20%26%20family%20Restaurant!5e0!3m2!1sen!2sin!4v1709424647844!5m2!1sen!2sin" className='border border-white w-full h-[350px]' allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </section>
  )
}

export default home