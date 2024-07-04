import {FaCross} from "react-icons/fa";
import {RxButton, RxCross1} from "react-icons/rx";


const FullCertificate = ({img, title, close}) => {
    return (
        <div  className="fixed top-0 left-0 right-0 bottom-0 z-30 w-screen h-screen bg-black/70 overflow-hidden flex justify-center items-center py-6 xl:py-10 duration-200">
            <button onClick={close} className='absolute top-10 right-10 text-4xl text-white hover:text-amber-600'><RxCross1/></button>
            <img src={img} alt={title} className='xl:w-1/3'/>

        </div>
    );
};

export default FullCertificate;
