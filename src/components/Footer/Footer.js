import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           
            <div className='container'>
                <div className='col'>
                    <h3>Autre</h3>
                    <p>Nos actualités</p>
                    <p>Notre Newsletter</p>
                    <p>Details</p>
                   

                    


                </div>
                <div className='col'>
                    <h3>Entrepise</h3>
                    <p>Nous rejoindre</p>                
                    <p>Carrière</p>
                    <p>Détails</p>
                   
                </div>
                <div className='col'>
                    <h3>Certificat</h3>                    
                    <p>Détails</p>
                    <p style={{color:'#f8f8f8'}}>.</p>  
                    <p style={{color:'#f8f8f8'}}>.</p>  
                </div>
                <div className='col'>
                    <h3>Information</h3>                    
                    <p>Détails</p>                   
                    <p>Nous Contacter</p>
                    <p style={{color:'#f8f8f8'}}>.</p>  
                </div>
            </div>

            <div className='social'>
              <FaFacebook className='icon' />
             <FaInstagram className='icon' />
              <FaTwitter className='icon' />
              <FaPinterest className='icon' />
            </div>
        </div>
    )
}

export default Footer
