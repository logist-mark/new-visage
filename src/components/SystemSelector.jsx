import React, {useState} from 'react';
import {FaDatabase} from "react-icons/fa";
import {MdWindow} from "react-icons/md";
import {BsFileEarmarkRuledFill} from "react-icons/bs";

const SystemSelector = () => {
    const [system, setSystem] = useState('Windows XP')
    return (
        <div className='w-full  bg-white mt-10 rounded-lg shadow-lg py-4 px-6 text-lg'>
            <div>
                <label htmlFor="os" className='flex gap-4' onChange={(e)=>setSystem(e.target.value)}>
                    Оберіть Вашу операційну систему:
                    <select name="os" id="os" className='border-b-2 border-blue-900'>
                        <option value="Windows XP">Windows XP</option>
                        <option value="Windows 7 (Vista)">Windows 7 (Vista)</option>
                        <option value="Windows 8, 10, 11">Windows 8, 10, 11</option>
                    </select>
                </label>
            </div>
            <p className='mt-4 text-xl text-blue-900 font-bold'>Програмне забепечення для {system}</p>
            <div className='flex gap-10 mt-10'>
                <div className='flex flex-col gap-4'>
                    <button className='btn'><FaDatabase className='text-xl'/>SQL Server</button>
                    <button className='btn'><MdWindow className='text-xl'/>WH Okna 3.6.5</button>
                    <button className='btn text-sm'><BsFileEarmarkRuledFill className='text-xl'/>Інструкція для {system}</button>
                </div>
                <div>
                    <p>Для запуску програми WH Okna потрібно встановити Microsoft SQL Server. Для правильного встановлення даного ПЗ слідуйте інструкції.</p>
                <p>
                    Також програму WinkHaus Okna потрібно запускати в від імені адміністратора, і в полі “Сервер” замість крапки записати .\sqlexpress
                </p>
                    <p>
                        Після встановлення програми Вам потрібно буде її оновити (в інструкції описано як це зробити) – файли оновлень можна отримати звернувшись в наш офіс.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SystemSelector;