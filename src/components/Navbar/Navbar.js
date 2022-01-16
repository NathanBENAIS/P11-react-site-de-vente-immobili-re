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
                
                <Link to='/' className='lin' ><h1><span><BsFillHouseFill />Delta </span>Immobilier</h1></Link> 
            
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link to='/' className='link' >Accueil</Link>                
                <Link to='/about' className='link'>Autre</Link>                  
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
