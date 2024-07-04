import { counterContext } from "./context";
import { useState, memo, useEffect, useContext, useRef, useLayoutEffect, useMemo } from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import foodimg from '../home/hero-food.webp'
import { matarPaneer, saahiPaneer, paneerButterMasala } from '../varieties imgs/varietyImgs'


console.log('upparka')
let ContextProvider = ({ children }) => {
  console.log('andarka')
  const [menucard, setmenucard] = useState(
    [
      // panner only 
      { heading: 'paneer pasanda', variety: 'paneer special', img: foodimg, price: 240, inCart: false, quantity: 1 },
      { heading: 'kadai paneer', variety: 'paneer special', img: foodimg, price: 190, inCart: false, quantity: 1 },
      { heading: 'matar paneer', variety: 'paneer special', img: matarPaneer, price: 160, inCart: false, quantity: 1 },
      { heading: 'chota paneer', variety: 'paneer special', img: foodimg, price: 160, inCart: false, quantity: 1 },
      { heading: 'paneer punjabi', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'paneer masala', variety: 'paneer special', img: foodimg, price: 170, inCart: false, quantity: 1 },
      { heading: 'butter paneer masala', variety: 'paneer special', img: paneerButterMasala, price: 180, inCart: false, quantity: 1 },
      { heading: 'paneer do pyaja', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'paneer kolhapuri', variety: 'paneer special', img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'kaaju paneer', variety: 'paneer special', img: foodimg, price: 220, inCart: false, quantity: 1 },
      { heading: 'paneer tikka masala', variety: 'paneer special', img: foodimg, price: 250, inCart: false, quantity: 1 },
      { heading: 'paalak paneer', variety: 'paneer special', img: foodimg, price: 160, inCart: false, quantity: 1 },
      { heading: 'handa paneer', variety: 'paneer special', img: foodimg, price: 170, inCart: false, quantity: 1 },
      { heading: 'saahi paneer', variety: "paneer special", img: saahiPaneer, price: 170, inCart: false, quantity: 1 },
      
      // thali
      { heading: 'shaahi thali', variety:"other's",contains:['paneer','jeera rice','daal','papad','4 butter roti'], img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'thali', variety:"other's",contains:['pudi','sabji','chaval','papad'], img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'saada thali', variety:"other's",contains:['daal sabji','chaval','papad','4 roti'], img: foodimg, price: 130, inCart: false, quantity: 1 },
      { heading: 'kheer', variety: "other's", img: foodimg, price: 70, inCart: false, quantity: 1 },
      { heading: 'veg kofta', variety: "other's", img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'dam aalu', variety: "other's", img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'raap tamatar', variety: "other's", img: foodimg, price: 170, inCart: false, quantity: 1 },
      { heading: 'raap shimla', variety: "other's", img: foodimg, price: 170, inCart: false, quantity: 1 },
      { heading: 'jees aalu', variety: "other's", img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'malai kofta', variety: "other's", img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'kaaju kadi', variety: "other's", img: foodimg, price: 220, inCart: false, quantity: 1 },
      { heading: 'mix vej', variety: "other's", img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'sev tamata', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'sev bhaaji', variety: "other's", img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'bhindi masala', variety: "other's", img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'vegan bhartaa', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'aalu matar', variety: "other's", img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'aalu gobhi', variety: "other's", img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'aalu gobhi tamatar', variety: "other's", img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'bhindi kurkuri', variety: "other's", img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'malai kofta', variety: "other's", img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'sev masala', variety: "other's", img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'aalu potato', variety: "other's", img: foodimg, price: 60, inCart: false, quantity: 1 },


      // daal 
      { heading: 'Daal snacks', variety: 'daal special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'Daal fry', variety: 'daal special', img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'Daal baafle', variety: 'daal special', img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'Daal baati', variety: 'daal special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'Daal tadka', variety: 'daal special', img: foodimg, price: 100, inCart: false, quantity: 1 },

      // chinese 
      { heading: 'paneer chilli', variety: 'chinese special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'paneer nudals', variety: 'chinese special', img: foodimg, price: 130, inCart: false, quantity: 1 },
      { heading: 'veg nudals', variety: 'chinese special', img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'hakka nudals', variety: 'chinese special', img: foodimg, price: 110, inCart: false, quantity: 1 },
      { heading: 'veg hok kaada nudals', variety: 'chinese special', img: foodimg, price: 110, inCart: false, quantity: 1 },
      { heading: 'veg mekroni', variety: 'chinese special', img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'veg paasta', variety: 'chinese special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'veg tomato pasta', variety: 'chinese special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'veg manchuriyan', variety: 'chinese special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'veg kothe', variety: 'chinese special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'momos', variety: 'chinese special', img: foodimg, price: 70, inCart: false, quantity: 1 },
      { heading: 'chole bhature', variety: 'chinese special', img: foodimg, price: 80, inCart: false, quantity: 1 },

      // paratha 
      { heading: 'paneer paratha', variety: 'paratha special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'aalu paratha', variety: 'paratha special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'taba paratha', variety: 'paratha special', img: foodimg, price: 30, inCart: false, quantity: 1 },
      { heading: 'gobhi paratha', variety: 'paratha special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'pyaaj paratha', variety: 'paratha special', img: foodimg, price: 50, inCart: false, quantity: 1 },

      // roti 
      { heading: 'tandoor roti', variety: 'roti special', img: foodimg, price: 10, inCart: false, quantity: 1 },
      { heading: 'tandoor butter roti', variety: 'roti special', img: foodimg, price: 15, inCart: false, quantity: 1 },
      { heading: 'missi roti', variety: 'roti special', img: foodimg, price: 30, inCart: false, quantity: 1 },
      { heading: 'taba roti', variety: 'roti special', img: foodimg, price: 12, inCart: false, quantity: 1 },
      { heading: 'butter naan', variety: 'roti special', img: foodimg, price: 40, inCart: false, quantity: 1 },
      { heading: 'garlik naan', variety: 'roti special', img: foodimg, price: 50, inCart: false, quantity: 1 },

      // rice 
      { heading: 'plane rice', variety: 'rice special', img: foodimg, price: 70, inCart: false, quantity: 1 },
      { heading: 'jeera rice', variety: 'rice special', img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'masala rice', variety: 'rice special', img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'veg biryani', variety: 'rice special', img: foodimg, price: 140, inCart: false, quantity: 1 },
      { heading: 'matar pulab', variety: 'rice special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'veg pulab', variety: 'rice special', img: foodimg, price: 140, inCart: false, quantity: 1 },
      { heading: 'manchuriyan rice', variety: 'rice special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'veg fry rice', variety: 'rice special', img: foodimg, price: 140, inCart: false, quantity: 1 },

      // rayta 
      { heading: 'veg rayta', variety: 'rayta special', img: foodimg, price: 70, inCart: false, quantity: 1 },
      { heading: 'boondi rayta', variety: 'rayta special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'lassi', variety: 'rayta special', img: foodimg, price: 40, inCart: false, quantity: 1 },
      { heading: 'dahi', variety: 'rayta special', img: foodimg, price: 60, inCart: false, quantity: 1 },
      { heading: 'chaach', variety: 'rayta special', img: foodimg, price: 30, inCart: false, quantity: 1 },

      // papad 
      { heading: 'papad bhurji', variety: 'papad special', img: foodimg, price: 60, inCart: false, quantity: 1 },
      { heading: 'papad masala', variety: 'papad special', img: foodimg, price: 30, inCart: false, quantity: 1 },
      { heading: 'papad dry', variety: 'papad special', img: foodimg, price: 15, inCart: false, quantity: 1 },
      { heading: 'papad fry', variety: 'papad special', img: foodimg, price: 20, inCart: false, quantity: 1 },
      
    ])
  useLayoutEffect(() => {
    let menucardLocal = localStorage.getItem('menucard')
    if (menucardLocal) {
      let setmenulocal = JSON.parse(localStorage.getItem('menucard'))
      setmenucard(setmenulocal)
      console.log('context setmenu')
    }
  }, [])

  let render = useRef(0)
  useEffect(() => {
    render.current = render.current + 1;
    console.log('context render  ' + render.current)
    console.log(menucard)
  })

  let addToCartItemValue = useMemo(() => { return (menucard.filter((menu) => { return menu.inCart === true })) }, [menucard])


  useLayoutEffect(() => {
    localStorage.setItem('menucard', JSON.stringify(menucard))
    // console.log('context render  ' + render.current)
    console.log('context menucard')
  }, [menucard])

  const [fixedMsg, setfixedMsg] = useState({ msg: 'initial', initial: 'initial', random: true })
  const [value, setvalue] = useState('dark')
  return (
    <counterContext.Provider value={{ value, setvalue, Fixed, fixedMsg, setfixedMsg, PageHeading, menucard, setmenucard, addToCartItemValue }}>
      {children}
    </counterContext.Provider>
  )
}
export default memo(ContextProvider)

console.log('nicheka')
function Fixed() {
  let render = useRef(0);
  const mainPopupEl = useRef(null);

  const { addToCartItemValue, fixedMsg } = useContext(counterContext)
  const [addtocarditemlength, setaddtocarditemlength] = useState(addToCartItemValue.length)

  // useLayoutEffect(() => {
  //   render.current = render.current + 1;
  //   console.log('fixed render  ' + render.current)
  // })

  console.log(fixedMsg)

  useLayoutEffect(() => {
    console.log('fixed render  ' + render.current + ' uselayout ' + addToCartItemValue.length)
    console.log(addtocarditemlength)
    setaddtocarditemlength(addToCartItemValue.length)
  }, [addToCartItemValue])

  useEffect(() => {
    let timeout;
    if (fixedMsg.initial !== 'initial') {
      clearTimeout(timeout)
      gsap.fromTo(mainPopupEl.current, { bottom: 0, opacity: 0 }, { bottom: 80, opacity: 1, duration: 0.4, ease: 'none' })
    }
    timeout = setTimeout(() => {
      gsap.to(mainPopupEl.current, { opacity: 0, bottom: 0, duration: 0.2, ease: 'none' })
    }, 1700);
    setaddtocarditemlength(addToCartItemValue.length)
    return () => {
      clearTimeout(timeout);
    };
  }, [fixedMsg])


  return (
    <div ref={mainPopupEl} className={`fixed z-10 opacity-0  dark:bg-white dark:text-[rgb(84_135_0)] capitalize left-1/2 -translate-x-1/2 inline-block  bg-black text-[#9eff00]  px-5 py-3 text-center w-max rounded-[8px] dark:shadow-[0px_0px_3px_0px_white] shadow-[0px_0px_3px_0px_black]`}>{fixedMsg.msg}</div>
  )
}

let PageHeading = memo(({ heading, mode }) => {
  console.log('pageheading')
  return (
    <div className='flex items-center py-5 px-5'>
      {/* return btn  */}
      <div className='text-3xl capitalize inline-flex w-[40px] h-[40px] items-center justify-center cursor-pointer dark:hover:shadow-[4px_0px_5px_-2px_black] dark:bg-[linear-gradient(to_right,_#8c609c,_#291c26,_black)]  bg-[linear-gradient(to_right,_#d9b2d6,_#f4eef6,_#f8fafc)] hover:shadow-[3px_0px_5px_-2px_black] rounded-full dark:text-white transition-all duration-300' style={{ userSelect: 'none' }} onClick={() => { window.history.back() }}> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={mode === 'dark' ? 'white' : 'black'} fill="none" className='dark:drop-shadow-[4px_1px_1px_black] drop-shadow-[3px_0px_1px_black]'>
        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg> </span></div>
      <h3 className='text-2xl ml-4 capitalize font-semibold' style={{ textShadow: '2px 1px 3px #3b3b3b94' }}>{heading}</h3>
    </div>
  )
})