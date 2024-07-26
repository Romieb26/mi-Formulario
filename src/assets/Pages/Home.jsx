import React from 'react';
import BoxSection from '../Components/Organisms/BoxSection';
import CinemaSection from '../Components/Organisms/Section';
import './Home.css';

function Home() {
  return ( 
    <div id="login-home">
        <CinemaSection></CinemaSection>
        <BoxSection />
    </div>
  );
}

export default Home;