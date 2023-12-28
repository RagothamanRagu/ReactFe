
 import React, { useState, useEffect } from 'react';

 const BackEnd = () => {
  const [currentTime, setcurrentTime] =
    useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setcurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, []);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const timeStrig =
    currentTime.toLocaleTimeString([],
      options);
  const dateString =
    currentTime.toLocaleDateString([],
      options);

  return (
    <div className='NallaNeram'>
      <h1>Time does anything</h1>
      <div>
        <strong>Time:</strong>
        {timeStrig}
      </div>
      <div>
        <strong>Date:</strong>
        {dateString}
      </div>
      <div>
        <strong>Day:</strong>
        {currentTime.toLocaleDateString('en-us',
          { weekday: 'long' })}
       </div>
     </div>
    
   );
 };

 export default BackEnd




















