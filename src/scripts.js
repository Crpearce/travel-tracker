// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import './css/styles.css';
import { fetchData } from "./apiCalls";
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import Session from './Session';

// QUERYSELECTORS

// GLOBAL VARIABLES

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
        console.log(session)
    });
  }