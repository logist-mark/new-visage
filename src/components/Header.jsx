
import { FaPhone} from "react-icons/fa";
import {CiMail, CiMenuBurger} from "react-icons/ci";

const Header = () => {
    return (
        <header className='flex gap-2 items-center justify-between px-6 lg:px-40 xl:px-52 pt-4 sticky top-0 z-10'>
            <img src="/logo.png" width={180} alt="Visage logo"/>
            <nav>
                <ul className='hidden xl:flex gap-6 font-semibold text-blue-900 *:uppercase xl:text-[12px]'>
                    <li className='menu-link active-link'><a href='#'>Головна</a></li>
                    <li className='menu-link'><a href='#'>Виробництво</a></li>
                    <li className='menu-link'><a href='#'>Нашим дилерам</a></li>
                    <li className='menu-link'><a href='#'>Сертифікати</a></li>
                    <li className='menu-link'><a href='#'>Про нас</a></li>
                    <li className='menu-link'><a href='#'>Контакти</a></li>
                    <li className='menu-link'><a href='#'>Фото</a></li>
                </ul>
            </nav>
            <div className='hidden xl:block text-[#F96302] font-semibold text-[12px] '>
                <p className='flex items-center gap-4 mb-2'><FaPhone className='text-xl'/> +38 (067) 412 44 73</p>
                <p className='flex items-center gap-4'><CiMail className='text-xl'/>contacts.oknamark@ukr.net</p>

            </div>
            <button className='block xl:hidden text-3xl'><CiMenuBurger/></button>
        </header>
    );
};

export default Header;