import gallery1 from '../assets/images/gallery-1.jpg'
import gallery10 from '../assets/images/gallery-10.png'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.jpg'
import gallery7 from '../assets/images/gallery-7.jpg'
import gallery8 from '../assets/images/gallery-8.png'
import gallery9 from '../assets/images/gallery-9.jpg'




const Gallery = () => {
    return (
        <div>
            <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={gallery1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery5} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery6} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery7}/>
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery8} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src={gallery9} />
                    <img src={gallery10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default Gallery;