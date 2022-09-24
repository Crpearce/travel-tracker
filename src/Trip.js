class Trip {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData;
    this.destinationsData = destinationsData;
  }

  getTravelerTrips = (id) =>
    this.tripsData.filter((trip) => trip.userID === id);

  getTravelerDestinations = (id) => {
    let allTrips = this.getTravelerTrips(id);
    let allDestinations = allTrips.reduce((acc, trip) => {
      this.destinationsData.forEach((destination) => {
        if (destination.id === trip.destinationID) {
          acc.push(destination);
        }
      });
      return acc;
    }, []);
    return allDestinations;
  };

  getCosts = (id, currentDate, flightsOrLodging, durationOrTravelers) => {
    let allTrips = this.getTravelerTrips(id);
    let year = currentDate.split("-")[0];
    let thisYearsTrips = allTrips.filter((trip) => trip.date.split("/").includes(year));
    let allDestinations = this.getTravelerDestinations(id);
    let tripsLodgingCost = thisYearsTrips.reduce((acc, trip) => {
      let getInfo = allDestinations.find((destination) => destination.id === trip.destinationID);
      let dollars = getInfo[flightsOrLodging] * trip[durationOrTravelers];
      acc += dollars;
      return acc;
    }, 0);
    return tripsLodgingCost;
  };

  getYearlyTotalSpent = (id, currentDate) => {
    let lodging = this.getCosts(id, currentDate, "estimatedLodgingCostPerDay", "duration") * 1.1;
    let flights = this.getCosts(id, currentDate,"estimatedFlightCostPerPerson","travelers") * 1.1;
    return (lodging + flights).toFixed(2);
  };

  getPastTrips = (id, currentDate) => {
    let allTrips = this.getTravelerTrips(id);
    let year = currentDate.split("-")[0];
    let allDestinations = this.getTravelerDestinations(id);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (trip.date.split("/").join("") < year.split("-").join("") && destination.id === trip.destinationID) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}`);
        }
      });
      return acc;
    }, []);
    return getDates.length < 1 ? `No past trips` : getDates;
  };

  getUpcomingTrips = (id, currentDate) => {
    let allTrips = this.getTravelerTrips(id);
    let year = currentDate.split("-")[0];
    let allDestinations = this.getTravelerDestinations(id);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (trip.date.split("/").join("") >= year.split("-").join("") && destination.id === trip.destinationID) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}`);
        }
      });
      return acc;
    }, []);
    return getDates.length < 1 ? `No upcoming trips` : getDates;
  };

  getPendingTrips = (id) => {
    let allTrips = this.getTravelerTrips(id);
    let allDestinations = this.getTravelerDestinations(id);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (trip.status === "pending" && destination.id === trip.destinationID) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}, Status : ${trip.status}`);
        }
      });
      return acc;
    }, []);
    return getDates.length < 1 ? `No pending trips` : getDates;
  };

  getEstimatedLodging = (duration, destination) => {
    let findSpot = this.destinationsData.find((dest) => dest.destination === destination);
    return findSpot.estimatedLodgingCostPerDay * duration;
  };

  getEstimatedFlights = (numberTravelers, destination) => {
    let findSpot = this.destinationsData.find((dest) => dest.destination === destination);
    return findSpot.estimatedFlightCostPerPerson * numberTravelers;
  };

  getEstimatedTotal = (numberTravelers, duration, destination) => {
    let findSpot = this.destinationsData.find((dest) => dest.destination === destination);
    return ((findSpot.estimatedFlightCostPerPerson * numberTravelers) + (findSpot.estimatedLodgingCostPerDay * duration));
  };

  getTripPhoto = (destination) => this.destinationsData.find((dest) => dest.destination === destination).image

  getTripName = (destination) => this.destinationsData.find((dest) => dest.destination === destination).destination

}

export default Trip;
