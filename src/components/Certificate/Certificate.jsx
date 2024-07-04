import {useState} from "react";
import FullCertificate from "./FullCertificate.jsx";


const Certificate = ({img, title}) => {
    const [fullView, setFullView] = useState(false);
    return (
        <>
            <div className="certificate border-b-2 py-4">
                <div onClick={()=> setFullView(true)}>
                    <img src={img} alt={title}  />
                </div>
                <p className='text-center mt-4 font-semibold text-lg text-blue-900'>{title}</p>
            </div>
            {fullView && <FullCertificate img={img} title={title} close={()=>setFullView(false)}/> }
        </>
    );
};

export default Certificate;
