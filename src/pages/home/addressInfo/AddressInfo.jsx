import timetable from '../../../assets/icons/timetable.png'
import call from '../../../assets/icons/call.png'
import location from '../../../assets/icons/location.png'

const AddressInfo = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-white mb-10 py-20 px-16 rounded-xl bg-[#151515]">
            {/* time part */}
            <div className=' flex items-center gap-4'>
                <img src={timetable} alt="not" />
                <div>
                    <p className=' text-sm font-normal text-[#c4c4c4]'>We are open monday-friday</p>
                    <h2 className=' text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            {/* contact part */}
            <div className=' flex items-center gap-4'>
                <img src={call} alt="not" />
                <div>
                    <p className=' text-sm font-normal text-[#c4c4c4]'>Have a question?</p>
                    <h2 className=' text-2xl font-bold'>+2546 251 2658</h2>
                </div>
            </div>
            {/* address part */}
            <div className=' flex items-center gap-4'>
                <img src={location} alt="not" />
                <div>
                    <p className=' text-sm font-normal text-[#c4c4c4]'>Need a repair? our address</p>
                    <h2 className=' text-2xl font-bold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default AddressInfo;