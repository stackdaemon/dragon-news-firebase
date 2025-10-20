import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
     return (
          <div className='flex items-center bg-base-200 p-3 gap-5'>
               <p className='text-base-100 bg-secondary px-3 py-2 rounded-md font-semibold'>Latest</p>
               <Marquee pauseOnHover={true} speed={50}>

               <p className='font-semibold cursor-pointer'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati cum nihil, excepturi iste doloribus!</p>
               </Marquee>
          </div>
     );
};

export default LatesNews;