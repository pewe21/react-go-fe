import Sidebar from "../components/sidebar";
import ButtonCreateProduct from "../components/buttonCreateProduct";
import DataProducts from "../components/dataProducts";
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

  type CreateProductType = {
    id: number;
    name: string;
    price: number;
    description: string;
  };
  const [create, setCreate] = useState<CreateProductType>({
    id: 0,
    name: "",
    price: 0,
    description: "",
  });

  const createProduct = async () => {
    await axios
      .post("http://127.0.0.1:3000/product", create, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);

        // setCreate({
        //   id: 0,
        //   name: "",
        //   price: 0,
        //   description: "",
        // });
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
          <ButtonCreateProduct
            create={create}
            setCreate={setCreate}
            onCreateProd={createProduct}
          />
        </div>
        <div className="flex w-full overflow-x-auto">
          <DataProducts prod={prod} />
        </div>
      </div>
    </Sidebar>
  );
};

export default Product;
