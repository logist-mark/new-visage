

const Slide = ({img, title, text}) => {
    return (
        <div className='w-full h-full px-4 py-2  xl:py-12 xl:px-16' style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'right',
            backgroundSize: 'cover',
            borderImage: 'fill 0 linear-gradient(#000, #0003)'

        }}>
            <div className='w-full xl:w-1/2 '>
                <p className='text-white text-5xl xl:text-7xl font-bold mb-6 xl:mb-10 text-center xl:text-left'>{title}</p>
                <p className='xl:text-2xl text-white xl:leading-10 font-light'>{text}</p>
            </div>
        </div>
    );
}
export default Slide;