import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';
import img4 from '../../components/img/img4.webp';
import Pdf from '../../components/img/rules.pdf';
import bgvideo from '../../components/img/bgVideo.mp4';
import TestimonialCarousel from './TestimonialCarousel';
const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nibh nec nulla elementum, nec lobortis sapien auctor. Integer laoreet magna vel felis pulvinar, eu fringilla nisi rhoncus.',
    author: 'John Doe',
  },
  {
    text: 'Nulla aliquet luctus massa, vitae tincidunt nibh finibus quis. Etiam at ligula bibendum, ullamcorper velit vel, accumsan nisl. Donec pretium eros in elit vulputate, ut aliquam neque dapibus.',
    author: 'Jane Doe',
  },
  {
    text: 'Praesent eget ipsum eros. Sed id lorem id quam aliquam commodo. Suspendisse ac ipsum tincidunt, lacinia odio at, molestie lorem. Duis quis dolor nec orci eleifend commodo ac vel elit.',
    author: 'Bob Smith',
  },
];


function Home() {
  return (
    <div>
        <div className="section-1">
          <video src={bgvideo} autoPlay muted loop className='video' />
          <div className="overlay"></div>
          <h1>A Board <span>Game</span> <br/>For Everyone</h1>
          <Link to ="/shop">BUY NOW</Link>
        </div>

        <div className="section-2">
          <div className="sec2-box1">
            <h3>HOW TO PLAY</h3>
            <p>Set the board on a level surface.</p>
            <p>Form two teams (1 – 4 players each). Each squad receives four bean pucks (select a colour).</p>
            <p>decide who fires first Keep in mind that shooting last can be advantageous!</p>
            <p>Position each team nine feet from each end of the shooting line.</p>
            <Link to = {Pdf} target = "_blank">RULES</Link>
          </div>
          <div className="sec2-box2">
            <img src={img4} alt="Login-icon" />
          </div>
        </div>

        <div className="section-3">
          <div>
            <h1> <span>LEARN </span> &nbsp; <span>PLAY</span> &nbsp;<span>GROW</span> </h1>
            </div>
        </div>


        <div className="section-5">
          <h3>TESTIMONIALS</h3>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

      <div className="section-6"></div>
        <div className="section-4">
          <div className="about">
            <h3><span>AB</span>OUT US</h3>
            <p>In the past, pandemics resulted in a rise in state power and an increase in people's fear. Jalfam game was started because we needed an outlet from the doom and gloom of pandemic. According to our research, board games foster this communal empathy in two different ways.</p>
            <Link to ="/about">OUR STORY</Link>
          </div>
        </div>
    </div>
  );
}
export default Home;