import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";


const About = () => {
  return (
    <section className='about'>
    <div className='container'>
    <div className='section-title'>
      <h2>About</h2>
    <div className="about-content grid">
      <div className="about-img">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-text">
        <h2 className='about-title fs-26 ls-1 '>About BookHub </h2> 
        <p className='fs-17'>At Study sphere, we are dedicated to making learning an immersive and enriching experience.Our platform is designed to provide access to vast array of education resources & fictional stories,primarily focusing on books and digital material </p>
        <p className='fs-17'>Study sphere is not just an e-library,it's a literary  sanctuary crated for avid readers,book enthusiasts and knowledge seekers.Study sphere invites you to embark on a literary odyssey where every book is a gateway to new horizon. </p>
         <i>study sphere - Explore the World of Words</i>
      </div>
    </div>
    </div>
    </div>
    </section>
    
  )
}

export default About