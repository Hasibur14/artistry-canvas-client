import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {

    const artAndCrafts = useLoaderData();


    return (
        <div className="container mx-auto my-6 border-2 rounded-sm">
            <Helmet>
                <title>AllArt&Craft - Artistry
Canvas</title>
            </Helmet>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="hidden md:table-cell">Index</th>
                                <th className="table-cell md:hidden">Idx</th>
                                <th className="table-cell">Subcategory Name</th>
                                <th className="table-cell">Stock Status</th>
                                <th className="table-cell">Processing Time</th>
                                <th>User Email</th>
                                <th className="table-cell">Price</th>
                                <th className="table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artAndCrafts.map((item, index) => (
                                <tr key={index}>
                                    <td className="hidden md:table-cell">{index + 1}</td>
                                    <td className="table-cell md:hidden">{index + 1}</td>
                                    <td className="table-cell">{item.subcategory}</td>
                                    <td className="table-cell">{item.stock}</td>
                                    <td className="table-cell">{item.time}</td>
                                    <td>{item.userEmail}</td>
                                    <td className="table-cell">{item.price}</td>
                                    <td className="table-cell">
                                        <Link to={`/artCraft/${item._id}`} className="btn bg-[#F00] text-white">View Details</Link>
                                    </td>
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
