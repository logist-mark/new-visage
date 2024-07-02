import React from 'react';
import PhotoSlider from "./Slider/PhotoSlider.jsx";
import Gallery from "./Slider/Gallery.jsx";

const ProductionSection = ({title, text, photos, rightSide}) => {
    return (
        <div className={`w-full h-[600px] mx-auto flex flex-col ${rightSide ? 'xl:flex-row-reverse justify-between' : 'xl:flex-row   justify-between'}   bg-white/70 rounded-xl px-4 py-16`}>
            <div className={`w-full text-center ${rightSide ? 'xl:text-right' : 'xl:text-left'}  xl:w-1/3 px-4`}>
                <h2 className='text-2xl text-blue-900 font-bold mb-4  xl:mb-6'>
                    {title}
                </h2>
                <p className='text-xl xl:pr-6 mb-5 '>{text}</p>
            </div>
            <Gallery photos={photos}/>
        </div>
    );
};

export default ProductionSection;