

const AddCraft = () => {


    return (
        <div className="container mx-auto my-10">
            <section className="p-6 border-2 dark:bg-gray-100 dark:text-gray-900 rounded-2xl
           bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4] ">
            <div className="text-center">
                <h2 className="lg:text-3xl font-bold">Add Art And Craft</h2>
            </div>
                <form noValidate="" action="" className="container lg:ml-44 flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input id="name" name="name" type="text" placeholder="your name" className="w-full rounded-md  dark:text-gray-50  dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" name="email" type="email" placeholder="email" className="w-full rounded-md dark:text-gray-50 dark:border-gray-300  p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="item" className="text-sm">Item Name</label>
                                <input id="item" name="item" type="text" placeholder="item name" className="w-full rounded-md  dark:text-gray-50  dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="stock" className="text-sm">StockStatus</label>
                                <select
                                    name="stock"
                                    id="stock"
                                    className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                    type="text"
                                    placeholder="stock status"
                                >
                                    <option value="landscapePainting" selected>
                                        Landscape Painting
                                    </option>
                                    <option value="portraitDrawing" selected>
                                        Portrait Drawing
                                    </option>
                                    <option value="watercolorPainting" selected>
                                        Water color Painting
                                    </option>
                                    <option value="oilPainting" selected>
                                        Oil Painting
                                    </option>
                                    <option value="charcoalSketching" selected>
                                        Charcoal Sketching
                                    </option>
                                    <option value="notAvailable" selected>
                                        cartoonDrawing
                                    </option>
                                </select>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm">Description</label>
                                <input id="description" name="description" type="text" placeholder="description" className="w-full rounded-md  dark:text-gray-50  dark:border-gray-300 p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="image" className="text-sm">Image URL</label>
                                <input id="image" name="image" type="text" placeholder="image URl" className="w-full rounded-md dark:text-gray-50  dark:border-gray-300  p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="rating" className="text-sm">Your Rating</label>
                                <input id="rating" type="text" placeholder="rating" className="w-full rounded-md dark:text-gray-50  dark:border-gray-300  p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">Customization</label>
                                <select
                                    name="customization"
                                    id="stock"
                                    className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                    type="text"
                                    placeholder="customization"
                                >

                                    <option value="yes" selected>
                                        Yes
                                    </option>
                                    <option value="no" selected>
                                        No
                                    </option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="time" className="text-sm">Processing Time</label>
                                <input id="time" name="time" type="text" placeholder="processing time" className="w-full rounded-md   dark:text-gray-50  dark:border-gray-300  p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="price" className="text-sm">Price</label>
                                <input id="price" name="price" type="text" placeholder="price" className="w-full rounded-md  dark:text-gray-50  dark:border-gray-300  p-3 border focus:outline-[#FF497C]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="stock" className="text-sm">StockStatus</label>
                                <select
                                    name="stock"
                                    id="stock"
                                    className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                    type="text"
                                    placeholder="stock status"
                                >
                                    <option value="stock" selected>
                                        In stock
                                    </option>
                                    <option value="order" selected>
                                        Made to Order
                                    </option>
                                    <option value="notAvailable" selected>
                                        Not Available
                                    </option>
                                </select>
                            </div>
                            <div className="col-span-full">
                                <button className="btn bg-[#F00] w-full text-white ">Add</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddCraft;