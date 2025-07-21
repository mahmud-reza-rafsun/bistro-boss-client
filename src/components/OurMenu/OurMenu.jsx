import bgImg from "../../assets/home/featured.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const OurMenu = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content">
        <div className="">
          <div>
            <SectionTitle subTitle={"Check it out"} title={"FROM OUR MENU"} />
          </div>
          <div className="flex justify-between flex-col lg:flex-row max-w-6xl mx-auto items-center gap-16">
            <div className="">
              <img className="w-3xl rounded-md" src={bgImg} alt="" />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="mt-2 py-[9px] px-6 text-sm bg-transparent cursor-pointer duration-300 hover:bg-gray-200 hover:text-gray-700 border-gray-100 text-gray-100 rounded-lg font-medium border-b-3">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
