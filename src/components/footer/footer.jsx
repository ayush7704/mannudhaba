import React, { useContext } from 'react'
import whiteLogo from '../navbar/White logo - no background.svg'
import blackLogo from '../navbar/Black logo - no background.svg'
import { Link } from 'react-router-dom'
import { counterContext } from '../context/context.js'
import { useLocation } from 'react-router-dom'

function footer(props) {
    let location = useLocation()
    return (
        <footer className={`relative p-[20px] backdrop-blur-[70px]`}>
            <div className='py-5 sm:px-5'>
                <div className="sm:flex grid grid-cols-1 justify-between sm:gap-5">
                    {
                        [
                            {
                                name: 'home', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none" >
                                    <path d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>)
                            },
                            {
                                name: 'menu', svg: (<svg className='shrink- 0' xmlns="http://www.w3.org/2000/svg" width="20" height="20" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} viewBox="0 0 24 24" fill="none">
                                    < path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke={useContext(counterContext).value === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke={useContext(counterContext).value === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>)
                            },

                            {
                                name: 'about Us', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none">
                                    <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>)
                            },
                            {
                                name: 'gallery', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none">
                                    <path d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M12.9998 7H13.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>)
                            },
                            // {
                            //     name: 'contact', svg: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color={useContext(counterContext).value === 'dark' ? 'white' : 'black'} fill="none">
                            //         <path d="M12 22C7.99306 22 5.98959 22 4.7448 20.682C3.5 19.364 3.5 17.2426 3.5 13C3.5 8.75736 3.5 6.63604 4.7448 5.31802C5.98959 4 7.99306 4 12 4C16.0069 4 18.0104 4 19.2552 5.31802C20.5 6.63604 20.5 8.75736 20.5 13C20.5 17.2426 20.5 19.364 19.2552 20.682C18.0104 22 16.0069 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            //         <path d="M8 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            //         <path d="M16 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            //         <path d="M14.018 9.49261C14.018 10.5972 13.1226 11.4926 12.0181 11.4926C10.9135 11.4926 10.0181 10.5972 10.0181 9.49261C10.0181 8.38808 10.9135 7.49268 12.0181 7.49268C13.1226 7.49268 14.018 8.38808 14.018 9.49261Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            //         <path d="M8.06298 16.7161C9.12133 15.0868 10.802 14.4762 12.0181 14.4774C13.2341 14.4787 14.8656 15.0868 15.9239 16.7161C15.9923 16.8215 16.0112 16.9512 15.9494 17.0607C15.7019 17.4996 14.9334 18.3705 14.3784 18.4296C13.7406 18.4974 12.0723 18.5069 12.0194 18.5072C11.9664 18.5069 10.2466 18.4974 9.60851 18.4296C9.05345 18.3705 8.28496 17.4996 8.03745 17.0607C7.9757 16.9512 7.99456 16.8215 8.06298 16.7161Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            //     </svg>)
                            // }
                        ].map((el, ind) => (
                            <Link to={el.name === 'home' ? '/' : el.name} key={ind} className={`svgbtn text-center flex sm:py-5 py-3 px-4 sm:px-2 rounded-[60px] text-nowrap sm:justify-center sm:basis-[300px] gap-2 capitalize hover:bg-[#d1d1d159]  transition-all duration-[700ms] ${location.pathname === '/' && el.name === 'home' ? 'dark:bg-darkgradient bg-lightgradient':''} ${el.name === (location.pathname).replace(/%20/g, ' ').slice(1) ? 'dark:bg-darkgradient bg-lightgradient' : ''} `}>
                                {el?.svg}
                                <span>{el.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <img src={`${document.documentElement.classList.contains('dark') === true ? whiteLogo : blackLogo}`} alt="logo" className={`nav-logo rounded-full w-[190px] sm:w-[210px] mx-auto`} />
        </footer>
    )
}

export default footer