import { useContext, useRef, useState, useMemo, useEffect, memo } from 'react'
import { globalContext } from '../context/context'
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14 } from './imgs/imgsFile'
import gsap from 'gsap'

const Gallery = memo(() => {
  let { PageHeading, WhatsAppLink, recalculate_cssVars } = useContext(globalContext)
  let currentImgRef = useRef(null)
  let imgsList = useRef(null)
  const [galleryFilter, setgalleryFilter] = useState('all')

  const images = useMemo(() => {
    document.title = 'Mannu Dhaba Gallery'
    return (
      [
        {
          img: img1,
          variety: ['all', 'vibe']
        },
        {
          img: img2,
          variety: ['all', 'vibe']
        },
        {
          img: img3,
          variety: ['all', 'vibe']
        },
        {
          img: img5,
          variety: ['all', "customer's"]
        },
        {
          img: img13,
          variety: ['all', "customer's"]
        },
        {
          img: img4,
          variety: ['all', 'food', "customer's"]
        },
        {
          img: img6,
          variety: ['all', "customer's"]
        },
        {
          img: img14,
          variety: ['all', 'food']
        },
        {
          img: img7,
          variety: ['all', 'food']
        },
        {
          img: img8,
          variety: ['all', 'food']
        },
        {
          img: img9,
          variety: ['all', 'vibe']
        },
        {
          img: img10,
          variety: ['all', 'vibe']
        },
        {
          img: img11,
          variety: ['all', 'vibe']
        },
        {
          img: img12,
          variety: ['all', 'vibe']
        },
      ]
    )
  }, [])

  const filterArray = images.filter((e) => { return e.variety.includes(galleryFilter) })
  const [currentImg, setcurrentImg] = useState(images[0].img)

  useEffect(() => {
    imgsList.current.scrollLeft = 0;
    imgsList.current.scrollTop = 0;
    setcurrentImg(filterArray[0].img)
  }, [galleryFilter])

  useEffect(() => {
    recalculate_cssVars()
  }, [])

  return (
    <section className='relative gallery'>
      <PageHeading heading={'gallery'} />
      <div className='sm:p-[1.25rem] py-6'>
        {/* gallery filter start */}
        <div className="ar-one-sans flex gap-4 md:justify-center p-[1.25rem_1.25rem] overflow-x-auto">
          {
            ['all', 'food', 'vibe', "customer's"].map((elm, ind) => (
              <button key={elm + ind} className={`filterBtn px-3 py-[0.375rem] rounded-md border-none capitalize flex gap-1 items-center ${elm === galleryFilter ? 'activeFilter outline-[#9eff00] outline-1' : ''}`} onClick={() => { setgalleryFilter(elm) }}>{elm}
                <span className={`${elm !== galleryFilter ? 'hidden' : ''}`}>
                  <svg className={`w-[1.375rem] h-[1.375rem]`} viewBox="0 0 24 24" color="#9eff00" fill="none">
                    <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span></button>
            ))
          }
        </div>
        {/* gallery filter end */}
        <div className="md:flex grid gap-2 relative md:h-[90vh] md:mt-8 mt-4 items-start">
          <div ref={imgsList} className="md:w-[20%] p-2 md:h-full md:grid flex gap-2 overflow-y-auto">
            {/* side images start  */}
            {filterArray.map((imgSrc, index) => (
              <div key={index} className="md:h-40 outLine flex-[0_0_9.375rem] h-20 rounded-md overflow-hidden">
                <img loading='lazy' src={imgSrc.img} alt={`image-${index}`}
                  className={` ${currentImg === imgSrc.img ? 'border-double border-[#9eff00] border-2' : ''} cursor-pointer w-full h-full object-cover`} onClick={(e) => {
                    setcurrentImg(filterArray[index].img);
                    gsap.fromTo(currentImgRef.current,
                      {
                        opacity: 0,
                      },
                      {
                        opacity: 1,
                        ease: 'power2',
                        duration: 0.8
                      }
                    );
                    gsap.to(imgsList.current, {
                      scrollTop: e.target.parentElement.offsetTop,
                      scrollLeft: e.target.parentElement.offsetLeft
                      // scrollTop  kitna scroll karna hai ye batata hai
                    })
                  }} />
              </div>

            ))}
            {/* side images end  */}
          </div>
          <div className="md:w-[80%] sticky top-[--pageHeadingBottom] max-md:h-[50vh] md:h-[80%] dark:border-white border-black border-1 rounded-md">
            {/* navigations start  */}
            <div className='absolute justify-around z-[1] bottom-2 left-1/2 -translate-x-1/2 w-[11rem] flex items-center p-[0.375rem_0.5rem] bg-[#f5fffa75] rounded-3xl backdrop-blur-[0.0625rem] shadow-[0px_1px_12px_-1px_#00000045]'>

              {/* left menu start */}
              <button onClick={(e) => {
                let num = filterArray.findIndex((e) => { return currentImg === e.img })
                let heightOfset = imgsList.current.firstElementChild.offsetHeight;
                let widthtOfset = imgsList.current.firstElementChild.offsetWidth;
                let gap = parseInt(getComputedStyle(imgsList.current).gap);
                setcurrentImg((num - 1) === -1 ? filterArray[filterArray.length - 1].img : filterArray[num - 1].img);

                (num - 1) === -1 ? gsap.to(imgsList.current, {
                  scrollTop: imgsList.current.scrollTop + (heightOfset + gap) * filterArray.length,
                  scrollLeft: imgsList.current.scrollLeft + (widthtOfset + gap) * filterArray.length
                }) : gsap.to(imgsList.current, {
                  scrollTop: imgsList.current.scrollTop - (heightOfset + gap),
                  scrollLeft: imgsList.current.scrollLeft - (widthtOfset + gap)
                })

                gsap.fromTo(currentImgRef.current,
                  {
                    opacity: 0,
                  },
                  {
                    opacity: 1,
                    ease: 'power2',
                    duration: 0.8
                  }
                );
              }}
                className='cursor-pointer outLine left-[40%] -translate-x-1/2 flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[3.125rem] bg-[#ffffff] hover:bg-[#fffff6ec] shadow-[0.115rem_0.115rem_9px_0.0625rem_#2828283b] hover:shadow-[0.155rem_0.155rem_9px_0.0625rem #2828283b] backdrop-blur-[20px] transition-[scale] duration-200 active:scale-[.95]'>
                <svg className={`w-[1.375rem] h-[1.375rem] drop-shadow-[3px_0.0625rem_0.0625rem_black]`} viewBox="0 0 24 24" color='black' fill="none">
                  <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* left menu end */}

              {/* right menu start */}
              <button onClick={(e) => {
                let num = filterArray.findIndex((e) => { return currentImg === e.img })
                let heightOfset = imgsList.current.firstElementChild.offsetHeight;
                let widthtOfset = imgsList.current.firstElementChild.offsetWidth;
                let gap = parseInt(getComputedStyle(imgsList.current).gap);

                setcurrentImg(num + 1 === filterArray.length ? filterArray[0].img : filterArray[num + 1].img);

                num + 1 === filterArray.length ? gsap.to(imgsList.current, {
                  scrollTop: imgsList.current.scrollTop - (heightOfset - gap) * filterArray.length,
                  scrollLeft: imgsList.current.scrollLeft - (widthtOfset - gap) * filterArray.length
                }) : gsap.to(imgsList.current, {
                  scrollTop: imgsList.current.scrollTop + (heightOfset + gap),
                  scrollLeft: imgsList.current.scrollLeft + (widthtOfset + gap)
                })
                gsap.fromTo(currentImgRef.current,
                  {
                    opacity: 0,
                  },
                  {
                    opacity: 1,
                    ease: 'power2',
                    duration: 0.8
                  }
                );

              }} className='cursor-pointer outLine right-[40%] translate-x-1/2 flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[3.125rem] bg-[#ffffff] hover:bg-[#fffff6ec] shadow-[0.115rem_0.115rem_9px_0.0625rem_#2828283b] hover:shadow-[0.155rem_0.155rem_9px_0.0625rem #2828283b] backdrop-blur-[20px] transition-[scale] duration-200 active:scale-[.95]'>
                <svg className={`w-[1.375rem] h-[1.375rem] drop-shadow-[3px_0.0625rem_0.0625rem_black]`} viewBox="0 0 24 24" color='black' fill="none">
                  <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* right menu end */}
            </div>
            {/* navigations end  */}

            {/* current img start  */}
            <img loading='lazy' ref={currentImgRef} src={currentImg} alt="image" className={`h-full sm:min-h-[auto] min-h-[11.875rem] object-contain w-[100%]`} />
            {/* current img end */}
          </div>
        </div>

        <div className='flex-col flex justify-center gap-4 mt-2 p-5'>
          <h3 className='capitalize text-lg px-3 text-center sm:w-4/6 w-9/12 mx-auto max-w-[25rem] [text-shadow:0.125rem_0.0625rem_1rem_#3b3b3b94]'>make this gallery more beautiful with sharing your memories with us </h3>
          <div className='flex justify-center'>
            <a target='_blank'
              className="svgbtn p-[0.375em]"
              href="https://www.instagram.com/kanhaji_dhaba">
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
          </div>
        </div>
      </div>
    </section>
  )
})

export default Gallery