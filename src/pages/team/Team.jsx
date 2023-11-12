import teamPhoto1 from '../../assets/images/team/1.jpg'
import teamPhoto2 from '../../assets/images/team/2.jpg'
import teamPhoto3 from '../../assets/images/team/3.jpg'

import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';


const Team = () => {
    return (
        <div className=" my-14">
            {/* head area */}
            <div className=" text-center">
                <h3 className=" text-2xl font-bold text-[#FF3811]">Team</h3>
                <h2 className=" text-4xl font-bold text-[#151515] dark:text-[#fff]">Meet Our Team</h2>
                <p className=" text-[#737373] text-base font-normal mt-4 w-1/2 mx-auto">the the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            {/* product card area */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {/* product card 1 */}
                <div className="card border border-r-slate-200">
                    <figure className="p-5">
                        <img src={teamPhoto1} alt="not found" className="h-52 rounded-lg"/>
                    </figure>
                    <div className="card-body p-0 pb-6 text-center">
                        <h2 className=" text-[#444] text-2xl font-bold ">Car Engine Plug</h2>
                        <h3 className=" text-[#737373] text-xl font-semibold">Engine Expert</h3>

                        <div className=' flex justify-center gap-3 text-4xl my-1'>
                            <BiLogoFacebookCircle className=' text-sky-900'/>
                            <AiFillTwitterCircle className=' text-blue-400'/>
                            <BiLogoLinkedinSquare className=' text-blue-800'/>
                            <BiLogoInstagram className=' text-[#b9394a]'/>
                        </div>
                    </div>
                </div>

                {/* product card 2 */}
                <div className="card border border-r-slate-200">
                    <figure className=" p-5 ">
                        <img src={teamPhoto2} alt="not found" className="h-52 rounded-lg" />
                    </figure>
                    <div className="card-body p-0 pb-6 text-center">
                        <h2 className=" text-[#444] text-2xl font-bold dark:text-[#fff]">Car Engine Plug</h2>

                        <h3 className=" text-[#737373] text-xl font-semibold dark:text-[#fff]">Engine Expert</h3>
                        
                        <div className=' flex justify-center gap-3 text-4xl my-1'>
                            <BiLogoFacebookCircle className=' text-sky-900'/>
                            <AiFillTwitterCircle className=' text-blue-400'/>
                            <BiLogoLinkedinSquare className=' text-blue-800'/>
                            <BiLogoInstagram className=' text-[#b9394a]'/>
                        </div>
                    </div>
                </div>
                {/* product card 3 */}
                <div className="card border border-r-slate-200">
                    <figure className="p-5">
                        <img src={teamPhoto3} alt="not found" className="h-52 rounded-lg" />
                    </figure>
                    <div className="card-body p-0 pb-6 text-center">
                        <h2 className=" text-[#444] text-2xl font-bold">Car Engine Plug</h2>
                        <h3 className=" text-[#737373] text-xl font-semibold">Engine Expert</h3>

                        <div className=' flex justify-center gap-3 text-4xl my-1'>
                            <BiLogoFacebookCircle className=' text-sky-900'/>
                            <AiFillTwitterCircle className=' text-blue-400'/>
                            <BiLogoLinkedinSquare className=' text-blue-800'/>
                            <BiLogoInstagram className=' text-[#b9394a]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;