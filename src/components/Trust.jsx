import React from 'react';

const trusteesLogos = [
    'alexa.png',
    'arthouse.png',
    'avila.png',
    'brain.png',
    'elitbud.png',
    ' izovat.png',
    'krep.png',
    'kyiv.png',
    'pbf.png',
    ' rud.png',
    ' zhkk.png',
    ' zok.png'
]


const Trust = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl text-white font-bold '>Нам довіряють</h2>
            <div className="mt-10 w-full py-4 text-white grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
                {trusteesLogos.map(logo =>
                    <div key={logo} className='bg-white rounded-lg px-4 py-2 flex justify-center items-center '><img
                        src={logo} alt="logo"/></div>)}
            </div>
        </div>
    );
};

export default Trust;