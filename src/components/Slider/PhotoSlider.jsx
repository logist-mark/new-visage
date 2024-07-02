import {useEffect, useState} from "react";

const PhotoSlider = ({photos}) => {
    const [current, setCurrent] = useState(1)

    function handleSliderChange() {
        setCurrent(prev => prev + 1 < photos.length ? prev + 1 : 0)
    }

    useEffect(() => {
        const interval = setInterval(handleSliderChange, 5000)

        return () => {
            clearInterval(interval);
        }
    }, [current])


    return (
        <div
            className="container mx-auto flex py-4 w-[700px] flex-col gap-1 overflow-hidden rounded md:flex-row">
            <div className="slider flex gap-1 items-end"
            style={{
                marginLeft: `-${current * 200}px`,
            }}
            >
                {photos.map((photo, index) => <div key={index}
                                                   className={`slide w-[200px] h-[200px] ${current === index - 1 ? 'active' : ''}`}
                                                   style={{
                                                       backgroundImage: `url(${photo})`,
                                                       backgroundSize: 'cover',

                                                   }}></div>)}
            </div>
        </div>

    );
};

export default PhotoSlider;