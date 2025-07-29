import { Parallax } from "react-parallax";

const Cover = ({ img, heading, desc }) => {
  return (
    <Parallax
      blur={{ min: -70, max: 70 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero min-h-[75vh]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl capitalize font-bold">{heading}</h1>
            <p className="mb-5">{desc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
