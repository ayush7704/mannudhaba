import './navbar.css'
import moon from './moon.png'
import sunbg from './layered-waves-haikei.png'
import togglebg from './symbol-scatter-haikei.svg'
import whiteLogo from './White logo - no background.svg'
import blacklogo from './Black logo - no background.svg'
import { counterContext } from '../context/context'
import { Link, NavLink, useLocation } from 'react-router-dom'
import React, { useEffect, useState, useRef, useContext } from 'react'


function Navbar(props) {
  let nav = useRef(null)
  let links = useRef(null)
  let location = useLocation()
  let linkswrapper = useRef(null)
  let { value, setvalue ,addToCartItemValue} = useContext(counterContext)
  let [navHeight, setnavHeight] = useState(75)


  function toggleBtn() {
    let moon = document.querySelector('.moon')
    moon.classList.toggle('left-[4px]')
    document.querySelector('.yellow').classList.toggle('left-[6px]')
    document.documentElement.classList.toggle('dark')
    document.body.classList.toggle('bg-slate-50')
    document.querySelector('.sunbg').classList.toggle('opacity-0')
    setvalue(`${document.documentElement.classList.contains('dark') === true ? 'dark' : 'light'}`)
  }

  let ham = () => {
    links.current.classList.toggle('w-9/12')
    links.current.classList.toggle('w-0')
    linkswrapper.current.classList.toggle('hidden')
  }

  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty(`--navHeight`, `${nav.current.offsetHeight}px`)
  })

  useEffect(() => {
    document.documentElement.style.setProperty(`--navHeight`, `${nav.current.offsetHeight}px`)
  })

  return (
    // dark:bg-[rgb(30,30,30)]  bg-[#ebedec] dark:bg-[#1e1e1e]
    <nav ref={nav} className=' z-[5] dark:bg-[rgb(13,13,13)] bg-[#f5fffa]  flex items-center py-[5px] justify-between lg:pl-[20px] pl-[10px] pr-[20px]  sticky top-0'>

      {/* blur bg for nav  */}
      {/* <div className='absolute inset-0 z-[-1] w-full h-full backdrop-blur-[50px] dark:bg-[#1e1e1eb0] bg-[#f5fffa9e]'></div> */}

      {/*======== logo and name   ======*/}
      <div className="name-logo flex gap-4 items-center">
        <img src={`${document.querySelector('html').classList.contains('dark') ? whiteLogo : blacklogo}`} alt="logo" className='nav-logo rounded-full w-[190px] md:w-[210px] ' />
        {/* <h3 className={`capitalize font-bold dark:text-white text-black`} >mannu dhaba</h3> */}
      </div>


      <div onClick={() => { ham() }} ref={linkswrapper} className={`linkswrapper w-full md:relative absolute md:hidden bg-[transparent] hidden h-screen overflow-hidden left-0`}></div>


      {/* x scrollbar comes between 768px 815px  i can solve this it but i will consume time */}
      {/* dark:bg-[#1e1e1e]  bg-[#ebedec] */}
      <div ref={links} className={`links bg transition-all duration-[300ms] ease-[cubic-bezier(0.77,_-0.45,_0.3,_1.57)] md:relative md:overflow-auto overflow-hidden md:flex md:items-center md:w-auto md:top-[0px] md:border-none dark:border-[#ffffff30] border-[#00000030] border-t-[1px] grid absolute  w-0 right-0 rounded-bl-lg dark:text-white text-black pb-[20px] md:pb-[0px] backdrop-blur-[50px] md:backdrop-blur-[0px]  bg-[#f5fffa] dark:bg-[rgb(13,13,13)] md:bg-transparent dark:md:bg-transparent md:rounded-lg`}>

        {/*======== close btn x   ======*/}
        <div className='md:hidden py-[10px] px-5 text-right cursor-pointer' onClick={() => { ham() }}>
          <p className='px-[12px] pt-[8px] pb-[9px] font-black text-sm bg-gradient-to-l dark:from-[#ff000042] from-[#ff00008a] to-[transparent] rounded-full text-white'>&#9587;</p>
        </div>

        {/*========  anchors   ======*/}
        {/* ${index == 4 ? 'md:ml-[4rem]' : ''} */}
        {[
          {
            name: 'home', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={value === 'dark' ? 'white' : 'black'} fill="none">
              <path d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>)
          },
          {
            name: 'menu', svg: (<svg className='shrink- 0' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill='none' stroke={value === 'dark' ? 'white' : 'black'}>
              < path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke='inherit' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke='inherit' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>)
          },
          {
            name: 'about Us', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={value === 'dark' ? 'white' : 'black'} fill="none">
              <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>)
          },
          {
            name: 'gallery', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={value === 'dark' ? 'white' : 'black'} fill="none">
              <path d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M12.9998 7H13.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>)
          },
          // {
          //   name: 'cart', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={value === 'dark' ? 'white' : 'black'} fill="none">
          //     <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          //     <path d="M6 6H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          //     <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
          //     <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
          //     <path d="M8 20L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          //     <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          //   </svg>)
          // },

          // {
          //   name: 'contact', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={value === 'dark' ? 'white' : 'black'} fill="none">
          //     <path d="M12 22C7.99306 22 5.98959 22 4.7448 20.682C3.5 19.364 3.5 17.2426 3.5 13C3.5 8.75736 3.5 6.63604 4.7448 5.31802C5.98959 4 7.99306 4 12 4C16.0069 4 18.0104 4 19.2552 5.31802C20.5 6.63604 20.5 8.75736 20.5 13C20.5 17.2426 20.5 19.364 19.2552 20.682C18.0104 22 16.0069 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          //     <path d="M8 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          //     <path d="M16 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          //     <path d="M14.018 9.49261C14.018 10.5972 13.1226 11.4926 12.0181 11.4926C10.9135 11.4926 10.0181 10.5972 10.0181 9.49261C10.0181 8.38808 10.9135 7.49268 12.0181 7.49268C13.1226 7.49268 14.018 8.38808 14.018 9.49261Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          //     <path d="M8.06298 16.7161C9.12133 15.0868 10.802 14.4762 12.0181 14.4774C13.2341 14.4787 14.8656 15.0868 15.9239 16.7161C15.9923 16.8215 16.0112 16.9512 15.9494 17.0607C15.7019 17.4996 14.9334 18.3705 14.3784 18.4296C13.7406 18.4974 12.0723 18.5069 12.0194 18.5072C11.9664 18.5069 10.2466 18.4974 9.60851 18.4296C9.05345 18.3705 8.28496 17.4996 8.03745 17.0607C7.9757 16.9512 7.99456 16.8215 8.06298 16.7161Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          //   </svg>)
          // }
        ]
          .map((item, index) => (
            <NavLink to={item.name == 'home' ? '/' : item.name} key={index} className={`${item.name === 'home' && location.pathname === '/' ? 'dark:bg-darkgradient bg-lightgradient' : ''} ${item.name === (location.pathname).replace(/%20/g, ' ').slice(1) ? 'dark:bg-darkgradient bg-lightgradient' : ''}  md:max-lg:p-2 flex gap-2 dark:hover:bg-[#43434352] hover:bg-[#d1d1d159]  font-bold  transition-all duration-[200ms]  capitalize px-5 text-nowrap py-[10px]`} onClick={() => { ham() }}>
              {item?.svg} <span>{item.name}</span>
            </NavLink>
          ))}


        {/* toggler  lg:ml-[4rem]*/}
        <div className=' ml-[0rem] px-5 py-[10px] cursor-pointer' onClick={toggleBtn}>
          <div className={`toggler w-[70px] border border-cyan-50 p-[3px] relative h-[35px] rounded-full overflow-hidden cursor-pointer`}>

            {/* moonbg  */}
            <img src={togglebg} className='absolute w-full h-full object-cover inset-0' alt="img" />

            {/* <img src={moon} className='moon transition-all duration-1000 left-[6px] left-[100px] w-[26px] h-[26px] absolute top-[50%] translate-y-[-50%] rounded-full shadow-[0_0_0px_6px_#ffffff30,_0_0_0px_12px_#ffffff25,_0_0_0px_18px_#ffffff20]' alt="img" /> */}
            <div className='moon  top-[50%] translate-y-[-50%] transition-all duration-1000 left-[4px] left-[100px] relative w-[26px] bg-[#E7E7E7] h-[26px] rounded-full shadow-[0_0_0px_6px_#ffffff30,_0_0_0px_12px_#ffffff25,_0_0_0px_18px_#ffffff20] overflow-hidden'>
              <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-1 right-3 w-[30%] h-[30%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-1/2 right-3 w-[10%] h-[10%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-1/2 right-1 w-[15%] h-[15%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-[70%] right-0 w-[25%] h-[25%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-[75%] right-2 w-[10%] h-[10%] rounded-[50%] bg-[#CDCDCD]"></div>
            </div>

            {/* sun bg  */}
            <img src={sunbg} className='sunbg transition-all duration-1000 absolute w-full h-full object-cover inset-0 opacity-0 ' alt="img" />
            <div className="yellow transition-all duration-1000 absolute left-[-100px] top-[50%] translate-y-[-50%] bg-radial-gradient  from-[#ff7000] to-[yellow_90%]  w-[26px] h-[26px] rounded-full shadow-[0_0_0px_6px_#fbff0030,_0_0_0px_12px_#fbff0025,_0_0_0px_18px_#fbff0020]"></div>

          </div>
        </div>

      </div>
      {/* add to cart start  */}
      {
        [
          {
            name: 'cart', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={value === 'dark' ? 'white' : 'black'} fill="none">
              <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 6H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
              <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
              <path d="M8 20L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)
          }
        ].map((item, index) => (<NavLink to={'cart'} key={index} className={`${item.name === (location.pathname).replace(/%20/g, ' ').slice(1) ? 'dark:bg-darkgradient bg-lightgradient' : ''} md:max-lg:p-2 flex gap-2 dark:hover:bg-[#43434352] hover:bg-[#d1d1d159]  font-bold  transition-all duration-[200ms]  capitalize px-5 text-nowrap py-[10px]`}>
          {<span className='relative'>{item?.svg} <span className='absolute text-white dark:outline-white outline-black top-[-4px] right-0 w-[14px] h-[14px] rounded-[50%]
          bg-[linear-gradient(to_right,_#f2baba,_#ec8ebb,_#6a57d2)] outline outline-1 flex items-center justify-center text-[10px]'>{addToCartItemValue.length}</span>
          </span>}
           <span>{item.name}</span>
        </NavLink>))
      }
      {/* add to cart end */}

      {/*======== hamburger for medium size screens   ======*/}
      {/* <span onClick={ham} className='ham md:hidden text-lg p-3'>&#9776;</span> */}
      <span onClick={() => { ham() }} className='ham md:hidden text-lg p-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 12L10 12" stroke={`${value === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 5L4 5" stroke={`${value === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 19L4 19" stroke={`${value === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg></span>
    </nav >
  )
}

export default Navbar