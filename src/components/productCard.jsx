import "./productCard.css";
export default function ProductCard(props) {
    console.log(props)
    return (
        <div className="card">
            <img className = "img" src="props.picture" />
            <h1>
                {props.name}
            </h1>
            <p> 
                {props.description}</p>
            <h2>
                {props.price}
            </h2>
            <button className= "addtoCart">Add to cart</button>
            <button className= "buynow">Buy now</button>
        </div>
    )
}