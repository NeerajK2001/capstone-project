import React from 'react';
import img1 from '../../components/img/img1.webp';
import img2 from '../../components/img/img2.webp';
import img3 from '../../components/img/img3.webp';
import img4 from '../../components/img/img4.webp';
import img5 from '../../components/img/img5.webp';
import img6 from '../../components/img/img6.webp';
import img7 from '../../components/img/img7.webp';
import img8 from '../../components/img/img8.webp';

function Gallery() {
  return (
    <div>
    <div>
        <h1>Gallery Page</h1>
    </div>
    <div>
      <img src={img1} alt="hey"/>
      <img src={img2} alt="hey"/>
    </div>
    <div>
      <img src={img3} alt="hey"/>
      <img src={img4} alt="hey"/>
    </div>
    <div>
      <img src={img5} alt="hey"/>
      <img src={img6} alt="hey"/>
    </div>
    <div>
      <img src={img7} alt="hey"/>
      <img src={img8} alt="hey"/>
    </div>
    </div>
  );
}

export default Gallery;