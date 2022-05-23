import React from 'react';

const Banner = () => {
  return (
    <div className="card min-w-screen border-r-0 bg-base-100 shadow-xl image-full mt-6">
      <figure>
        <img
          src="https://html.modernwebtemplates.com/electrix/images/slide03.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h1 className="">ELECTRIX TOOlS MANUFACTURING</h1>
        <h2 className="mt-6 text-8xl text-center">MANUFACTURING</h2>
        <h2 className="mt-6 text-8xl text-center">BEST PRODUCTS</h2>
        <p className="mt-4">
          We won Many Industrial Awards and Got Many Certificates Since
          2001-2022 GO TO SHOP
        </p>
      </div>
    </div>
  );
};

export default Banner;
