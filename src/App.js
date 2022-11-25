import './App.css';
import React, {useState} from 'react'
import HeadBar from './components/HeadBar';
import Slider from './components/Slider';
import MainContent from './components/MainContent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import FooterBar from './components/FooterBar';
import AboutCountry from './components/AboutCountry';
import Rules from './components/Rules';
import Registration from './components/Registration';
import AboutUsExt from './components/AboutUsExt';
import Countries from './components/Countries';
import Tracking from './components/Tracking';


function App() {
  return (
    
    <Router>
    <HeadBar/>

        <Routes>
          <Route path='/' element={
            <>
              <Slider/>
              <MainContent/>
              <AboutUs/>
            </>
          }/>
          <Route path='/countries' element={<Countries/>}/>
          <Route path='/about-us' element={<AboutUsExt/>}/>
          <Route path='/rules' element={<Rules/>}/>
          <Route path='/about-country' element={<AboutCountry/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
        </Routes>
        
        <FooterBar/>
    </Router>
  );
}


export default App;
