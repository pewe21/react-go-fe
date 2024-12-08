import {NavLink} from "react-router-dom";
import Sidebar from "../sidebar.tsx";
import {Dispatch, FormEventHandler, SetStateAction} from "react";
import {ProductType} from "../dataProducts.tsx";
import {CreateProductType} from "./Create.tsx";

const ProductBaseView = (
    {
        handleSubmit,
        data,
        setData,
        type = "Create",
    }: {
        handleSubmit: FormEventHandler<HTMLFormElement>,
        data: ProductType | CreateProductType,
        setData: Dispatch<SetStateAction<ProductType | CreateProductType>>,
        type?: "Create" | "Edit",
    }) => {
    return <Sidebar>
        <h1 className={"text-3xl font-bold mb-7 text-slate-10"}>{type} Product</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group w-[30%]">
                <div className="form-control relative w-full">
                    <input type="name" className="input input-lg max-w-full" placeholder="Enter Name"
                           value={data.name}
                           onChange={(event) => {
                               setData({
                                   ...data,
                                   name: event.target.value
                               })
                           }}
                    />
                </div>

                <div className="form-control relative w-full">
                    <input type="number" className="input input-lg max-w-full" placeholder="Enter Price"
                           value={data.price}
                           onChange={(event) => {
                               setData({
                                   ...data,
                                   price: parseInt(event.target.value)
                               })
                           }}
                    />
                </div>

                <div className="form-control relative w-full">
                        <textarea className="textarea textarea-solid max-w-full" placeholder="Description" rows={8}
                                  id="message"
                                  onChange={(event) => {
                                      setData({
                                          ...data,
                                          description: event.target.value
                                      })
                                  }} defaultValue={data.description}
                        ></textarea>
                </div>

                <span className={"flex flex-row gap-2"}>
                        <button type="submit" className={"btn btn-primary w-full"}>{
                            type === "Create" ? "Simpan" : "Update"
                        }</button>

                        <NavLink to={"/product"} className={"btn btn-secondary"}>Kembali</NavLink>
                  </span>
            </div>
        </form>

    </Sidebar>
}

export default ProductBaseView