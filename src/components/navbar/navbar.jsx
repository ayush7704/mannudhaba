import './navbar.css'
import WhiteLogo from '../logos/whitelogo.jsx'
import Blacklogo from '../logos/blacklogo.jsx'
import { globalContext } from '../context/context'
import { NavLink } from 'react-router-dom'
import { useEffect, useState, useRef, useContext, memo, useCallback } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'


function Navbar() {
  let nav = useRef(null)
  let links = useRef(null)
  let linkswrapper = useRef(null)
  let cartref = useRef(null)
  const [hasSidebarOpened, sethasSidebarOpened] = useState(false)
  let { mode, addToCartItemValue, CartIcon, ModeToggler } = useContext(globalContext)

  let sidebarToggler = useCallback(() => {
    sethasSidebarOpened(prev => !prev)
  }, [])

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
  }, [])

  // useGSAP(() => {
  //   // let shadowtime = gsap.timeline({ defaults: { duration: 4, repeat: -1 } });
  //   // let shadowtime = gsap.timeline({ defaults: { duration: 4, repeat: -1 } });

  //   // gsap.utils.toArray(".moon_shadow")
  //   // shadowtime.fromTo('.moon_shadow', 
  //   //   { inset: '0', opacity: 1 }, 
  //   //   { 
  //   //     inset: '-1.5rem', 
  //   //     opacity: 0, 
  //   //     stagger: {
  //   //       amount: 1.5, 
  //   //       from: "start", 
  //   //       // ease: "power1.inOut",
  //   //       repeat:-1
  //   //     }       
  //   //   }
  //   // );

  //   // shadowtime.fromTo('.moon_shadow1',
  //   //   { inset: '0', opacity: 1 },
  //   //   { inset: '-1.5rem', opacity: 0 }, '+=0' // Starts immediately
  //   // );

  //   // shadowtime.fromTo('.moon_shadow2',
  //   //   { inset: '0', opacity: 1 },
  //   //   { inset: '-1.5rem', opacity: 0 }, '+=1' // Starts after 1 second
  //   // );

  //   // shadowtime.fromTo('.moon_shadow3',
  //   //   { inset: '0', opacity: 1 },
  //   //   { inset: '-1.5rem', opacity: 0 }, '+=1' // Starts after 1 second
  //   // );

  //   // shadowtime.fromTo('.moon_shadow4',
  //   //   { inset: '0', opacity: 1 },
  //   //   { inset: '-1.5rem', opacity: 0 }, '+=1' // Starts after 1 second
  //   // );
  // }, [])

  useGSAP(() => {
    gsap.fromTo(cartref.current, { scale: 1.2 }, { scale: 1, duration: 2.5, ease: 'elastic' })
  }, [addToCartItemValue.length])

  return (
    <nav ref={nav} className='z-[5] dark:bg-[#0d0d0d] bg-[#f5fffa] flex items-center sm:gap-4 py-[.3125rem] justify-between lg:pl-[1.25rem] pl-[0.625rem] md:pr-[1.25rem] pr-[0.5rem] sticky top-0 text-[0.95rem]'>

      {/*======== logo and name starts  ======*/}
      <div className="name-logo">
        {
          mode === 'dark' ? <WhiteLogo classes={'nav-logo w-[11.575em] sm:w-[12.125em] md:w-[13.125em] max-[280px]:w-[9rem] max-[320px]:w-[10.575em]'} /> : <Blacklogo classes={'nav-logo w-[11.575em] sm:w-[12.125em] md:w-[13.125em] max-[280px]:w-[9rem] max-[320px]:w-[10.575em]'} />
        }
      </div>
      {/*======== logo and name ends  ======*/}


      <div onClick={() => { sidebarToggler() }} ref={linkswrapper} className={`linkswrapper w-full lg:relative absolute lg:hidden bg-[transparent] h-screen overflow-hidden left-0 ${hasSidebarOpened ? "" : "hidden"}`}></div>

      <div ref={links} className={`links bg-[inherit] gap-1 transition-[width] duration-[200ms] ease-[cubic-bezier(0.77,_-0.45,_0.3,_1.57)] lg:relative lg:overflow-auto overflow-hidden lg:flex lg:items-center lg:w-auto lg:top-[0px] lg:border-none dark:border-[#ffffff30] border-[#00000030] border-t-[1px] border-b-[1px] grid absolute w-0 right-0 rounded-bl-lg dark:text-white text-black pb-[1.25rem] lg:pb-[0px] lg:rounded-lg max-lg:shadow-lg ${hasSidebarOpened ? "w-9/12" : "w-0"}`}>

        {/*======== close btn x   ======*/}
        <div className='lg:hidden py-[0.625rem] px-5 cursor-pointer' onClick={() => { sidebarToggler() }}>
          <button className='px-[0.75rem] w-full pt-[0.5rem] flex items-center justify-end pb-[0.5625rem] bg-gradient-to-l dark:from-[#ff000042] from-[#ff00008a] to-[transparent] rounded-full text-white'>
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none">
              <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/*========  anchors   ======*/}
        {
          [
            {
              name: 'Home', to: '/', svg: (<svg className={`w-[1.25em] h-[1.25em]`} color={mode === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                <path d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22" stroke="currentColor" strokeWidth="2" />
                <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>)
            },
            {
              name: 'Menu', to: 'menu', svg: (<svg className={`w-[1.25em] h-[1.25em]`} color={mode === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill='none' stroke={mode === 'dark' ? 'white' : 'black'}>
                < path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke='inherit' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke='inherit' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>)
            },
            {
              name: 'About us', to: 'about-us', svg: (<svg className={`w-[1.25em] h-[1.25em]`} color={mode === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>)
            },
            {
              name: 'Gallery', to: 'gallery', svg: (<svg className={`w-[1.25em] h-[1.25em]`} color={mode === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                <path d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6" stroke="currentColor" strokeWidth="2" />
                <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z" stroke="currentColor" strokeWidth="2" />
                <path d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12.9998 7H13.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>)
            }
          ].map((item) => (
            <NavLink
              to={item.to}
              key={item.name}
              className={({ isActive }) => {
                const baseClasses = 'rounded-[10rem] flex gap-2 font-medium items-center text-[1em] transition-colors duration-[200ms] px-5 text-nowrap py-[0.625rem]';
                const activeClasses = isActive ? 'dark:bg-darkgradient bg-lightgradient' : '';
                const hoverClasses = 'dark:hover:bg-[#43434352] hover:bg-[#d1d1d159]';

                return `${baseClasses} ${activeClasses} ${hoverClasses}`;
              }}
              onClick={() => sidebarToggler()}
            >
              {item?.svg} <span>{item.name}</span>
            </NavLink>
          ))}
        <ModeToggler parentClasses='px-5 py-[0.625em] cursor-pointer' />
      </div>

      <div className='max-lg:ml-auto flex items-center justify-center md:gap-2 gap-1'>
        <a target='_blank'
          className="svgbtn p-[0.375em]"
          href="https://www.instagram.com/mannudhaba?igsh=MTgwdjVvdnQxbmR3NQ==">
          <svg
            className="text-inherit w-[1.35em] h-[1.35em] md:w-[1.5em] md:h-[1.5em] drop-shadow-[1px_1px_0.25em_#000000b0]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256">
            <g fill="none">
              <rect
                width="256"
                height="256"
                fill="url(#skillIconsInstagram0)"
                rx="60"
              />
              <rect
                width="256"
                height="256"
                fill="url(#skillIconsInstagram1)"
                rx="60"
              />
              <path
                fill="#fff"
                d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
              />
              <defs>
                <radialGradient
                  id="skillIconsInstagram0"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD5" />
                  <stop offset=".1" stopColor="#FD5" />
                  <stop offset=".5" stopColor="#FF543E" />
                  <stop offset="1" stopColor="#C837AB" />
                </radialGradient>
                <radialGradient
                  id="skillIconsInstagram1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3771C8" />
                  <stop offset=".128" stopColor="#3771C8" />
                  <stop offset="1" stopColor="#60F" stopOpacity="0" />
                </radialGradient>
              </defs>
            </g>
          </svg>
        </a>
        {/* add to cart start  */}
        {
          [
            {
              name: 'Cart', to: 'cart', svg: (<CartIcon color={mode === 'dark' ? 'white' : 'black'} classes={'w-[1.29em] h-[1.29em]'} />)
            }
          ].map((item, index) => (<NavLink to={'cart'} key={index} className={({ isActive }) => {
            const baseClasses = 'rounded-[10rem] flex gap-2 items-center text-[1em] transition-colors duration-[200ms] sm:px-5 px-4 py-[0.625em] text-nowrap';
            const activeClasses = isActive ? 'dark:bg-darkgradient bg-lightgradient' : '';
            const hoverClasses = 'dark:hover:bg-[#43434352] hover:bg-[#d1d1d159]';
            return `${baseClasses} ${activeClasses} ${hoverClasses}`;
          }} onClick={() => { sethasSidebarOpened(false) }}>
            {<span ref={cartref} className='relative'>{item?.svg} <span className='absolute dark:text-white text-black dark:outline-white outline-black top-[-0.450rem] right-[-0.1rem] min-w-[0.875rem] min-h-[0.875rem] rounded-[50%] dark:bg-[linear-gradient(to_right,_#f2baba,_#ec8ebb,_#6a57d2)] bg-[linear-gradient(to_right,_#f2baba,_#ffbbdc,_#a99ee8)] outline outline-1 flex items-center justify-center text-[0.625rem] ar-one-sans leading-[100%] font-extrabold'>{addToCartItemValue.length}</span>
            </span>}
            <span className='max-sm:hidden'>{item.name}</span>
          </NavLink>))
        }
      </div>
      {/* add to cart end */}

      {/*======== hamburger for medium size screens   ======*/}
      <button onClick={() => { sidebarToggler() }} className='lg:hidden p-2'>
        <svg className='w-[1.5em] h-[1.5em]' viewBox="0 0 24 24" fill="none">
          <path d="M20 12L10 12" stroke={`${mode === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 5L4 5" stroke={`${mode === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 19L4 19" stroke={`${mode === 'dark' ? '#ffffff' : '#000000'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

    </nav >
  )
}

export default memo(Navbar)
