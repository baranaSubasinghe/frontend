import { useEffect, useState } from 'react'
import { sampleProducts } from '../../assets/sampleData'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function AdminProductPage(){

const [products, setProducts] = useState(sampleProducts) // ✅
const navigate = useNavigate()


useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
    console.log(res.data)
    setProducts(res.data)
    });
}
,[]);
   
       
    
    return (
        <div className = "h-full w-full max-h-full overflow-y-scroll relative">
            <Link to = "/admin/addProduct" className = "absolute text-xl text-center bottom-5 right-5 bg-green-400 text-white font-bold py-2 px-4 rounded items-center justify-center cursor-pointer">+</Link>
            <table className = "w-full">
                <thead>
                    <tr>
                        <th>product Id</th>
                        <th>Name</th>
                        <th>labled Price</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.productId}</td>
                                    <td>{product.name}</td>
                                    <td>{product.labledPrice}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td><img src={product.images[0]} className="w-[100px] h-[50px]" /></td>
                                    <td>
                                        <div className = "flex gap-2 justify-center items-center">
                                            <FaTrash className =" text-red-600 text-size-[20px] mx-2 cursor-pointer"/> 
                                            <FaEdit onClick={() => {navigate("/admin/editProduct",{
                                                state: product

                                            })
                                            }} className =" text-blue-500 text-size-[20px] mx-2 cursor-pointer"/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}