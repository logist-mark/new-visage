import React from 'react';
import FlipCard from "../components/FlipCard.jsx";
import {FaBalanceScale} from "react-icons/fa";
import {TbTruckDelivery} from "react-icons/tb";
import {IoMdBuild} from "react-icons/io";
import {BsPeopleFill} from "react-icons/bs";

const TestPage = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-5  gap-3 h-[760px] py-6 px-4">

            <FlipCard text="Компанія ТОВ ВК “Марк” є одним з провідних виробників металопластикових віконних і дверних конструкцій на ринку України."
                      cols={2}
                      >
                <div className='flex gap-4 items-center'>
                    <p className='text-3xl text-blue-900'>25+</p>
                    <p className='text-xl'>років на ринку</p>
                </div>
            </FlipCard>

            <FlipCard text="У нас є мережа представництв і авторизованих офісів продажів своєї продукції по всій Україні. Місце знаходження виробництва м. Житомир. За період існування компанія придбала серйозний досвід у виробництві, продажу та виконанні монтажних робіт віконної і дверної продукції "
                      cols={3} >
                <div className='flex gap-2 items-center'>
                    <p className='text-blue-900'><img className='w-32' src="/ukraine.svg" alt="Ukraine"/></p>
                    <p className='text-xl'>Мережа представництв і авторизованих офісів продажів своєї продукції по всій
                        Україні</p>
                </div>
            </FlipCard>
            <FlipCard
                text="І вже більше 10 років співпрацюємо з концерном Profine GmbH (Німеччина), представляючи конструкції з профілю Trocal та Kömmerling."
                cols={3} >
                <div className='flex gap-2 items-center'>
                    <p className='text-3xl text-blue-900'>15+</p>
                    <p className='text-xl'>років співпраці з концерном Profine GmbH (Німеччина).</p>
                </div>
            </FlipCard>
            <FlipCard text="Компанія ТОВ ВК “Марк” є одним з провідних виробників металопластикових віконних і дверних конструкцій на ринку України."
                      cols={2}
                     >
                <div className='flex gap-4 items-center'>
                    <p className='text-6xl text-blue-900'><BsPeopleFill/></p>
                    <p className=''>Тисячі задоволених клієнтів по всій Україні. </p>
                </div>
            </FlipCard>



            <FlipCard text="Test Page" cols={2} >
                <div className='flex gap-2 items-center'>
                    <p className='text-6xl text-blue-900'><FaBalanceScale/></p>
                    <p className=''>Цінова політика в співвідношенні “матеріал-ціна-якість” є найбільш збалансованою з
                        точки
                        зору конкурентоспроможності. </p>
                </div>
            </FlipCard>
            <FlipCard text="Test Page" cols={3} >
                <div className='flex gap-2 items-center'>
                    <p className='text-blue-900'><img className='w-48' src="/logos/winkhaus.png" alt="Ukraine"/></p>
                    <p className=''>У металопластикових конструкціях компанії використовується тільки фурнітура WINKHAUS
                        (Німеччина), яка завдяки ідеальній конструкції має гарантовану надійність.</p>
                </div>
            </FlipCard>
            <FlipCard text="Test Page" cols={2} >
                <div className='flex gap-2 items-center'>
                    <p className='text-5xl text-blue-900'><TbTruckDelivery/></p>
                    <p className=''>Швидка та своєчасна доставка </p>
                </div>
            </FlipCard>


            <FlipCard text="Test Page" cols={1} >
                <div className='flex gap-2 items-center'>
                    <p className='text-5xl text-blue-900'><IoMdBuild/></p>
                    <p className=''>Якісний монтаж</p>
                </div>
            </FlipCard>
            <FlipCard text="Test Page" cols={2} >
                <div className='flex gap-2 items-center'>
                    <p className='text-[72px] text-blue-900'>15+</p>
                    <p className='text-xl'>років співпраці з концерном Profine GmbH (Німеччина).</p>
                </div>
            </FlipCard>
            <FlipCard text="Test Page" cols={4} >
                <div className='flex gap-2 items-center'>
                    <p className='text-[72px] text-blue-900'>15+</p>
                    <p className='text-xl'>років співпраці з концерном Profine GmbH (Німеччина).</p>
                </div>
            </FlipCard>
        </div>
    );
};

export default TestPage;
