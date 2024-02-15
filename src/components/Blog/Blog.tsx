export default function Blog() {
  return (
    <div className='reveal mx-auto my-16 w-full gap-6 px-2 xl:w-[95%]'>
      <div className='flex flex-col items-center justify-end gap-4 lg:flex-row-reverse'>
        <div className='mb-5 h-full w-full flex-col gap-4 xs:w-full md:mb-0 md:flex md:flex-row'>
          <div className='mb-3 h-[500px] basis-1/2 bg-white xs:mb-4 md:mb-0'>
            <img
              src='https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/364152037_135024716318626_1764037843048486249_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=x5pxRBlbj0oAX99rCXa&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfADX0B5GVKwnA2chaBdSw-uizfATLXRA0f3BIbpSJLZ5A&oe=65D2976E'
              alt=''
              className='h-full w-full rounded-3xl object-cover'
            />
          </div>

          <div className='mt-16 flex basis-1/2 flex-col items-center gap-4 text-center lg:ml-12 lg:items-start lg:text-left'>
            <div className='text-xs font-medium uppercase tracking-widest text-gray-500'>PREMIUM OFFER</div>
            <div className='text-4xl font-normal capitalize text-gray-900'>Get our Coffee Magazine</div>
            <div>
              <div className='mb-2 font-medium tracking-wider text-gray-500'>
                The most versatile furniture system ever created.
              </div>
              <div className='mb-2 text-base font-medium tracking-wide text-gray-500'>Designed to fit your life.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
