import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import { Pagination } from "swiper";
import './Category.css'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Category = () => {
  return (
      <section>
          <SectionTitle
              subHeading={"From 11.00am to 12.00pm"}
              heading={'Order Online'}
          ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
              <SwiperSlide>
                  <img src={slide1} alt="" />
                  <h3 className="text-4xl text-white  uppercase text-center -mt-16">
                      Salad
                  </h3>
        </SwiperSlide>
              <SwiperSlide>
                  <img src={slide2} alt="" />
                  <h3 className="text-4xl text-white  uppercase text-center -mt-16">
                      pizza
                  </h3>
        </SwiperSlide>
              <SwiperSlide>
                  <img src={slide3} alt="" />
                  <h3 className="text-4xl text-white  uppercase text-center -mt-16">
                      soup
                  </h3>
        </SwiperSlide>
              <SwiperSlide>
                  <img src={slide4} alt="" />
                  <h3 className="text-4xl text-white  uppercase text-center -mt-16">
                  desserts
                  </h3>
        </SwiperSlide>
              <SwiperSlide>
                  <img src={slide5} alt="" />
                  <h3 className="text-4xl text-white  uppercase text-center -mt-16">
                      salad
                  </h3>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Category;
