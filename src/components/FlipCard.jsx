
const FlipCard = ({text, children, cols, rows=1}) => {
    return (
        <div className={`flip-card rounded-xl shadow-lg `}
             style={{
                 columnSpan: 5,
                 rowSpan: 5,
             }}
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
