import { useEffect, useState } from "react";
import ServicesCard from "./servicesCard/ServicesCard";

const Services = () => {
    const [servicesData, setServicesData] = useState([])   
    
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServicesData(data))
    },[])

    return (
        <div className=" my-10">
            {/* head area */}
            <div className=" text-center">
                <h3 className=" text-2xl font-bold text-[#FF3811]">Service</h3>
                <h2 className=" text-4xl font-bold text-[#151515]">Our Service Area</h2>
                <p className=" text-[#737373] text-base font-normal mt-4 w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            {/* card area */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
                {
                    servicesData.map(services => <ServicesCard
                        key={services._id}            
                        services={services}
                    />)
               }
            </div>
            {/* more button */}
            <div className=" text-center mt-14">
                <button className="btn hover:bg-[#FF3811] hover:text-white border-[#FF3811] text-[#FF3811] normal-case bg-white">More Services</button>
            </div>
        </div>
    );
};

export default Services;