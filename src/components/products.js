import './products.css'
import Bottlebox from './Bottlebox';
import { useQuery } from 'react-query'
import axios from 'axios'

const Qfun = () => {
    return axios.get('http://localhost:4000/Products');
}

export default function Products() {

    const { isLoading: is1, data: d1 } = useQuery('bottle', Qfun);

    if (is1) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div className='first-class'>
                <h1>Products</h1>
                <button>Create Product</button>
            </div>

            <div className='bottlespics'>
                {d1?.data.map(item => <Bottlebox key={item.id} name={item.name} img={item.image} des={item.description} price={item.price} id={item.id} />)}
                {d1?.data.map(item => <Bottlebox key={item.id} name={item.name} img={item.image} des={item.description} price={item.price} id={item.id} />)}
            </div>

        </div>

    );
}