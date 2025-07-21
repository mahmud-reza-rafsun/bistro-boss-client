import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  console.log(menu);
  return (
    <section>
      <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto">
        {
            menu.map((item) => <MenuItems key={item?._id} item={item}/>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
