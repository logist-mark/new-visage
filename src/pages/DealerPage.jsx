import React from 'react';
import SystemSelector from "../components/SystemSelector.jsx";

const DealerPage = () => {
    return (
        <div className='w-full py-6'>
            <h2 className='text-4xl  text-blue-900 font-bold mb-6'>Нашим дилерам</h2>
            <div>
                <div className='grid grid-cols-2'>
                    <p className='text-xl border-r px-4 border-blue-900'>
                        Тут Ви зможете завантажити програму WinkHaus Okna для розрахунку вартості метало-пластикових
                        конструкцій
                        вироблених на нашому заводі.
                    </p>

                    <div className='px-4 text-lg'>
                        <p className='mb-2'>Для роботи програми Ваш ПК має відповідати наступним мінімальним вимогам:</p>
                        <ul className='list-disc *:ml-8'>
                            <li>64 Мб оперативної пам'яті (рекомендовано 128 Мб)</li>
                            <li>200 Мб вільного місця на жорсткому диску</li>
                            <li>ОС Windows 98, ME, NT, 2000, XP, Vista, 7, 8, 10, 11</li>
                            <li>Microsoft SQL Server відповідної версії</li>
                        </ul>
                    </div>
                </div>
            </div>
            <SystemSelector/>
        </div>
    );
};

export default DealerPage;