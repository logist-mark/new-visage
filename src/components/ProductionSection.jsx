import React from 'react';
import PhotoSlider from "./Slider/PhotoSlider.jsx";

const ProductionSection = ({title, text, photos, rightSide}) => {
    return (
        <div className={`flex flex-col ${rightSide ? 'xl:flex-row-reverse justify-between' : 'xl:flex-row   justify-between'}   bg-white/80 rounded-xl px-4 py-8`}>
            <div className={`w-full text-center ${rightSide ? 'xl:text-right' : 'xl:text-left'}  xl:w-1/2 px-4`}>
                <h2 className='text-2xl text-blue-900 font-bold mb-4 xl:text-4xl xl:mb-6'>
                    {title}
                </h2>
                <p className='xl:text-2xl xl:pr-6 mb-5 '>{text}</p>
            </div>
            <PhotoSlider photos={photos}/>
        </div>
    );
};

export default ProductionSection;