const FoodCard = ({item}) => {
    const { image, name, recipe } = item || [];
  return (
      <div className="card bg-gray-100 shadow-sm">
        <figure>
          <img className="h-[250px] w-full object-cover" src={image} />
        </figure>
        <div className="text-center py-5">
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-sm text-gray-600 py-2 px-8">
           {recipe}
          </p>
          <div className="card-actions justify-center">
            <button className="mt-2 py-[9px] px-6 text-sm bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300 border-amber-500 text-amber-500 rounded-lg font-medium border-b-3">
              Add To Card
            </button>
          </div>
        </div>
      </div>
  );
};

export default FoodCard;
