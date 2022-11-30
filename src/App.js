
import { Routes, Route } from 'react-router-dom'
import Products from './components/products'
import Productdetails from './components/Productdetails'
import Navbar from './components/nav'
import './App.css'

function App() {
    return ( 
        <div className='page'>

        <Navbar/>
            <Routes>
                <Route path='/' element={<Products />}> </Route>
                <Route path='products/:id' element={<Productdetails />}></Route>
            </Routes>
        </div>
    )
}

export default App