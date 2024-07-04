import {useState} from 'react';
import {FaDatabase} from "react-icons/fa";
import {MdWindow} from "react-icons/md";
import {BsFileEarmarkRuledFill} from "react-icons/bs";


const links = [
    {
        system: 'Windows XP',
        server: 'apps/mssql-win-xp.zip',
        guide: 'guides/guide-win-xp.pdf'
    },
    {
        system: 'Windows 7 (Vista)',
        server: 'apps/mssql-win-7.zip',
        guide: 'guides/guide-win-7.pdf'
    },
    {
        system: 'Windows 8, 10, 11',
        server: 'apps/mssql-win-8plus.zip',
        guide: 'guides/guide-win-8plus.pdf'
    }
]
const SystemSelector = () => {
    const [choice, setChoice] = useState(links[0])
    return (
        <div className='w-full  bg-white mt-10 rounded-lg shadow-lg py-10 px-6 text-lg'>
            <div>
                <label htmlFor="os" className='flex flex-col xl:flex-row gap-4 text-sm xl:text-lg' >
                    Оберіть Вашу операційну систему:
                    <select name="os" id="os" className='border-b-2 border-blue-900 py-1'
                    onChange={(e)=>{setChoice(links.filter(link => link.system === e.target.value)[0])}}>
                        <option value="Windows XP">Windows XP</option>
                        <option value="Windows 7 (Vista)">Windows 7 (Vista)</option>
                        <option value="Windows 8, 10, 11">Windows 8, 10, 11</option>
                    </select>
                </label>
            </div>
            <p className='mt-4 text-xl text-blue-900 font-bold'>Програмне забепечення для {choice.system}</p>
            <div className='flex flex-col xl:flex-row gap-10 mt-10'>
                <div className='flex flex-col-reverse xl:flex-col gap-4 w-full xl:w-1/4'>
                    <a href={choice.server} download className='btn' ><FaDatabase className='text-xl'/>SQL Server</a>
                    <a href='/apps/whokna.exe' download className='btn'><MdWindow className='text-xl'/>WH Okna 3.6.5</a>
                    <a href={choice.guide} download className='btn'><BsFileEarmarkRuledFill className='text-xl'/>Інструкція</a>
                </div>
                <div className='*:mb-4 w-full xl:w-3/4'>
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