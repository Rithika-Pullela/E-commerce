import './products.css'
import Bottlebox from './bottles';
export default function Products()
{
    return(
        <container>
        <div className='first-class'>
            <h1>Products</h1>
            <button>Create Product</button>
        </div>

        <div className='bottlespics'>
           <Bottlebox/>
           <Bottlebox/>
          <Bottlebox/>
          <Bottlebox/>
           <Bottlebox/>
          <Bottlebox/>
        </div>

        </container>
               

    );
}