import React from 'react'
import "../style/Meals.css"
// import beef from "../images/beef.jpeg";
// import pp from  "../images/pp.jpeg";
// import p from "../images/p.jpeg";
// import avacado from "../images/avacado.jpeg";
// import bakes from "../images/bakes.jpeg";
// import bowl from "../images/bowl.jpeg";
// import britto from "../images/britto.jpeg";
// import fry from "../images/fry.jpeg";
// import gluten from "../images/gluten.jpeg";
// import grilled from "../images/grilled.jpeg";
// import muffins from "../images/muffins.jpeg";
// import paleo from "../images/paleo.jpeg";
// import peppers from "../images/peppers.jpeg";
// import pesto from "../images/pesto.jpeg";
// import pie from "../images/pie.jpeg";
// import potatoes from "../images/potatoes.jpeg";
// import rice from "../images/rice.jpeg";
// import salad from "../images/salad.jpeg";
// import stew from "../images/stew.jpeg";
// import stir from "../images/stir.jpeg";
// import thai from "../images/thai.jpeg";
// import tofu from "../images/tofu.jpeg";
import bataata from "../images/bataata.jpeg";
import bhature from "../images/bataata.jpeg";
import bhelpuri from "../images/bhelpuri.jpeg";
import chat from "../images/chat.jpeg";
import dosa from "../images/dosa.jpeg";
import gulabjamun from "../images/gulabjamun.jpeg";
import idli from "../images/idli.jpeg";
import jalebi from "../images/jalebi.jpeg";
import khandvi from "../images/khandvi.jpeg";
import kheer from "../images/kheer.jpeg";
import ladoo from "../images/ladoo.jpeg";
import methi from "../images/methi.jpeg";
import palak from "../images/palak.jpeg";
import paneer from "../images/paneer.jpeg";
import panipuri from "../images/panipuri.jpeg";
import pavbhaji from "../images/pavbhaji.jpeg";
import rolls from "../images/rolls.jpeg";
import sambar from "../images/sambar.jpeg";
import tikka from "../images/tikka.jpeg";
import tikki from "../images/tikki.jpeg";
import vada from "../images/vada.jpeg";
import pasta from "../images/pasta.jpeg";
import pizza from "../images/pizza.jpeg"


export default function Meals() {
  return (
    <div >
        <div className='sen' >Any Special requests?
        <br/></div>
        <div className='graph'>We create to diverse dietary needs</div>
        <div className='pics'>
            <div className='dairy'><p>Vegetable Curries / Sabzi</p></div>
            <div className='free'><p>Dessert / Sweet</p></div>
            <div className='high'><p>Salad </p></div>
            <div className='nut'><p>Nasta/ Appetizer </p></div>
            <div className='seafood'><p>Vegan Meal</p></div>
             </div>
        <div className='box'>
            <div className='chicken'><p>High-Protein Vegetarian Meals</p></div>
            <div className='beef'><p>Dairy-Free Vegetarian Meal</p></div>
            <div className='plant'><p>Hearty & Healthy</p></div>
            <div className='spicy'><p>SPICY</p></div>
            

            <div className='pork'><p>Crisp & Crunch</p></div>
        </div>
        <div className='pera'>Tailored Meal Plans for Every Lifestyle<hr/></div>
      
        <div className='line'>FAMILY-FRIENDS MEALS<hr/>
       
        <div className='meals'><p>Red Sauce Pasta</p>
        <img src={pasta}  alt=' not found'></img></div><hr/>
        <div className='meals'><p>Chana Chaat </p>
        <img src={chat} alt=' not found '></img></div><hr/>
        <div className='meals'>
            <p>Pizza</p><img src={pizza} alt='not found'></img>
        </div><hr/>
       
        </div>
       
       <div className='seq'>
        North Indian Vegetarian Dishes<hr/>
<div className='veg'>
  <p>Paneer Butter Masala</p>
<img src={paneer}></img></div><hr/> 
<div className='veg'><p>Chole Bhature</p>
 <img src={bhature} alt='not found' className='ph1'></img></div><hr/> 
<div className='veg'><p>Palak Paneer </p>
<img src={palak} alt='not found' className='ph'></img></div><hr/>

       </div>
       <div className='food'>South Indian Vegetarian Dishes<hr/>
        <div className='vegan'><p>Sambar</p>
        <img src={sambar} alt='not found'></img></div><hr/>
        <div className='vegan'><p>Idli </p>
       
        <img src={idli} alt='not found'></img></div><hr/>
        <div className='vegan'><p>Dosa </p>
        <img src={dosa} alt='not found'></img></div><hr/>
        <div className='vegan'><p>Vada</p>
        <img src={vada} alt='not found'></img></div><hr/>
        
       </div>
       <div className='keto'>
       Western Indian Vegetarian Dishes<hr/>
        <div className='vegg'><p>Pav Bhaji</p>
        <img src={pavbhaji}></img></div><hr/>
        <div className='vegg'><p>Bhel Puri</p>
        <img src={bhelpuri} alt='not found'></img></div><hr/>
        <div className='vegg'><p>Khandvi</p>
        <img src={khandvi} alt='not found'></img></div><hr/>
        <div className='vegg'><p>Methi Thepla
        </p>
        <img src={methi} alt='not found'></img></div><hr/>
        <div className='vegg'><p>Batata Vada</p>
        <img src={bataata} alt='not found'></img></div><hr/>
       </div>
       <div className='paleo'>starter food <hr/>
       <div className='ssd'><p>Spicy Paneer Tikka</p>
       <img src={tikka} alt='not found'></img></div><hr/>
       <div className='ssd'><p> Aloo Tikki</p>
       <img src={tikki} alt='not found'></img></div><hr/>
       <div className='ssd'><p> Veggie Spring Rolls</p>
       <img src={rolls} alt='not found'></img></div><hr/>
       <div className='ssd'><p>Pani Puri / Golgappa</p>
       <img src={panipuri} alt='not found'></img></div><hr/>
       </div>
       <div className='ff'>Desserts<hr/>
       <div className='shadow'><p>Gulab Jamun</p>
       <img src={gulabjamun} alt='not found'></img></div><hr/>
       <div className='shadow'><p>Kheer</p>
       <img src={kheer} alt='not found'></img></div><hr/>
       <div className='shadow'><p>Jalebi</p>
       <img src={jalebi} alt='not found'></img></div><hr/>
       <div className='shadow'><p>Ladoo</p>
       <img src={ladoo} alt='not found'></img></div>
       </div>
       <div className='container'>
       <button className='btn'>Order Now</button>
       </div>
        </div>
        
        
  
  )
}
