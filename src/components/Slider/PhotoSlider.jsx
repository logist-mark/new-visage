import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

const PhotoSlider = ({photos}) => {
    const [index, setIndex] = useState(0)
    const x = index * 700;

    function handleNextSlide() {
        setIndex(prevIndex => prevIndex + 1 > photos.length - 1 ? 0 : prevIndex + 1);
    }

    function handlePrevSlide() {
        setIndex(prevIndex => prevIndex - 1 < 0 ? photos.length - 1 : prevIndex - 1);
    }


    useEffect(() => {
        const interval = setInterval(handleNextSlide, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [index])
    return (
        <div className='w-full xl:w-[700px] flex overflow-hidden rounded-lg'>
            <motion.div
                animate={{
                    translateX: `-${x}px`
                }}
                transition={{
                    duration: .6
                }}
                className='flex '>

                {photos.map((photo, index) =>
                    <div key={index}
                         className='w-[400px] xl:w-[700px] h-[700px] xl:h-[600px]'
                         style={{
                             backgroundImage: `url(${photo})`,
                             backgroundSize: 'cover',
                         }}></div>
                )}
            </motion.div>

        </div>
    );
};

export default PhotoSlider;