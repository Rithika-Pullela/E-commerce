import './Cart.css';
import CartDisplay from './CartDisplay';
import { useState } from 'react';
import CartDetails from './Cartdetails';
import {useRecoilState} from 'recoil';

export default function Cart() {
    const [cartitems, setItem] = useRecoilState(CartDetails);
    const v=cartitems.length;
    const [value, setvalue] = useState(0)
    function toggle() {

        setvalue(!value)
    }

    return (
        <>
        <button className='CartBtn' onClick={toggle}>Cart {v>0 && v}</button>
        {value>0 && <CartDisplay/>}
        </>
    )
}
