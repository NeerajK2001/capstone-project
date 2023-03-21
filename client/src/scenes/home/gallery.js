import React from 'react';
import '../../styles/gallery.css';
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
    <div class="gallery-main">
    <div>
        <h1>Gallery Page</h1>
    </div>
    <div class="">
      <img class="gimg1" src={img1} alt="hey"/>
      <img class="gimg2" src={img2} alt="hey"/>
    </div>
    <div>
      <img class="gimg3" src={img3} alt="hey"/>
      <img class="gimg4" src={img4} alt="hey"/>
    </div>
    <div>
      <img class="gimg5" src={img5} alt="hey"/>
      <img class="gimg6" src={img6} alt="hey"/>
    </div>
    <div>
      <img class="gimg7" src={img7} alt="hey"/>
      <img class="gimg8" src={img8} alt="hey"/>
    </div>
    </div>
  );
}

export default Gallery;