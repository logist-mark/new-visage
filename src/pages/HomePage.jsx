
import HeroSlider from "../components/Slider/HeroSlider.jsx";
import Partners from "../components/Partners.jsx";
import Trust from "../components/Trust.jsx";
import ContactForm from "../components/ContactForm.jsx";

const HomePage = () => {
    return (
        <div className='w-full'>
            <HeroSlider/>
            <Partners/>
            <Trust/>
            <ContactForm/>
        </div>
    );
};

export default HomePage;