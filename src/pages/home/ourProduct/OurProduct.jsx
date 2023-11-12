import productImage1 from '../../../assets/images/products/1.png'
import productImage2 from '../../../assets/images/products/2.png'
import productImage3 from '../../../assets/images/products/3.png'
import ReactStars from "react-rating-stars-component";

const OurProduct = () => {
    return (
        <div  className=" my-14">
             {/* head area */}
            <div className=" text-center">
                <h3 className=" text-2xl font-bold text-[#FF3811]">Popular Products</h3>
                <h2 className=" text-4xl font-bold text-[#151515] dark:text-[#fff]">Browse Our Products</h2>
                <p className=" text-[#737373] text-base font-normal mt-4 w-1/2 mx-auto">the the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            {/* product card area */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {/* product card 1 */}
                <div className="card border border-r-slate-200">
                    <figure className="p-5 bg-slate-100 m-5 rounded-lg ">
                        <img src={productImage1} alt="not found" className="h-52" />
                    </figure>
                    <div className="card-body p-0 pb-6 text-center">
                        {/* rating */}
                        <div className='grid justify-center'>
                            <ReactStars
                                value={4}
                                count={5}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                edit={false}
                            />,
                        </div>
                        <h2 className=" text-[#444] text-2xl font-bold -mt-8">Car Engine Plug</h2>
                            <h3 className=" text-[#FF3811] text-xl font-semibold">$20.00</h3>
                    </div>
                </div>

                {/* product card 2 */}
                <div className="card border border-r-slate-200">
                    <figure className=" p-5 bg-slate-100 m-5 rounded-lg ">
                        <img src={productImage2} alt="not found" className="h-52" />
                    </figure>
                    <div className="card-body p-0 pb-6 text-center">
                        {/* rating */}
                        <div className='grid justify-center'>
                            <ReactStars
                                value={4}
                                count={5}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                edit={false}
                            />,
                        </div>
                        <h2 className=" text-[#444] text-2xl font-bold -mt-8">Car Engine Plug</h2>
                            <h3 className=" text-[#FF3811] text-xl font-semibold">$20.00</h3>
                    </div>
                </div>
                {/* product card 3 */}
                <div className="card border border-r-slate-200">
                    <figure className="p-5 bg-slate-100 m-5 rounded-lg ">
                        <img src={productImage3} alt="not found" className="h-52" />
                    </figure>
                    <div className="card-body p-0 pb-6 text-center">
                        {/* rating */}
                        <div className='grid justify-center'>
                            <ReactStars
                                value={4}
                                count={5}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                edit={false}
                            />,
                        </div>
                        <h2 className=" text-[#444] text-2xl font-bold -mt-8">Car Engine Plug</h2>
                            <h3 className=" text-[#FF3811] text-xl font-semibold">$20.00</h3>
                    </div>
                </div>
            </div>

            {/* more button */}
            <div className=" text-center mt-14">
                <button className="btn hover:bg-[#FF3811] hover:text-white border-[#FF3811] text-[#FF3811] normal-case bg-white">More Products</button>
            </div>
        </div>
    );
};

export default OurProduct;