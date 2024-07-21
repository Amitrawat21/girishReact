import React, { useEffect, useState } from 'react';
import TimeLeft from '../../Component/TimeLeft/TimeLeft';
import Intro from '../../Component/Intro/Intro';
import Navbar from '../../Component/navbar/Navbar';
import Description from '../../Component/Description1/Description';
import Footer from '../../Component/Footer/Footer';
import Offer from '../../Component/Offer/Offer';
import Description2 from '../../Component/Description2/Description2';

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    const introElement = document.querySelector('.intro');
    if (introElement) {
      const introHeight = introElement.offsetHeight;
      if (window.scrollY >= introHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }
  };

  useEffect(() => {
    // Call handleScroll once to set initial state
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <TimeLeft />
      <Intro className="intro" />
      <Navbar isVisible={showNavbar} />
      <Description/>
      <Description2/>
      <Offer/>
      <Footer/>

     
      
    </div>
  );
};

export default Home;
