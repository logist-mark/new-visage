import React from 'react';
import PhotoSlider from "./Slider/PhotoSlider.jsx";
import Gallery from "./Slider/Gallery.jsx";

const ProductionSection = ({title, text, photos, rightSide, delay}) => {
    return (
        <div className={`w-full  2xl:h-[580px] mx-auto flex flex-col shadow-lg ${rightSide ? 'xl:flex-row-reverse justify-between' : 'xl:flex-row   justify-between'}   bg-white/70 rounded-xl px-4 py-16 mb-6`}>
            <div className={`w-full flex flex-col items-center  justify-center text-center ${rightSide ? 'xl:text-right' : 'xl:text-left'}  xl:w-1/2 px-4`}>
                <h2 className='text-2xl 2xl:text-3xl text-blue-900 font-bold mb-4  xl:mb-6'>
                    {title}
                </h2>
                <p className='text-lg 2xl:text-2xl xl:pr-6 mb-5 '>{text}</p>
            </div>
            <Gallery photos={photos} delay={delay}/>
        </div>
    );
};

export default ProductionSection;