// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import './css/styles.css';
import { fetchData } from "./apiCalls";
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import Session from './Session';

// QUERYSELECTORS

// GLOBAL VARIABLES
let travelersData;
let tripsData;
let destinationsData;
let session;
let traveler;


// EVENT LISTENERS
window.onload = (event) => {
    getData();
    // showLoginView();
  };

// FUNCTION

const getData = () => {
    Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
    .then((value) => {
        travelersData = value[0].travelers;
        tripsData = value[1].trips;
        destinationsData = value[2].destinations;
        session = new Session(travelersData, tripsData, destinationsData);
        traveler = new Traveler(travelersData[1])
        console.log(session.getUsersTrips(traveler.id))
        findName()
    });
  }
const getRandomUser = () => {
    return Math.floor(Math.random() * 49) + 1
}

const findName = () => {
    console.log(traveler.getTravelerType(travelersData))
}