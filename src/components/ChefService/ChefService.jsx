import chefImg from '../../assets/home/chef-service.jpg'

const ChefService = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            `url(${chefImg})`,
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl py-14 lg:py-24 px-8 bg-white text-black">
            <h1 className="mb-5 text-2xl lg:text-4xl font-semibold">Bistro Boss</h1>
            <p className="mb-5 text-sm lg:text-base">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
