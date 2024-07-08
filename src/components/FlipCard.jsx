
const FlipCard = ({text, children, cols, rows=1}) => {
    return (
        <div className={`flip-card rounded-xl shadow-lg col-span-${cols} row-span-${rows}`}
        >
            <div className="flip-card-inner">
               <div className="flip-card-front">
                   {children}
               </div>
                <div className="flip-card-back">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
