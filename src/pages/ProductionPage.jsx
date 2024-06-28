import React from 'react';
import Slides from "../components/Slider/Slides.jsx";
import PhotoSlider from "../components/Slider/PhotoSlider.jsx";
import ProductionSection from "../components/ProductionSection.jsx";

const pvchPhotos = ['pvch/1.jpg', 'pvch/2.jpg', 'pvch/3.jpg', 'pvch/4.jpg', 'pvch/5.jpg', 'pvch/6.jpg'

]

const aluminiumPhotos = ['aluminium/1.jpg', 'aluminium/2.jpg', 'aluminium/3.jpg', 'aluminium/4.jpg', 'aluminium/5.jpg'
]

const glassPhotos = [
    'glass/1.jpg',
    'glass/2.jpg',
    'glass/3.jpg',
    'glass/4.jpg',
    'glass/5.jpg',
    'glass/6.jpg'
]


const ProductionPage = () => {
    return (
        <div className='flex flex-col gap-4'>
            <ProductionSection title='ВИРОБНИЦТВО МЕТАЛОПЛАСТИКОВИХ КОНСТРУКЦІЙ'
                               text='Власний виробничий цех обладнано сучасними верстатами Elumatec та Stürtz, що дозволяють
                                     виготовляти 650-700 вікон на день та гарантувати якість виготовлених конструкцій.'
                               photos={pvchPhotos}
                               rightSide/>
            <ProductionSection title='ВИРОБНИЦТВО АЛЮМІНІЄВИХ КОНСТРУКЦІЙ'
                               text='Власний виробничий цех обладнано сучасними верстатами Elumatec, що дозволяють забезпечувати
                               якість виготовлених конструкцій.'
                               photos={aluminiumPhotos}/>
            <ProductionSection title='ВИРОБНИЦТВО СКЛОПАКЕТІВ'
                               text='Ми маємо власну автоматичну лінію виробництва склопакетів LiSEC, що гарантує підприємству
                               гнучкість на ринку і вчасну здачу об’єктів.'
                               photos={glassPhotos}
                               rightSide/>

        </div>);
};

export default ProductionPage;