import React, { useState } from "react";
 
const ReadMore = ({ children, limit }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, limit) : text}
            <span
                onClick={toggleReadMore}
                className="readMoreText"
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
}; 

export default ReadMore; 