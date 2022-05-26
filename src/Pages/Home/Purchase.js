import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const [pproduct, setPproduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://still-ridge-84035.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPproduct(data);
      });
  }, [id]);

  return (
    <div className="w-3/5 mx-auto">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={pproduct.img} alt="Album" />
        </figure>
        <div class="card-body">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Name:</td>
                  <td>
                    <h2 class="card-title">{pproduct.name}</h2>
                  </td>
                </tr>

                <tr>
                  <th>1</th>
                  <td>Price:</td>
                  <td>
                    <h2 class="card-title">{pproduct.price}</h2>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Available:</td>
                  <td>
                    <h2 class="card-title">{pproduct.availble_qty}</h2>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Minimun Order:</td>
                  <td>
                    <h2 class="card-title">{pproduct.min_order}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">By Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
