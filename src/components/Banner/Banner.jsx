import React from 'react';
import docImage from '../../assets/banner-img-1.png'

const Banner = ({handleSearch}) => {
 
    return (
        <div className="hero bg-transparent shadow-lg min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
            <p className="py-6">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className='lg:flex space-x-2 mx-auto'>
                <form onSubmit={e=>handleSearch(e)}>
                    <input  className='w-[500px] h-[53px] rounded-lg px-2' type="text" name="searchedText" id="" placeholder='Search any Doctor' />
                <button type='submit' className="btn bg-[#176AE5] text-white rounded-lg mt-2">Search Now</button>
                </form>
            </div>
            <div className='lg:flex justify-center space-x-3 mt-3'>
                <img src={docImage}alt="" />
                <img src={docImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;