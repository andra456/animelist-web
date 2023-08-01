import { Swiper, SwiperSlide } from 'swiper/react';
import { cx } from 'emotion';
// import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Data
type PropsCarousel = {
  data: any[];
  componentItem: (e: any) => JSX.Element;
  onChange?: (e: any) => void;
  classNameNav?: string;
  classNameContainer?: string;
  gap?: number;
};

export default function Carousel({
  data,
  classNameNav = '',
  classNameContainer = '',
  gap = 30,
  onChange = () => console.log(''),
  componentItem,
}: PropsCarousel) {
  const Items = (e: any) => componentItem(e);
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation, EffectFade]}
      className={cx('swiper', classNameNav)}
      onSlideChange={(e) => onChange(data[e.activeIndex])}
    >
      {data?.map((e, i) => (
        <SwiperSlide className={classNameContainer} key={i}>
          <Items {...e} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
