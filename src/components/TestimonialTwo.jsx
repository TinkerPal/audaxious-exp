import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

import { peopleSay } from '../constants/globalConstant';

import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialTwo = () => {
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };

  const swiperProps = {
    navigation: false,
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className='2xl:container'>
      <div className=''>
        <Swiper
          grabCursor
          effect='slide'
          speed={1000}
          {...swiperProps}
          ref={swiperRefLocal}
          // loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // cssMode={true}
          // speed={1000}
          // navigation={false}
          // mousewheel={true}
          // keyboard={true}
          // modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className='mySwiper'
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            580: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1240: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            2500: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
          //   slidesPerView={1}
          //   spaceBetween={30}
          //   breakpoints={{
          //     768: {
          //       slidesPerView: 3.5,
          //       spaceBetween: 30,
          //     },
          //   }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
        >
          {peopleSay.map((item) => (
            <SwiperSlide
              key={item.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className='bg-[#14171E] rounded-[16px] p-4'>
                <div className=''>
                  <p className='text-[#968F8F] text-[16px] font-Poppins font-normal'>
                    {item.text}
                  </p>
                </div>

                <div className='flex items-center justify-between pt-4 font-normal font-Poppins'>
                  <div className='flex items-center gap-3'>
                    <img
                      src={item.avatar}
                      className='bg-[#686C75] rounded-full'
                    />
                    <div>
                      <p className='text-[15px] text-[#fff]'>{item.name}</p>
                      <p className='text-[13.5px] text-[#686C75]'>
                        {item.handle}
                      </p>
                    </div>
                  </div>
                  <img src={item.platform} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialTwo;
