import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';
import img4 from '../../components/img/img4.webp';
import Pdf from '../../components/img/rules.pdf';
// import TestimonialCarousel from './testimonials/TestimonialCarousel';
import bgvideo from '../../components/img/bgVideo.mp4';
import TestimonialCarousel from '../../components/testimonials/TestimonialCarousel';


import AOS from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])


  return (
    <div>
        <div className="section-1">
          <video src={bgvideo} autoPlay muted loop className='video' />
          <div className="overlay"></div>
          <h1 data-aos="fade-up" >A Board <span>Game</span> <br/>For Everyone</h1>
          <button data-aos="fade-up">SHOP NOW</button>
        </div>

    <div className="container">
        <div className="section-2">
          <div className="sec2-box1">
            <h3>HOW TO PLAY</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Link to = {Pdf} target = "_blank">RULES</Link>
          </div>
          <div className="sec2-box2">
            <img src={img4} alt="Login-icon" />
          </div>
        </div>
    </div>

        <div className="section-3">
          <div>
            <h1> <span>LEARN </span> &nbsp; <span>PLAY</span> &nbsp;<span>GROW</span> </h1>
            </div>
        </div>

      <div className="container">
        <div className="section-5">
          <h3>TESTIMONIALS</h3>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>

      <div className="section-6"></div>
        <div className="section-4">
          <div className="sec4-overlay"></div>
          <div className="about">
            <h3><span>AB</span>OUT US</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button>OUR STORY</button>
          </div>
        </div>
    </div>
  );
}
export default Home;