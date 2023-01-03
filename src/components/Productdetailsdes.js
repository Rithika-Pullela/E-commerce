import './products.css'
export default function Productdetailsdes(props) {

    function handleClick(img) {
        props.setfun(img)
    }

    return (
        <div>
            <h3>Bottle</h3>
            {props.des}
            <p>Price:<strong>${props.price}</strong></p>

            {props.quant > 10 && <p>Available</p>}
            {props.quant <= 10 && <p>Selling Fast</p>}
            {props.quant == 0 && <p>Unavailable</p>}

            <p>Quantity: <strong>{props.quant}</strong></p>

            {props.var.map(item =>
                <button onClick={() => handleClick(item.image)} style={{ backgroundColor: `${item.color}`, height: "30px", width: "40px", margin: "5px" }}></button>

            )}

            <br></br>
            <button>Add to Cart</button>
        </div>

    )


}