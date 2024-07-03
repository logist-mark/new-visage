import {FaPhone} from "react-icons/fa";
import {CiMail, CiMenuBurger} from "react-icons/ci";
import {useState} from "react";
import MobileMenu from "./MobileMenu.jsx";
import {RxCross1} from "react-icons/rx";
import {AnimatePresence} from "framer-motion";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [menuShown, setMenuShown] = useState(false);

    function toggleMenu() {
        setMenuShown(!menuShown);
    }


    return (<header
        className='flex gap-2 items-center justify-between px-6 lg:px-40 xl:px-52 pt-4 sticky -top-1 z-20 shadow-xl'>
        <NavLink to='/'>
            <img src="/logo.png" width={180} alt="Visage logo"/>
        </NavLink>
        <nav>
            <ul className='hidden xl:flex lg:gap-2 xl:gap-4 2xl:gap-6 font-semibold text-blue-900 *:uppercase lg:text-[10px] xl:text-[12px] 2xl:text-[16px]'>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'menu-link active-link' : 'menu-link'}
                             to='/'>Головна</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'menu-link active-link' : 'menu-link'}
                             to='/production'>Виробництво</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'menu-link active-link' : 'menu-link'}
                             to='/dealer'>Дилерам</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'menu-link active-link' : 'menu-link'}
                             to='/certificates'>Сертифікати</NavLink>
                </li>
                <li><NavLink className={({isActive}) => isActive ? 'menu-link active-link' : 'menu-link'}
                             to='/about'>Про нас</NavLink></li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'menu-link active-link' : 'menu-link'}
                             to='/contacts'>Контакти</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'menu-link active-link' : 'menu-link'}
                             to='/photos'>Фото</NavLink>
                </li>

            </ul>
        </nav>
        <div className='hidden xl:block text-[#F96302] font-semibold xl:text-[12px] 2xl:text-[12px] '>
            <p className='flex items-center gap-4 mb-2'><FaPhone className='text-xl'/> +38 (067) 412 44 73</p>
            <p className='flex items-center gap-4'><CiMail className='text-xl'/>contacts.oknamark@ukr.net</p>

        </div>

        <button className='block xl:hidden text-3xl z-20' onClick={toggleMenu}>{!menuShown ? <CiMenuBurger/> :
            <RxCross1 className='text-white'/>}</button>
        <AnimatePresence>{menuShown && <MobileMenu/>}</AnimatePresence>
    </header>);
};

export default Header;