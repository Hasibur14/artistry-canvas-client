import { useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {

    const artAndCrafts = useLoaderData();


    return (
        <div className="container mx-auto my-6 border-2">
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subcategory</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artAndCrafts.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.subcategory}</td>
                                    <td>{item.price}</td>
                                    <td><button className="btn bg-[#F00] text-white">View Details</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllArtAndCraft;