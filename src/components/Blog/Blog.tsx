import { useEffect, useState } from 'react'

export default function Blog() {
  const slides = [
    {
      url: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/366713629_135024229652008_5640188457534650352_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=j1gvkeHZhZUAX-8lI3A&_nc_ht=scontent.fsgn5-6.fna&cb_e2o_trans=t&oh=00_AfDsagBnNGONKo3vk0IXx8kp5wgm_DR-KRAqrn4kQy6lJQ&oe=65D2F29D'
    },
    {
      url: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/364152037_135024716318626_1764037843048486249_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=x5pxRBlbj0oAX99rCXa&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfADX0B5GVKwnA2chaBdSw-uizfATLXRA0f3BIbpSJLZ5A&oe=65D2976E'
    },
    {
      url: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/366564084_135024702985294_4870388129049688700_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VT-LSSjBPosAX_FtC5A&_nc_ht=scontent.fdad3-1.fna&cb_e2o_trans=t&oh=00_AfD78QnfA7tHx63bsbS3qBkB0s8BiMyVNlADOUQRT6LYxw&oe=65D27969'
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      next()
    }, 3000)

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  return (
    <div className='reveal mx-auto my-16 w-full gap-6 px-2 xl:w-[95%]'>
      <div className='flex flex-col items-center justify-end gap-4 lg:flex-row-reverse'>
        <div className='mb-5 h-full w-full flex-col gap-4 xs:w-full md:mb-0 md:flex md:flex-row'>
          <div className='group relative mb-3 h-[500px] basis-1/2 bg-[#f3f1e0] xs:mb-4 md:mb-0'>
            <img src={slides[currentIndex].url} alt='' className='absolute h-full w-full rounded-3xl object-cover' />
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

          <div className='mt-10 flex basis-1/2 flex-col items-center justify-center gap-4 text-center xs:mt-0 lg:ml-12 lg:items-start lg:text-left'>
            <div className='text-xs font-medium uppercase tracking-widest text-gray-500'>HAPPY HOURS | 3pm-7pm</div>
            <div className='text-4xl font-normal capitalize text-gray-900'> BÁNH MÌ BRUSGETTA đồng GIÁ 59K</div>
            <div>
              <div className='mb-2 font-medium leading-8 tracking-wider text-gray-500'>
                Từ a đến z, để Amore lo hết. Khách iu chỉ việc ghé, còn bánh mì Brusgetta đồng giá để Amore chuẩn bị cho
                🫶 Biết là khung giờ 𝟑𝐩𝐦-𝟕𝐩𝐦 là khung giờ của các vị khách thích chill chill, lại hay chạy deadline. Nên
                là nhà Amore nạp thêm năng lượng cho các khách bằng chương trình bánh mì Brusgetta giá rẻ đây. Chỉ với
                𝟓𝟗𝐤, các khách có thể thưởng thức trọn vị bánh Brusgetta chuẩn Ý, đây cũng là món bánh signature của
                Amore luôn đó.
              </div>
              <div className='mb-2 text-base font-medium tracking-wide text-gray-500'>Designed to fit your life.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
