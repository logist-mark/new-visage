
import Certificate from "../components/Certificate/Certificate.jsx";

const certificates = [
    {
        img: '/certificates/alutech.png',
        title: 'Сертифікат відповідності на двері з алюмінієвого профілю ALUTECH\n'
    },
    {
        img: '/certificates/framex.png',
        title: 'Сертифікат відповідності на двері зовнішні з алюмінієвого профілю FRAMEX\n'
    },
    {
        img: '/certificates/glass.jpg',
        title: 'Сертифікат відповідності на склопакети одно- та двокамерні, заповнені повітрям та газом\n'
    }
    ,
    {
        img: '/certificates/kale.jpg',
        title: 'Сертифікат відповідності на фурнітуру KALE\n'
    }, {
        img: '/certificates/kommerling70st-plus.jpg',
        title: 'Сертифікат відповідності на блоки віконні та двері зовнішні з профілю Kommerling 70ST plus'
    }, {
        img: '/certificates/kommerling76-ad.jpg',
        title: 'Сертифікат відповідності на блоки віконні та двері зовнішні з ПВХ профілю KÖMMERLING 76\n'
    }, {
        img: '/certificates/production.jpg',
        title: 'Сертифікат стосовно виробництва ПВХ та алюмінієвих конструкцій ДСТУ ISO 9001:2018\n'
    }, {
        img: '/certificates/profine70ft-plus.jpg',
        title: 'Сертифікат відповідності на вікна та балконні двері з профілю Profine'
    }, {
        img: '/certificates/tec.jpg',
        title: 'Сертифікат відповідності на блоки дверні та балконні дверні з ПВХ профілю ТЕС'
    }, {
        img: '/certificates/winkhaus.jpg',
        title: 'Сертифікат відповідності на фурнітуру Winkhaus для блоків віконних та дверних\n'
    }
]


const CertificatesPage = () => {
    return (
        <div className='py-6 xl:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-10'>
            {certificates.map((certificate, index) =>
                <Certificate key={index} img={certificate.img} title={certificate.title}/>)}

        </div>
    );
};

export default CertificatesPage;