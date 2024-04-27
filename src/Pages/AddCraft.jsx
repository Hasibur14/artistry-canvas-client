import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../Provider/AuthProvider";


const AddCraft = () => {

    const { user } = useContext(AuthContext);


    const handleAddCraft = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const item = formData.get('item');
        const subcategory = formData.get('subcategory');
        const description = formData.get('description');
        const image = formData.get('image');
        const rating = formData.get('rating');
        const customization = formData.get('customization');
        const time = formData.get('time');
        const price = formData.get('price');
        const stock = formData.get('stock');
        const userEmail = user.displayName;

        const newCraft = { name, email, item, subcategory, description, image, rating, customization, time, price, stock, userEmail };
        // console.log(newCraft)

        fetch('http://localhost:5000/artCraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }




    return (
        <div className="container mx-auto my-10">
            <section className="p-6 border-2 dark:bg-gray-100 dark:text-gray-900 rounded-2xl bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] ">
                <div className="text-center">
                    <h2 className="lg:text-3xl font-bold">Add Art And Craft</h2>
                </div>
                <form onSubmit={handleAddCraft} action="" className="container lg:ml-44 flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input id="name" name="name" type="text" placeholder="your name" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" name="email" type="email" placeholder="email" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                            </div>
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
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm">Description</label>
                                <input id="description" name="description" type="text" placeholder="description" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
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
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
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
                                <button type="submit" className="btn bg-[#F00] w-full text-white focus:outline-[#FF497C]">ADD</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddCraft;
