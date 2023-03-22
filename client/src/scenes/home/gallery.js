import React from 'react';
import '../../styles/gallery.css';
import childrenplayingindoor from '../../components/img/childrenplaying-indoor.webp';
import childrenplaying from '../../components/img/childrenplaying.webp';
import gardenside from '../../components/img/gardenside.webp';
import homeplay from '../../components/img/homeplay.webp';
import indoorgame from '../../components/img/indoor game.webp';
import insidegame from '../../components/img/insidegame.webp';
import riversidegame from '../../components/img/river-sidegame.webp';
import sidewalkgame from '../../components/img/sidewalkgame.webp';


function Gallery() {
  return (
    <div class="gallery-main">
    <div>
        <h1>Gallery Page</h1>
    </div>
    <div class="gallery-images">
    <div>
      <img class="gimg1" src={sidewalkgame} alt="You can play anywhere even at side-walk"/>
      <img class="gimg2" src={riversidegame} alt="Portable game which you can play when you are camping and go somewhere"/>
    </div>
    <div>
      <img class="gimg3" src={insidegame} alt="People can also play inside the house"/>
      <img class="gimg4" src={indoorgame} alt="when you tired and you wanna utilize your time you can play this game att home"/>
    </div>
    <div>
      <img class="gimg5" src={homeplay} alt="It can be played by children, youth and senior at home"/>
      <img class="gimg6" src={gardenside} alt="You can play at gardenside too"/>
    </div>
    <div>
      <img class="gimg7" src={childrenplaying} alt="children can also play anywhere according to their "/>
      <img class="gimg8" src={childrenplayingindoor} alt="children can also play inside the house"/>
    </div>
    </div>
    </div>
  );
}

export default Gallery;