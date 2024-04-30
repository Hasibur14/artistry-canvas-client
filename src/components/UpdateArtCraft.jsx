import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateArtCraft = () => {

    const { id } = useParams()


    //Update
    const handleUpdateCraft = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const item = formData.get('item');
        const subcategory = formData.get('subcategory');
        const description = formData.get('description');
        const image = formData.get('image');
        const rating = formData.get('rating');
        const customization = formData.get('customization');
        const time = formData.get('time');
        const price = formData.get('price');
        const stock = formData.get('stock');

        const updateCraft = { item, subcategory, description, image, rating, customization, time, price, stock };
        console.log(updateCraft);


        fetch(`https://assignment-10-server-psi-six.vercel.app/artCraftUpdate/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Update successfully');
                }
            })

    }

    return (
        <div>
            <div className="container mx-auto my-10">
            <Helmet>
                <title>UpdateArtCraft - Artistry Canvas</title>
            </Helmet>
                <section className="p-6 border-2 dark:bg-gray-100 dark:text-gray-900 rounded-2xl bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] ">
                    <div className="text-center">
                        <h2 className="lg:text-3xl font-bold">update Art And Craft</h2>
                    </div>
                    <form onSubmit={handleUpdateCraft} action="" className="container lg:ml-44 flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="item" className="text-sm">Item Name</label>
                                    <input id="item" name="item" type="text" placeholder="item name" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="subcategory" className="text-sm">Subcategory Name</label>
                                    <select
                                        name="subcategory"
                                        id="subcategory"
                                        className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                    >
                                        <option value="landscapePainting">Landscape Painting</option>
                                        <option value="portraitDrawing">Portrait Drawing</option>
                                        <option value="watercolorPainting">Watercolor Painting</option>
                                        <option value="oilPainting">Oil Painting</option>
                                        <option value="charcoalSketching">Charcoal Sketching</option>
                                        <option value="cartoonDrawing">Cartoon Drawing</option>
                                    </select>
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="image" className="text-sm">Image URL</label>
                                    <input id="image" name="image" type="text" placeholder="image URL" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="rating" className="text-sm">Your Rating</label>
                                    <input id="rating" name="rating" type="text" placeholder="rating" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="customization" className="text-sm">Customization</label>
                                    <select
                                        name="customization"
                                        id="customization"
                                        className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                    >
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="time" className="text-sm">Processing Time</label>
                                    <input id="time" name="time" type="text" placeholder="processing time" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="price" className="text-sm">Price</label>
                                    <input id="price" name="price" type="text" placeholder="price" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="stock" className="text-sm">Stock Status</label>
                                    <select
                                        name="stock"
                                        id="stock"
                                        className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                    >
                                        <option value="inStock">In Stock</option>
                                        <option value="madeToOrder">Made to Order</option>
                                        <option value="notAvailable">Not Available</option>
                                    </select>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="description" className="text-sm">Description</label>
                                    <input id="description" name="description" type="text" placeholder="description" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                                </div>
                                <div className="col-span-full">
                                    <button type="submit" className="btn bg-[#F00] w-full text-white focus:outline-[#FF497C]">Update</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>

        </div>
    );
};

export default UpdateArtCraft;