

const ContactForm = () => {
    return (
        <div className='mt-20 flex flex-col items-center justify-center'>
            <h2 className='text-4xl text-center lg:text-left lg:text-5xl text-blue-900 font-bold '>Бажаєте отримати консультацію?</h2>
            <form action="#" className='w-full lg:w-[800px] text-sm px-2 lg:px-4 py-10 bg-white rounded-xl mt-10 flex flex-col gap-4'>
                <div className='grid grid-cols-4'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <label htmlFor="name" className='col-span-1'>Ваше ім'я</label>
                    <input className='px-2 py-1 border-2 rounded-lg col-span-3'  type="text"/>
                </div>
                <div className='grid grid-cols-4'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <label htmlFor="phone" className='col-span-1'>Номер телефону</label>
                    <input className='px-2 py-1 border-2 rounded-lg col-span-3' type="text"/>
                </div>
                <div className='grid grid-cols-4'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <label htmlFor="construction" className='col-span-1'>Конструкція, яка Вас цікавить</label>
                    <input className='px-2 py-1 border-2 rounded-lg col-span-3' type="text"/>
                </div>
                <button className=' mt-5 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-amber-600 duration-200'>
                    Залишити заявку
                </button>


            </form>
        </div>
    );
};

export default ContactForm;