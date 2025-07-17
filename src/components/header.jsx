
import { Link } from 'react-router-dom';
import UserData from './userData'; 
export default function Header() {
    console.log("header component is loading ...");
    return (
        <div className='bg-red-400'>
            <Link to="/">Home</Link>
            
            <Link to="/login">Login</Link>
          
            <UserData/>
            
            
            

        </div>
    )
}