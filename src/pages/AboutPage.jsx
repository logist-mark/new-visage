import React from 'react';
import {FaBalanceScale} from "react-icons/fa";
import {TbTruckDelivery} from "react-icons/tb";
import {IoMdBuild} from "react-icons/io";

const AboutPage = () => {
    return (
        <div className='mt-6 px-6 py-8  grid grid-cols-5 grid-rows-3 gap-x-2 gap-y-4'>
            <div
                className='flex  flex-col justify-center items-center px-4 py-2 col-span-1 row-span-2 shadow-2xl rounded-lg bg-white'>
                <p className='text-[128px] text-blue-900'>25+</p>
                <p className='text-xl'>років на ринку</p>
            </div>
            <div className='col-span-4 row-span-1 flex gap-2 items-center shadow-2xl rounded-lg bg-white px-2'>
                <p className='text-[72px] text-blue-900'>15+</p>
                <p className='text-xl'>років співпраці з концерном Profine GmbH (Німеччина).</p>
            </div>
            <div className='col-span-4 row-span-1 flex gap-2 items-center shadow-2xl rounded-lg bg-white px-2'>
                <p className='text-blue-900'><img className='w-40' src="/ukraine.svg" alt="Ukraine"/></p>
                <p className='text-xl'>Мережа представництв і авторизованих офісів продажів своєї продукції по всій
                    Україні</p>
            </div>
            <div className='col-span-3 row-span-1 flex gap-4 items-center shadow-2xl rounded-lg bg-white px-2'>
                <p className='text-blue-900'><img className='w-48' src="/logos/winkhaus.png" alt="Ukraine"/></p>
                <p className=''>У металопластикових конструкціях компанії використовується тільки фурнітура WINKHAUS
                    (Німеччина), яка завдяки ідеальній конструкції має гарантовану надійність.</p>
            </div>
            <div className='col-span-2 row-span-1 flex gap-4 items-center shadow-2xl rounded-lg bg-white px-2'>
                <p className='text-6xl text-blue-900'><FaBalanceScale/></p>
                <p className=''>Цінова політика в співвідношенні “матеріал-ціна-якість” є найбільш збалансованою з точки
                    зору конкурентоспроможності. </p>
            </div>
            <div className='col-span-1 row-span-1 flex gap-4 items-center shadow-2xl rounded-lg bg-white px-2'>
                <p className='text-5xl text-blue-900'><TbTruckDelivery/></p>
                <p className=''>Швидка та своєчасна доставка </p>
            </div>
            <div className='col-span-1 row-span-1 flex gap-4 items-center shadow-2xl rounded-lg bg-white px-4 py-2'>
                <p className='text-5xl text-blue-900'><IoMdBuild/></p>
                <p className=''>Якісний монтаж</p>
            </div>

        </div>
    );
};

export default AboutPage;