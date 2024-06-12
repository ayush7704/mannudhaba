import React, { useEffect, useRef, useState, useContext, useMemo, memo } from 'react'
import { matarPaneer, saahiPaneer } from '../varieties imgs/varietyImgs'
import { counterContext } from '../context/context'
import foodimg from '../home/hero-food.webp'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const MenusMaker = ({ filterRef, menuFilterPrice, setMenuFilterPrice, cardSpecial, menuName, menuRef }) => {
  // console.log(menuFilterPrice)
  let { menucard, setmenucard } = useContext(counterContext)
  // console.log(menucard)
  // const handleClick = (e) => {
  //   const pathElement = e.currentTarget.querySelector('path');
  //   pathElement.setAttribute('fill', pathElement.getAttribute('fill') === 'red' ? 'none' : 'red');
  // };
  const updateCart = (variety, heading) => {
    const updatedCards = menucard.map(card => {
      if (card.heading === heading && card.variety === variety) {
        return { ...card, inCart: !card.inCart };
      }
      return card;
    });
    setmenucard(updatedCards)
  }
  return (
    <>
      <div className='flex justify-between items-center px-4 py-5'>
        <h3 className='text-xl dark:text-[gold] text-black capitalize font-semibold' style={{ textShadow: '2px 1px 3px #3b3b3b94' }}>{menuName}</h3>
        {/*======= selection   =====*/}
        <select ref={filterRef} onChange={(e) => { setMenuFilterPrice(filterRef.current.value); }} className='text-white bg-black cursor-pointer p-3 border border-white rounded-md'>
          <option className='p-4' value="1000">&#8377; Filter</option>
          <option className='p-4' value="50">under &#8377; 50</option>
          <option className='p-4' value="100">under &#8377; 100</option>
          <option className='p-4' value="150">under &#8377; 150</option>
          <option className='p-4' value="200">under &#8377; 200</option>
          <option className='p-4' value="300">under &#8377; 300</option>
        </select>
      </div>
      <div className='relative'>

        <MenusNavigation menusRef={menuRef} />

        <div ref={menuRef} className="flex snap-x relative p-[20px] flex-nowrap overflow-auto gap-[10px]">
          {/* {console.log(menuRef.current)} */}
          {
            menucard.filter((m) => { return m.variety === cardSpecial && m.price <= menuFilterPrice }).map((menu, menuindex) => (
              <div key={menuindex} className="homecard mx-auto hover:scale-[1.05] transition-all duration-300  overflow-hidden grid min-h-[300px] bg-[#00000012] border border-white shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] rounded-lg flex-[0_0_200px]">

                <div className="h-[180px] mx-auto relative">
                  <div className="absolute cursor-pointer right-2 top-5">
                    <span>
                      <svg fill="none" onClick={(e) => { updateCart(menu.variety, menu.heading) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'}>
                        <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill={menu.inCart ? 'red' : 'none'} />
                      </svg>
                    </span>
                  </div>
                  <img src={menu.img} className='homecardimg h-full object-cover w-full' alt="food img" />
                </div>

                <div className="card-body p-[15px]">
                  <h3 className="dark:text-white text-slate-950  font-bold capitalize">{menu.heading}</h3>
                  <h4 className="text-[rgb(232 124 187)] font-semibold font-serif"> &#8377; {menu.price}</h4>
                </div>
                <div className="flex ">
                  <Link to={'/menu'} className='orderbtn p-[9px] self-end flex items-center justify-center gap-2 bg-white color text-black text-sm flex-1 rounded-sm  text-center'><span>Order</span>
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
          {
            menucard.filter((m) => { return m.variety === cardSpecial && m.price <= menuFilterPrice }).length === 0 ?
              <div className='text-red-500 text-center block mx-auto'>
                Sorry there is nothing in this category
              </div> : ''
          }
        </div>
      </div>
    </>
  )
}

const MenusNavigation = ({ menusRef }) => {
  let [hidden, sethidden] = useState(false)
  useEffect(() => {
    sethidden(menusRef.current.scrollWidth > menusRef.current.offsetWidth)
  })
  useEffect(() => {
    // console.log((menusRef.current.firstElementChild.offsetWidth + parseInt(getComputedStyle(menusRef.current).gap)))
    if (menusRef.current) {
      sethidden(menusRef.current.scrollWidth > menusRef.current.offsetWidth)
      // console.log(menusRef.current.scrollWidth > menusRef.current.offsetWidth)
    }
  }, [menusRef]);
  return (
    <div className={`${hidden !== true && 'hidden'}`}>
      <div onClick={() => { gsap.to(menusRef.current, { scrollLeft: menusRef.current.scrollLeft - (menusRef.current.firstElementChild.offsetWidth + parseInt(getComputedStyle(menusRef.current).gap)) }) }} className='absolute z-[1] top-1/2 cursor-pointer left-[-20px] -translate-y-1/2 flex items-center justify-center w-[40px] h-[40px] rounded-[50px] bg-[#cecdda24] dark:hover:bg-[#cfcfcf1a]  hover:bg-[#0000001a] backdrop-blur-[20px]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none" className='dark:drop-shadow-[4px_1px_1px_black] drop-shadow-[3px_0px_1px_black]'>
          <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div onClick={() => { gsap.to(menusRef.current, { scrollLeft: menusRef.current.scrollLeft + (menusRef.current.firstElementChild.offsetWidth + parseInt(getComputedStyle(menusRef.current).gap)) }) }} className='absolute z-[1] top-1/2 cursor-pointer right-[-20px] -translate-y-1/2 flex items-center justify-center w-[40px] h-[40px] rounded-[50px] bg-[#cecdda24] dark:hover:bg-[#cfcfcf1a] hover:bg-[#0000001a] backdrop-blur-[20px]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none" className='dark:drop-shadow-[4px_1px_1px_black] drop-shadow-[3px_0px_1px_black]'>
          <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function menus(props) {
  let fullMenu = useRef(null)
  let selection = useRef(null)
  let searchInput = useRef(null)
  let focusPage = useRef(null)
  let noSearchResultRef = useRef(null)
  let searchDiv = useRef(null)
  let paneerMenu = useRef(null)
  let daalMenu = useRef(null)
  let chineseMenu = useRef(null)
  let parathaMenu = useRef(null)
  let searchResultCardContainer = useRef(null)
  let chinessFilter = useRef(null)
  let daalFilter = useRef(null)
  let paneerFilter = useRef(null)
  let parathaFilter = useRef(null)
  let [paneerPrice, setpaneerPrice] = useState(1000)
  let [chinessPrice, setchinesePrice] = useState(1000)
  let [daalPrice, setdaalPrice] = useState(1000)
  let [parathaPrice, setparathaPrice] = useState(1000)
  const [select, setselect] = useState(null)
  let filter1;
  let search;
  const [searchvalue, setsearchvalue] = useState([])
  const [formsubmitted, setformsubmitted] = useState(null)
  // const [noSearchResult, setnoSearchResult] = useState(false)

  const { menucard, setmenucard } = useContext(counterContext)

  useEffect(() => {
    console.log('menu render')
  })

  // const menucard = useMemo(() => {
  //   console.log('memo')
  //   return [

  //     // panner only 
  //     { heading: 'paneer pasanda', variety: 'paneer special', img: foodimg, price: 240 },
  //     { heading: 'kadai paneer', variety: 'paneer special', img: foodimg, price: 190 },
  //     { heading: 'matar paneer', variety: 'paneer special', img: matarPaneer, price: 160 },
  //     { heading: 'chota paneer', variety: 'paneer special', img: foodimg, price: 160 },
  //     { heading: 'paneer punjabi', variety: 'paneer special', img: foodimg, price: 200 },
  //     { heading: 'paneer masala', variety: 'paneer special', img: foodimg, price: 170 },
  //     { heading: 'butter paneer masala', variety: 'paneer special', img: foodimg, price: 180 },
  //     { heading: 'paneer do pyaja', variety: 'paneer special', img: foodimg, price: 200 },
  //     { heading: 'paneer kolhapuri', variety: 'paneer special', img: foodimg, price: 180 },
  //     { heading: 'kaaju paneer', variety: 'paneer special', img: foodimg, price: 220 },
  //     { heading: 'paneer tikka masala', variety: 'paneer special', img: foodimg, price: 250 },
  //     { heading: 'paalak paneer', variety: 'paneer special', img: foodimg, price: 160 },
  //     { heading: 'handa paneer', variety: 'paneer special', img: foodimg, price: 170 },
  //     { heading: 'saahi paneer', variety: "paneer special", img: saahiPaneer, price: 170 },

  //     { heading: 'kheer', variety: "other's", img: foodimg, price: 70 },
  //     { heading: 'veg kofta', variety: "other's", img: foodimg, price: 180 },
  //     { heading: 'dam aalu', variety: "other's", img: foodimg, price: 150 },
  //     { heading: 'raap tamatar', variety: "other's", img: foodimg, price: 170 },
  //     { heading: 'raap shimla', variety: "other's", img: foodimg, price: 170 },
  //     { heading: 'jees aalu', variety: "other's", img: foodimg, price: 80 },
  //     { heading: 'malai kofta', variety: "other's", img: foodimg, price: 180 },
  //     { heading: 'kaaju kadi', variety: "other's", img: foodimg, price: 220 },
  //     { heading: 'mix vej', variety: "other's", img: foodimg, price: 150 },
  //     { heading: 'sev tamata', variety: "other's", img: foodimg, price: 100 },
  //     { heading: 'sev bhaaji', variety: "other's", img: foodimg, price: 90 },
  //     { heading: 'bhindi masala', variety: "other's", img: foodimg, price: 90 },
  //     { heading: 'vegan bhartaa', variety: "other's", img: foodimg, price: 100 },
  //     { heading: 'aalu matar', variety: "other's", img: foodimg, price: 80 },
  //     { heading: 'aalu gobhi', variety: "other's", img: foodimg, price: 90 },
  //     { heading: 'aalu gobhi tamatar', variety: "other's", img: foodimg, price: 90 },
  //     { heading: 'bhindi kurkuri', variety: "other's", img: foodimg, price: 80 },
  //     { heading: 'malai kofta', variety: "other's", img: foodimg, price: 200 },
  //     { heading: 'sev masala', variety: "other's", img: foodimg, price: 90 },
  //     { heading: 'aalu potato', variety: "other's", img: foodimg, price: 60 },


  //     // daal 
  //     { heading: 'Daal snacks', variety: 'daal special', img: foodimg, price: 120 },
  //     { heading: 'Daal fry', variety: 'daal special', img: foodimg, price: 90 },
  //     { heading: 'Daal baafle', variety: 'daal special', img: foodimg, price: 150 },
  //     { heading: 'Daal baati', variety: 'daal special', img: foodimg, price: 120 },
  //     { heading: 'Daal tadka', variety: 'daal special', img: foodimg, price: 100 },

  //     // chinese 
  //     { heading: 'paneer chilli', variety: 'chinese special', img: foodimg, price: 200 },
  //     { heading: 'paneer nudals', variety: 'chinese special', img: foodimg, price: 130 },
  //     { heading: 'veg nudals', variety: 'chinese special', img: foodimg, price: 100 },
  //     { heading: 'hakka nudals', variety: 'chinese special', img: foodimg, price: 110 },
  //     { heading: 'veg hok kaada nudals', variety: 'chinese special', img: foodimg, price: 110 },
  //     { heading: 'veg mekroni', variety: 'chinese special', img: foodimg, price: 90 },
  //     { heading: 'veg paasta', variety: 'chinese special', img: foodimg, price: 80 },
  //     { heading: 'veg tomato pasta', variety: 'chinese special', img: foodimg, price: 80 },
  //     { heading: 'veg manchuriyan', variety: 'chinese special', img: foodimg, price: 120 },
  //     { heading: 'veg kothe', variety: 'chinese special', img: foodimg, price: 120 },
  //     { heading: 'momos', variety: 'chinese special', img: foodimg, price: 70 },
  //     { heading: 'chole bhature', variety: 'chinese special', img: foodimg, price: 80 },

  //     // paratha 
  //     { heading: 'paneer paratha', variety: 'paratha special', img: foodimg, price: 80 },
  //     { heading: 'aalu paratha', variety: 'paratha special', img: foodimg, price: 50 },
  //     { heading: 'taba paratha', variety: 'paratha special', img: foodimg, price: 30 },
  //     { heading: 'gobhi paratha', variety: 'paratha special', img: foodimg, price: 50 },
  //     { heading: 'pyaaj paratha', variety: 'paratha special', img: foodimg, price: 50 },

  //     // roti 
  //     { heading: 'tandoor roti', variety: 'roti special', img: foodimg, price: 10 },
  //     { heading: 'tandoor butter roti', variety: 'roti special', img: foodimg, price: 15 },
  //     { heading: 'missi roti', variety: 'roti special', img: foodimg, price: 12 },
  //     { heading: 'taba roti', variety: 'roti special', img: foodimg, price: 30 },
  //     { heading: 'butter naan', variety: 'roti special', img: foodimg, price: 40 },
  //     { heading: 'garlik naan', variety: 'roti special', img: foodimg, price: 50 },

  //     // rice 
  //     { heading: 'plane rice', variety: 'rice special', img: foodimg, price: 70 },
  //     { heading: 'jeera rice', variety: 'rice special', img: foodimg, price: 90 },
  //     { heading: 'masala rice', variety: 'rice special', img: foodimg, price: 100 },
  //     { heading: 'veg biryani', variety: 'rice special', img: foodimg, price: 140 },
  //     { heading: 'matar pulab', variety: 'rice special', img: foodimg, price: 120 },
  //     { heading: 'veg pulab', variety: 'rice special', img: foodimg, price: 140 },
  //     { heading: 'manchuriyan rice', variety: 'rice special', img: foodimg, price: 120 },
  //     { heading: 'veg fry rice', variety: 'rice special', img: foodimg, price: 140 },

  //     // rayta 
  //     { heading: 'veg rayta', variety: 'rayta special', img: foodimg, price: 70 },
  //     { heading: 'boondi rayta', variety: 'rayta special', img: foodimg, price: 80 },
  //     { heading: 'lassi', variety: 'rayta special', img: foodimg, price: 40 },
  //     { heading: 'dahi', variety: 'rayta special', img: foodimg, price: 60 },
  //     { heading: 'chaach', variety: 'rayta special', img: foodimg, price: 30 },

  //     // papad 
  //     { heading: 'papad bhurji', variety: 'papad special', img: foodimg, price: 60 },
  //     { heading: 'papad masala', variety: 'papad special', img: foodimg, price: 30 },
  //     { heading: 'papad dry', variety: 'papad special', img: foodimg, price: 15 },
  //     { heading: 'papad fry', variety: 'papad special', img: foodimg, price: 20 },
  //   ]
  // }, [])

  let [finalfilter, setfinalfilter] = useState(menucard);

  useEffect(() => {
    console.log(selection.current.value)
    setselect(selection.current.value)
    filter1 = menucard.filter((n) => {
      if (select === 'all') {
        return menucard
      }
      else {
        return n.variety == select
      }
    })
    setfinalfilter(filter1)
  }, [select, menucard])

  useEffect(() => {
    console.log('hakkkk')
    searchInput.current.value !== undefined && searchInput.current.value !== '' ? setsearchvalue(menucard.filter((e) => { return e.heading.toLowerCase().includes(searchInput.current.value.toLowerCase().trim()) || e.variety.toLowerCase().includes(searchInput.current.value.toLowerCase().trim()) })) : '';
  }, [menucard])

  useEffect(() => {
    document.title = 'Mannu Dhaba Menu'
    // console.log('first render')
    // gsap 
    // gsap.utils.toArray('.homecardimg').forEach(element => {
    //   gsap.from(element, {
    //     top: '140px',
    //     rotate: '79deg',
    //     position: 'relative',
    //     scrollTrigger: {
    //       trigger: element.parentElement,
    //       start: 'top bottom',
    //       end: 'bottom 80%',
    //       scroller: 'body',
    //       scrub: 1,
    //       // markers: true,
    //     }
    //   })
    // })
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        gsap.to(searchDiv.current, { position: 'static' })
      } else {
        gsap.to(searchDiv.current, { position: 'sticky', top: 'var(--navHeight)' })
      }

      lastScrollTop = currentScroll;
    });
  }, [])

  useEffect(() => {
    if (formsubmitted === null) { }
    else if (searchvalue.length === 0) {
      noSearchResultRef.current.classList.remove('hidden')
    } else {
      noSearchResultRef.current.classList.add('hidden')
    }
    // console.log(formsubmitted !== null && searchvalue.length === 0)
    // console.log(searchvalue.length)
    // console.log(formsubmitted + ' from formsubmitted')
  }, [formsubmitted])

  search = (e) => {
    console.log('form submiteed')
    console.log(searchInput.current.value.toLowerCase().trim())
    e.preventDefault()
    searchInput.current.value = searchInput.current.value.trim()
    searchInput.current.value == undefined || searchInput.current.value == '' && setsearchvalue([])
    searchInput.current.value !== undefined && searchInput.current.value !== '' && window.scrollTo(0, 0)
    searchInput.current.value !== undefined && searchInput.current.value !== '' ? setsearchvalue(menucard.filter((e) => { return e.heading.toLowerCase().includes(searchInput.current.value.toLowerCase().trim()) || e.variety.toLowerCase().includes(searchInput.current.value.toLowerCase().trim()) })) : '';
    setformsubmitted(!formsubmitted)
    console.log(searchvalue)
  }

  const updateCart = (variety, heading) => {
    console.log('updateCard')
    const updatedCards = menucard.map(card => {
      if (card.heading === heading && card.variety === variety) {
        return { ...card, inCart: !card.inCart };
      }
      return card;
    });
    setmenucard(updatedCards)
  }

  return (
    <section className='relative menuPage backdrop-blur-[70px]'>
      <div ref={searchDiv} className='search-div flex flex-wrap gap-y-3 gap-x-7 items-center py-5 z-[5] justify-between backdrop-blur-[50px] dark:bg-[#1e1e1eb0] bg-[#f5fffa9e] px-5'>
        <div className='flex items-center'>
          {/* return btn  */}
          <div className='text-3xl capitalize inline-flex w-[40px] h-[40px] items-center justify-center cursor-pointer dark:hover:shadow-[4px_0px_5px_-2px_black] dark:bg-[linear-gradient(to_right,_#8c609c,_#291c26,_black)]  bg-[linear-gradient(to_right,_#d9b2d6,_#f4eef6,_#f8fafc)] hover:shadow-[3px_0px_5px_-2px_black] rounded-full dark:text-white transition-all duration-200' style={{ userSelect: 'none' }} onClick={() => { window.history.back() }}> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none" className='dark:drop-shadow-[4px_1px_1px_black] drop-shadow-[3px_0px_1px_black]'>
            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg> </span></div>
          <h3 className='text-2xl ml-4 capitalize font-semibold' style={{ textShadow: '2px 1px 3px #3b3b3b94' }}>menu</h3>
        </div>
        <div className='mx-auto sm:mx-0 grow-[0.5]'>
          <form onSubmit={search} className='flex rounded-sm'>
            <input list='browsers' type="search" ref={searchInput} placeholder='search' className='border outline-none p-2 ps-3 rounded-[3px] dark:text-white dark:border-white border-black bg-transparent text-black transition-all duration-300 focus:grow-[1] focus:rounded-[3px_0_0_3px] flex-[0_1_100px]' required autoFocus />
            <datalist id="browsers">
              {
                menucard.map((value, ind) => (
                  <option key={ind} value={`${value.heading}`} />
                ))
              }
            </datalist>
            <input type="submit" value='search' className='dark:bg-white bg-black text-white dark:text-black py-2 px-3 rounded-[0_10px_10px_0] hover:dark:bg-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-all duration-200  ml-auto cursor-pointer' />
          </form>
        </div>
      </div>

      <div className='p-[20px]'>
        {/* on focus page  */}
        <div ref={focusPage} className='z-[4] relative'>
          {searchvalue.length !== 0 && <h3 className='relative capitalize text-lg px-3 pb-6 text-center' style={{ textShadow: '2px 1px 16px #3b3b3b94' }}> <div className='w-100%'>From your search </div>
            {/* remove div start */}
            <div className='absolute right-0 top-0'>
              <span className='flex items-center justify-center w-[40px] h-[40px] rounded-circle cursor-pointer transition-all duration-200 dark:hover:bg-[rgb(39_37_44)] dark:bg-transparent bg-white shadow-[1.5px_3.5px_7.5px_-5px_#3c3c3c]
hover:shadow-[1px_2px_3px_1px_#2828283b] rounded-[50%]' onClick={() => { setsearchvalue([]); searchInput.current.value = '' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none">
                  <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 14L14 8M8 8L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            {/* remove div end */}
          </h3>}
          {<h3 ref={noSearchResultRef} className='relative flex flex-wrap justify-between hidden text-red-500 capitalize text-lg px-3 pb-6 text-center' style={{ textShadow: '2px 1px 16px #3b3b3b94' }}> <div className='grow order-1 md:order-[0]'>No results found. Please check your spelling or look at the options listed below.</div>
            {/* no result remove div start */}
            <div className='grow md:grow-0 flex justify-end right-0 top-0' >

              <span className='flex items-center justify-center w-[40px] h-[40px] rounded-circle cursor-pointer transition-all duration-200 dark:hover:bg-[rgb(39_37_44)] dark:bg-transparent bg-white shadow-[1.5px_3.5px_7.5px_-5px_#3c3c3c]
                hover:shadow-[1px_2px_3px_1px_#2828283b] rounded-[50%]' onClick={() => { setsearchvalue([]); noSearchResultRef.current.classList.add('hidden'); searchInput.current.value = '' }}>
                {/* blink  start*/}
                <span className="absolute flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  {/* <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span> */}
                </span>
                {/* blink end  */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none">
                  <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 14L14 8M8 8L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            {/* no result remove div end */}
          </h3>}
          {searchvalue.length !== 0 &&
            <div className='relative'>
              <MenusNavigation menusRef={searchResultCardContainer} />
              <div ref={searchResultCardContainer} className='flex snap-x p-[20px] flex-nowrap overflow-auto gap-[10px]'>
                {searchvalue.length !== 0 && searchvalue.map((menu, menuindex) => (
                  <div key={menuindex} className="homecard mx-auto overflow-hidden hover:scale-[1.05] transition-all duration-300  grid min-h-[300px] bg-[#00000012] border border-white shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] rounded-lg flex-[0_0_200px]">

                    <div className="h-[180px] mx-auto relative">
                      <div className="absolute cursor-pointer right-2 top-5">
                        <span>
                          <svg fill="none" onClick={(e) => { updateCart(menu.variety, menu.heading) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'}>
                            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill={menu.inCart ? 'red' : 'none'} />
                          </svg>
                        </span>
                      </div>
                      <img src={menu.img} className='homecardimg h-full object-cover w-full' alt="food img" />
                    </div>

                    <div className="card-body p-[15px]">
                      <h3 className="dark:text-white text-slate-950  font-bold capitalize">{menu.heading}</h3>
                      <h4 className="text-[rgb(232 124 187)] font-semibold font-serif"> &#8377; {menu.price}</h4>
                    </div>
                    <div className="flex ">
                      <Link to={'/menu'} className='orderbtn p-[9px] self-end flex items-center justify-center gap-2 bg-white color text-black text-sm flex-1 rounded-sm  text-center'><span>Order</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" color='black' fill="none">
                          <path d="M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M14.5 17.5H9.5M2 4H12C13.4142 4 14.1213 4 14.5607 4.43934C15 4.87868 15 5.58579 15 7V15.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5M2 13V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 7H8M2 10H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></Link>
                    </div>
                  </div>
                )
                )}
              </div>
            </div>
          }
        </div>
        {/* on focus page ended */}

        {/*=== full menu cards start ====*/}
        <div className='flex justify-between items-center px-4 py-5'>
          <h3 className='text-xl dark:text-[gold] text-black capitalize font-semibold' style={{ textShadow: '2px 1px 3px #3b3b3b94' }}>full menu</h3>
          {/*======= selection   =====*/}
          <select className='text-white bg-black cursor-pointer p-3 border border-white rounded-md' ref={selection} onChange={(e) => { setselect(selection.current.value) }}>
            <option className='p-4' value="all">full menu</option>
            <option className='p-4' value="chinese special">chinese menu</option>
            <option className='p-4' value="daal special">daal menu</option>
            <option className='p-4' value="paneer special">paneer menu</option>
            <option className='p-4' value="paratha special">paratha menu</option>
            <option className='p-4' value="rayta special">rayta menu</option>
            <option className='p-4' value="papad special">papad menu</option>
            <option className='p-4' value="rice special">rice menu</option>
            <option className='p-4' value="other's">other's varieties</option>
          </select>
        </div>
        <div className='relative'>
          {/* navigation start  */}
          <MenusNavigation menusRef={fullMenu} />
          {/* navigation end  */}
          <div ref={fullMenu} className="flex relative snap-x p-[20px] flex-nowrap overflow-x-auto gap-[10px]">
            {
              finalfilter.map((menu, menuindex) => (
                <div key={menuindex} className="homecard mx-auto hover:scale-[1.05] transition-all duration-300 overflow-hidden grid min-h-[300px] bg-[#00000012] border border-white shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] rounded-lg flex-[0_0_200px]">

                  <div className="h-[180px] mx-auto relative">
                    <div className="absolute cursor-pointer right-2 top-5">
                      <span>
                        <svg fill="none" onClick={(e) => { updateCart(menu.variety, menu.heading) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'}>
                          <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill={menu.inCart ? 'red' : 'none'} />
                        </svg>
                      </span>
                    </div>
                    <img src={menu.img} className='homecardimg h-full object-cover w-full' alt="food img" />
                  </div>
                  <div className="card-body p-[15px]">
                    <h3 className="dark:text-white text-slate-950  font-bold capitalize">{menu.heading}</h3>
                    <h4 className="text-[rgb(232 124 187)] font-semibold font-serif"> &#8377; {menu.price}</h4>
                  </div>
                  <div className="flex ">
                    <Link to={'/menu'} className='orderbtn p-[9px] self-end flex items-center justify-center gap-2 bg-white color text-black text-sm flex-1 rounded-sm  text-center'><span>Order</span>
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
        </div>
        {/*=== full menu cards end ====*/}

        {/* ===== paneer  start=====*/}
        <MenusMaker cardSpecial={'paneer special'} menuName={'paneer menu'} menuRef={paneerMenu} filterRef={paneerFilter} menuFilterPrice={paneerPrice} setMenuFilterPrice={setpaneerPrice} />
        {/*===== paneer  end===== */}

        {/*===== chinese  start =====*/}
        <MenusMaker cardSpecial={'chinese special'} menuName={'chinese menu'} menuRef={chineseMenu} filterRef={chinessFilter} menuFilterPrice={chinessPrice} setMenuFilterPrice={setchinesePrice} />
        {/*===== chinese  end =====*/}

        {/*===== daal start  =====*/}
        <MenusMaker cardSpecial={'daal special'} menuName={'daal menu'} menuRef={daalMenu} filterRef={daalFilter} menuFilterPrice={daalPrice} setMenuFilterPrice={setdaalPrice} />
        {/*===== daal end  =====*/}

        {/*===== paratha start =====*/}
        <MenusMaker cardSpecial={'paratha special'} menuName={'paratha menu'} menuRef={parathaMenu} filterRef={parathaFilter} menuFilterPrice={parathaPrice} setMenuFilterPrice={setparathaPrice} />
        {/*===== paratha start =====*/}
      </div>
    </section>

  )
}

export default menus