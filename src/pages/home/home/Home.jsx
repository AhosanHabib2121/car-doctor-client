import Team from "../../team/Team";
import About from "../about/About";
import AddressInfo from "../addressInfo/AddressInfo";
import Banner from "../banner/Banner";
import Features from "../features/Features";
import OurProduct from "../ourProduct/OurProduct";
import Services from "../services/Services";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About />
            <Services />
            <AddressInfo />
            <OurProduct />
            <Team />
            <Features />
            <Testimonial/>
        </div>
        
    );
};

export default Home;