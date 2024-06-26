import React from 'react';

const partnersLogos = [
    'winkhaus.png',
    'profine.png',
    'renolit.png',
    'alumotrade.png',
    'avatas.png',
    'viknaland.png',
    'alutech.png',
    'aluprof.png',
    'framex.png',
    'wintech.png',
    'workua.png',
    'oknaua.png'
]


const Partners = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl lg:text-5xl text-white font-bold'>Наші партнери</h2>
            <div className="mt-10 w-full py-4 text-white grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
                {partnersLogos.map(logo =>
                    <div key={logo} className='bg-white rounded-lg px-4 py-2 flex justify-center items-center '><img
                        src={logo} alt="logo"/></div>)}
            </div>
        </div>
    );
};

export default Partners;