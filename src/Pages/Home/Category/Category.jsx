import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="w-11/12 mx-auto my-10">
      <SectionTitle
        subTitle={"From 11.00AM to 10.00PM"}
        title={"Order Online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        {/* SALADS */}
        <SwiperSlide>
          <div className="relative overflow-hidden rounded-md shadow-md">
            <img src={slider1} alt="Salad" className="w-full object-cover" />
            <div className="absolute bottom-3 left-0 w-full text-center">
              <h3 className="text-white text-lg font-semibold drop-shadow-md">
                SALADS
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* PIZZAS */}
        <SwiperSlide>
          <div className="relative overflow-hidden rounded-md shadow-md">
            <img src={slider2} alt="Soup" className="w-full object-cover" />
            <div className="absolute bottom-3 left-0 w-full text-center">
              <h3 className="text-white text-lg font-semibold drop-shadow-md">
                PIZZAS
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* SOUPS */}
        <SwiperSlide>
          <div className="relative overflow-hidden rounded-md shadow-md">
            <img src={slider3} alt="Pizza" className="w-full object-cover" />
            <div className="absolute bottom-3 left-0 w-full text-center">
              <h3 className="text-white text-lg font-semibold drop-shadow-md">
                SOUPS
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* DESSERTS */}
        <SwiperSlide>
          <div className="relative overflow-hidden rounded-md shadow-md">
            <img src={slider4} alt="Dessert" className="w-full object-cover" />
            <div className="absolute bottom-3 left-0 w-full text-center">
              <h3 className="text-white text-lg font-semibold drop-shadow-md">
                DESSERTS
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* SALADS */}
        <SwiperSlide>
          <div className="relative overflow-hidden rounded-md shadow-md">
            <img src={slider5} alt="Salad" className="w-full object-cover" />
            <div className="absolute bottom-3 left-0 w-full text-center">
              <h3 className="text-white text-lg font-semibold drop-shadow-md">
                SALADS
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
