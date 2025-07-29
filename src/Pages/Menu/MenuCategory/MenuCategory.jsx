import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, desc, img }) => {
  return (
    <div>
      {title && <Cover img={img} heading={title} desc={desc} />}
      <div className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto">
          {items.map((item) => (
            <MenuItems key={item?._id} item={item} />
          ))}
        </div>
        <Link to={`/our-shop/${title}`}>
          <div className="text-center">
            <button className="mt-2 py-[9px] px-6 text-sm bg-transparent cursor-pointer duration-300 hover:bg-gray-900 hover:text-gray-100 border-gray-900 text-gray-900 rounded-lg font-medium border-b-3 uppercase">
              order our favourite food
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
