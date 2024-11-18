
import React from "react";
import "../style/MealsPlans.css";
import { Accordion } from 'react-bootstrap';
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MealsPlans() {
  return (
    <div className="App">
      <header className="header">
        <h1>Start Your Flavorful Journey Today</h1>
      </header>
      <div className="meal-plans">
        <MealPlanCard title="FAMILY-FRIENDS MEALS" price="65" />
        <MealPlanCard title="CRISP & CRUNCH" price="85" />
        </div>
        <div className="second">
        <MealPlanCard title="NORTH INDIAN DISHES" price="80" />
        <MealPlanCard title="VEGETARIAN DISHES" price="95" />
        </div>
        <div className="third">
        <MealPlanCard title="DESSERTS" price="75" />
        <MealPlanCard title="STARTER FOOD" price="70" />
      </div>
      <div className="ques">
        <div className="qq"><h1>Frequently Asked Question</h1>
        </div>
        <div className="faq">
          <div className="nm"><h1>Frequently asked questions</h1><IoSearchOutline/></div>
          
        </div>
        <div className="sett">Setting up FAQs</div>
        <div className="accordian">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why do FAQs matter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.

          <br/>
          <FaFacebook/> <FaXTwitter/> <FaLinkedin/> <FaLink/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why do FAQs matter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.<br/>
          <FaFacebook/> <FaXTwitter/> <FaLinkedin/> <FaLink/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Where can I add my FAQs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.

<br/> <FaFacebook/> <FaXTwitter/> <FaLinkedin/> <FaLink/>
          <FaFacebook/> <FaXTwitter/> <FaLinkedin/> <FaLink/>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      </div>
      
    </div>
    
  );
}

function MealPlanCard({ title, price }) {
  return (
    <div className="meal-plan-card">
      <h2>{title}</h2>
      <p className="price">
        <span className="currency"></span>
        {price}
      </p>
      <p className="frequency">Every week</p>
      <button className="select-button">Select</button>
    </div>
    
  
  );
}

export default MealsPlans;
