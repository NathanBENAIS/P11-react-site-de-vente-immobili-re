import React, { useState } from 'react';
import Apt1 from '../../assets/apt1.jpeg';
import Apt2 from '../../assets/apt2.jpeg';
import Apt3 from '../../assets/apt3.jpeg';
import Apt4 from '../../assets/apt4.jpg';
import Apt5 from '../../assets/apt5.png';
import Apt6 from '../../assets/apt6.png';
import Apt7 from '../../assets/apt7.png';

import './Best.css';

const Best = () => {

    const [stateOnglets, setStateOnglets] = useState(1);

    const tous = () => {
        setStateOnglets(1);
    };
    const bureau = () => {
        setStateOnglets(2);
    };
    const Logement = () => {
        setStateOnglets(3);
    };
    return (
        <div className='best'>
            <h1>Trouver les propriétés les mieux notées</h1>
            <div>
                {/* <p><span className='bold'>Tous</span></p>             
                <p>Bureau</p> */}
                <div onClick={tous} className={` ${stateOnglets === 1 ? "bold" : ""}`} ><p>Tous</p></div>
                <div onClick={bureau} className={` ${stateOnglets === 2 ? "bold" : ""}`} ><p>Bureau</p></div>
                <div onClick={Logement} className={` ${stateOnglets === 3 ? "bold" : ""}`} ><p>Logement</p></div>


            </div>

            {stateOnglets === 1 ? (
                <div className='container'>
                    <img src={Apt1} alt='' />
                    <img src={Apt2} alt='' />
                    <img src={Apt3} alt='' />
                    <img src={Apt4} alt='' />
                    <img src={Apt5} alt='' />
                    <img src={Apt6} alt='' />
                    <img src={Apt7} alt='' />
                </div>
            ) : (null)}
            {stateOnglets === 2 ? (
                <div className='container'>
                    <img src={Apt4} alt='' />
                </div>
            ) : (null)}
            {stateOnglets === 3 ? (
                <div className='container'>
                    <img src={Apt1} alt='' />
                    <img src={Apt2} alt='' />
                    <img src={Apt3} alt='' />
                    <img src={Apt5} alt='' />
                    <img src={Apt6} alt='' />
                    <img src={Apt7} alt='' />
                </div>
            ) : (null)}




















            {/* <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
                <img src={Apt4} alt='' />
                <img src={Apt5} alt='' />               
                <img src={Apt6} alt='' />
                <img src={Apt7} alt='' />
            </div> */}















        </div>
    )
}

export default Best
