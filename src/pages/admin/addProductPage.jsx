import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddProductPage() {
    const [productId, setProductId] = useState("")
    const [name, setName] = useState("")
    const [altNames, setAltNames] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState([])
    const [labledPrice, setLabledPrice] = useState(0)
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const navigate = useNavigate()

    async function AddProduct(e){

        const token = localStorage.getItem("token")
        if(token==null){
            toast.error("You are not logged in please login first")
            return
        }

    if(images.length<=0){
        toast.error("please add at least one image")
        return
    }

    const promisesArray = []

    for(let i=0;i<images.length;i++){
        promisesArray[i]=mediaUpload(images[i])
    }
    try{
       const imageUrls = await Promise.all(promisesArray)
        console.log(imageUrls)

        const altNamesArray = altNames.split(",")
        const product = {
            productId : productId,
            name : name,
            altNames : altNamesArray,
            description : description,
            images : imageUrls,
            labledPrice : labledPrice,
            price : price,
            stock : stock,
        }
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/products",product,{
            headers : {
                Authorization : "Bearer "+token
            }
        }).then((res) => {
            toast.success("Product added successfully")
            navigate("/admin/products")
        }).catch((err) => {
            console.log(err.response.data.message)
        })  

    }catch(err){
        console.log(err)
    }

    }
    return (
        <div className= " w-full h-full flex flex-col justify-center items-center">
            <input type="text" placeholder="Product Id" className = "input input-bordered w-full max-w-xs " value={productId} onChange={(e) => setProductId(e.target.value)} />
            <input type="text" placeholder="Name" className = "input input-bordered w-full max-w-xs " value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Alt Names"  className = "input input-bordered w-full max-w-xs " value={altNames} onChange={(e) => setAltNames(e.target.value)} />
            <input type="text" placeholder="Description" className = "input input-bordered w-full max-w-xs " value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="file" placeholder="Images" multiple className = "input input-bordered w-full max-w-xs "  onChange={(e) => setImages(e.target.files)} />
            <input type="number" placeholder="Labled Price" className = "input input-bordered w-full max-w-xs " value={labledPrice} onChange={(e) => setLabledPrice(e.target.value)} />
            <input type="number" placeholder="Price" className = "input input-bordered w-full max-w-xs " value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="number" placeholder="Stock" className = "input input-bordered w-full max-w-xs " value={stock} onChange={(e) => setStock(e.target.value)} />
            <div className ="w-full flex flex-row justify-center mt-4">
                <Link to = "/admin/products" className = "bg-red-500 text-white font-bold py-2 px-4 rounded mr-4">Cancel</Link>
                <button  className = "bg-green-500 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={AddProduct}>Add Product</button>
            </div>

        </div>
    )
}