const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="py-10 md:w-3/12 mx-auto text-center">
      <p className="text-yellow-500 text-sm italic">--- {subTitle} ---</p>
      <h2 className="text-lg lg:text-3xl font-semibold border-y-2 border-gray-400 uppercase py-1 lg:py-3 mt-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
