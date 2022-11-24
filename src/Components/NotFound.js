import React from 'react';
import image from "./not-found.png";


const NotFound = () => {
  return (
    //Not-found image
    <div className="text-center">
      <img src={image} alt="" style={{width:"200px"}} />
    </div>
  )
}

export default NotFound
