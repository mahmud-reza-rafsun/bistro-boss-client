import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({items}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8 w-11/12 mx-auto">
        {items.map((item) => (
          <MenuItems key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
