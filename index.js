import React from 'react';
import ReactDOM  from 'react-dom'
import './style.css';
import './Navbar';
import './App'
import Navbar from './Navbar';

ReactDOM.render(  
    <div>
<Navbar />
<section>
<div className='cards-container1' type='text'>

     { <div className='petsBlock'>
        <img src="https://t3.ftcdn.net/jpg/05/27/90/74/360_F_527907462_1nGm2eyfZeIeFvFl0UwvxxihITLlja7L.jpg" width={300}  alt="" />
        <h2>Fluffy</h2>
        <p>species: Rabbit</p>
        <p>age: 4</p>
        <p>id:<span>1</span></p>
        <button>check more</button>
     </div> }

     { <div className='petsBlock'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1OHlsaujRouQzIA2i8hlVZeNkt1fF6NfT0I_6YSX1TodPola_yO_HLO4P3D1AfuosME&usqp=CAU" width={300} alt="" />
        <h2>Meow</h2>
        <p>species: Cat</p>
        <p>age: 6</p>
        <p>id:<span>2</span></p>
        <button>check more</button>
     </div> }

     { <div className='petsBlock'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kPOCfvEnOFS2Thfu9xXZ5eyRaYdkBdrzKg&usqp=CAU" width={300} alt="" />
        <h2>Rex</h2>
        <p>species: Dog</p>
        <p>age: 4</p>
        <p>id:<span>3</span></p>
        <button>check more</button>
     </div> }

     { <div className='petsBlock'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNBWW6MXxnRoFdP6-T2eijb_eTV9WPC_nTQ&usqp=CAU" width={300} alt="" />
        <h2>dear</h2>
        <p>species: deer</p>
        <p>age: 3</p>
        <p>id:<span>4</span></p>
        <button>check more</button>
     </div> }
</div>
</section>

<section>
     <div className='cards-container2' type='text'>
     { <div className='petsBlock'>
        <img src="https://www.woburnsafari.co.uk/globalassets/woburn-safari/2.-images/road-safari/carnivores/lions/lion-cubs/lion-cubs--june-2020--woburn-safari-park-55.jpg" width={300} alt="" />
        <h2>Roar</h2>
        <p>species: lion</p>
        <p>age: 3</p>
        <p>id:<span>5</span></p>
        <button>check more</button>
     </div> }

     { <div className='petsBlock'>
        <img src="https://t4.ftcdn.net/jpg/05/84/73/11/360_F_584731150_EeKH49jcsREZUOyjyZxX70YcTY3q8SsX.jpg" width={300} alt='' />
        <h2>panther</h2>
        <p>species: panther</p>
        <p>age: 3</p>
        <p>id:<span>6</span></p>
        <button>check more</button>
     </div> }

     { <div className='petsBlock'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszqqgWPKCyAXHTm_FxmVabwTNcSe8L4rosAJO1E-2dIYfl3HQnQp0QRlAV_IV7X3gKJQ&usqp=CAU" alt="" />
        <h2>Max</h2>
        <p>species: elephant</p>
        <p>age: 3</p>
        <p>id:<span>7</span></p>
        <button>check more</button>
     </div> }

{ 
     <div className='petsBlock'>
        <img src="https://thumbs.dreamstime.com/b/mandarin-duck-water-30229927.jpg" width={300} alt="" />
        <h2>Cat</h2>
        <p>species: Duck</p>
        <p>age: 1</p>
        <p>id:<span>8</span></p>
        <button>check more</button>
     </div> }
</div> 
</section>
   </div>,
    document.getElementById('root'));
