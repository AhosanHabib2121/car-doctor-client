import { BsArrowRight } from "react-icons/bs";

const ServicesCard = ({ services }) => {
    const { title, img, price } = services;
    
    return (
        <div className="card border border-r-slate-400">
            <figure className="px-7 pt-7">
                <img src={img} alt="not found" className="rounded-xl h-52" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-[#444] text-2xl font-bold">{title}</h2>
                <div className=" flex justify-between items-center">
                    <h3 className=" text-[#FF3811] text-xl font-semibold">Price: ${price}</h3>
                    <div className="card-actions justify-end">
                        <button>
                            <BsArrowRight className=" text-[#FF3811] text-xl"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
// ServicesCard.propTypes = {
//     services: PropTypes.object
// }
export default ServicesCard;