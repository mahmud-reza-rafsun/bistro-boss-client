import useMenu from "../../../hooks/useMenu";
import ManageItemsTable from "./ManageItemsTable";

const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <div>
            <div className="bg-gray-100 p-4 rounded-md">
                <div className="px-3 bg-green-200 py-3 rounded-md">
                    <h2 className="text-gray-600 text-[15px] font-medium">Total Items: {menu.length}</h2>
                </div>
                {/* all user tab */}
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Items Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.length > 0 ? menu.map((item, index) => <ManageItemsTable key={item?._id} item={item} index={index} />) :
                                    <tr>
                                        <td colSpan="6" className='text-sm p-3 font-semibold text-gray-500 text-center'>
                                            No Items Found
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;