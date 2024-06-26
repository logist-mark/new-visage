import {motion} from "framer-motion";

const MobileMenu = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                marginTop: -200
            }}
            animate={{
                opacity: 1,
                marginTop: 0
            }}
            exit={{
                opacity: 0,
                marginTop: -400
            }}
            transition={{
                duration: .4
            }}
            className='absolute w-screen h-screen z-10 top-0 left-0 right-0 bottom-0 bg-blue-900'>
         <nav>

                 <ul

                     className='w-full pt-20 px-6 text-2xl text-amber-600 flex flex-col items-center justify-center gap-8'>
                     <li className='underline'><a href="#">Головна</a></li>
                     <li className=''><a href="#">Виробництво</a></li>
                     <li className=''><a href="#">Дилерам</a></li>
                     <li className=''><a href="#">Сертифікати</a></li>
                     <li className=''><a href="#">Про нас</a></li>
                     <li className=''><a href="#">Контакти</a></li>
                     <li className=''><a href="#">Фото</a></li>
                 </ul>

         </nav>
        </motion.div>
    );
};

export default MobileMenu;