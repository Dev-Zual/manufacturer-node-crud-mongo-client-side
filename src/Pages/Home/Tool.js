import React from 'react';

const Tool = ({ tool }) => {
  const { name, img, description, availble_qty, min_order, price } = tool;
  return (
    <div class="card card-compact w-96 bg-base-100 mt-6 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title font-bold text-slate-700">{name}</h2>
        <p className="text-justify text-base font-semibold text-slate-500">
          {description}
        </p>
        <div className="mt-5">
          <p className="font-bold text-base">
            Availble Quantity:
            <strong className="text-primary"> {availble_qty} pcs </strong>
          </p>
          <p className="font-bold text-base">
            Minimum Order:
            <strong className="text-primary"> {min_order} pcs </strong>
          </p>
          <p className="font-bold text-base">
            Unit Price:
            <strong className="text-primary"> {price} </strong>
          </p>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
