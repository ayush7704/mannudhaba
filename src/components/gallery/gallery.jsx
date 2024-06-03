import React, { useContext, useRef, useState, useCallback, memo, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { counterContext } from '../context/context'
import { img1, img2, img3, img4, img5, img6, img7 } from './imgs/imgsFile'
import gsap from 'gsap'

function gallery() {
  let { value, PageHeading } = useContext(counterContext)
  let currentImgRef = useRef(null)
  let imgsList = useRef(null)
  let whastappBtn = useRef(null)
  const images = useMemo(() => {
    return (
      [
        {
          img: img4,
          imgname: 'kuch bhi'
        },
        {
          img: img2,
          imgname: '2nd kuch bhi'
        },
        {
          img: img3,
          imgname: 'kuch bhi'
        },
        {
          img: img1,
          imgname: '2nd kuch bhi'
        },
        {
          img: img5,
          imgname: 'kuch bhi'
        },
        {
          img: img6,
          imgname: '2nd kuch bhi'
        },
        {
          img: img7,
          imgname: '2nd kuch bhi'
        },

      ]
    )
  }, [])
  const [currentImg, setcurrentImg] = useState(images[0].img)

  return (
    <section className='relative gallery backdrop-blur-[70px]'>
      <PageHeading mode={value} heading={'gallery'} />
      <div className=' sm:p-[20px]'>
        <div className="md:flex grid gap-2 relative md:h-[90vh] items-start" >
          <div ref={imgsList} className="md:w-[20%] p-2 md:h-full md:grid flex gap-2 overflow-y-auto">
            {/* side images start  */}
            {images.map((imgSrc, index) => (
              <div key={index} className="md:h-40 flex-[0_0_150px] h-20 rounded-md overflow-hidden">
                <img src={imgSrc.img} alt={`img-${index}`}
                  className={` ${currentImg === imgSrc.img ? 'border-double border-green-400 border-2' : ''} cursor-pointer w-full h-full object-cover`} onClick={(e) => {
                    setcurrentImg(images[index].img);
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
                      // scrollTop: imgsList.current.scrollTop + e.target.offsetHeight
                      scrollTop: e.target.parentElement.offsetTop,
                      scrollLeft: e.target.parentElement.offsetLeft
                      // scrollTop  kitna scroll karna hai ye batata hai
                    })
                    // console.log('scroll top' + imgsList.current.scrollTop)
                    // console.log('offsetHeight ' + e.target.parentElement.outerHeight)
                    // console.log('index ' + e.target.parentElement.offsetHeight * index)
                  }} />
              </div>

            ))}
            {/* side images end  */}
          </div>
          <div className="md:w-[80%] sticky top-[--navHeight] md:h-[80%] h-full dark:border-white border-black border-1 rounded-md">
            {/* navigations start  */}
            <div className='z-[1]'>

              {/* left menu start */}
              <div onClick={(e) => {
                let num = images.findIndex((e) => { return currentImg === e.img })
                let heightOfset = imgsList.current.firstElementChild.offsetHeight;
                let widthtOfset = imgsList.current.firstElementChild.offsetWidth;
                let gap = parseInt(getComputedStyle(imgsList.current).gap);
                setcurrentImg((num - 1) === -1 ? images[images.length - 1].img : images[num - 1].img);

                (num - 1) === -1 ? gsap.to(imgsList.current, {
                  scrollTop: imgsList.current.scrollTop + (heightOfset + gap) * images.length,
                  scrollLeft: imgsList.current.scrollLeft + (widthtOfset + gap) * images.length
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
                className='absolute z-[1] bottom-2 cursor-pointer left-[40%] -translate-x-1/2 flex items-center justify-center w-[40px] h-[40px] rounded-[50px] bg-[#000000eb] dark:hover:bg-[#141414e8]  hover:bg-[#0000001a] backdrop-blur-[20px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color='white' fill="none" className='dark:drop-shadow-[4px_1px_1px_black] drop-shadow-[3px_0px_1px_black]'>
                  <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* left menu start */}

              {/* right menu start */}
              <div onClick={(e) => {
                let num = images.findIndex((e) => { return currentImg === e.img })
                let heightOfset = imgsList.current.firstElementChild.offsetHeight;
                let widthtOfset = imgsList.current.firstElementChild.offsetWidth;
                let gap = parseInt(getComputedStyle(imgsList.current).gap);

                setcurrentImg(num + 1 === images.length ? images[0].img : images[num + 1].img);

                num + 1 === images.length ? gsap.to(imgsList.current, {
                  scrollTop: imgsList.current.scrollTop - (heightOfset - gap) * images.length,
                  scrollLeft: imgsList.current.scrollLeft - (widthtOfset - gap) * images.length
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

              }} className='absolute z-[1] bottom-2 cursor-pointer right-[40%] translate-x-1/2 flex items-center justify-center w-[40px] h-[40px] rounded-[50px] bg-[#000000eb] dark:hover:bg-[#141414e8] hover:bg-[#0000001a] backdrop-blur-[20px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color='white' fill="none" className='dark:drop-shadow-[4px_1px_1px_black] drop-shadow-[3px_0px_1px_black]'>
                  <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* right menu end */}
            </div>
            {/* navigations end  */}

            {/* current img start  */}
            <img ref={currentImgRef} src={currentImg} alt="img" className={`w-full h-full object-contain max-w-[100%]`} />
            {/* current img end */}
          </div>
        </div>
        <h3 className='capitalize text-lg mt-5 px-3 text-center' style={{ textShadow: '2px 1px 16px #3b3b3b94' }}>make this gallery more beautiful with sharing your memories with us </h3>
        <a href="https://wa.me/919754742477" className='block pb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='hover:text-[#25D366] dark:text-[#00ff5f] text-[#00cd4d] sm:w-[35px] sm:h-[35px] w-[32px] h-[32px] mx-auto' fill="none">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default gallery