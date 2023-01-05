
import { Routes, Route } from 'react-router-dom'
import Products from './components/products'
import Productdetails from './components/Productdetails'
import Navbar from './components/nav'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import React from 'react';
import {RecoilRoot,} from 'recoil';


const queryClient = new QueryClient();


function App() {
    return (
        <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <div className='page'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Products />}> </Route>
                    <Route path='products/:id' element={<Productdetails />}></Route>
                </Routes>
            </div>
        </QueryClientProvider >
        </RecoilRoot>
    )
}

export default App