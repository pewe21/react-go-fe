import {FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ProductBaseView from "./BaseView.tsx";


export type CreateProductType = {
    id: number;
    name: string;
    price: number;
    description: string;
};
const ProductCreate = () => {
    const navigate = useNavigate()

    const [create, setCreate] = useState<CreateProductType>({
        id: 0,
        name: "",
        price: 0,
        description: "",
    });

    const createProduct = async (e: FormEvent) => {
        e.preventDefault();
        await axios
            .post("http://127.0.0.1:3000/product", create, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                if (res.status === 201) {
                    navigate("/product")
                } else {
                    console.log("Gagal")
                }
            });
    };

    return <ProductBaseView data={create} setData={setCreate} handleSubmit={createProduct} type={"Create"}/>
}

export default ProductCreate;