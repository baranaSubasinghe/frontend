import { useEffect, useState } from 'react'
import { sampleProducts } from '../../assets/sampleData'
import axios from 'axios'

export default function AdminProductPage(){

const [products, setProducts] = useState(sampleProducts) // ✅


useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
    console.log(res.data)
    setProducts(res.data)
    });
}
,[]);
   
       
    
    return (
        <div className = "h-full w-full bg-red-400 max-h-full overflow-y-scroll">
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
                                    <td><img src={product.images[0]} clssName = "w-[100px] h-[50px]"></img></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}