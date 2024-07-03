import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

const MobileMenu = ({closeMenu}) => {
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
                     <li className=''><NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''} onClick={()=>closeMenu(false)}>Головна</NavLink></li>
                     <li className=''><NavLink to="/production" className={({isActive}) => isActive ? 'active-link' : ''} onClick={()=>closeMenu(false)}>Виробництво</NavLink></li>
                     <li className=''><NavLink to="/dealer" className={({isActive}) => isActive ? 'active-link' : ''} onClick={()=>closeMenu(false)}>Дилерам</NavLink></li>
                     <li className=''><NavLink to="/certificates" className={({isActive}) => isActive ? 'active-link' : ''} onClick={()=>closeMenu(false)}>Сертифікати</NavLink></li>
                     <li className=''><NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''} onClick={()=>closeMenu(false)}>Про нас</NavLink></li>
                     <li className=''><NavLink to="/contacts" className={({isActive}) => isActive ? 'active-link' : ''} onClick={()=>closeMenu(false)}>Контакти</NavLink></li>
                     <li className=''><NavLink to="/photos" className={({isActive}) => isActive ? 'active-link' : ''} onClick={()=>closeMenu(false)}>Фото</NavLink></li>
                 </ul>

         </nav>
        </motion.div>
    );
};

export default MobileMenu;