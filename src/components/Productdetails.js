import { useParams } from 'react-router-dom'
import { useBottlebox } from '../Hooks.js/useBottllebox';
import Productdetailsimg from './Productdetailsimg';
import Productdetailsdes from './Productdetailsdes';


export default function Productdetails() {
 
  let id=useParams().id;
  const { isLoading: is2, data: d2 }=useBottlebox(id);

      if (is2) {
        return <h1>Loading...</h1>
    }
      
  return (
    <div className='propage'>
      <Productdetailsimg img={d2.data.image}/>
      <Productdetailsdes des={d2.data.description} price={d2.data.price} quant={d2.data.quantity}/>
    </div>
  )
}