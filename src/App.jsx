import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Appoiment from './components/Appoiment';
import Review from './components/Review';
import About1 from './components/About1';
import Rudraksha from './components/Rudraksha';
import Exclusive from './Exclusive/Exclusive';
import Onemukhi from './Exclusive/Onemukhi';
import Twomukhi from './Exclusive/Twomukhi';
import Threemukhi from './Exclusive/Threemukhi';
import Fourmukhi from './Exclusive/Fourmukhi';
import Fivemukhi from './Exclusive/Fivemukhi';
import Sixmukhi from'./Exclusive/Sixmukhi';
import Sevenmukhi from './Exclusive/Sevenmukhi';
import Eightmukhi from './Exclusive/Eightmukhi';
import Ninemukhi from'./Exclusive/Ninemukhi';
import Tenmukhi from'./Exclusive/Tenmukhi';
import Elevenmukhi from'./Exclusive/Elevenmukhi';
import Twelvemukhi  from'./Exclusive/Twelvemukhi';
import Thirteenmukhi from'./Exclusive/Thirteenmukhi';
import Fourteenmukhi from'./Exclusive/Fourteenmukhi';
import Fifteenmukhi from'./Exclusive/Fifteenmukhi';
import Sixteenmukhi from './Exclusive/Sixteenmukhi';
import Ganesh from'./Exclusive/Ganesh'
import Gaurishankar from'./Exclusive/Gaurishankar';
import Garbh from './Exclusive/Garbh';
import Trijuti from './Exclusive/Trijuti';
import Primium from './components/Primium';
import Contact from './components/Contact';
import Consultation from'./components/Consultation';
import Rudrakshamala from'./components/Rudrakshamala';
import Siddhamala from'./components/Siddhamala';
import Combinationmala from'./components/Combinationmala';
import SiddhaMala1 from'./Siddhamala/SiddhaMala1';
import SiddhaMala2 from './Siddhamala/SiddhaMala2';
import Combination1 from'./Comabinationmala/Combination1';
import Combination2 from'./Comabinationmala/Combination2'; 
import Combination3 from'./Comabinationmala/Combination3';
import Combination4 from'./Comabinationmala/Combination4';
import Combination5 from'./Comabinationmala/Combination5';
import Combination6 from'./Comabinationmala/Combination6';
import Combination7 from'./Comabinationmala/Combination7';
import Combination8 from'./Comabinationmala/Combination8';
import OneMukhiMala from'./Rudrakshamala/OneMukhiMala';
import TwoMukhiMala from'./Rudrakshamala/TwoMukhiMala';

import Premium1 from'./PremiumPages/Premium1';
import Premium2 from'./PremiumPages/Premium2';
import Premium3 from'./PremiumPages/Premium3';
import Premium4 from './PremiumPages/Premium4';
import Premium5 from'./PremiumPages/Premium5';
import Premium6 from'./PremiumPages/Premium6';
import Premium7 from'./PremiumPages/Premium7';
import Premium9 from './PremiumPages/Premium9';
import Premium8 from './PremiumPages/Premium8';
import Gallary from './components/Gallary';








// Home Page
const Home = () => (
  <>
    <Carousel />
    <About />
    <Features />
    <Services />
    <Appoiment />
    {/* <Review /> */}
  </>
);


function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About1" element={<About1/>} />
        <Route path="/Rudraksha" element={<Rudraksha/>} />
        <Route path="/Exclusive" element={<Exclusive/>} />
        <Route path="/Onemukhi" element={<Onemukhi/>} />
        <Route path="/Twomukhi" element={<Twomukhi/>} />
        <Route path="/Threemukhi" element={<Threemukhi/>} />
        <Route path="/Fourmukhi" element={<Fourmukhi/>} />
        <Route path="/Fivemukhi" element={<Fivemukhi/>} />
        <Route path="/Sixmukhi" element={<Sixmukhi/>} />
        <Route path="/Sevenmukhi" element={<Sevenmukhi/>} />
        <Route path="/Eightmukhi" element={<Eightmukhi/>} />
        <Route path="/Ninemukhi" element={<Ninemukhi/>} />
        <Route path="/Tenmukhi" element={<Tenmukhi/>} />
        <Route path="/Elevenmukhi" element={<Elevenmukhi/>} />
         <Route path="/Twelvemukhi" element={<Twelvemukhi/>} />
        <Route path="/Thirteenmukhi" element={<Thirteenmukhi/>} />
        <Route path="/Fourteenmukhi" element={<Fourteenmukhi/>} />
        <Route path="/Fifteenmukhi" element={<Fifteenmukhi/>} />
        <Route path="/Sixteenmukhi" element={<Sixteenmukhi/>} />
        <Route path="/Ganesh" element={<Ganesh/>} />
        <Route path="/Garbh" element={<Garbh/>} />
        <Route path="/Trijuti" element={<Trijuti/>} />
        <Route path="/Gaurishankar" element={<Gaurishankar/>} />
        <Route path="/Primium" element={<Primium/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Consultation" element={<Consultation/>} />
        <Route path="/Rudrakshamala" element={<Rudrakshamala/>} />
        <Route path="/Siddhamala" element={<Siddhamala/>} />
        <Route path="/Combinationmala" element={<Combinationmala/>} />
        <Route path="/Siddhamala1" element={<SiddhaMala1/>} />
        <Route path="/SiddhaMala2" element={<SiddhaMala2/>} />
        <Route path="/Combination1" element={<Combination1/>} />
        <Route path="/Combination2" element={<Combination2/>} />
        <Route path="/Combination3" element={<Combination3/>} />
         <Route path="/Combination4" element={<Combination4/>} />
         <Route path="/Combination5" element={<Combination5/>} />
         <Route path="/Combination6" element={<Combination6/>} />
         <Route path="/Combination7" element={<Combination7/>} />
         <Route path="/Combination8" element={<Combination8/>} />
        <Route path="/OneMukhiMala" element={<OneMukhiMala/>} />
        <Route path="/TwoMukhiMala" element={<TwoMukhiMala/>} />
        
         <Route path="/Premium1" element={<Premium1/>} />
          <Route path="/Premium2" element={<Premium2/>} />
           <Route path="/Premium3" element={<Premium3/>} />
            <Route path="/Premium4" element={<Premium4/>} />
             <Route path="/Premium5" element={<Premium5/>} />
             <Route path="/Premium6" element={<Premium6/>} />
           <Route path="/Premium7" element={<Premium7/>} />
            <Route path="/Premium8" element={<Premium8/>} />
             <Route path="/Premium9" element={<Premium9/>} />
             <Route path="/Gallary" element={<Gallary/>} />
             
        
        
       
        


        
      </Routes>
      
     
     
      <Footer />
   </>
  );
}

export default App;
