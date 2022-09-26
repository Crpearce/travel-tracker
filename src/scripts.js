import './images/nav.png'
import './css/styles.css';
import { fetchData } from "./apiCalls";
import Traveler from './Traveler';
import Trip from './Trip';

// QUERYSELECTORS
let userWelcome = document.querySelector('.welcome-traveler');
let yearlySpent = document.querySelector('.traveler-yearly-spent');
let pastTrips = document.querySelector('.past-trips');
let upcomingTrips = document.querySelector('.upcoming-trips');
let pendingTrips = document.querySelector('.pending-trips');
let mainSection = document.querySelector('.main-display');
let bookingView = document.querySelector('.booking-view');
let startDateInput = document.querySelector('.start-date-input');
let numberTravelers = document.querySelector('#numberTravelers');
let tripDuration = document.querySelector('#tripLength');
let potentialTrip = document.querySelector('.potential-trip-display');
let citySelection = document.querySelector('.destination-entry-selection');
let postError = document.querySelector('.post-error-message');
let loginContainer = document.querySelector('.login-container');
let navSection = document.querySelector('.navigation')

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
        trips = new Trip(tripsData, destinationsData);
        currentDate = new Date().toJSON().slice(0, 10);
        updateMainView();
      });
    }

// EVENT LISTENERS
mainSection.addEventListener('click', handleButtons);
loginContainer.addEventListener("click", handleButtons);

// FUNCTIONS
function handleButtons(event) {
    switch (event.target.className) {
      case "check-rate-btn":
        verifyTripInputs(event)
        checkNewTripRate(event);
        hide(bookingView);
        show(potentialTrip);
        break;
      case "book-trip-btn":
        bookTrip(event);
        resetPage(event);
        break;
      case "home-btn":
        resetPage(event);
        break;  
      case "reset-trip-info-btn":
        resetPage(event);
        break;  
      case "login-btn":
        verifyLogin(event);
        break;
      default:
        break;
    }
  };

  const verifyLogin = (event) => {
    event.preventDefault();
    if (username.value === "" || password.value === "") {
      loginError.innerText = `PLEASE SUBMIT BOTH USERNAME AND PASSWORD!`;
    } else if (password.value !== "travel") {
      loginError.innerText = `INCORRECT PASSWORD!`;
    } else if (!username.value.includes("traveler")) {
      loginError.innerText = `USERNAME DOES NOT EXIST! PLEASE TRY AGAIN.`;
    } else {
      loginError.innerText = '';
      getData();
    }
  }
  
  const updateMainView = () => {
    let userID = parseInt(username.value.slice(8, username.value.length));
    traveler = new Traveler(travelersData[userID - 1]);
    userWelcome.innerHTML = `Welcome ${traveler.getName()}`;
    yearlySpent.innerHTML =  `This years total spending: $${trips.getYearlyTotalSpent(traveler.id, currentDate)}`;
    show(mainSection);
    hide(loginContainer);
    show(navSection);
    generateTrips();
    showDestinationInputs();
  }
  
  const generateTrips = () => {
    pastTrips.innerHTML = '';
    upcomingTrips.innerHTML = '';
    pendingTrips.innerHTML = '';
    pastTrips.innerHTML += `${trips.getPastTrips(traveler.id, currentDate)}`;
    upcomingTrips.innerHTML += `${trips.getUpcomingTrips(traveler.id, currentDate)}`;
    pendingTrips.innerHTML += `${trips.getPendingTrips(traveler.id, currentDate)}`;
  }

  const showDestinationInputs = () => {
    let destinationOptions = destinationsData.map(option => `<option> ${option.destination} </option>`);
    citySelection.innerHTML = `
    <label for="destination-selction">Select Trip Destination:</label>
    <select id="select1" name="destination-selection" class="destination-entry-selection" required>
    ${destinationOptions}
    </select>`
  }

  const checkNewTripRate = () => {
    potentialTrip.innerHTML = '';
    potentialTrip.innerHTML =  `
    <p>${trips.getTripName(citySelection.value)}</p>
    <p>Trip Date: ${startDateInput.value}</p>
    <p>Estimated lodging: ${trips.getEstimatedLodging(tripDuration.value, citySelection.value)}</p>
    <p>Estimated flights: ${trips.getEstimatedFlights(numberTravelers.value, citySelection.value)}</p>
    <p>Estimated Total: ${trips.getEstimatedTotal(numberTravelers.value, tripDuration.value, citySelection.value)}</p>
    <img src="${trips.getTripPhoto(citySelection.value)}" class="potential-destination-photo">
    <button aria-label="book trip" class="book-trip-btn" id="bookTripButton">Book Trip</button>
    <button aria-label="home button" class="home-btn" id="homeButton">Home</button>`
  }

  const verifyTripInputs = () => {
    if(citySelection.value === '') {
      return postError.innerHTML = 'Please select trip date'
    }
  }

  const bookTrip = (event) => {
    let tripID = trips.tripsData.sort((a,b) => b.id - a.id)[0].id + 1;
    let destID = trips.destinationsData.find(dest => dest.destination === citySelection.value).id;
    let changeDate = startDateInput.value.split("-").join("/");
    let travelersAmount = Number(numberTravelers.value);
    let duration = Number(tripDuration.value);
      fetch("http://localhost:3001/api/v1/trips", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: tripID,
            userID: traveler.id,
            destinationID: destID,
            travelers: travelersAmount,
            date: changeDate,
            duration: duration,
            status: 'pending',
            suggestedActivities: []
          }),
      })
      .then((response) => {
          if (!response.ok) {
            throw new Error(
              "There was an error adding your Trip, please retry later"
            );
          } else {
            return response.json();
          }
        })
        .then(() => getData())
        .catch((err) => {
          postError.innerText = 'Error updating data, please retry later'
        })
  }

  const resetPage = () => {
    postError.innerHTML = '';
    citySelection.value = '';
    startDateInput.value = '';
    numberTravelers.value = '';
    tripDuration.value = '';
    show(bookingView);
    hide(potentialTrip);
    show(mainSection);
  }

const show = (event) => event.classList.remove("hidden");
    
const hide = (event) => event.classList.add("hidden");