import dessert from "../../assets/menu/dessert-bg.jpeg";
import salad from "../../assets/menu/salad-bg.jpg";
import pizza from "../../assets/menu/pizza-bg.jpg";

const RecommendChefCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
      <div className="card bg-gray-100 shadow-sm">
        <figure>
          <img className="h-[250px] w-full object-cover" src={dessert} />
        </figure>
        <div className="text-center py-5">
          <h2 className="font-semibold text-lg">Caeser Dessert</h2>
          <p className="text-sm text-gray-600 py-2 px-8">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-center">
            <button className="mt-2 py-[9px] px-6 text-sm bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300 border-amber-500 text-amber-500 rounded-lg font-medium border-b-3">
              Add To Card
            </button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-100 shadow-sm">
        <figure>
          <img className="h-[250px] w-full object-cover" src={salad} />
        </figure>
        <div className="text-center py-5">
          <h2 className="font-semibold text-lg">Caeser Salad</h2>
          <p className="text-sm text-gray-600 py-2 px-8">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-center">
            <button className="mt-2 py-[9px] px-6 text-sm bg-gray-800 cursor-pointer hover:bg-gray-900 duration-300 text-amber-500 rounded-lg font-medium">
              Add To Card
            </button>
          </div>
        </div>
      </div>

      <div className="card bg-gray-100 shadow-sm">
        <figure>
          <img className="h-[250px] w-full object-cover" src={pizza} />
        </figure>
        <div className="text-center py-5">
          <h2 className="font-semibold text-lg">Caeser Pizza</h2>
          <p className="text-sm text-gray-600 py-2 px-8">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-center">
            <button className="mt-2 py-[9px] px-6 text-sm bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300 border-amber-500 text-amber-500 rounded-lg font-medium border-b-3">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendChefCard;
