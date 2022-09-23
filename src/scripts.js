import './images/nav.png'
import './css/styles.css';
import { fetchData } from "./apiCalls";
import Traveler from './Traveler';
import Trip from './Trip';

// QUERYSELECTORS
let userWelcome = document.querySelector(".welcome-traveler");
let yearlySpent = document.querySelector(".traveler-yearly-spent");
let pastTrips = document.querySelector(".past-trips");
let upcomingTrips = document.querySelector(".upcoming-trips");
let pendingTrips = document.querySelector(".pending-trips");
let mainSection = document.querySelector(".main-display")
let tripLocationSelection = document.querySelector(".trip-location-selection")
let startDateInput = document.querySelector(".start-date-input")
let numberTravelers = document.querySelector("#numberTravelers")
let tripDuration = document.querySelector("#tripLength")
let potentialTrip = document.querySelector(".potential-trip-display")


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
        traveler = new Traveler(travelersData[27]);
        currentDate = new Date().toJSON().slice(0, 10);
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
        checkNewTripRate(event);
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
  }

  // const showDestinationInputs = () => {
  //   const citySelection = document.querySelector(".select-city")
  //   let destinationOptions = destinationsData.map(option => {
  //     return `<option> ${option.destination} </option>`
  //   })
  //   citySelection.innerHTML = `
  //   <label for="city-slection">Select Trip Destination:</label>
  //   <select id="select1" name="trip-destination-selection" class="trip-location-selection-" required>
  //   ${destinationOptions}
  //   </select>`
  // }

  const checkNewTripRate = () => {
    // trips.getEstimatedCost(numberTravelers.value, tripDuration, tripLocationSelection.value)
    potentialTrip.innerHTML =  `
    <p>${trips.getTripName(tripLocationSelection.value)}</p>
    <p>Estimated lodging: ${trips.getEstimatedLodging(tripDuration.value, tripLocationSelection.value)}</p>
    <p>Estimated flights: ${trips.getEstimatedFlights(numberTravelers.value, tripLocationSelection.value)}</p>
    <p>Estimated Total: ${trips.getEstimatedTotal(numberTravelers.value, tripDuration.value, tripLocationSelection.value)}</p>
    <img src="${trips.getTripPhoto(tripLocationSelection.value)}" class="potential-destination-photo">
    <button aria-label="book trip" class="book-trip-btn" id="bookTripButton">Book Trip</button>
    `
  }
