import  {useState, useEffect} from 'react';

import Slides from "./Slides.jsx";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
const SLIDES = [
    {
        id: 1,
        img: '/window.jpg',
        text: 'Сучасне рішення для вашого дому, яке поєднує в собі стиль, надійність і енергоефективність. Виготовляються з високоякісного полівінілхлориду, що забезпечує довговічність і мінімальний рівень обслуговування та відповідають найсучаснішим стандартам якості і безпеки.',
        title: 'Вікна'
    },
    {
        id: 2,
        img: '/door.jpg',
        text: 'Ідеальне рішення для вашого житла, що поєднує в собі елегантний дизайн, надійність і високу енергоефективність. Виготовлені з високоякісного полівінілхлориду, вони гарантують тривалу службу і мінімальний рівень обслуговування. ',
        title: 'Двері'
    }, {
        id: 3,
        img: '/garage.jpg',
        text: 'Сучасне і практичне рішення для вашого гаражу або промислової будівлі. Легкі у використанні і практичні в експлуатації, ідеально підходять для будь-яких умов і забезпечують надійний захист вашого майна.',
        title: 'Секційні ворота'
    }, {
        id: 4,
        img: '/loggia.jpg',
        text: 'Ідеальне рішення для вашого дому, що поєднує в собі стиль, комфорт і практичність. Лоджії відрізняються довговічністю і мінімальним обслуговуванням, що робить їх надійним вибором для вашого житла.',
        title: 'Лоджії'
    }, {
        id: 5,
        img: '/aluminium.jpg',
        text: 'Алюмінієві конструкції відмінно підходять для створення великих скляних фасадів, віконних і дверних систем, дахів і веранд. Вони не тільки надійні і функціональні, але і дозволяють створювати сучасний і стильний дизайн з будь-якими архітектурними вимогами.\n',
        title: 'Алюмінієві конструкції'
    },
]



const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    function handleNextSlide() {
       setIndex(prevIndex => prevIndex + 1 > SLIDES.length - 1 ? 0 : prevIndex + 1);
    }

    function handlePrevSlide() {
        setIndex(prevIndex => prevIndex - 1 < 0 ? SLIDES.length - 1 : prevIndex - 1);
    }

    useEffect(() => {
        const interval = setInterval(handleNextSlide, 10000);
        return () => {
            clearInterval(interval);
        }
    }, [index])

    return (
        <div



            className="relative z-0 w-full h-[550px] xl:h-[480px] 2xl:h-[720px]   rounded-lg overflow-hidden mb-10">
            <Slides slides={SLIDES} imgIndex={index}/>
            <div className='absolute bottom-6 right-8 z-10 flex gap-10 text-5xl text-white '>
                <button onClick={handlePrevSlide}
                        className='bg-slate-900/30 p-2 rounded-sm hover:text-amber-600 hover:scale-110 duration-150'>
                    <FaArrowLeft/></button>
                <button onClick={handleNextSlide}
                        className='bg-slate-900/30 p-2 rounded-sm hover:text-amber-600 hover:scale-110 duration-150'>
                    <FaArrowRight/></button>
            </div>
        </div>
    );
};

export default HeroSlider;