import React from 'react';
import photo from './dbear_logo-copy (1).png'
import Header from './Header';
import Vijesti from './Vijesti';
import Vinyl from './Vinyl';
import CD from './CD';
import Footer from './Footer';
function Naslovna() {

  return (
    <div className="Naslovna">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1453192.1030885365!2d14.887232!3d44.6529203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355dfe201b7395%3A0x59bae918f68ff440!2sDancing%20Bear!5e0!3m2!1sen!2shr!4v1686416210195!5m2!1sen!2shr" ></iframe>
        <div className='nav'>
          <ul>
<li>        <img src={photo} className='photo'></img> 
</li>
       <li><a href='./Naslovna'>Naslovna</a></li> 
            <li><a href='./Vijesti'>Vijesti</a></li>
            <li><a href='./Vinyl'>Ploće</a></li>
            <li><a href='./CD'>CD</a></li>
            <li><a href='./Footer'>Prijava</a></li> 
          <li>      <Header/>
</li>
          </ul>
        </div>
           
        {/* <img src={photo} className='photo'></img>  */}
      


    </div>
     
  );
}

export default Naslovna;
