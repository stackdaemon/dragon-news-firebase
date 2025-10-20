import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playImage from '../../assets/playground.png';

const Qzone = () => {
     return (
          <div className='bg-base-200 p-3 rounded-md'>
               <h2 className="font-bold mb-5">QZone</h2>
               <div >
          <img className="w-full mt-4 " src={swimmingImage} alt="" />
          <img className="w-full mt-4" src={classImage} alt="" />
          <img className="w-full mt-4" src={playImage} alt="" />
               </div>
          </div>
     );
};

export default Qzone;