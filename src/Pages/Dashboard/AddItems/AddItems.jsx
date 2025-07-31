import { Helmet } from "react-helmet-async";
import RecipeAnimation from "../../../assets/animation/recipe.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form"
import { LuUtensils } from "react-icons/lu";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async data => {
        // image upload to image bb
        const formData = new FormData();
        formData.append('image', data.photo[0]);
        const res = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${image_hosting_key}`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            // now send the data to the database with image url
            const menuItems = {
                name: data?.recipe,
                category: data?.category,
                price: parseFloat(data?.price),
                recipe: data?.details,
                image: res?.data?.data?.display_url
            }
            const resData = await axiosSecure.post(`/menu`, menuItems);
            reset();
            if (resData.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data?.recipe} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] mt-5">
            <Helmet>
                <title>Bistro Boss | Add Items</title>
            </Helmet>
            <div className="flex w-full border-gray-200 max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg border lg:max-w-4xl py-8">

                <div className="w-full px-6 py-8 md:px-8 lg:w-3/5">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600 "
                            >
                                Recipe Name*
                            </label>
                            <input
                                {...register("recipe", { required: true })}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300"
                                type="recipe"
                                placeholder="Recipe"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row lg:gap-5 items-center">
                            {/* Category Dropdown */}
                            <div className="mt-4 flex-1">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                    htmlFor="LoggingName"
                                >
                                    Category
                                </label>
                                <select
                                    defaultValue="items"
                                    {...register("category", { required: true })}
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    <option disabled={true} value="items">Select a Category</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>

                            {/* Price Input */}
                            <div className="mt-4 flex-1">
                                <label className="block mb-2 text-sm font-medium text-gray-600">
                                    Price
                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-blue-300"
                                    type="number"
                                    placeholder="Price"
                                />
                            </div>
                        </div>

                        <div className="mt-4 relative">
                            <div className="flex justify-between">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Recipe Details*
                                </label>
                            </div>
                            <textarea
                                {...register("details", { required: true })}
                                className="textarea block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Recipe Details"></textarea>
                        </div>

                        <fieldset className=" mt-5">
                            <input
                                {...register("photo", { required: true })}
                                type="file" className="file-input block w-fit text-gray-700 bg-white border rounded-lg focus:border-blue-400 border-gray-300 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-blue-300" />
                        </fieldset>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-fit flex items-center gap-3 cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10"
                            >
                                Add Recipe
                                <LuUtensils className="text-[16px]" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="hidden bg-cover bg-center lg:block lg:w-2/5">
                    <div className="text-center lg:text-left w-[100px] lg:w-[300px] pl-5 mt-24">
                        <Lottie animationData={RecipeAnimation} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItems;
