import  { useContext, useRef, useState, useMemo, useEffect } from 'react'
import { globalContext } from '../context/context'
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } from './imgs/imgsFile'
import gsap from 'gsap'

function gallery() {
  let { PageHeading } = useContext(globalContext)
  let currentImgRef = useRef(null)
  let imgsList = useRef(null)
  const [galleryFilter, setgalleryFilter] = useState('all')

  const images = useMemo(() => {
    document.title = 'Mannu Dhaba Gallery'
    return (
      [
        {
          img: img4,
          variety: ['all', 'vibe']
        },
        {
          img: img2,
          variety: ['all', 'food', "customer's"]
        },
        {
          img: img3,
          variety: ['all', 'food']
        },
        {
          img: img1,
          variety: ['all', 'vibe']
        },
        {
          img: img5,
          variety: ['all', 'vibe', "customer's"]
        },
        {
          img: img6,
          variety: ['all', 'vibe']
        },
        {
          img: img7,
          variety: ['all', 'vibe']
        },
        {
          img: img8,
          variety: ['all', "customer's"]
        },
        {
          img: img9,
          variety: ['all', 'food']
        },
        {
          img: img10,
          variety: ['all', 'vibe']
        },

      ]
    )
  }, [])

  const filterArray = images.filter((e) => { return e.variety.includes(galleryFilter) })
  const [currentImg, setcurrentImg] = useState(images[0].img)

  useEffect(() => {
    imgsList.current.scrollLeft = 0;
    setcurrentImg(filterArray[0].img)
  }, [galleryFilter])

  return (
    <section className='relative gallery backdrop-blur-[70px]'>
      <PageHeading heading={'gallery'} />
      <div className='sm:p-[1.25rem]'>
        {/* gallery filter start */}
        <div className="flex gap-4 sm:justify-center p-[1.25rem_1.25rem] overflow-x-auto">

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
        <div className="md:flex grid gap-2 relative md:h-[90vh] items-start" >
          <div ref={imgsList} className="md:w-[20%] p-2 md:h-full md:grid flex gap-2 overflow-y-auto">
            {/* side images start  */}
            {filterArray.map((imgSrc, index) => (
              <div key={index} className="md:h-40 outLine flex-[0_0_9.375rem] h-20 rounded-md overflow-hidden">
                <img src={imgSrc.img} alt={`img-${index}`}
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
          <div className="md:w-[80%] sticky top-[--navHeight] md:h-[80%] h-full dark:border-white border-black border-1 rounded-md">
            {/* navigations start  */}
            <div className='absolute justify-around z-[1] bottom-2 left-1/2 -translate-x-1/2 w-[11rem] flex items-center p-[0.375rem_0.5rem] bg-[#f5fffa75] rounded-3xl backdrop-blur-[0.0625rem]'>

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
                className='cursor-pointer outLine left-[40%] -translate-x-1/2 flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[3.125rem] bg-[#ffffff]  hover:bg-[#fffff6ec] hover:shadow-[0.125rem_0.125rem_3px_0.0625rem_#2828283b] backdrop-blur-[20px]'>
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

              }} className='cursor-pointer outLine right-[40%] translate-x-1/2 flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[3.125rem] bg-[#ffffff] hover:bg-[#fffff6ec] hover:shadow-[0.125rem_0.125rem_3px_0.0625rem_#2828283b] backdrop-blur-[20px]'>
                <svg className={`w-[1.375rem] h-[1.375rem] drop-shadow-[3px_0.0625rem_0.0625rem_black]`} viewBox="0 0 24 24" color='black' fill="none">
                  <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* right menu end */}
            </div>
            {/* navigations end  */}

            {/* current img start  */}
            <img ref={currentImgRef} src={currentImg} alt="img" className={`h-full sm:min-h-[auto] min-h-[11.875rem] object-contain w-[100%]`} />
            {/* current img end */}
          </div>
        </div>

        <div className='flex-col flex justify-center gap-4 mt-2 p-5'>
          <h3 className='capitalize text-lg px-3 text-center sm:w-4/6 w-9/12 mx-auto' style={{ textShadow: '0.125rem 0.0625rem 1rem #3b3b3b94' }}>make this gallery more beautiful with sharing your memories with us </h3>
          <a href="https://wa.me/919754742477" className='pb-3'>
            <svg viewBox="0 0 24 24" className='hover:text-[#25D366] dark:text-[#00ff5f] text-[#00cd4d] sm:w-[2.1875rem] sm:h-[2.1875rem] w-[2rem] h-[2rem] mx-auto' fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default gallery