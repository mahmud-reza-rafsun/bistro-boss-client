import coma from "../../assets/coma.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="text-center space-y-5">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <div>
            <img className="w-[50px] mx-auto py-7" src={coma} alt="" />
          </div>
          <p className="px-16">
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <h2 className="text-amber-500 text-xl">JANE DOE</h2>
        </SwiperSlide>
        <SwiperSlide className="text-center space-y-5">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <div>
            <img className="w-[50px] mx-auto py-7" src={coma} alt="" />
          </div>
          <p className="px-16">
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <h2 className="text-amber-500 text-xl">JANE DOE</h2>
        </SwiperSlide>
        <SwiperSlide className="text-center space-y-5">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <div>
            <img className="w-[50px] mx-auto py-7" src={coma} alt="" />
          </div>
          <p className="px-16">
            Various version have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <h2 className="text-amber-500 text-xl">JANE DOE</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
