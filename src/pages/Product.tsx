import Sidebar from "../components/sidebar.tsx";
import { NavLink } from "react-router-dom";
import DataProducts from "../components/dataProducts.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  type ProductType = {
    id: number;
    name: string;
    stock: number;
    price: number;
    description: string;
  };

  const [prod, setProd] = useState<ProductType[] | null>(null);

  const getProducts = async () => {
    await axios
      .get("http://127.0.0.1:3000/product", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setProd(res.data.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Sidebar>
      <div className="text-3xl">Products</div>

      <div className="flex flex-col mt-7 px-6 w-full">
        {/* <div className="flex mb-4 justify-end">
          <button className="btn btn-primary bg-slate-600 text-lg">
          Tambahkan
          </button>
          </div> */}

        <div className="flex mb-4 justify-end">
          <NavLink to={"/product/create"} className={"btn btn-secondary}"}> Tambahkan </NavLink>

          {/*<ButtonCreateProduct*/}
          {/*  create={create}*/}
          {/*  setCreate={setCreate}*/}
          {/*  onCreateProd={createProduct}*/}
          {/*/>*/}
        </div>
        <div className="flex w-full overflow-x-auto">
          <DataProducts prod={prod} />
        </div>
      </div>
    </Sidebar>
  );
};

export default Product;
