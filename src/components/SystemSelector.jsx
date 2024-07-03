import React, {useState} from 'react';
import {FaDatabase} from "react-icons/fa";
import {MdWindow} from "react-icons/md";
import {BsFileEarmarkRuledFill} from "react-icons/bs";

const SystemSelector = () => {
    const [system, setSystem] = useState('Windows XP')
    return (
        <div className='w-full  bg-white mt-10 rounded-lg shadow-lg py-10 px-6 text-lg'>
            <div>
                <label htmlFor="os" className='flex flex-col xl:flex-row gap-4 text-sm xl:text-lg' onChange={(e)=>setSystem(e.target.value)}>
                    Оберіть Вашу операційну систему:
                    <select name="os" id="os" className='border-b-2 border-blue-900 py-1'>
                        <option value="Windows XP">Windows XP</option>
                        <option value="Windows 7 (Vista)">Windows 7 (Vista)</option>
                        <option value="Windows 8, 10, 11">Windows 8, 10, 11</option>
                    </select>
                </label>
            </div>
            <p className='mt-4 text-xl text-blue-900 font-bold'>Програмне забепечення для {system}</p>
            <div className='flex flex-col xl:flex-row gap-10 mt-10'>
                <div className='flex flex-col-reverse xl:flex-col gap-4'>
                    <button className='btn'><FaDatabase className='text-xl'/>SQL Server</button>
                    <button className='btn'><MdWindow className='text-xl'/>WH Okna 3.6.5</button>
                    <button className='btn'><BsFileEarmarkRuledFill className='text-xl'/>Інструкція</button>
                </div>
                <div className='*:my-4'>
                    <p>Для запуску програми WH Okna потрібно встановити <b>Microsoft SQL Server</b>. Для правильного встановлення даного ПЗ слідуйте інструкції.</p>
                <p>
                    Також програму WinkHaus Okna потрібно запускати в від імені адміністратора, і в полі “Сервер” замість крапки записати <b>.\sqlexpress</b>.
                </p>
                    <p>
                        Після встановлення програми Вам потрібно буде її <b>оновити</b> (в інструкції описано як це зробити) – файли оновлень можна отримати звернувшись в наш офіс.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SystemSelector;