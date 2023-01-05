import './Cart.css';
import CartDetails from './Cartdetails';
import { useRecoilState } from 'recoil';


export default function CartDisplay() {
    const [cartitems, setItem] = useRecoilState(CartDetails);

    return (
        <>
            <div className='CartPage'>
                {
                    cartitems.map(item => {
                        return (
                            <>
                                <div className='Cartitem'>
                                    <img src={item.img}></img>
                                    <div>
                                        <p>
                                            {item.name}
                                        </p>
                                        <p>
                                            {item.des}
                                        </p>

                                        <p>
                                            <strong>Quantity</strong> : {item.Cquantity}
                                        </p>

                                        <p>
                                            <strong>Price</strong>:${item.price}
                                        </p>
                                    </div>
                                </div>

                                
                            </>
                        )
                    })
                }

            </div>
        </>
    )

}


