import { globalContext } from "./context";
import { useState, memo, useEffect, useContext, useRef, useLayoutEffect, useMemo } from "react";
import gsap from 'gsap'
import foodimg from '../home/hero-food.webp'
import { matarPaneer, saahiPaneer, paneerButterMasala, kheer } from '../varieties imgs/varietyImgs'


let ContextProvider = ({ children }) => {

  const [value, setvalue] = useState('dark')
  const [menucard, setmenucard] = useState(
    [
      // panner only 
      { heading: 'paneer pasanda', variety: 'paneer special', img: foodimg, price: 240, inCart: false, quantity: 1 },
      { heading: 'kadai paneer', variety: 'paneer special', img: foodimg, price: 190, inCart: false, quantity: 1 },
      { heading: 'matar paneer', variety: 'paneer special', img: matarPaneer, price: 160, inCart: false, quantity: 1 },
      { heading: 'chola paneer', variety: 'paneer special', img: foodimg, price: 160, inCart: false, quantity: 1 },
      { heading: 'paneer punjabi', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'paneer masala', variety: 'paneer special', img: foodimg, price: 170, inCart: false, quantity: 1 },
      { heading: 'butter paneer masala', variety: 'paneer special', img: paneerButterMasala, price: 180, inCart: false, quantity: 1 },
      { heading: 'paneer do pyaja', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'paneer kolhapuri', variety: 'paneer special', img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'kaaju paneer', variety: 'paneer special', img: foodimg, price: 220, inCart: false, quantity: 1 },
      { heading: 'paneer tikka masala', variety: 'paneer special', img: foodimg, price: 250, inCart: false, quantity: 1 },
      { heading: 'paalak paneer', variety: 'paneer special', img: foodimg, price: 160, inCart: false, quantity: 1 },
      { heading: 'haandi paneer', variety: 'paneer special', img: foodimg, price: 170, inCart: false, quantity: 1 },
      { heading: 'saahi paneer', variety: "paneer special", img: saahiPaneer, price: 170, inCart: false, quantity: 1 },

      // thali and others
      { heading: 'shaahi thali', variety: "other's", contains: ['paneer', 'jeera rice', 'daal', 'papad', '4 butter roti'], img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'thali', variety: "other's", contains: ['pudi', 'sabji', 'chaval', 'papad'], img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'saada thali', variety: "other's", contains: ['daal sabji', 'chaval', 'papad', '4 roti'], img: foodimg, price: 130, inCart: false, quantity: 1 },
      { heading: 'kheer', variety: "other's", img: kheer, price: 70, inCart: false, quantity: 1 },
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

      // salad 
      { heading: 'green salad', variety: 'salad special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'kachumar salad', variety: 'salad special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'onion salad', variety: 'salad special', img: foodimg, price: 40, inCart: false, quantity: 1 },
    ])
  useLayoutEffect(() => {
    let menucardLocal = localStorage.getItem('menucard')
    if (menucardLocal) {
      let setmenulocal = JSON.parse(localStorage.getItem('menucard'))
      setmenucard(setmenulocal)
      // console.log('context setmenu')
    }
    const time = (new Date)
    console.log(time + ' time   ')
    console.log(document.documentElement.classList.contains('dark') === true && time.getHours() >= 8 && time.getHours() <= 17)
    if (document.documentElement.classList.contains('dark') === true && time.getHours() >= 8 && time.getHours() <= 17) {
      document.documentElement.classList.toggle('dark')
      document.body.classList.toggle('bg-slate-50')
      setvalue('light')
    }
  }, [])

  let render = useRef(0)
  useEffect(() => {
    render.current = render.current + 1;
  })

  let addToCartItemValue = useMemo(() => { return (menucard.filter((menu) => { return menu.inCart === true })) }, [menucard])

  useLayoutEffect(() => {
    localStorage.setItem('menucard', JSON.stringify(menucard))
    // console.log('context render  ' + render.current)
    // console.log('context menucard')
  }, [menucard])


  const [fixedMsg, setfixedMsg] = useState({ msg: 'initial', initial: 'initial', random: true })
  return (
    <globalContext.Provider value={{ value, setvalue, Fixed, fixedMsg, setfixedMsg, PageHeading, menucard, setmenucard, addToCartItemValue, WhatsAppLink,CartIcon ,CartRmvIcon,CartAddIcon}}>
      {children}
    </globalContext.Provider>
  )
}
export default memo(ContextProvider)

function Fixed() {
  const mainPopupEl = useRef(null);

  const { fixedMsg } = useContext(globalContext)

  console.log(fixedMsg)

  useEffect(() => {
    let timeout;
    if (fixedMsg.initial !== 'initial') {
      clearTimeout(timeout)
      gsap.fromTo(mainPopupEl.current, { bottom: 0, opacity: 0 }, { bottom: 80, opacity: 1, duration: 0.4, ease: 'none' })
    }
    timeout = setTimeout(() => {
      gsap.to(mainPopupEl.current, { opacity: 0, bottom: 0, duration: 0.2, ease: 'none' })
    }, 1700);
    return () => {
      clearTimeout(timeout);
    };
  }, [fixedMsg])


  return (
    <div ref={mainPopupEl} style={{ pointerEvents: 'none' }} className={`fixed z-10 opacity-0  dark:bg-white dark:text-[rgb(84_135_0)] capitalize left-1/2 -translate-x-1/2 inline-block  bg-black text-[#9eff00]  px-5 py-3 text-center w-max rounded-[8px] dark:shadow-[0px_0px_0.1875rem_0px_white] shadow-[0px_0px_0.1875rem_0px_black]`}>{fixedMsg.msg}</div>
  )
}

let PageHeading = memo(({ heading }) => {
  const { value } = useContext(globalContext)
  console.log('pageheading')
  return (
    <div className='flex items-center py-5 px-5'>
      {/* return btn  */}
      <div className='inline-flex w-[2.5rem] h-[2.5rem] items-center justify-center cursor-pointer dark:hover:shadow-[0.25rem_0px_0.3125rem_-0.125rem_black] dark:bg-[linear-gradient(to_right,_#8c609c,_#291c26,_black)]  bg-[linear-gradient(to_right,_#d9b2d6,_#f4eef6,_#f8fafc)] hover:shadow-[0.1875rem_0px_0.3125rem_-0.125rem_black] rounded-full dark:text-white transition-all duration-300' style={{ userSelect: 'none' }} onClick={() => { window.history.back() }}> <span>
        {/* <svg className='w-[1.5rem] h-[1.5rem] dark:drop-shadow-[0.25rem_0.0625rem_0.0625rem_black] drop-shadow-[0.1875rem_0px_0.0625rem_black]' viewBox="0 0 24 24" color={value === 'dark' ? 'white' : 'black'} fill="none">
        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>  */}          
      <svg className='w-[1.5rem] h-[1.5rem] dark:drop-shadow-[0.25rem_0.0625rem_0.0625rem_black] drop-shadow-[0.1875rem_0px_0.0625rem_black]'  color={value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24"><path fill="currentColor" d="M7 19a1 1 0 0 0 1 1h5c2.242 0 4.01-.778 5.218-2.023C19.414 16.744 20 15.113 20 13.5s-.586-3.244-1.782-4.477C17.01 7.778 15.242 7 13 7H8.414l2.043-2.043a1 1 0 0 0-1.414-1.414l-3.75 3.75a1 1 0 0 0 0 1.414l3.75 3.75a1 1 0 0 0 1.414-1.414L8.414 9H13c1.758 0 2.99.597 3.782 1.415c.804.83 1.218 1.948 1.218 3.085s-.414 2.256-1.218 3.085C15.99 17.403 14.758 18 13 18H8a1 1 0 0 0-1 1"/></svg>
      </span>
      </div>
      <h3 className='text-[1.43rem] ml-4 capitalize font-semibold' style={{ textShadow: '0.125rem 0.0625rem 0.1875rem #3b3b3b94' }}>{heading}</h3>
    </div>
  )
})

function WhatsAppLink({ children,number, msg ,classes}) {
  // got help from gpt here in (rel,default text)
  const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(msg)}`;
  return (
    <a href={whatsappUrl} className={classes} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
 
function CartIcon({classes,color,viewBox="0 0 24 24",strokeWidth=2}) {
  return (
    <svg className={classes} color={color} viewBox={viewBox} ><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" strokeWidth={strokeWidth}></path></svg>
  )
}
function CartRmvIcon({classes,color,viewBox="0 0 24 24",strokeWidth=2}) {
  return (
    <svg className={classes} viewBox={viewBox}><path fill="currentColor" d="M14.1 8.5L12 6.4L9.9 8.5L8.5 7.1L10.6 5L8.5 2.9l1.4-1.4L12 3.6l2.1-2.1l1.4 1.4L13.4 5l2.1 2.1zM7 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2c0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7l1.7 1l-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6z" strokeWidth={strokeWidth} /></svg>
  )
}
function CartAddIcon({classes,color,viewBox="0 0 24 24",strokeWidth=2}) {
  return (
    <svg className={classes} viewBox={viewBox}><path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2"/></svg>
  )
}