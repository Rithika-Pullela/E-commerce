import { useParams } from 'react-router-dom'
import { useBottlebox } from '../Hooks.js/useBottllebox';
import Productdetailsimg from './Productdetailsimg';
import Productdetailsdes from './Productdetailsdes';
import React, { useEffect, useState } from 'react';


export default function Productdetails() {

  const [res, setImg] = useState(null);
  let id = useParams().id;
  const { isLoading: is2, data: d2, isSuccess } = useBottlebox(id);

  useEffect(() => {
    // if(isSuccess)
    //  {
    setImg(d2?.data.image);
    //  console.log(d2.data)
    //  }
  }, [d2?.data]);

  if (is2) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='propage'>
      <Productdetailsimg img={res} />
      <Productdetailsdes setfun={setImg} des={d2.data.description} price={d2.data.price} quant={d2.data.quantity} var={d2.data.variants} />
    </div>
  )
}