import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { image, name, recipe, price, _id } = item || [];
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = () => {
    if (user && user?.email) {
      // TODO [send data in database]
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        recipe,
        price
      }
      Swal.fire({
        title: "Are you sure to Add?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Add To Card"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.post('/cart', cartItem)
            .then(res => {
              if (res.data.insertedId) {
                Swal.fire({
                  title: "Add Successfull!!!",
                  text: "Add to Cart Successfull!!!",
                  icon: "success"
                });
                refetch();
              }
            })
        }
      });
    }
    else {
      toast.error('Pease Login');
      navigate('/login', { state: { from: location } })
    }
  }
  return (
    <div className="card bg-gray-100 shadow-sm">
      <figure>
        <img className="h-[250px] w-full object-cover" src={image} />
        <p className="bg-gray-800 absolute text-white py-1 px-2 text-sm top-5 right-5">
          $ {price}
        </p>
      </figure>
      <div className="text-center py-5">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-600 py-2 px-8">{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={handleAddToCart} className="mt-2 py-[9px] px-6 text-sm bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300 border-amber-500 text-amber-500 rounded-lg font-medium border-b-3">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
