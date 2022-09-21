// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import './css/styles.css';
import { fetchData } from "./apiCalls";
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import Session from './Session';

// QUERYSELECTORS
let userWelcome = document.querySelector(".welcome-traveler");
let yearlySpent = document.querySelector(".traveler-yearly-spent");

// GLOBAL VARIABLES
let travelersData;
let tripsData;
let destinationsData;
let session;
let traveler;

// EVENT LISTENERS
window.onload = (event) => {
    getData();
  };

// FUNCTIONS
const getData = () => {
    Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
    .then((value) => {
        travelersData = value[0].travelers;
        tripsData = value[1].trips;
        destinationsData = value[2].destinations;
        session = new Session(travelersData, tripsData, destinationsData);
        traveler = new Traveler(session.travelersData[0]);
        updateNav();
    });
  }
  
  const updateNav = () => {
    userWelcome.innerHTML = `Welcome ${traveler.getName()}`
    yearlySpent.innerHTML =  `This years total spending: $${session.getUsersTotalSpent(traveler.id)}`
  }