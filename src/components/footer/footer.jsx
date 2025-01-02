import { useContext, useRef } from 'react'
import './footer.css'
import WhiteLogo from '../logos/whitelogo.jsx'
import BlackLogo from '../logos/blacklogo.jsx'
import { NavLink } from 'react-router-dom'
import { globalContext } from '../context/context.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function footer() {
    const cartref = useRef(null)
    const { setfixedMsg, value, addToCartItemValue, WhatsAppLink } = useContext(globalContext)
    function copyNumber(e) {
        navigator.clipboard.writeText(e.target.innerText)
        navigator.vibrate(20)
        setfixedMsg(prev => ({ ...prev, msg: 'number copied', initial: !prev.initial, random: !prev.random }))
    }
    useGSAP(() => {
        gsap.fromTo(cartref.current, { scale: 1.2 }, { scale: 1, duration: 2.5, ease: 'elastic' })
    }, [addToCartItemValue.length])

    return (
        <footer className={`relative p-[1.25rem] backdrop-blur-[70px]`}>
            <div className='py-5 sm:px-5 grid gap-8'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='sm:order-[-1] order-1'>
                        <h2 className='capitalize text-lg mb-3'>explore more</h2>
                        <div className="grid grid-cols-1 justify-between gap-1 dark:text-[#ebebeb] text-[#202020] text-[0.96875rem]">
                            {
                                [
                                    {
                                        name: 'Cart', to: 'cart', svg: (<svg className={`w-[1.25rem] h-[1.25rem]`} color={value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                                            <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M6 6H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M8 20L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)
                                    }
                                ].map((item, index) => (<NavLink to={'cart'} key={index} className={({ isActive }) => {
                                    const baseClasses = `svgbtn text-center flex py-2 px-4 sm:px-4 rounded-[0.9375rem] text-nowrap  gap-2 capitalize active:scale-[0.9] dark:active:bg-[#80808059] active:bg-[#e6e6e6] transition duration-100`;
                                    const hoverClasses = `${value === 'light' ? 'hover:bg-white hover:shadow-[0px_0.1875rem_0.1875rem_0px_#54545447]' : 'hover:bg-[#d1d1d159]'}`;
                                    const activeClasses = isActive ? `${value === 'light' ? 'bg-white shadow-[0px_0.1875rem_0.1875rem_0px_#54545447] ' : 'dark:bg-darkgradient'}` : '';
                                    return `${baseClasses} ${hoverClasses} ${activeClasses}`
                                }}>
                                    {<span ref={cartref} className='relative'>{item?.svg} <span className='absolute dark:text-white text-black dark:outline-white outline-black top-[-0.350rem] right-[-0.1rem] w-[0.875rem] h-[0.875rem] rounded-[50%] dark:bg-[linear-gradient(to_right,_#f2baba,_#ec8ebb,_#6a57d2)] bg-[linear-gradient(to_right,_#f2baba,_#ffbbdc,_#a99ee8)] outline outline-1 flex items-center justify-center text-[0.625rem] ar-one-sans'>{addToCartItemValue.length}</span>
                                    </span>}
                                    <span>{item.name}</span>
                                </NavLink>))
                            }
                            {
                                [
                                    {
                                        name: 'home', to: '/', svg: (<svg className='footerElm text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none" >
                                            <path d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22" stroke="currentColor" strokeWidth="2" />
                                            <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                        </svg>)
                                    },
                                    {
                                        name: 'menu', to: 'menu', svg: (<svg className='footerElm text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none">
                                            < path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke='currentColor' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke='currentColor' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>)
                                    },

                                    {
                                        name: 'about us', to: 'about-us', svg: (<svg className='footerElm text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none">
                                            <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>)
                                    },
                                    {
                                        name: 'gallery', to: 'gallery', svg: (<svg className='footerElm text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none">
                                            <path d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6" stroke="currentColor" strokeWidth="2" />
                                            <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M12.9998 7H13.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>)
                                    },

                                ].map((el, ind) => (
                                    <NavLink to={el.to} key={ind} className={({ isActive }) => {
                                        const baseClasses = `svgbtn text-center flex py-2 px-4 sm:px-4 rounded-[0.9375rem] text-nowrap  gap-2 capitalize active:scale-[0.9] dark:active:bg-[#80808059] active:bg-[#e6e6e6] transition duration-100`;
                                        const hoverClasses = `${value === 'light' ? 'hover:bg-white hover:shadow-[0px_0.1875rem_0.1875rem_0px_#54545447]' : 'hover:bg-[#d1d1d159]'}`;
                                        const activeClasses = isActive ? `${value === 'light' ? 'bg-white shadow-[0px_0.1875rem_0.1875rem_0px_#54545447] ' : 'dark:bg-darkgradient'}` : '';
                                        return `${baseClasses} ${hoverClasses} ${activeClasses}`
                                    }}>
                                        {el?.svg}
                                        <span>{el.name}</span>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h2 className='capitalize text-lg mb-3'>Contact Us</h2>
                        <div className="flex flex-col items-start dark:text-[#ebebeb] text-[#202020] text-[0.96875rem]">
                            <a className='footerElm svgbtn py-[0.375rem] w-full flex items-center gap-1' href="https://maps.app.goo.gl/9fbqpbeUvJ6TfNWt6">
                                <svg className={`footerElm text-inherit w-[1.2rem] h-[1.2rem]`} viewBox="0 0 24 24"><mask id="lineMdMapMarkerRadiusFilled0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M12 18c0 0 -5.14 -6 -5.14 -9.86c0 -2.84 2.3 -5.14 5.14 -5.14c2.84 0 5.14 2.3 5.14 5.14c0 3.86 -5.14 9.86 -5.14 9.86Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1" /><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0" /></path><circle cx="12" cy="8.143" r="2.5" fill="#000" fill-opacity="0" stroke="none"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1" /></circle><path fill="#fff" stroke="none" d="M12 18c0 0 0 0 0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0c0 0 0 0 0 0Z"><animate fill="freeze" attributeName="d" begin="1.6s" dur="0.2s" values="M12 18c0 0 0 0 0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0c0 0 0 0 0 0Z;M12 21C15.3 21 18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19C20 21.2 16.4 23 12 23C7.6 23 4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21z" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerRadiusFilled0)" /></svg>
                                <span>Location</span> </a>
                            {
                                [{ number: 7999741488, title: 'copy calling number', icon: (<svg className={`text-inherit w-[1.2rem] h-[1.2rem]`} viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z" /></svg>) },
                                { number: 7999741488, title: 'copy whatsApp number', icon: (<svg className={`text-inherit w-[1.2rem] h-[1.2rem]`} viewBox="0 0 16 16"><path fill="currentColor" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"></path></svg>) }
                                    , { number: 9669087745, title: 'copy whatsApp number', icon: (<svg className={`text-inherit w-[1.2rem] h-[1.2rem]`} viewBox="0 0 16 16"><path fill="currentColor" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"></path></svg>) }
                                ].map((numberSet, index) => (

                                    numberSet.title.includes('whatsApp') ?
                                        <WhatsAppLink key={index} classes='footerElm svgbtn py-[0.375rem] w-full flex items-center gap-2 cursor-pointer' number={numberSet.number} msg='Hello! Mannu Dhaba and Family Restaurant.'>
                                            {numberSet.icon}
                                            {numberSet.number}
                                        </WhatsAppLink> :
                                        <button key={index} title={numberSet.title} className='footerElm svgbtn py-[0.375rem] w-full flex items-center gap-2 cursor-pointer' onClick={copyNumber}>{numberSet.icon} {numberSet.number}</button>                                
                                ))
                            }
                        </div>
                    </div>

                    <div className="sm:order-1 order-[-1]">
                        <h2 className='capitalize text-lg mb-3'>opening hours</h2>
                        <div className='flex flex-col items-start gap-y-3 dark:text-[#ebebeb] text-[#202020] text-[0.96875rem]'>
                            <span className='footerElm'>Everyday <br /> 10AM - 2AM</span>
                        </div>
                    </div>

                    <div>
                        <h2 className='capitalize text-lg mb-3'>Give Us Feedback</h2>
                        <div className='flex flex-col items-start gap-y-3 dark:text-[#ebebeb] text-[#202020] text-[0.96875rem]'>
                            <p className='footerElm'>
                                Pure veg, Affordable, and perfect for families. Your feedback matters for us — share your experience with a review! </p>
                            <a href="https://g.page/r/CfpZjeiu18gXEBM/review" className="flex gap-2 items-center justify-center px-4 py-2 bg-white text-gray-600 dark:bg-gray-800 dark:border-gray-600 dark:text-white font-medium border border-gray-300 rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-700  hover:shadow-md transition duration-200">
                                <svg className='w-[1.2rem] h-[1.2rem]' x="0px" y="0px" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                Give review
                            </a>
                        </div>
                    </div>
                </div>
                <div className='text-center'><address>{`design & developed by`}</address><strong><a className='uppercase' href="https://ayushnagar-portfolio.netlify.app/">Ayush Nagar</a></strong></div>
                <div className='w-full h-[1px] dark:bg-slate-200 bg-slate-500  rounded-full overflow-hidden'></div>
            </div>
            {/* <img src={`${document.documentElement.classList.contains('dark') === true ? whiteLogo : blackLogo}`} alt="logo" className={`nav-logo rounded-full w-[11.875rem] sm:w-[13.125rem] mx-auto`} /> */}
            {
                value === 'dark' ? <WhiteLogo classes={'w-[11.875rem] sm:w-[13.125rem] mx-auto'} /> : <BlackLogo classes={'w-[11.875rem] md:w-[13.125rem] mx-auto'} />
            }
        </footer >
    )
}

export default footer