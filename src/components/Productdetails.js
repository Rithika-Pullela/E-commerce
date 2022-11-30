import './products.css'

export default function Productdetails(){
return(
    <div className='propage'>
        <div>
          <img src={require('../images/images.jpeg')} alt="no img to display"></img>
        </div>
        <div>
        <h3>Bottle</h3>
          Bottle Description
         <p>Price:<strong>$310</strong></p>
            In Stock
            <br></br>
          <button>Add to Cart</button>
        </div>
    </div>
)
}