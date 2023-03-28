import React, { useState } from 'react';
import $ from 'jquery';
// import { Link } from 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js';
// import 'magnific-popup';
// import { MagnificPopup } from 'react-magnific-popup';
// import MagnificPopup from './path/to/react-magnific-popup';

import '../assets/Gallery.css';

const Gallery=()=> {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (event) => {
    const filter = event.target.dataset.filter;
    setActiveFilter(filter);

    if (filter === 'all') {
      $('.image').show(400);
    } else {
      $('.image').not(`.${filter}`).hide(200);
      $('.image').filter(`.${filter}`).show(400);
    }
  };

  return (
    // <script src='https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js'></script>
    <div className="gallery">
      <h1 >Products</h1>
      <ul className="controls">
        <li className={`buttons ${activeFilter === 'all' ? 'active' : ''}`} data-filter="all" onClick={handleFilterClick}>All</li>
        <li className={`buttons ${activeFilter === 'paints' ? 'active' : ''}`} data-filter="paints" onClick={handleFilterClick}>Paints</li>
        <li className={`buttons ${activeFilter === 'light' ? 'active' : ''}`} data-filter="light" onClick={handleFilterClick}>Light</li>
        <li className={`buttons ${activeFilter === 'cables' ? 'active' : ''}`} data-filter="cables" onClick={handleFilterClick}>Cables</li>
        {/* <li className={`buttons ${activeFilter === 'juice' ? 'active' : ''}`} data-filter="juice" onClick={handleFilterClick}>juice</li> */}
        {/* <li className={`buttons ${activeFilter === 'sandwich' ? 'active' : ''}`} data-filter="sandwich" onClick={handleFilterClick}>sandwich</li> */}
      </ul>

      <div className="image-container">
        <a href="../images/Products/nippon.jpg" className="image paints">
          <img src="../images/Products/nippon.jpg"   alt=""/>
          <span className='label'>Nippon Paint</span>
        </a>
        <a href="../images/Products/asian.webp" className="image paints">
          <img src="../images/Products/asian.webp" alt=""   />
          <span className='label'>Asian Paint</span>
        </a>
        <a href="../images/Products/finolex.jpg" className="image cables">
          <img src="../images/Products/finolex.jpg" alt=""/>
          <span className='label'>Finolex Wires</span>
        </a>

       
        <a href="../images/Products/fybros.jpg" className="image cables">
          <img src="../images/Products/fybros.jpg" alt=""/>
          <span className='label'>Fybros Cables</span>
        </a>
        <a href="../images/Products/philips.jpg" className="image light">
          <img src="../images/Products/Philips.jpg" alt=""/>
          <span className='label'>Philips light</span>
        </a>

        <a href="../images/Products/havells.png" className="image cables">
          <img src="../images/Products/havells.png" alt=""/>
          <span className='label'>havells Cables</span>
        </a>
        
        </div>
        </div>
  );
}
  export default Gallery;
