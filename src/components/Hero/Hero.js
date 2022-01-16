import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Trouvez votre endroit idéal</h1>
                <p className='search-text'> Recherchez votre batiment notre ideal dans la plus grande sélection. </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='effectuez une recherche...' />
                    </div>
                    <div className='radio'> 
                        <input type='radio' checked />
                        <label>Acheter</label>
                        <input type='radio'  />
                        <label>Louer</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
