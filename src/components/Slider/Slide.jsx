import React from 'react';

const Slide = ({img, title, text}) => {
    return (
        <div className='w-full h-full py-12 px-16' style={{
            backgroundImage: `linear-gradient(to right,  rgba(30, 58, 138, 0.6), transparent), url(${img})`,
            backgroundPosition: 'right',
            backgroundSize: 'cover'
        }}>
            <div className='w-1/2 '>
                <p className='text-white text-7xl font-bold mb-10 '>{title}</p>
                <p className='text-2xl text-white leading-10 font-light'>{text}</p>
            </div>
        </div>
    );
}
export default Slide;