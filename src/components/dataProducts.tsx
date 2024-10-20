import axios from "axios";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  stock: number;
  price: number;
  description: string;
};

const DataProducts = ({ prod }: { prod: ProductType[] | null }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Description</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {prod != null &&
          prod.map((product) => (
            <tr key={product.id}>
              <th>{product.name}</th>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DataProducts;
