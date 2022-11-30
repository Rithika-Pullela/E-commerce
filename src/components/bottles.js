import './products.css'

export default function Bottlebox() {
    
    return (
        <div className='comp'>
            
            <img src={require('../images/images.jpeg')} alt="no img to display"></img>
            <div>
                <h3>Bottle</h3>
                Bottle Description
                <p>Price:<strong>$310</strong></p>
            </div>
        </div>


    )

}