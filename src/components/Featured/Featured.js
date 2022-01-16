import React from 'react';
import './Featured.css';

import House1 from '../../assets/house1.jpg';
import Bed1 from '../../assets/bed1.jpg';
import Bed2 from '../../assets/bed2.jpg';
import Kitchen from '../../assets/kitchen.jpg';
import Bathroom from '../../assets/bath1.jpg';

import House2 from '../../assets/house2.jpg';
import Bed3 from '../../assets/bed3.jpg';
import Bed4 from '../../assets/bed4.jpg';
import Bathroom2 from '../../assets/bath2.jpg';
import LivingRoom from '../../assets/living-room.jpg';

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Les annonces les plus pertinentes</h1>            
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Paul Léautaud</h2>
                        <p>Maison à vendre</p>
                        <p className='price'>18,677,000€TTC</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Chambres:</p><p>13</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Salles de bains:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>m²:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Prix de vente:</p><p>2 211 €/m²</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>Une belle maison  moderne dans la ville avec une piscine pleine grandeur. Maison spacieuse et luxueuse située au Sarcelles. Comprend une salle multimédia, une salle d'entraînement et un sauna intégré. </p>
                    <button className='btn'>Voir Plus</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>Une belle maison moderne dans la ville avec une piscine pleine grandeur. Maison spacieuse et luxueuse située à Sarcelles. Comprend une salle multimédia, une salle d'entraînement et un sauna intégré. </p>
                    <button className='btn'>Voir Plus</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                    <h2>124 Paul Léautaud</h2>
                        <p>Maison à vendre</p>
                        <p className='price'>$22,910,000€TTC</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Chambres:</p><p>15</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Salles de bains:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>m²:</p><p>8,738</p>
                            </div>
                            <div className='info'>
                            <p className='bold'>Prix de vente:</p><p>2 517 €/m²</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured
