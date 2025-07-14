
import UserData from './userData'; 
export default function Header() {
    console.log("header component is loading ...");
    return (
        <div className='bg-red-400'>
            <h1 className="font-bold text-2xl">cristal beuty clear </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maxime, nihil accusantium, nostrum culpa officia dolore aperiam aliquam quia error praesentium possimus soluta vitae voluptatibus vel reprehenderit molestiae facere voluptatum?</p>
            <UserData></UserData>

        </div>
    )
}