import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {Search} from "@mui/icons-material"
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from './StateProvider';

function Header() {
const [{basket},dispatch]=useStateValue();
// const addToBasket=()=>{
// dispatch({

// })
// };
  return (
    <nav className="header">
        {/*logo */}
        <Link to="/">
        <img className="header_logo" src="/download.jpg" alt="HELLO" />
        </Link>

        {/*search tab */}
        <div className='header_search'>
        <input type="text" className="header_searchInput" />
        <Search className="header_searchIcon"/>
        </div>
        
        {/**three links */}
        <div className='header_nav'>
            {/* {first limk} */}
            <Link to={"/login"} className="header_link">
            <div className='header_option'>
            <span className='header_option_line_1'> Hey!</span>
            <span className='header_option_line_2'>Sign In</span>
            </div>
            </Link>
            {/* {second link} */}
            <Link to={"/"} className="header_link">
            <div className='header_option'>
            <span className='header_option_line_1'> Return</span>
            <span className='header_option_line_2'>Orders</span>
            </div>
            </Link>
            {/* {Third link} */}
            <Link to={"/"} className="header_link">
            <div className='header_option'>
            <span className='header_option_line_1'>Clutch</span>
            <span className='header_option_line_2'>Membership</span>
            </div>
            </Link>
        </div>
        {/**basket with number */}
        <Link to={"/checkout"} className="header_link">
            <div className='header_option_basket'>
                {/* {shopping basket icon} */}
                <Link to={"/checkout"}>
                <div className='header_option_basket'>
                  <ShoppingBasket /> 
                  <span className='header_option_line_2 header_basket_count'>{basket?.length}</span> 
                </div>
                </Link>
                {/* {number of elements} */}
            </div>
        </Link>
    </nav>
  )
}

export default Header
