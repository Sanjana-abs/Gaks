import React from 'react'
import "../style/About.css"
import fruit from "../images/fruit.jpg"
import plant from "../images/plant.jpeg"
import mealprep from "../images/mealprep.jpeg"
import healthy from "../images/healthy.jpg"


export default function About() {
  return (
    <div className='dot'>
        <div className='pic'>
            <img src={fruit} alt='not found'></img>
        </div>
        <div class="content">
            <h1>Our Journey to Wellness</h1>
            <h2>CRAFTING DELICIOUS MEALS TO MAKE YOUR LIFE HEALTHIER AND EASIER</h2>
            <p>
                This is a space to share more about the business: who’s behind it, what it does, and what this site has to offer.
                It’s an opportunity to tell the story behind the business or describe a special service or product it offers.
                You can use this section to share the company’s history or highlight a unique value proposition.
            </p>
        </div>
        <div className='service'>
        <h1>The Benefits of Our
            <br/> Meal Prep Service</h1>
        <div class="benefits">
            <div class="benefit-card green">
                <p>QUALITY INGREDIENTS< br/>ALWAYS</p>
            </div>
            <div class="benefit-card blue">
                <p>CUSTOMIZABLE<br/>PLANS</p>
            </div>
            <div class="benefit-card beige">
                <p>ECO-FRIENDLY<br/>SUSTAINABLE<br/>PACKAGING</p>
            </div>
            <div class="benefit-card orange">
                <p>FLEXIBLE AND<br/>CONVENIENT<br/>DELIVERY</p>
            </div>
        </div>
        </div>
        <div className='review'>
        <h1>Real Reviews From Satisfied Clients</h1>
        <div class="reviews-container">
           
            <div class="review-card">
                <div class="stars">
                    <span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span>
                </div>
                <h2>NOA PARTUSH</h2>
                <p>This is the space to share a review from one of the business's clients or customers.</p>
            </div>
           
            <div class="review-card">
                <div class="stars">
                    <span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span>
                </div>
                <h2>LEAH VEN</h2>
                <p>This is the space to share a review from one of the business's clients or customers.</p>
            </div>
           
            <div class="review-card">
                <div class="stars">
                    <span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span>
                </div>
                <h2>EMILY TAYLOR</h2>
                <p>This is the space to share a review from one of the business's clients or customers.</p>
            </div>
        </div>
        </div>
        <div className='kitchen'>
        <h1>Make Our Kitchen Your Own</h1>
    <p class="subtitle">TIPS, RECIPES AND STORIES</p>
    <button className='btn'>Read More</button>
        </div>
        <div className='ppc'>
        <div class="card">
        <div class="card-content">
      <img src={plant} alt="Plant-based eating" class="card-image"></img>
      
        <p class="card-date">Aug 1 • 1 min read</p>
        <h3 class="card-title">The Benefits of Plant-Based Eating</h3>
        <p class="card-text">
          Use this space to promote the business, its products, or its services.
        </p>
        <div class="card-footer">
          <span>👁 0</span>
          <span>💬 0</span>
        </div>
      </div>
    </div>

   
    <div class="card">
    <div class="card-content">
      <img src={mealprep} alt="Meal prep" class="card-image"></img>
     
        <p class="card-date">Aug 1 • 1 min read</p>
        <h3 class="card-title">Meal Prep for Beginners: Tips and Tricks</h3>
        <p class="card-text">
          Use this space to promote the business, its products, or its services.
        </p>
        <div class="card-footer">
          <span>👁 0</span>
          <span>💬 0</span>
        </div>
      </div>
    </div>

  
    <div class="card">
    <div class="card-content">
      <img src={healthy} alt="Healthy breakfast" class="card-image"></img>
     
        <p class="card-date">Aug 1 • 1 min read</p>
        <h3 class="card-title">Quick and Healthy Breakfast Ideas</h3>
        <p class="card-text">
          Use this space to promote the business, its products, or its services.
        </p>
        <div class="card-footer">
          <span>👁 0</span>
          <span>💬 0</span>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

