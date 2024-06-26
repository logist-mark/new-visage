import {motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
const Slides = ({slides, imgIndex}) => {
    return (
        <motion.div


            animate={{
                translateX: `-${imgIndex * 100}%`
            }}
            transition={{
                duration: .6
            }}
            className='flex  h-full'>
            {/* eslint-disable-next-line react/prop-types */}
            {slides.map(slide => <div
                key={slide.id}
                className='w-full h-full px-4 py-2  xl:py-12 xl:px-16 shrink-0 rounded-xl overflow-hidden' style={{
                backgroundImage: `url(${slide.img})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                borderRadius: '30px',
                borderImage: 'fill 0 linear-gradient(#000, #0003)'

            }}>
                <div className='w-full xl:w-1/2 '>
                    <p className='text-white text-5xl xl:text-7xl font-bold mb-6 xl:mb-10 text-center xl:text-left'>{slide.title}</p>
                    <p className='xl:text-2xl text-white xl:leading-10 font-light'>{slide.text}</p>
                </div>
            </div>)}
        </motion.div>
    );
}
export default Slides;