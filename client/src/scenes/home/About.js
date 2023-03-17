import React from 'react';
// import img from '../../img/nora.jpeg';
import img from '../../components/img/nora.jpeg'
import '../../styles/About.css';
import Footer from '../global/Footer';
function About() {
  return (
    <div>
        <div className="Article-1">
          <div className="article1-sec1">
            <h1>ABOUT US</h1>
          </div>
          <div className="article1-sec2">
            <p>Pandemics have historically resulted in increased state power because when people fear death, they agree to measures properly. Just to don't focus on covid we at Jalfam Games Inc. Questioned what we could do to combat the world's gloom and misery.According to my research, board games foster this communal empathy in three different ways. First of all, board games are challenging but not insurmountable. As psychologists and game researchers have demonstrated, many people claim to experience emotional growth when skillfully challenged. Game offer challenges that players can succeed at, empowering them in new ways.
</p>
          </div>
          <div className="article1-sec3"></div>
        </div>

        <div className="Article-2">
          <div className="article2-sec1"></div>
          <div className="article2-sec2">
            <p>Secondly, board games are inherently social. The vast majority of board games require social interaction to function, even if there are several board games that may be played alone. In a cooperative game like Pandemic or Forbidden island, players must collaborate to find solutions and issues. Players participate in friendly competition. All players can find something to enjoy in cooperative and competitive games. By keeping all these things in our mind we came across a product called 9on9, that emphasizes enjoyment, movement, and skill.</p>
          </div>
        </div>
        <div className="Article-3">
          <h3>TEAM MEMBERS</h3>
          <div className="person-1">
              <img src={img} alt="1st Person" />
              <h4>Person-1</h4>
          </div>
          <div className="person-2">
              <img src={img} alt="2nd Person" />
              <h4>Person-2</h4>
              </div>
          <div className="person-3">
              <img src={img} alt="3rd Person" />
              <h4>Person-3</h4>
              </div>
        </div>
        <Footer/>
    </div>
  );
}

export default About;