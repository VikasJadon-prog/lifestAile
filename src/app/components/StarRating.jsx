import React from 'react';
import { ImStarFull } from "react-icons/im";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((num) => (
      
          <ImStarFull size='25px'    key={num} 
          className={`relative ${num <= rating ? 'text-white customShadow shadow-lg' : 'text-gray-400'}`}
 />
        
    
      ))}
    </div>
  );
};

export default StarRating;
