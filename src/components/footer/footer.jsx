import { useContext } from 'react'
import whiteLogo from '../navbar/White logo - no background.svg'
import blackLogo from '../navbar/Black logo - no background.svg'
import { NavLink } from 'react-router-dom'
import { counterContext } from '../context/context.js'

function footer() {
    const { setfixedMsg, value } = useContext(counterContext)
    function copyNumber(e) {
        navigator.clipboard.writeText(e.target.innerText)
        navigator.vibrate(20)
        setfixedMsg(prev => ({ ...prev, msg: 'number copied', initial: !prev.initial, random: !prev.random }))
    }

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
                                        name: 'home', to: '/', svg: (<svg className='text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none" >
                                            <path d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22" stroke="currentColor" strokeWidth="2" />
                                            <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                        </svg>)
                                    },
                                    {
                                        name: 'menu', to: 'menu', svg: (<svg className='text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none">
                                            < path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke='currentColor' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke='currentColor' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>)
                                    },

                                    {
                                        name: 'about us', to: 'about-us', svg: (<svg className='text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none">
                                            <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>)
                                    },
                                    {
                                        name: 'gallery', to: 'gallery', svg: (<svg className='text-inherit w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" fill="none">
                                            <path d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6" stroke="currentColor" strokeWidth="2" />
                                            <path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M12.9998 7H13.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>)
                                    },

                                ].map((el, ind) => (
                                    <NavLink to={el.to} key={ind} className={({ isActive }) => {
                                        const baseClasses = `svgbtn text-center flex py-2 px-4 sm:px-4 rounded-[0.9375rem] text-nowrap  gap-2 capitalize`;
                                        const hoverClasses = `${value === 'light' ? 'hover:bg-white hover:shadow-[0px_0.1875rem_0.1875rem_0px_#54545447]' : 'hover:bg-[#d1d1d159]'}`;
                                        const activeClasses = isActive ? `${value === 'light' ? 'bg-white shadow-[0px_0.1875rem_0.1875rem_0px_#54545447]' : 'dark:bg-darkgradient'}` : '';
                                        return `${baseClasses} ${hoverClasses} ${activeClasses}`
                                    }}>
                                        {el?.svg}
                                        <span>{el.name}</span>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div className=''>
                        <h2 className='capitalize text-lg mb-3'>Contact Us</h2>
                        <div className="flex flex-col items-start text-[0.96875rem] dark:text-[#ebebeb] text-[#202020]">
                            <a className='svgbtn py-[0.375rem] w-full flex items-center gap-1' href="https://maps.app.goo.gl/9fbqpbeUvJ6TfNWt6">
                                {/* <span> */}
                                <svg className={`text-inherit w-[1.0625rem] h-[1.0625rem]`} viewBox="0 0 24 24" fill="none">
                                    <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                {/* </span> */}
                                <span>location</span> </a>
                            <div onClick={copyNumber} className='svgbtn py-[0.375rem] w-full flex items-center gap-2 cursor-pointer'>
                                {/* <span> */}
                                <svg className={`text-inherit w-[1.0625rem] h-[1.0625rem]`} viewBox="0 0 24 24" fill="none">
                                    <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                                {/* </span> */}
                                <span title='copy phone number'>7999741488</span>
                            </div>
                            <div onClick={copyNumber} className='svgbtn py-[0.375rem] w-full flex items-center gap-2 cursor-pointer'>
                                {/* <span> */}
                                <svg className={`text-inherit w-[1.0625rem] h-[1.0625rem]`} viewBox="0 0 24 24" fill="none">
                                    <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                                {/* </span> */}
                                <span title='copy phone number'>9669087745</span>
                            </div>
                            <div onClick={copyNumber} className='svgbtn py-[0.375rem] w-full flex items-center gap-2 cursor-pointer'>
                                {/* <span> */}
                                <svg className={`text-inherit w-[1.0625rem] h-[1.0625rem]`} viewBox="0 0 24 24" fill="none">
                                    <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                                {/* </span> */}
                                <span title='copy phone number'>9754742477</span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:order-1 order-[-1]">
                        <h2 className='capitalize text-lg mb-3'>opening hours</h2>
                        <div className='flex flex-col items-start gap-y-3 dark:text-[#ebebeb] text-[#202020] text-[0.96875rem]'>
                            <span >Everyday <br /> 10AM - 2AM</span>
                        </div>
                    </div>

                    <div>
                        <h2 className='capitalize text-lg mb-3'>Give Feedback</h2>
                        <div className='flex flex-col items-start gap-y-3 dark:text-[#ebebeb] text-[#202020] text-[0.96875rem]'>
                            <p>
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
            <img src={`${document.documentElement.classList.contains('dark') === true ? whiteLogo : blackLogo}`} alt="logo" className={`nav-logo rounded-full w-[11.875rem] sm:w-[13.125rem] mx-auto`} />
        </footer >
    )
}

export default footer