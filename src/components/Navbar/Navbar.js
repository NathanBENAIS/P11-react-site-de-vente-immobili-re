import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import './Navbar.css'
function Navbar() {
  
  const[click, setClick] = useState(false)
  const handleClick =() => setClick(!click)
  
  
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Delta </span>RealEstate</h1>
            
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to='/' className='link' >Home</Link>                
                <Link to='/about' className='link'>About</Link>                  
                <Link to='/contact' className='link' >Contact</Link>                
                </ul>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon'/>) : ( <HiOutlineMenuAlt3 className='icon'/>)}
                   
                </div>
            </div>

        </div>
    )
}

export default Navbar
