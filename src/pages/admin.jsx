import { Link, Route, Routes } from 'react-router-dom'
import AdminProductPage from './admin/adminProductPage'
import AddProductPage from './admin/addProductPage'
export default function AdminPage() {
    return (
        <div className = " h-screen w-screen flex">
            <div className="h-screen w-[300PX] flex flex-col">

                <a href="/">Home</a>
                <Link to = "/admin/products">producst</Link>
                <Link to = "/admin/users">users</Link>
                <Link to = "/admin/orders">orders</Link>

                </div>

            <div className = "h-screen w-[calc(100%-300px)]">
                <Routes>
                    <Route path="/products" element={<AdminProductPage/>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/addProduct" element={<AddProductPage/>} />
                </Routes>
            
            </div>
        </div>
    )
}   