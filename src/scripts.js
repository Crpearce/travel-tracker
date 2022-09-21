// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import './css/styles.css';
import { fetchData } from "./apiCalls";
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';

// QUERYSELECTORS
let userWelcome = document.querySelector(".welcome-traveler");
let yearlySpent = document.querySelector(".traveler-yearly-spent");
let pastTrips = document.querySelector(".past-trips");
let upcomingTrips = document.querySelector(".upcoming-trips");
let pendingTrips = document.querySelector(".pending-trips");

// GLOBAL VARIABLES
let travelersData;
let tripsData;
let tripsRepo;
let destinationsData;
let destinationsRepo;
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
        tripsRepo = new Trip(tripsData)
        destinationsRepo = new Destination(destinationsData)
        traveler = new Traveler(travelersData[10]);
        updateNav();
    });
  }
  
  const updateNav = () => {
    userWelcome.innerHTML = `Welcome ${traveler.getName()}`;
    yearlySpent.innerHTML =  `This years total spending: $${traveler.getYearlyTotalSpent(tripsData, destinationsData)}`;
    generatePastTrips();
    // generateUpcomingTrips();
    // generatePendingTrips();
  }

  const generatePastTrips = () => {
    pastTrips.innerHTML += `${traveler.getPastTrips(tripsData, destinationsData)}`
  }