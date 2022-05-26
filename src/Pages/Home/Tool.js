import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool, setPurchase }) => {
  const { name, img, description, availble_qty, min_order, price, _id } = tool;

  return (
    <div className="card card-compact w-96 bg-base-100 mt-6 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-slate-700">{name}</h2>
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
        <div className="card-actions justify-end">
          <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
