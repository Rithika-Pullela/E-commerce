import './products.css'

export default function Productdetailsdes(props) {

    return (
        <div>
        <h3>Bottle</h3>
        {props.des}
        <p>Price:<strong>${props.price}</strong></p>
        In Stock
        <p>Quantity: <strong>{props.quant}</strong></p>
        <button>Add to Cart</button>
      </div>

    )

}