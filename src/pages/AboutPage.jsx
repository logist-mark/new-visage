
import {FaBalanceScale} from "react-icons/fa";
import {TbTruckDelivery} from "react-icons/tb";
import {IoMdBuild} from "react-icons/io";
import FlipCard from "../components/FlipCard.jsx";
import {BsPeopleFill} from "react-icons/bs";
import {MdFactory} from "react-icons/md";

const AboutPage = () => {
    return (
        <div
            className="flex flex-col gap-4 lg:grid lg:grid-cols-5 lg:grid-rows-5  lg:gap-3 h-[3300px] lg:h-[680px] lg:py-6 lg:px-4">

            <FlipCard
                text="Компанія ТОВ ВК “Марк” є одним з провідних виробників металопластикових віконних і дверних конструкцій на ринку України."
                cols={2}
            >
                <div className='flex flex-col items-center lg:flex-row gap-4 lg:items-end'>
                    <p className='text-7xl text-blue-900'>25+</p>
                    <p className='text-2xl font-semibold '>років на ринку</p>
                </div>
            </FlipCard>

            <FlipCard
                text="У нас є мережа представництв і авторизованих офісів продажів своєї продукції по всій Україні. Місце знаходження виробництва м. Житомир. За період існування компанія придбала серйозний досвід у виробництві, продажу та виконанні монтажних робіт віконної і дверної продукції "
                cols={3}>
                <div className='flex flex-col items-center lg:flex-row gap-6 lg:items-end'>
                    <p className='text-blue-900'><img className='w-32' src="/ukraine.svg" alt="Ukraine"/></p>
                    <p className='text-xl font-semibold text-center lg:text-left'>Мережа представництв і авторизованих
                        офісів продажів своєї продукції по всій
                        Україні</p>
                </div>
            </FlipCard>
            <FlipCard
                text="Вже більше 15 років ми співпрацюємо з концерном Profine GmbH (Німеччина), представляючи конструкції з профілю Trocal та Kömmerling."
                cols={3}>
                <div className='flex flex-col items-center lg:flex-row gap-4 lg:items-end'>
                    <p className='text-5xl text-blue-900'>15+</p>
                    <p className='text-xl font-semibold'>років співпраці з концерном Profine GmbH (Німеччина).</p>
                </div>
            </FlipCard>
            <FlipCard
                text="За роки існування компанії ми маємо тисячі клієнтів задоволених якістю та ефективністю нашої продукції. "
                cols={2}
            >
                <div className='flex flex-col items-center lg:flex-row gap-4 lg:items-end'>
                    <p className='text-6xl text-blue-900'><BsPeopleFill/></p>
                    <p className='text-xl font-semibold text-center lg:text-left'>Тисячі задоволених клієнтів по всій
                        Україні. </p>
                </div>
            </FlipCard>


            <FlipCard
                text="Наш досвід виробництва і побудова маркетингу продаж дають підстави стверджувати, що цінова політика в співвідношенні “матеріал-ціна-якість” є найбільш збалансованою з точки зору конкурентоспроможності. "
                cols={2}>
                <div className='flex flex-col items-center lg:flex-row gap-6 lg:items-end'>
                    <p className='text-6xl text-blue-900'><FaBalanceScale/></p>
                    <p className='text-lg font-semibold text-center lg:text-left'>Цінова політика компанії є найбільш
                        збалансованою серед інших виробників. </p>
                </div>
            </FlipCard>
            <FlipCard
                text="У металопластикових конструкціях компанії використовується тільки фурнітура WINKHAUS (Німеччина), яка завдяки ідеальній конструкції має гарантовану надійність."
                cols={3}>
                <div className='flex flex-col items-center lg:flex-row gap-6 lg:items-end'>
                    <p className='text-blue-900'><img className='w-48' src="/logos/winkhaus.png" alt="Ukraine"/></p>
                    <p className='text-lg text-center lg:text-left font-semibold'>Якісна німецька фурнітура WINKHAUS
                        забезпечує комфортне користування нашою продукцією протягом багатьох років.</p>
                </div>
            </FlipCard>
            <FlipCard text="Наявність власного автотранспорту дозволяє здійснювати своєчасну  доставку  продукції."
                      cols={1}>
                <div className='flex flex-col items-center lg:flex-row gap-4 lg:items-end'>
                    <p className='text-5xl text-blue-900'><TbTruckDelivery/></p>
                    <p className='text-xl font-semibold text-center lg:text-left'>Швидка та своєчасна доставка </p>
                </div>
            </FlipCard>


            <FlipCard
                text="Досвічені робітники компанії здійснять монтаж виробів швидко, якісно та за доступними цінами."
                cols={1}>
                <div className='flex flex-col items-center lg:flex-row gap-4 lg:items-end'>
                    <p className='text-5xl text-blue-900'><IoMdBuild/></p>
                    <p className='text-xl font-semibold'>Якісний монтаж</p>
                </div>
            </FlipCard>

            <FlipCard
                text="Наші виробничі потужності (новітні верстати фірми ELUMATEC (Німеччина) і лінія по збірці склопакетів LISEC (Австрія)), дозволяють виготовляти більше 1000 од. вікон на добу, також проводимо згинання арок, робимо вікна різної конфігурації (форма кола , трапеції , трикутника), виробляємо ламіновані (кольорові) конструкції."
                cols={3}>
                <div className='flex flex-col items-center lg:flex-row gap-4 lg:items-end'>
                    <p className='text-[72px] text-blue-900'><MdFactory/></p>
                    <p className='text-xl text-center lg:text-left font-semibold'>Наші виробничі потужності дозволяють
                        виготовляти більше 1000 од. вікон на добу</p>
                </div>
            </FlipCard>
        </div>
    );
};

export default AboutPage;