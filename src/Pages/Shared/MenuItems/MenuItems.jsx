const MenuItems = ({ item }) => {
  return (
    <div className="flex items-start gap-4 py-4 border-b mb-12">
      {/* Left Icon */}
      <div className="">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[90px]"
          src={item?.image}
          alt=""
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        {/* Title & Price Row */}
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-800 tracking-wide">
            {item?.name}
            <span className="inline-block w-24 border-t border-dotted border-gray-400 ml-2"></span>
          </h3>
          <span className="text-yellow-600 font-semibold text-sm">
            ${item?.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1">{item?.recipe}</p>
      </div>
    </div>
  );
};

export default MenuItems;
