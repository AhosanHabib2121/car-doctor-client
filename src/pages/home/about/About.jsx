import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero h-[500px] my-4">
            <div className="hero-content flex-col lg:flex-row pl-0">
                {/* image area */}
                <div className=' lg:w-1/2 relative'>
                    <img src={person} className=" w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-16 top-1/2 border-8 border-white  rounded-lg shadow-2xl" />
                </div>

                {/* content area */}
                <div className='lg:w-1/2'>
                    <h1 className="text-2xl font-bold text-[#FF3811] ">About Us</h1>
                        <h2 className="py-4 text-[#151515] text-5xl font-bold">We are qualified & of experience in this field
                    </h2>
                    <div className=' space-y-2'>
                    <p className=' text-[#737373]'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                    </p>
                    <p className=' text-[#737373]'>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
                    </p>
                    </div>
                    
                    <button className="btn hover:bg-[#c62b0c] bg-[#FF3811] text-white mt-3">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;