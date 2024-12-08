import {useNavigate} from "react-router-dom";
import axios from "axios";


export type ProductType = {
    id: number;
    name: string;
    stock?: number;
    price: number;
    description: string;
};

const DataProducts = ({prod}: { prod: ProductType[] | null }) => {
    const navigate = useNavigate();

    const handleDelete = async (id: string) => {
        await axios.delete(`http://127.0.0.1:3000/product/${id}`).then(res => {
            if (res.status === 200) {
                window.location.reload();
            }
        });
    }
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
                                <button className="btn btn-warning" onClick={() => {
                                    navigate("/product/edit/" + product.id);
                                }}>Edit
                                </button>
                                <button className="btn btn-error"
                                        onClick={() => {
                                            if (confirm("apakah mau menghapus data ini?") == true) {
                                                handleDelete(String(product.id))
                                            } else {
                                                return
                                            }
                                        }}>Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataProducts;
