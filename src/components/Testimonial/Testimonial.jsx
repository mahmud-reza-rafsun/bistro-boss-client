import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className="mb-12 w-11/12 mx-auto mt-5">
      <div>
        <SectionTitle
          subTitle={"What Our Clients Say"}
          title={"TESTIMONIALS"}
        />
      </div>
      <Slider />
    </div>
  );
};

export default Testimonial;
