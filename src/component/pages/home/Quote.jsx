import React from 'react';
import bannerbackground from "../../../assets/bannerbackground.png";

const Quote = () => {
  return (
    <div className="relative flex items-center justify-center mb-12">
      <img
        src={bannerbackground}
        alt="background"
        loading="lazy"
        className="object-cover rounded-2xl w-full h-full"
      />
      <div className="absolute text-black text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-knewave">
          "Your Own Billing Counter"
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium mt-2">
        Flavorful Delights at Your Fingertips: Explore and Order from Our Food Counter App!
        </h3>
      </div>
    </div>
  );
};

export default Quote;
