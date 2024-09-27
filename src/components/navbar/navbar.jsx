import './navbar.css'
import sunbg from './layered-waves-haikei.png'
import moonbg from './symbol-scatter-haikei.svg'
import whiteLogo from './White logo - no background.svg'
import blacklogo from './Black logo - no background.svg'
import { counterContext } from '../context/context'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useContext, memo, useCallback } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'


function Navbar() {
  let nav = useRef(null)
  let links = useRef(null)
  let location = useLocation()
  let linkswrapper = useRef(null)
  let cartref = useRef(null)
  let { value, setvalue, addToCartItemValue } = useContext(counterContext)

  useEffect(() => {
    console.log(location.pathname)
  })

  function toggleBtn() {
    document.documentElement.classList.toggle('dark')
    document.body.classList.toggle('bg-slate-50')
    setvalue(`${document.documentElement.classList.contains('dark') === true ? 'dark' : 'light'}`)
  }

  let ham = useCallback(() => {
    links.current.classList.toggle('w-9/12')
    links.current.classList.toggle('w-0')
    linkswrapper.current.classList.toggle('hidden')
    console.log('ham')
  },[])
  let cartHam = useCallback(() => {
    links.current.classList.remove('w-9/12')
    links.current.classList.add('w-0')
    linkswrapper.current.classList.add('hidden')
    console.log('cartHam')
  },[])

  useEffect(() => {
    const imgRandor = () => {
      document.documentElement.style.setProperty(`--navHeight`, `${nav.current.getBoundingClientRect().height}px`)
    }
    window.addEventListener('resize', imgRandor)
    document.querySelector('.nav-logo').addEventListener('load', imgRandor)
    document.documentElement.style.setProperty(`--navHeight`, `${nav.current.getBoundingClientRect().height}px`)
    return () => {
      document.querySelector('.nav-logo').removeEventListener('load', imgRandor)
      window.removeEventListener('resize', imgRandor)
    }
  })

  useGSAP(() => {
    gsap.fromTo(cartref.current, { scale: 1.2 }, { scale: 1, duration: 2.5, ease: 'elastic' })
  }, [addToCartItemValue.length])

  return (
    // dark:bg-[rgb(30,30,30)]  bg-[#ebedec] dark:bg-[#1e1e1e]
    <nav ref={nav} className='z-[5] dark:bg-[rgb(13,13,13)] bg-[#f5fffa]  flex items-center gap-4 py-[5px] justify-between lg:pl-[1.25rem] pl-[0.625rem] md:pr-[1.25rem] pr-[0.5rem] sticky top-0'>

      {/* blur bg for nav  */}
      {/* <div className='absolute inset-0 z-[-1] w-full h-full backdrop-blur-[50px] dark:bg-[#1e1e1eb0] bg-[#f5fffa9e]'></div> */}

      {/*======== logo and name   ======*/}
      <div className="name-logo flex gap-4 items-center">
        <img src={`${document.querySelector('html').classList.contains('dark') ? whiteLogo : blacklogo}`} alt="logo" className='nav-logo rounded-full w-[11.875rem] md:w-[13.125rem]' />
      </div>


      <div onClick={() => { ham() }} ref={linkswrapper} className={`linkswrapper w-full md:relative absolute md:hidden bg-[transparent] hidden h-screen overflow-hidden left-0`}></div>


      {/* x scrollbar comes between 768px 815px  i can solve this it but i will consume time */}
      {/* dark:bg-[#1e1e1e]  bg-[#ebedec] */}
      <div ref={links} className={`links bg transition-all duration-[200ms] ease-[cubic-bezier(0.77,_-0.45,_0.3,_1.57)] md:relative md:overflow-auto overflow-hidden md:flex md:items-center md:w-auto md:top-[0px] md:border-none dark:border-[#ffffff30] border-[#00000030] border-t-[1px] grid absolute  w-0 right-0 rounded-bl-lg dark:text-white text-black pb-[1.25rem] md:pb-[0px] backdrop-blur-[50px] md:backdrop-blur-[0px]  bg-[#f5fffa] dark:bg-[rgb(13,13,13)] md:bg-transparent dark:md:bg-transparent md:rounded-lg`}>

        {/*======== close btn x   ======*/}
        <div className='md:hidden py-[0.625rem] px-5 cursor-pointer' onClick={() => { ham() }}>
          <button className='px-[0.75rem] w-full pt-[0.5rem] text-right pb-[0.5625rem] font-black text-sm bg-gradient-to-l dark:from-[#ff000042] from-[#ff00008a] to-[transparent] rounded-full text-white'>&#9587;</button>
        </div>

        {/*========  anchors   ======*/}
        {
          [
            {
              name: 'Home', to: '/', svg: (<svg className={`w-[1.25rem] h-[1.25rem]`} color={value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                <path d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22" stroke="currentColor" strokeWidth="2" />
                <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>)
            },
            {
              name: 'Menu', to: 'menu', svg: (<svg className={`w-[1.25rem] h-[1.25rem]`} color={value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill='none' stroke={value === 'dark' ? 'white' : 'black'}>
                < path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke='inherit' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke='inherit' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>)
            },
            {
              name: 'About us', to: 'about-us', svg: (<svg className={`w-[1.25rem] h-[1.25rem]`} color={value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>)
            },
            {
              name: 'Gallery', to: 'gallery', svg: (<svg className={`w-[1.25rem] h-[1.25rem]`} color={value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                <path d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6" stroke="currentColor" strokeWidth="2" />
                <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z" stroke="currentColor" strokeWidth="2" />
                <path d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12.9998 7H13.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>)
            }
          ].map((item, index) => (
            // <NavLink to={item.to} key={item.name} className={`${item.to === location.pathname === '/' ? 'dark:bg-darkgradient bg-lightgradient' : ''} ${({ isActive }) => isActive && 'dark:bg-darkgradient bg-lightgradient'} md:max-lg:p-2 flex gap-2 dark:hover:bg-[#43434352] hover:bg-[#d1d1d159] font-medium text-[0.95rem] transition-all duration-[200ms] px-5 text-nowrap py-[0.625rem]`} onClick={() => { ham() }}>
            //   {item?.svg} <span>{item.name}</span>
            // </NavLink>
            <NavLink
              to={item.to}
              key={item.name}
              className={({ isActive }) => {
                const baseClasses = 'md:max-lg:p-2 flex gap-2 font-medium text-[0.95rem] transition-all duration-[200ms] px-5 text-nowrap py-[0.625rem]';
                const activeClasses = isActive ? 'dark:bg-darkgradient bg-lightgradient' : '';
                const hoverClasses = 'dark:hover:bg-[#43434352] hover:bg-[#d1d1d159]';

                return `${baseClasses} ${activeClasses} ${hoverClasses}`;
              }}
              onClick={() => ham()}
            >
              {item?.svg} <span>{item.name}</span>
            </NavLink>
          ))}

        {/* toggler  lg:ml-[4rem]*/}
        <div className='px-5 py-[0.625rem] cursor-pointer' onClick={toggleBtn}>
          <button className={`toggler align-middle w-[4.375rem] relative h-[2.1875rem] rounded-full overflow-hidden cursor-pointer`}>

            {/* moonbg  */}
            <img src={moonbg} className='absolute w-full h-full object-cover inset-0' alt="img" />

            <div className={`moon top-[50%] translate-y-[-50%]  transition-all duration-1000 absolute w-[1.625rem] bg-[#E7E7E7] h-[1.5625rem] rounded-full shadow-[0_0_0px_0.375rem_#ffffff30,_0_0_0px_0.75rem_#ffffff25,_0_0_0px_1.125rem_#ffffff20] overflow-hidden ${value === 'dark' ? 'translate-x-[0.33rem]' : 'translate-x-[6.25rem]'} `}>

              <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-1 right-3 w-[30%] h-[30%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-1/2 right-3 w-[10%] h-[10%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-1/2 right-1 w-[15%] h-[15%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-[70%] right-0 w-[25%] h-[25%] rounded-[50%] bg-[#CDCDCD]"></div>
              <div className="absolute top-[75%] right-2 w-[10%] h-[10%] rounded-[50%] bg-[#CDCDCD]"></div>
            </div>

            {/* sun bg  */}
            <img src={sunbg} className={`sunbg transition-all duration-1000 absolute w-full h-full object-cover inset-0 ${value === 'dark' ? 'opacity-0' : ''}`} alt="img" />
            <div className={`yellow transition-all duration-1000 absolute top-[50%] translate-y-[-50%]  bg-radial-gradient  from-[#ff7000] to-[yellow_90%]  w-[1.5625rem] h-[1.5625rem] rounded-full shadow-[0_0_0px_.375rem_#fbff0030,_0_0_0px_0.75rem_#fbff0025,_0_0_0px_1.125rem_#fbff0020] ${value === 'light' ? 'translate-x-[0.33rem]' : 'translate-x-[-6.25rem]'} `}></div>

          </button>
        </div>

      </div>
      {/* add to cart start  */}
      {
        [
          {
            name: 'Cart', to:'cart', svg: (<svg className={`w-[1.25rem] h-[1.25rem]`} color={value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
              <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 6H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
              <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
              <path d="M8 20L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)
          }
        ].map((item, index) => (<NavLink to={'cart'} key={index} className={({ isActive }) => {
          const baseClasses = 'md:max-lg:p-2 flex gap-2 font-medium text-[0.95rem] transition-all duration-[200ms] px-5 text-nowrap py-[0.625rem]';
          const activeClasses = isActive ? 'dark:bg-darkgradient bg-lightgradient' : '';
          const hoverClasses = 'dark:hover:bg-[#43434352] hover:bg-[#d1d1d159]';
          return `${baseClasses} ${activeClasses} ${hoverClasses}`;
        }} onClick={() => cartHam()}>
          {<span ref={cartref} className='relative'>{item?.svg} <span className='absolute dark:text-white text-black dark:outline-white outline-black top-[-0.250rem] right-0 w-[0.875rem] h-[0.875rem] rounded-[50%] dark:bg-[linear-gradient(to_right,_#f2baba,_#ec8ebb,_#6a57d2)] bg-[linear-gradient(to_right,_#f2baba,_#ffbbdc,_#a99ee8)] outline outline-1 flex items-center justify-center text-[0.625rem]'>{addToCartItemValue.length}</span>
          </span>}
          <span>{item.name}</span>
        </NavLink>))
      }
      {/* add to cart end */}

      {/*======== hamburger for medium size screens   ======*/}
      <button onClick={() => { ham() }} className='ham md:hidden p-2'>
        <svg className='w-[1.5rem] h-[1.5rem]' viewBox="0 0 24 24" fill="none">
          <path d="M20 12L10 12" stroke={`${value === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 5L4 5" stroke={`${value === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 19L4 19" stroke={`${value === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav >
  )
}

export default memo(Navbar)