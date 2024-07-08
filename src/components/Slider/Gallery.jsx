import {useState, useEffect} from "react";


function Gallery({photos ,delay}) {
    const [slide, setSlide] = useState(1);

    function next() {
        setSlide((prev) => (prev + 1 < photos.length ? prev + 1 : 0));
    }


    useEffect(() => {
        const interval = setInterval(next, 3000 + delay);

        return () => {
            clearInterval(interval);
        };
    }, [slide]);

    return (

        <div className="h-full w-full flex items-center overflow-hidden duration-200">
            <div
                className="flex items-end gap-1 duration-200 px-16 w-[1950px]"
                style={{
                    marginLeft: `-${slide * 300}px`
                }}
            >
                {photos.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${slide === index ? "active" : ""}`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                        }}
                    ></div>
                ))}
            </div>
        </div>


    );
}

export default Gallery;
