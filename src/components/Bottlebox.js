import './products.css'
import { Link } from 'react-router-dom'
export default function Bottlebox(props) {

    return (
        <div className='comp'>
            <Link to={`/products/${props.id}`}>
                <img src={props.img} alt="no img to display"></img>
                <div>
                    <h3>{props.name}</h3>
                    {props.des}
                    <p>Price:<strong>${props.price}</strong></p>
                </div>
            </Link>
        </div>
    )

}