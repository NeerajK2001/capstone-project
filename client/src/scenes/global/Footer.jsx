import React from 'react';
import img from '../../components/img/main-logo.png';
import '../../styles/footer.css';

function Footer() {
  const gotop = () => {
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  };
  return (
  <div className="fa-maxwidth">
    <div className='footer'>
        <div className="fa-sec-1">
            <a href='/'><img src={img} alt='Logo'></img></a>
            <button href="/Home" onClick={gotop}>BACK TO TOP</button>
        </div>
        <div className="fa-nav">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Shop</a>
        </div>
        <div className="fa-sec-3">
          <div className="social">
            <a href="/"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="40px" height="40px" fill="#fff">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg></a>
            <a href="/"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="40px" fill="#fff">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/></svg></a>
            <a href="/"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="40px" fill="#fff">    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/></svg></a>
            <a href="/"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="40px" height="40px" fill="#fff"><path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M44.927,26.226 c0.012,0.271,0.017,0.543,0.017,0.816c0,8.34-6.189,17.958-17.51,17.958c-3.476,0-6.711-1.045-9.435-2.835 c0.482,0.059,0.973,0.089,1.469,0.089c2.884,0,5.538-1.009,7.644-2.702c-2.693-0.051-4.966-1.877-5.749-4.384 c0.375,0.072,0.761,0.112,1.157,0.112c0.562,0,1.107-0.077,1.622-0.221c-2.816-0.579-4.937-3.13-4.937-6.188 c0-0.027,0-0.052,0-0.079c0.83,0.472,1.779,0.756,2.788,0.789c-1.651-1.131-2.737-3.063-2.737-5.252 c0-1.158,0.303-2.242,0.832-3.175c3.037,3.819,7.571,6.333,12.686,6.595c-0.104-0.46-0.159-0.943-0.159-1.438 c0-3.485,2.755-6.311,6.154-6.311c1.77,0,3.369,0.767,4.492,1.994c1.403-0.284,2.721-0.809,3.909-1.532 c-0.459,1.474-1.434,2.711-2.706,3.492C45.71,23.8,46.896,23.462,48,22.959C47.175,24.224,46.131,25.335,44.927,26.226z"/></svg></a>
          </div>
          <div className="address">
            <p>Jalfam Games Inc.<br/>Northern alberta institute of tech.<br/>123 st NW Edmonton</p>
          </div>
        </div>
        <p className='copyright'>Copyright &copy; 2023 | All Rights Reserved By Jalfam Games Pvt. Ltd. </p>
    </div>
  </div>
  );
}

export default Footer;