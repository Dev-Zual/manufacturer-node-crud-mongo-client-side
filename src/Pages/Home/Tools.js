import React from 'react';

const Tools = () => {
  return (
    <div className="w-11/12 mx-auto mt-9">
      <h1 className="text-5xl font-bold mb-12 text-primary text-center">
        Best Tools
      </h1>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
