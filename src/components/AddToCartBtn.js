import CartDetails from "./Cartdetails"
import {useRecoilState} from 'recoil';
import './products.css'

export default function AddToCartBtn(props) {

    const [cartitems, setItem] = useRecoilState(CartDetails);
    const index = cartitems.findIndex((item) => item.id === props.obj.id);
    console.log(cartitems[index]);

    function Removeitem() {
        if (cartitems[index].Cquantity == 1) {
            const newitems = [...cartitems.slice(0, index), ...cartitems.slice(index + 1)]
            setItem(newitems);
        }

        else {
            const newitems = [...cartitems.slice(0, index), { ...cartitems[index], price: cartitems[index].price - cartitems[index].ItemPrice, Cquantity: cartitems[index].Cquantity - 1 }, ...cartitems.slice(index + 1)]
            setItem(newitems);
        }

    }

    function AddToAtom() {
        console.log(index)
        if (index < 0) {
            setItem(prevItems => [
                ...prevItems,
                {
                    id: props.obj.id,
                    des: props.obj.des,
                    price: props.obj.price,
                    Cquantity: 1,
                    quantity:props.obj.quantity,
                    ItemPrice: props.obj.price,
                    img:props.obj.image,
                    name:props.obj.name,
                }
            ])
        }
        else if (cartitems[index].Cquantity < props.obj.quantity) {
            const newitems = [...cartitems.slice(0, index), { ...cartitems[index], price: cartitems[index].price + cartitems[index].ItemPrice, Cquantity: cartitems[index].Cquantity + 1 }, ...cartitems.slice(index + 1)]
            setItem(newitems);

        }

    }

    if (index >= 0) {
        return (
            <>
                <div className="IncDecBtn">
                   { <button onClick={Removeitem}>-</button>}
                    {cartitems[index].Cquantity}
                   { cartitems[index].Cquantity<props.obj.quantity && <button onClick={AddToAtom}>+</button>}
                </div>
            </>
        )
    }

    return (
        <button onClick={AddToAtom}>Add to Cart</button>
    )
}