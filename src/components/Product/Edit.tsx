import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {FormEvent, useEffect, useState} from "react";
import {ProductType} from "../dataProducts.tsx";
import ProductBaseView from "./BaseView.tsx";


const ProductEdit = () => {
    const params = useParams();
    const id = params["id"]
    const navigate = useNavigate();

    const [data, setData] = useState<ProductType>({
        id: 0,
        name: "",
        price: 0,
        description: "",
    })


    const getDataById = async (id: string | undefined) => {
        await axios.get(`http://127.0.0.1:3000/product/${id}`).then(response => {
            setData(response.data.data);
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await axios
            .put(`http://127.0.0.1:3000/product/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    navigate("/product")
                } else {
                    console.log("Gagal")
                }
            });
    }

    useEffect(() => {
        getDataById(id)
    }, [])


    return <ProductBaseView data={data} setData={setData} handleSubmit={handleSubmit} type={"Edit"}/>
}

export default ProductEdit