/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'

export default function SlideShow() {
  const slides = [
    {
      url: 'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/413041478_216150728206024_1936071197457280573_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53663d&_nc_ohc=4ifI0Ps4xl8AX_x0Zpt&_nc_ht=scontent.fsgn2-11.fna&cb_e2o_trans=t&oh=00_AfBEwR5pN50isTSQvRp66mZlLkDVqwDmYWrhBAUUkXnGPw&oe=65D1BA8A'
    },
    {
      url: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/414453162_216149758206121_1651318012035634898_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53663d&_nc_ohc=6szgFxzbDEUAX9BCxFm&_nc_ht=scontent.fsgn2-5.fna&cb_e2o_trans=t&oh=00_AfAg-cfg2CeasJenckxyFiJ6E6C8SeC2SnZLqjQ-QXZtCA&oe=65D1C447'
    },
    {
      url: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/414531088_216150644872699_3632023698971764845_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53663d&_nc_ohc=7IznMDLFQa8AX9keOPg&_nc_oc=AQlsXYJFsyX0GWbTtyXcOliZcNq5Z9ADfSFwPou8uBEimXPt1MvZUQlp0H-hQbk2y-1_aPXmoI5PFoBw4Retodo2&_nc_ht=scontent.fsgn2-4.fna&cb_e2o_trans=t&oh=00_AfCHa2EpqIgn0bB274WSQYgAFr_U4JQjDFmt81n7YOgHrw&oe=65D2E076'
    },
    {
      url: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/414455481_216149918206105_239064648013394928_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=53663d&_nc_ohc=m6M8Dy7d-1YAX9R-eqF&_nc_ht=scontent.fsgn2-3.fna&cb_e2o_trans=t&oh=00_AfARz1fFJRnvbCbeT_-719byUJTdL4_hXD3pcIXHuSZrqQ&oe=65D11796'
    },
    {
      url: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/413040718_216150428206054_1001397483372224777_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=53663d&_nc_ohc=RcZhW6uHDv0AX-avhbN&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=t&oh=00_AfBo-unt-FszNmSDfBDAJ4RQsyURcJFYOICDBXQGFpymKg&oe=65D12557'
    },
    {
      url: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/414455839_216150174872746_7476860142995052335_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53663d&_nc_ohc=3IIMQbd-7dAAX_xwHn6&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfCEMsl0XJa1gwnwMxnCdBR-HvLFnW2zqVD4gm4For0zLg&oe=65D27139'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const next = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='mx-auto w-[85%] md:w-[75%]  lg:w-[55%] xl:w-[40%]'>
      <div className='group relative h-[500px] w-full overflow-hidden rounded-3xl pt-[100%] shadow-lg md:h-[700px]'>
        <img src={slides[currentIndex].url} className='object-fit absolute left-0 top-0 h-full w-full bg-white' />
        <button
          className='absolute left-0 top-[50%] hidden h-14 w-6 -translate-x-0 translate-y-[50%] cursor-pointer bg-gray-900/40 text-white group-hover:block'
          onClick={next}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </button>
        <button
          className='absolute right-0 top-[50%] hidden h-14 w-6 -translate-x-0 translate-y-[50%] cursor-pointer bg-gray-900/40 text-white hover:shadow-xl group-hover:block'
          onClick={prev}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>

      <div className='flex justify-center py-3'>
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='mx-2 h-2 w-2 rounded-full bg-gray-700'
          ></button>
        ))}
      </div>
    </div>
  )
}
