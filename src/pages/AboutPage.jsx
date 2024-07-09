import {FaBalanceScale} from "react-icons/fa";
import {TbRotate360, TbTruckDelivery} from "react-icons/tb";
import {IoMdBuild} from "react-icons/io";

import {BsPeopleFill} from "react-icons/bs";
import {MdFactory} from "react-icons/md";
import {FaHandshake} from "react-icons/fa6";

const AboutPage = () => {
    return (
        <div
            className="flex flex-col gap-4 h-[3300px] lg:grid lg:grid-cols-5 lg:grid-rows-5 lg:h-[740px] lg:gap-3 lg:py-4 lg:px-2 bg-blue-100">
            <div className="flip-card col-span-2 row-span-1 bg-red-400 rounded-lg">

                <div className="flip-card-inner">

                    <div className="flip-card-front flex flex-col lg:flex-row gap-4 ">
                        <TbRotate360 className='absolute top-2 right-2 rotate-45 opacity-50'/>
                        <p className='text-6xl font-semibold text-blue-900'>
                            25+
                        </p>
                        <p className='text-xl font-semibold'>
                            років на ринку
                        </p>
                    </div>
                    <div className="flip-card-back">
                        <p>
                            Компанія ТОВ ВК “Марк” є одним з провідних виробників металопластикових віконних і
                            дверних конструкцій на ринку України.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-3 row-span-1 bg-blue-400 rounded-lg">
                <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col lg:flex-row gap-4 ">

                        <img src="/ukraine.svg" className='w-32'/>
                        <p className='font-semibold text-xl text-center lg:text-left'>
                            Мережа представництв і авторизованих
                            офісів продажів своєї продукції по всій
                            Україні</p>
                    </div>
                    <div className="flip-card-back">
                        <p>У нас є мережа представництв і авторизованих офісів продажів своєї продукції по всій
                            Україні. Місце знаходження виробництва м. Житомир. За період існування компанія придбала
                            серйозний досвід у виробництві, продажу та виконанні монтажних робіт віконної і дверної
                            продукції </p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-3 row-span-1 bg-fuchsia-400 rounded-lg">
                <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col lg:flex-row gap-4">

                        <img src="/logos/profine.png" alt=""/>
                        <span className='font-semibold text-xl text-center lg:text-left'>
                            Багаторічна співпраця з концерном Profine GmbH (Німеччина)</span>
                    </div>
                    <div className="flip-card-back">
                        <p>Вже більше 15 років ми співпрацюємо з концерном Profine GmbH (Німеччина), представляючи
                            конструкції з профілю Trocal та Kömmerling.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-2 row-span-1 bg-amber-400 rounded-lg">

                <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col lg:flex-row gap-4 font-semibold text-xl">

                        <BsPeopleFill className='text-6xl text-blue-900 mr-4'/> Тисячі задоволених клієнтів по всій
                        Україні
                    </div>
                    <div className="flip-card-back">
                        <p>За роки існування компанії ми маємо тисячі клієнтів задоволених якістю та ефективністю
                            нашої продукції. </p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-2 row-span-1 bg-lime-400 rounded-lg">
                <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col lg:flex-row gap-4 font-semibold text-xl">

                        <FaBalanceScale className='text-6xl text-blue-900 mr-4'/>
                        Найбільш збалансована цінова політика на ринку
                    </div>
                    <div className="flip-card-back">
                        <p>Цінова політика в співвідношенні “матеріал-ціна-якість” є найбільш збалансованою з точки
                            зору конкурентоспроможності. </p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-3 row-span-1 bg-gray-400 rounded-lg">
                <div className="flip-card-inner">
                    <div
                        className="flip-card-front flex flex-col lg:flex-row gap-4 font-semibold text-xl text-center lg:text-left">

                        <img src="/logos/winkhaus.png" alt=""/>
                        Якісна німецька фурнітура WINKHAUS, яка гарантує надійність та ефективність

                    </div>
                    <div className="flip-card-back">
                        <p>У металопластикових конструкціях компанії використовується тільки фурнітура WINKHAUS
                            (Німеччина), яка завдяки ідеальній конструкції має гарантовану надійність.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-1 row-span-1 bg-green-400 rounded-lg">
                <div className="flip-card-inner">
                    <div
                        className="flip-card-front flex flex-col lg:flex-row gap-4 font-semibold text-xl text-center lg:text-left">

                        <IoMdBuild className='text-6xl text-blue-900 mr-4'/>
                        Якісний монтаж
                    </div>
                    <div className="flip-card-back">
                        <p>Досвічені робітники компанії здійснять монтаж виробів швидко, якісно та за доступними
                            цінами.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-2 row-span-1 bg-yellow-400 rounded-lg">
                <div className="flip-card-inner">
                    <div className="flip-card-front flex flex-col lg:flex-row gap-4 ">

                        <TbTruckDelivery className='text-6xl text-blue-900 mr-4'/>
                        <span
                            className='font-semibold text-xl text-center lg:text-left'>Швидка та своєчасна доставка</span>
                    </div>
                    <div className="flip-card-back">
                        <p>Наявність власного автотранспорту дозволяє здійснювати своєчасну доставку продукції.</p>
                    </div>
                </div>
            </div>

            <div className="flip-card col-span-2 row-span-1 bg-purple-400 rounded-lg">
                <div className="flip-card-inner">
                    <div
                        className="flip-card-front flex flex-col lg:flex-row gap-4 font-semibold text-xl text-center lg:text-left">

                        <FaHandshake className='text-6xl text-blue-900 mr-4'/>
                        Сотні партнерів по всій Україні
                    </div>
                    <div className="flip-card-back">
                        <p>Компанія співпрацює з багатьма українськими та закордонними компаніями задля забезпечення
                            високої якості нашої продукції</p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-4 row-span-1 bg-orange-400 rounded-lg">
                <div className="flip-card-inner">
                    <div
                        className="flip-card-front flex flex-col lg:flex-row gap-4 font-semibold text-xl text-center lg:text-left">

                        <MdFactory className='text-6xl text-blue-900 mr-4'/>
                        Виробничі потужності, які дозволяють
                        виготовляти більше 800 од. вікон на добу
                    </div>
                    <div className="flip-card-back">
                        <p>Наші виробничі потужності (новітні верстати фірми ELUMATEC (Німеччина) і лінія по збірці
                            склопакетів LISEC (Австрія)), дозволяють виготовляти більше 1000 од. вікон на добу,
                            також проводимо згинання арок, робимо вікна різної конфігурації (форма кола , трапеції ,
                            трикутника), виробляємо ламіновані (кольорові) конструкції.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card col-span-1 row-span-1 bg-orange-400 rounded-lg">
                <div className="flip-card-inner">
                    <div className="flip-card-front">

                    </div>
                    <div className="flip-card-back">
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;