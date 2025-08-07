import React from 'react';
import docImage from '../../assets/banner-img-1.png'
import docImage2 from '../../assets/doctor.jpg'

const Banner = ({handleSearch}) => {
 
    return (
       <div className="hero bg-transparent shadow-lg min-h-screen px-4 py-10">
  <div className="hero-content text-center flex flex-col items-center">
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Dependable Care, Backed by Trusted Professionals.
      </h1>
      <p className="py-6 text-base md:text-lg">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      {/* Search Form */}
      <form
        onSubmit={(e) => handleSearch(e)}
        className="flex flex-col lg:flex-row items-center justify-center gap-3"
      >
        <input
          className="w-full max-w-md h-12 rounded-lg px-3 border border-gray-300"
          type="text"
          name="searchedText"
          placeholder="Search any Doctor"
        />
        <button
          type="submit"
          className="btn bg-[#176AE5] text-white rounded-lg w-full lg:w-auto h-12"
        >
          Search Now
        </button>
      </form>

      {/* Images */}
      <div className="flex flex-col justify-center gap-4 mt-6">
        <img src={docImage} alt="Doctor" className="" />
        <img src={docImage2} alt="Doctor" className="" />
      </div>
    </div>
  </div>
</div>

    );
};

export default Banner;