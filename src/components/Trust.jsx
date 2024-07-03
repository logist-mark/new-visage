import React from 'react';

const trusteesLogos = [
    'logos/alexa.png',
    'logos/arthouse.png',
    'logos/avila.png',
    'logos/brain.png',
    'logos/elitbud.png',
    ' logos/izovat.png',
    'logos/krep.png',
    'logos/kyiv.png',
    'logos/pbf.png',
    ' logos/rud.png',
    ' logos/zhkk.png',
    ' logos/zok.png'
]


const Trust = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl lg:text-5xl text-blue-900 font-bold text-right'>Нам довіряють</h2>
            <div className="mt-10 w-full py-4 text-white grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
                {trusteesLogos.map(logo =>
                    <div key={logo}
                         className='bg-white rounded-lg px-4 py-2 flex justify-center items-center shadow-md'><img
                        src={logo} alt="logo"/></div>)}
            </div>
        </div>
    );
};

export default Trust;