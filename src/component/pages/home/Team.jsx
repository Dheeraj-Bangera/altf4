import React from 'react';
import team from "../../../assets/team.png"


const Team = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-16'>
      <h1 className='text-4xl font-bold font-noto-sans hover:underline'>About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='flex items-center justify-center'>
          <img src={team} className="md:h-96 md:w-96 h-52 w-48 rounded-[100%]" alt="Team" />
        </div>
        <div className=' '>
          <p className='m-2 md:m-2 text-lg font-noto-sans'>
            "We're passionate about serving delicious food and creating a 
            smooth ordering experience. Our mission is to make your ordering process 
            quick and efficient, ensuring you receive your food quickly and 
            enjoy your meal. We are dedicated 
            to providing exceptional service and delicious food, leaving you satisfied and wanting more."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
