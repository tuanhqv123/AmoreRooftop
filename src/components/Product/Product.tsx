import Blog from '../Blog'
import SlideShow from '../SlideShow'

export default function Product() {
  function reveal() {
    const reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = reveals[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  window.addEventListener('scroll', reveal)

  return (
    <>
      <div className='bg-[#f3f1e0]'>
        <div id='home' className='lg:mx-8'>
          <div className='h-[530px] bg-transparent bg-[url(https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/415002516_221022151052215_1762557854275856568_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=7S1AYTmDUf8AX8jNiWl&_nc_ht=scontent.fsgn5-6.fna&cb_e2o_trans=t&oh=00_AfCrFqnY9HEcS1JqAfewB2h5IJYrlxiiWpRniYhb7B_9GA&oe=65D20399)] bg-cover bg-bottom bg-no-repeat'>
            <div className='flex h-full w-full flex-col items-center justify-center gap-4 bg-gray-900/40 text-white'>
              <div className='h-[140px] w-[140px] rounded-full bg-[url(https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/356921614_2423171001190515_5971255194470880670_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=RBCP-0drAmkAX8v4SSG&_nc_ht=scontent.fsgn2-11.fna&cb_e2o_trans=t&oh=00_AfBAJ0_hDeXBhM3TrW2q_zWz1fqc1Ec3v_rbT4jS69rQxw&oe=65D21D33)] bg-cover bg-center bg-no-repeat shadow-lg'></div>
              <div className='text-xs font-semibold tracking-widest opacity-80'>Coffee & Cocktail Bar</div>
              <div className='px-2 text-center text-lg'>Come and enjoy a panoramic view of Saigon</div>
            </div>
          </div>
        </div>

        <div className='reveal mx-auto my-16 w-full gap-6 px-2 xl:w-[85%]'>
          <div className='flex flex-col items-center justify-center gap-4 lg:flex-row-reverse'>
            <div className='mb-5 h-full w-full basis-1/2 flex-col gap-2 xs:w-full md:mb-0 md:flex md:w-[70%] md:flex-row'>
              <div className='mb-3 h-[400px] basis-2/3 rounded-md bg-[url(https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/408996776_206133329207764_4403197297144513443_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wlx0tMXlgKkAX9hdgfj&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfAAb9b5xU7P_vqViVxzw9WdTWvSmcK7qQMEHCYEYXzYMg&oe=65D2652E)] bg-cover bg-center bg-no-repeat xs:mb-4 md:mb-0'></div>
              <div className='flex basis-1/3 flex-row gap-3 xs:gap-2 md:flex-col'>
                <div className='h-[200px] basis-1/2 rounded-md bg-[url(https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/408512604_206131079207989_6136349084673126133_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=-MOPYbET-QcAX_-BsvZ&_nc_ht=scontent.fsgn2-11.fna&cb_e2o_trans=t&oh=00_AfCV4s9wtpAMSgdme6-BxS--UiR1U0ZJB18GXUB4aDvt6A&oe=65D16ADA)] bg-cover bg-center bg-no-repeat xs:h-[200px] md:h-[130px]'></div>
                <div
                  className='h-[200px] basis-1/2 rounded-md bg-[url(https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/408476960_206214862532944_4675659376023419974_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=oWlyT0Tjm7IAX92UMYO&_nc_ht=scontent.fsgn2-11.fna&cb_e2o_trans=t&oh=00_AfAUUYYVlq7DSONTX9-o_fczMy5fHU-koGDHc7-_cx985A&oe=65D230B0)] bg-cover
bg-center bg-no-repeat xs:h-[200px] md:h-[130px]'
                ></div>
              </div>
            </div>
            <div className='mt-10 flex basis-1/2 flex-col items-center justify-center gap-4 pl-2 text-left lg:ml-10 lg:mt-0 lg:items-start'>
              <p className='text-lg font-medium uppercase tracking-widest text-gray-500'>
                Miễn phí bắp 🍿 - Enjoy phim 🎥
              </p>
              <div>
                <div className='mb-2 text-base font-medium tracking-wide text-gray-500'>
                  ĐỪNG BỎ LỠ 5 VỊ BẮP RANG CỰC HẤP DẪN TẠI AMORE 🍿
                </div>
                <div className='mb-2 font-medium leading-8 tracking-wider text-gray-500'>
                  <p>
                    👉Bắp Vị Original: vị bắp basic nhất nhưng lại luôn được ưa chuộng nhất nè, siêu ngọt ngào thơm
                    ngon.
                  </p>
                  <p>👉Bắp Matcha Nhật Bản: Matcha nhưng không hề đắng, Matcha này siêu cute siêu ngọt ạ.</p>
                  <p>
                    👉Bắp Phô Mai Cay: Khách nào thích sự đậm đà the thé thì phô mai cay là lựa chọn hoàn hảo nè, ăn bắp
                    uống cocktail siêu hợp nha!
                  </p>
                  <p>
                    👉Bắp Choco Latenight: Chocolate đêm khuya cho tình yêu thêm mặn nồng! 👉Bắp Caramel Tan Chảy: Còn
                    gì sánh bằng lớp caramel béo ngậy cho đêm thêm đắm thêm say.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10 flex flex-row items-center justify-center'>
          <div className='h-[1px] w-8 bg-gray-200 ' />
          <div className='mx-1 px-2 py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-500 lg:mx-4 lg:px-8'>
            Blog
          </div>
          <div className='h-[1px] w-8 bg-gray-200' />
          <div />
        </div>
        <Blog />
        <div className='my-10 flex flex-row items-center justify-center'>
          <div className='h-[1px] w-8 bg-gray-200 ' />
          <div className='mx-1 px-2 py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-500 lg:mx-4 lg:px-8'>
            menu
          </div>
          <div className='h-[1px] w-8 bg-gray-200' />
          <div />
        </div>
        <SlideShow />
      </div>
    </>
  )
}
