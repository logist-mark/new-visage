import React from 'react';

const partnersLogos = [
    'logos/winkhaus.png',
    'logos/profine.png',
    'logos/renolit.png',
    'logos/alumotrade.png',
    'logos/avatas.png',
    'logos/viknaland.png',
    'logos/alutech.png',
    'logos/aluprof.png',
    'logos/framex.png',
    'logos/wintech.png',
    'logos/workua.png',
    'logos/oknaua.png'
]


const Partners = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl lg:text-5xl text-blue-900 font-bold'>Наші партнери</h2>
            <div className="mt-10 w-full py-4 text-blue-900 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
                {partnersLogos.map(logo =>
                    <div key={logo} className='bg-white rounded-lg px-4 py-2 flex justify-center items-center shadow-md'><img
                        src={logo} alt="logo"/></div>)}
            </div>
        </div>
    );
};

export default Partners;