import sunbg from '/layered-waves-haikei.png'
import moonbg from '/symbol-scatter-haikei.svg'
import { globalContext } from "./context";
import { useState, memo, useEffect, useContext, useRef, useLayoutEffect, useMemo } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import foodimg from '../home/hero-food.webp'
import { matarPaneer, saahiPaneer, paneerButterMasala, kheer, daalBaafle } from '../varieties imgs/varietyImgs'

let ContextProvider = ({ children }) => {
  const [mode, setMode] = useState('dark')
  const [itemBeingRemoved, setItemBeingRemoved] = useState(null)
  const [menucard, setmenucard] = useState(
    [
      // panner only 
      { heading: 'paneer pasanda', variety: 'paneer special', img: foodimg, price: 260, inCart: false, quantity: 1 },
      { heading: 'kadai paneer', variety: 'paneer special', img: foodimg, price: 210, inCart: false, quantity: 1 },
      { heading: 'matar paneer', variety: 'paneer special', img: matarPaneer, price: 170, inCart: false, quantity: 1 },
      { heading: 'chola paneer', variety: 'paneer special', img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'paneer punjabi', variety: 'paneer special', img: foodimg, price: 220, inCart: false, quantity: 1 },
      { heading: 'paneer masala', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'butter paneer masala', variety: 'paneer special', img: paneerButterMasala, price: 200, inCart: false, quantity: 1 },
      { heading: 'paneer do pyaja', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'paneer kolhapuri', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'kaaju paneer', variety: 'paneer special', img: foodimg, price: 240, inCart: false, quantity: 1 },
      { heading: 'paneer tikka masala', variety: 'paneer special', img: foodimg, price: 260, inCart: false, quantity: 1 },
      { heading: 'haandi paneer', variety: 'paneer special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'paalak paneer', variety: 'paneer special', img: foodimg, price: 180, inCart: false, quantity: 1 },
      { heading: 'saahi paneer', variety: "paneer special", img: saahiPaneer, price: 200, inCart: false, quantity: 1 },
      { heading: 'malai kofta', variety: "paneer special", img: foodimg, price: 200, inCart: false, quantity: 1 },

      // thali 
      { heading: 'shaahi thali', variety: "thali", contains: ['paneer', 'jeera rice', 'daal', 'papad', '4 butter roti', 'salad'], img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'saada thali', variety: "thali", contains: ['daal', 'sabji', 'chaval', 'papad', '4 roti'], img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'thali', variety: "thali", contains: ['pudi', 'sabji',], img: foodimg, price: 150, inCart: false, quantity: 1 },

      // others
      { heading: 'sev masala', variety: "other's", img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'aalu matar', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'matar masala', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'aalu gobhi matar', variety: "other's", img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'bhindi kurkuri', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'kaaju handi', variety: "other's", img: foodimg, price: 220, inCart: false, quantity: 1 },
      { heading: 'mix vej', variety: "other's", img: foodimg, price: 170, inCart: false, quantity: 1 },
      { heading: 'sev tamatar', variety: "other's", img: foodimg, price: 110, inCart: false, quantity: 1 },
      { heading: 'sev bhaaji', variety: "other's", img: foodimg, price: 110, inCart: false, quantity: 1 },
      { heading: 'bhindi masala', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'vegan bhartaa', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'chana masala', variety: "other's", img: foodimg, price: 160, inCart: false, quantity: 1 },
      { heading: 'tamatar chatni', variety: "other's", img: foodimg, price: 140, inCart: false, quantity: 1 },
      { heading: 'veg kofta', variety: "other's", img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'dam aalu', variety: "other's", img: foodimg, price: 180, inCart: false, quantity: 1 },
      // { heading: 'raap tamatar', variety: "other's", img: foodimg, price: 170, inCart: false, quantity: 1 },
      // { heading: 'raap shimla', variety: "other's", img: foodimg, price: 170, inCart: false, quantity: 1 },
      // { heading: 'jees aalu', variety: "other's", img: foodimg, price: 80, inCart: false, quantity: 1 },    
      { heading: 'aalu palak', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'gobhi masala', variety: "other's", img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'aalu gobhi tamatar', variety: "other's", img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'tamatar masala', variety: "other's", img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'aalu chole', variety: "other's", img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'jira aalu', variety: "other's", img: foodimg, price: 100, inCart: false, quantity: 1 },

      { heading: 'kheer', variety: "other's", img: kheer, price: 70, inCart: false, quantity: 1 },

      // daal 
      { heading: 'Daal snacks', variety: 'daal special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'Daal fry', variety: 'daal special', img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'Daal baafle', variety: 'daal special', img: daalBaafle, price: 150, inCart: false, quantity: 1 },
      { heading: 'Daal baati', variety: 'daal special', img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'Daal tadka', variety: 'daal special', img: foodimg, price: 120, inCart: false, quantity: 1 },

      // snacks       
      { heading: 'chana rost', variety: 'snacks special', img: foodimg, price: 110, inCart: false, quantity: 1 },
      { heading: 'chana lesan', variety: 'snacks special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'fingar chips', variety: 'snacks special', img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'chana chilli', variety: 'snacks special', img: foodimg, price: 130, inCart: false, quantity: 1 },
      { heading: 'pinet masala', variety: 'snacks special', img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'veg pakoda', variety: 'snacks special', img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'mix pakoda', variety: 'snacks special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'onion pakoda', variety: 'snacks special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'paneer pakoda', variety: 'snacks special', img: foodimg, price: 160, inCart: false, quantity: 1 },

      // chinese 
      { heading: 'veg nudals', variety: 'chinese special', img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'paneer nudals', variety: 'chinese special', img: foodimg, price: 130, inCart: false, quantity: 1 },
      { heading: 'hakka nudals', variety: 'chinese special', img: foodimg, price: 110, inCart: false, quantity: 1 },
      { heading: 'veg hok kaada nudals', variety: 'chinese special', img: foodimg, price: 110, inCart: false, quantity: 1 },
      { heading: 'veg mekroni', variety: 'chinese special', img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'veg paasta', variety: 'chinese special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'veg tomato pasta', variety: 'chinese special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'veg gyarli pasta', variety: 'chinese special', img: foodimg, price: 90, inCart: false, quantity: 1 },
      { heading: 'veg manchuriyan', variety: 'chinese special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'veg kothe', variety: 'chinese special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'paneer chilli', variety: 'chinese special', img: foodimg, price: 200, inCart: false, quantity: 1 },
      { heading: 'chole bhature', variety: 'chinese special', img: foodimg, price: 100, inCart: false, quantity: 1 },

      // paratha 
      { heading: 'paneer paratha', variety: 'paratha special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'aalu paratha', variety: 'paratha special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'taba paratha', variety: 'paratha special', img: foodimg, price: 30, inCart: false, quantity: 1 },
      { heading: 'pyaaj paratha', variety: 'paratha special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'gobhi paratha', variety: 'paratha special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'lachcha paratha', variety: 'paratha special', img: foodimg, price: 40, inCart: false, quantity: 1 },

      // roti 
      { heading: 'taba butter roti', variety: 'roti special', img: foodimg, price: 15, inCart: false, quantity: 1 },
      { heading: 'tandoor roti', variety: 'roti special', img: foodimg, price: 10, inCart: false, quantity: 1 },
      { heading: 'tandoor butter roti', variety: 'roti special', img: foodimg, price: 15, inCart: false, quantity: 1 },
      { heading: 'missi roti', variety: 'roti special', img: foodimg, price: 25, inCart: false, quantity: 1 },
      { heading: 'butter naan', variety: 'roti special', img: foodimg, price: 40, inCart: false, quantity: 1 },
      { heading: 'taba roti', variety: 'roti special', img: foodimg, price: 12, inCart: false, quantity: 1 },
      { heading: 'garlik naan', variety: 'roti special', img: foodimg, price: 50, inCart: false, quantity: 1 },

      // rice 
      { heading: 'plane rice', variety: 'rice special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'jeera rice', variety: 'rice special', img: foodimg, price: 100, inCart: false, quantity: 1 },
      { heading: 'masala rice', variety: 'rice special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'veg biryani', variety: 'rice special', img: foodimg, price: 140, inCart: false, quantity: 1 },
      { heading: 'matar pulab', variety: 'rice special', img: foodimg, price: 120, inCart: false, quantity: 1 },
      { heading: 'veg pulab', variety: 'rice special', img: foodimg, price: 140, inCart: false, quantity: 1 },
      { heading: 'manchuriyan rice', variety: 'rice special', img: foodimg, price: 140, inCart: false, quantity: 1 },
      { heading: 'veg fry rice', variety: 'rice special', img: foodimg, price: 150, inCart: false, quantity: 1 },
      { heading: 'khichdee', variety: 'rice special', img: foodimg, price: 120, inCart: false, quantity: 1 },

      // rayta 
      { heading: 'veg rayta', variety: 'rayta special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'boondi rayta', variety: 'rayta special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'lassi', variety: 'rayta special', img: foodimg, price: 40, inCart: false, quantity: 1 },
      { heading: 'dahi', variety: 'rayta special', img: foodimg, price: 70, inCart: false, quantity: 1 },
      { heading: 'chaach', variety: 'rayta special', img: foodimg, price: 30, inCart: false, quantity: 1 },

      // papad 
      { heading: 'papad bhurji', variety: 'papad special', img: foodimg, price: 80, inCart: false, quantity: 1 },
      { heading: 'papad masala', variety: 'papad special', img: foodimg, price: 30, inCart: false, quantity: 1 },
      { heading: 'papad dry', variety: 'papad special', img: foodimg, price: 15, inCart: false, quantity: 1 },
      { heading: 'papad fry', variety: 'papad special', img: foodimg, price: 20, inCart: false, quantity: 1 },

      // salad 
      { heading: 'green salad', variety: 'salad special', img: foodimg, price: 50, inCart: false, quantity: 1 },
      { heading: 'kachumbar salad', variety: 'salad special', img: foodimg, price: 50, inCart: false, quantity: 1 },
  ])

  useLayoutEffect(() => {

    const clientMenu = JSON.parse(localStorage.getItem('menucard'))

    async function loadMenu() {
      if (clientMenu && Array.isArray(clientMenu)) {
        const clientMenuAfter = structuredClone(menucard);

        await Promise.all(
          clientMenu.map(async (clientItem) => {
            const clientItemIndex = menucard.findIndex(
              (menuItem) =>
                menuItem.heading === clientItem.heading &&
                menuItem.variety === clientItem.variety &&
                clientItem.inCart
            );
            if (clientItemIndex !== -1) {
              const afterMenuItem = structuredClone(clientMenuAfter[clientItemIndex]);
              afterMenuItem.inCart = true
              afterMenuItem.quantity = clientItem?.quantity
              clientMenuAfter[clientItemIndex] = afterMenuItem
            }
            console.log(clientItemIndex);
          })
        );
        setmenucard(clientMenuAfter)
      }
    }

    loadMenu();

    const time = new Date();
    const isDayTime = time.getHours() >= 8 && time.getHours() <= 17;
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark && isDayTime) {
      document.documentElement.classList.toggle('dark');
      document.body.classList.toggle('bg-slate-50');
      setMode('light');
    }
  }, [])

  let render = useRef(0)
  useEffect(() => {
    render.current = render.current + 1;
  })

  let addToCartItemValue = useMemo(() => { return (menucard.filter((menu) => { return menu.inCart === true })) }, [menucard])

  useLayoutEffect(() => {
    localStorage.setItem('menucard', JSON.stringify(menucard))
  }, [menucard])


  const [notificationState, setnotificationState] = useState({ msg: notificationMsgs.loadMsg, time: NotificationTimings.get(notificationMsgs.loadMsg) })
  return (
    <globalContext.Provider value={{ mode, setMode, Notification, notificationState, setnotificationState, notificationMsgs, NotificationTimings, PageHeading, menucard, setmenucard, addToCartItemValue, WhatsAppLink, CartIcon, CartRmvIcon, CartAddIcon, ItemRemovingModal, itemBeingRemoved, setItemBeingRemoved,ModeToggler }}>
      {children}
    </globalContext.Provider>
  )
}
export default memo(ContextProvider)

const notificationMsgs = {
  itemAdded: 'item added successfully',
  itemRemoved: 'item removed successfully',
  loadMsg: 'we are under development',
  numberCopied: 'number copied'
}
const NotificationTimings = new Map([
  [notificationMsgs.itemAdded, 2000],
  [notificationMsgs.itemRemoved, 2000],
  [notificationMsgs.loadMsg, 3000],
  [notificationMsgs.numberCopied, 1000],
])

const Notification = memo(() => {
  const { notificationState,setnotificationState, notificationMsgs } = useContext(globalContext)
  const mainPopupEl = useRef(null);
  const timeout = useRef(null);

  useGSAP(() => {
    if (notificationState.msg === notificationMsgs.loadMsg) {
      clearTimeout(timeout.current)
      setTimeout(() => {
        gsap.fromTo(mainPopupEl.current, { bottom: 40, opacity: 0 }, { bottom: 40, opacity: 1, duration: 0.6, ease: 'power1.inOut' })
        timeout.current = setTimeout(() => {
          gsap.to(mainPopupEl.current, { opacity: 0, duration: 0.4, ease: 'power1.inOut' ,onComplete:()=>{
            setnotificationState(null)
            gsap.set(mainPopupEl.current, { bottom:40})
          }})          
        }, Number(notificationState.time + 600));
      }, 3000);
    } else {
      clearTimeout(timeout.current)
      gsap.fromTo(mainPopupEl.current, { bottom: 40, opacity: 0 }, { bottom: 80, opacity: 1, duration: 0.6, ease: 'power1.inOut' })
      timeout.current = setTimeout(() => {
        gsap.to(mainPopupEl.current, { opacity: 0, duration: 0.4, ease: 'power1.inOut' ,onComplete:()=>{
          setnotificationState(null)
          gsap.set(mainPopupEl.current, { bottom:40})
        }})        
      }, Number(notificationState.time + 600));
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [notificationState])

  function removeNotification(){
    clearTimeout(timeout.current)
    gsap.to(mainPopupEl.current, { opacity: 0, duration: 0.4, ease: 'power1.inOut' ,onComplete:()=>{
      setnotificationState(null)
      gsap.set(mainPopupEl.current, { bottom:40})
    }})    
  }

  function condtionalElm() {
    if (notificationState.msg === notificationMsgs.loadMsg) {
      return (
        <>
          <p className="mr-1">{notificationState.msg}</p>
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping duration-700 rounded-full dark:bg-[#3e8300] bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full dark:bg-[#18af05] bg-lime-500"></span>
          </span>
        </>
      )
    }
    else if (notificationState.msg === notificationMsgs.itemAdded) {
      return (<>
        <p>{notificationState.msg}</p> <svg className={`w-[1.375rem] h-[1.375rem] text-[#9eff00] dark:text-[green]`} viewBox="0 0 24 24" fill="none">
          <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </>)
    }
    else {
      return (<p>{notificationState.msg}</p>)
    }
  }
  return (
    <div ref={mainPopupEl} className={`fixed ar-one-sans flex gap-1 items-center z-10 opacity-0 capitalize left-1/2 -translate-x-1/2  p-[0.5rem_1.25rem] text-center dark:text-black text-white w-max rounded-[8px] shadow-[0px_4px_8px_1px_#00000040] text-[0.91rem] md:text-[0.95rem] font-medium bg-[#0d0d0d] dark:bg-[#f5fffa] transition-all duration-100 border border-1 dark:border-[#00000040] border-[#ffffff40]`}>
      <button onClick={removeNotification} className="absolute p-[0.275rem] top-[-0.5rem] right-[-.625rem] bg-[#0d0d0d] dark:bg-[#f5fffa] rounded-[50%] border border-1 dark:border-[#00000080] border-[#ffffff80] transition-[scale] duration-200 active:scale-[.95]">
        <svg className="w-[0.85rem] h-[0.85rem] text-[inherit]"
          viewBox="0 0 24 24"
          fill="none"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z" /></g>
        </svg>
      </button>
      {condtionalElm()}
    </div>
  )
})


let PageHeading = memo(({ heading }) => {
  const headingCom = useRef(null)
  const { mode } = useContext(globalContext)
  const { contextSafe } = useGSAP();
  let lastScrollPos = 0

  useEffect(() => {
    const scrolling = contextSafe((e) => {
      const currentScrollpos = window.pageYOffset || document.documentElement.scrollTop;            
      if (currentScrollpos < lastScrollPos) {
        gsap.to(headingCom.current, {
          top: "var(--navHeight)",
          duration: 2,
          ease: "circ",
        });
      } else if (currentScrollpos > lastScrollPos && currentScrollpos !== 0) {
        gsap.to(headingCom.current, {
          top: "-100%",
          // duration: 0.7,
          ease: "circ",
        });
      }
      lastScrollPos = currentScrollpos;
    })

    window.addEventListener('scroll', scrolling)
    return () => {
      window.removeEventListener('scroll', scrolling)
    }
  }, [])
  // dark:bg-[#0d0d0d80] bg-[#fff5f580]
  return (
    <div ref={headingCom} className='flex items-center py-4 px-5 sticky top-[var(--navHeight)] z-[5]  dark:bg-[#0d0d0d] bg-[#f5fffa] backdrop-blur-md'>
      {/* return btn  */}
      <button className='inline-flex w-[2.5rem] h-[2.5rem] items-center justify-center cursor-pointer dark:bg-[linear-gradient(to_right,_#8c609c,_#291c26,_black)] bg-[linear-gradient(to_right,_#d9b2d6,_#f4eef6,_#f8fafc)] hover:shadow-[0.1875rem_0px_0.3125rem_-0.3125rem_black] rounded-full dark:text-white select-none transition-[scale] duration-200 active:scale-[.95]' onClick={() => { window.history.back() }}> <span>
        <svg className='w-[1.5rem] h-[1.5rem] dark:drop-shadow-[0.25rem_0.0625rem_0.0625rem_black] drop-shadow-[0.1875rem_0px_0.0625rem_black]' color={mode === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24"><path fill="currentColor" d="M7 19a1 1 0 0 0 1 1h5c2.242 0 4.01-.778 5.218-2.023C19.414 16.744 20 15.113 20 13.5s-.586-3.244-1.782-4.477C17.01 7.778 15.242 7 13 7H8.414l2.043-2.043a1 1 0 0 0-1.414-1.414l-3.75 3.75a1 1 0 0 0 0 1.414l3.75 3.75a1 1 0 0 0 1.414-1.414L8.414 9H13c1.758 0 2.99.597 3.782 1.415c.804.83 1.218 1.948 1.218 3.085s-.414 2.256-1.218 3.085C15.99 17.403 14.758 18 13 18H8a1 1 0 0 0-1 1" /></svg>
      </span>
      </button>
      <h3 className='text-[1.334rem] ml-4 capitalize font-semibold [textShadow:0.125rem_0.0625rem_0.1875rem_#3b3b3b94]'>{heading}</h3>
    </div>
  )
})

const WhatsAppLink = memo(({ children, number, msg, classes }) => {
  // got help from gpt here in (rel,default text)
  const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(msg)}`;
  return (
    <a href={whatsappUrl} className={classes} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
})

const ItemRemovingModal = memo(({ itemBeingRemovingValues })=> {
  const modalref = useRef(null)
  const { menucard, setmenucard, notificationMsgs, NotificationTimings, setnotificationState, itemBeingRemoved, setItemBeingRemoved } = useContext(globalContext)

  useGSAP(() => {
    gsap.fromTo(modalref.current, { opacity: 0, scale: 0.9 }, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "power3",
    });
  }, [])

  // for removing modal and updating menucard array 
  function removeModal(value) {
    if (value) {
      const updatedCards = menucard.map(card => {
        if (card.heading === itemBeingRemovingValues.heading && card.variety === itemBeingRemovingValues.variety) {
          if (card.inCart) {
            setnotificationState(prev => ({ ...prev, msg: notificationMsgs.itemRemoved, time: NotificationTimings.get(notificationMsgs.itemRemoved) }))
          } else {
            setnotificationState(prev => ({ ...prev, msg: notificationMsgs.itemAdded, time: NotificationTimings.get(notificationMsgs.itemAdded) }))
          }
          return { ...card, quantity: 1, inCart: !card.inCart };
        }
        return card;
      });
      setmenucard(updatedCards)
    }
    gsap.to(modalref.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => {
        setItemBeingRemoved(null)
      },
    });
  }
  return (
    <>
      {/* remove item modal start  */}
      < div className='fixed top-0 left-0 h-dvh w-dvw grid place-items-center bg-[#000000a1] z-[4]' onClick={() => { removeModal(false); }
      }>
        <div onClick={(e) => { e.stopPropagation() }} ref={modalref} className='opacity-0 scale-[0.9] transition-all shadow-[0_0_7px_0px_#00000075] duration-200 rounded-md sm:w-[25rem] w-[80%] bg-black dark:bg-white dark:text-black p-[1.3625rem_1rem] sm:p-[1.3625rem_1.2625rem] text-white'>
          {/* ======= close btn starts ===== */}
          <button
            onClick={() => { removeModal(false); }}
            className="absolute p-[0.3rem] rounded-[50%] top-4 right-3 transition-all duration-200 bg-white hover:bg-[#d8d8d8] text-black dark:bg-black dark:hover:bg-[#232323] dark:text-white active:scale-[.98]">
            <svg className="w-[1.18rem] h-[1.18rem]" viewBox="0 0 24 24" fill="none">
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* ======= close btn ends ===== */}
          <h2 className='capitalize font-bold mb-2 text-[1.0625rem]'>remove item</h2>
          <p className='mb-6 text-[0.97rem]'>Are you sure want to remove this item?</p>
          <div className="flex justify-end gap-2">
            <button onClick={(e) => { e.stopPropagation(); removeModal(false); }} className='bg-white hover:bg-[#d8d8d8] text-black font-semibold md:font-medium  py-[0.3125rem] rounded-sm px-3 dark:bg-black dark:hover:bg-[#232323] dark:text-white text-[0.94rem] transition-all duration-200 active:scale-[.98]'>Cancel</button>
            <button onClick={(e) => { e.stopPropagation(); removeModal(true); }} className='bg-[rgb(220_38_38_/_25%)] dark:bg-[rgb(255_0_0_/_14%)] dark:text-black dark:hover:text-white dark:hover:bg-red-600 hover:bg-red-600 font-semibold md:font-medium  py-[0.3125rem] rounded-sm px-3 text-white text-[0.94rem] transition-all duration-200 active:scale-[.98]'>Remove</button>
          </div>
        </div>
      </div >
    </>
  )
})
const CartIcon = memo(({ classes, color, viewBox = "0 0 24 24", strokeWidth = 2 }) => {
  return (
    <svg className={classes} color={color} viewBox={viewBox} ><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" strokeWidth={strokeWidth}></path></svg>
  )
})
const CartRmvIcon = memo(({ classes, color, viewBox = "0 0 24 24", strokeWidth = 2 }) => {
  return (
    <svg className={classes} viewBox={viewBox}><path fill="currentColor" d="M14.1 8.5L12 6.4L9.9 8.5L8.5 7.1L10.6 5L8.5 2.9l1.4-1.4L12 3.6l2.1-2.1l1.4 1.4L13.4 5l2.1 2.1zM7 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2c0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7l1.7 1l-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6z" strokeWidth={strokeWidth} /></svg>
  )
})
const CartAddIcon = memo(({ classes, color, viewBox = "0 0 24 24", strokeWidth = 2 }) => {
  return (
    <svg className={classes} viewBox={viewBox}><path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2" /></svg>
  )
})
const ModeToggler = memo(({parentClasses})=>{
  let { mode, setMode} = useContext(globalContext)

  function toggleBtn() {
    document.documentElement.classList.toggle('dark')
    document.body.classList.toggle('bg-slate-50')
    setMode(`${document.documentElement.classList.contains('dark') === true ? 'dark' : 'light'}`)
  }

  return (
    <div className={`${parentClasses}`} onClick={toggleBtn}>
    <button className={`toggler align-middle w-[4.375em] relative h-[2.1875em] rounded-full overflow-hidden cursor-pointer`}>

      {/* moonbg  */}
      <img src={moonbg} className='absolute w-full h-full object-cover inset-0' alt="img" />

      <div className={`moon_container top-[50%] translate-y-[-50%] transition-all duration-1000 absolute w-[1.625em] bg-[#E7E7E7] h-[1.5625em] rounded-full ${mode === 'dark' ? 'translate-x-[0.33em]' : 'translate-x-[6.25em]'}`}>
        {Array(4).fill(null).map((_, index) => (
          <div key={'shadow ' + index} className={`${mode === 'dark' ? `moon_shadow ${'moon_shadow' + (index + 1)}` : ''} absolute inset-1 rounded-[50%]`}></div>
        ))}
        <div className={`moon inset-0 transition-all duration-1000 absolute bg-[#E7E7E7] rounded-full  overflow-hidden`}>
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className={`absolute rounded-[50%] bg-[#CDCDCD] 
            ${index === 0 ? 'top-0 right-0 w-[40%] h-[40%]' : ''}
            ${index === 1 ? 'top-1 right-3 w-[30%] h-[30%]' : ''}
            ${index === 2 ? 'top-1/2 right-3 w-[10%] h-[10%]' : ''}
            ${index === 3 ? 'top-1/2 right-1 w-[15%] h-[15%]' : ''}
            ${index === 4 ? 'top-[70%] right-0 w-[25%] h-[25%]' : ''}
            ${index === 5 ? 'top-[75%] right-2 w-[10%] h-[10%]' : ''}`}></div>
          ))}
        </div>
      </div>


      {/* sun bg  */}
      <img src={sunbg} className={`sunbg transition-all duration-1000 absolute w-full h-full object-cover inset-0 ${mode === 'dark' ? 'opacity-0' : ''}`} alt="img" />

      <div className={`sun_container top-[50%] translate-y-[-50%]  transition-all duration-1000 absolute w-[1.625em] bg-[#E7E7E7] h-[1.5625em] rounded-full ${mode === 'light' ? 'translate-x-[0.33em]' : 'translate-x-[-6.25em]'}`}>
        {Array(4).fill(null).map((_, index) => (
          <div key={'shadow ' + index} className={`${mode === 'light' ? `sun_shadow ${'sun_shadow' + (index + 1)}` : ''} absolute inset-1 rounded-[50%]`}></div>
        ))}
        <div className={`yellow sun inset-0 transition-all duration-1000 absolute bg-radial-gradient from-[#ff7000] to-[yellow_90%] rounded-full`}>
        </div>
      </div>

    </button>
  </div>
  )
})