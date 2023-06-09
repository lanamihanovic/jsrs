import React from 'react';
import Vijesti from './Vijesti';
import { Link } from 'react-router-dom';
import photo from './dbear_logo-copy (1).png'
import slika from './R-449318-1536497753-8464.jpg';
function Naslovna() {
  return (
    <div className="Naslovna">

           
        <img src={photo} className='photo'></img> 



    {/* <img src={slika} className='slika'></img> */}
    </div>
  );
}

export default Naslovna;
