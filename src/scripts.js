// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/nav.png'
import './css/styles.css';
import { fetchData } from "./apiCalls";
import Traveler from './Traveler';
import Trip from './Trip';
// import Destination from './Destination';

// QUERYSELECTORS
let userWelcome = document.querySelector(".welcome-traveler");
let yearlySpent = document.querySelector(".traveler-yearly-spent");
let pastTrips = document.querySelector(".past-trips");
let upcomingTrips = document.querySelector(".upcoming-trips");
let pendingTrips = document.querySelector(".pending-trips");
let mainSection = document.querySelector(".main-display")

// GLOBAL VARIABLES
let travelersData;
let tripsData;
let destinationsData;
let trips;
let traveler;
let currentDate;
const getData = () => {
    Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
    .then((value) => {
        travelersData = value[0].travelers;
        tripsData = value[1].trips;
        destinationsData = value[2].destinations;
        trips = new Trip(tripsData, destinationsData)
        traveler = new Traveler(travelersData[2]);
        currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate)
        updateMainView()
      });
    }

// EVENT LISTENERS
window.addEventListener('load', getData);
mainSection.addEventListener('click', handleButtons);

// FUNCTIONS
function handleButtons(event) {
    switch (event.target.className) {
      case "check-rate-btn":
        testFunction(event);
        break;
      default:
        break;
    }
  };
  
  const updateMainView = () => {
    userWelcome.innerHTML = `Welcome ${traveler.getName()}`;
    yearlySpent.innerHTML =  `This years total spending: $${trips.getYearlyTotalSpent(traveler.id, currentDate)}`;
    generateTrips();
  }
  
  const generateTrips = () => {
    pastTrips.innerHTML += `${trips.getPastTrips(traveler.id, currentDate)}`
    upcomingTrips.innerHTML += `${trips.getUpcomingTrips(traveler.id, currentDate)}`
    pendingTrips.innerHTML += `${trips.getPendingTrips(traveler.id, currentDate)}`
    showDestinationInputs()
  }

  const showDestinationInputs = () => {
    const citySelection = document.querySelector(".select-city")
    let destinationOptions = destinationsData.map(option => {
      return `<option> ${option.destination} </option>`
    })
    citySelection.innerHTML = `
    <label for="city-slection">Select Trip Destination:</label>
    <select id="select1" name="trip-destination-selection" class="trip-location-selection" required>
    ${destinationOptions}
    </select>`
  }

  const testFunction = () => {
    console.log('test')
  }