import {NavLink} from 'react-router-dom'
import Cart from './Cart'


export default function Navbar()
{
    const navstyles=({isActive})=>{
        return{
            color:isActive?'red':'blue',
            textDecoration:isActive?'none':'underline',
            margin:'0.75em',
            
        }
    }


    return(
        <>
        <nav>
            <NavLink style={navstyles} to='/'>Home</NavLink>
            <NavLink style={navstyles} to='/products/:id'>Product</NavLink>
        </nav>
        <Cart/>
        </>
    );
}