class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
  }

  getName = () => this.name;

  getTravelerType = () => this.travelerType;

  getTravelerTrips = (tripsData) => tripsData.filter((trip) => trip.userID === this.id);

  getTravelerDestinations = (tripsData, destinationsData) => {
    let allTrips = this.getTravelerTrips(tripsData);
    let allDestinations = allTrips.reduce((acc, trip) => {
      destinationsData.forEach((destination) => {
        if (destination.id === trip.destinationID) {
          acc.push(destination);
        }
      });
      return acc;
    }, []);
    return allDestinations;
  };

  getYear = (tripsData) => {
    let allTrips = this.getTravelerTrips(tripsData);
    let allYears = allTrips.map((trip) => trip.date.split("/"));
    if (allYears.length >= 1) {
      let year = allYears.sort((a, b) => b[0] - a[0])[0][0];
      return year;
    } else {
      return "0";
    }
  };

  getLodgingCosts = (tripsData, destinationsData) => {
    let allTrips = this.getTravelerTrips(tripsData);
    let currentYear = this.getYear(tripsData);
    let thisYearsTrips = allTrips.filter((trip) => trip.date.split("/").includes(currentYear));
    let allDestinations = this.getTravelerDestinations(tripsData,destinationsData);
    let tripsLodgingCost = thisYearsTrips.reduce((acc, trip) => {
      let getInfo = allDestinations.find((destination) => destination.id === trip.destinationID);
      let dollars = getInfo.estimatedLodgingCostPerDay * trip.duration;
      acc += dollars;
      return acc;
    }, 0);
    return tripsLodgingCost;
  };

  getFlightCosts = (tripsData, destinationsData) => {
    let allTrips = this.getTravelerTrips(tripsData);
    let currentYear = this.getYear(tripsData);
    let thisYearsTrips = allTrips.filter((trip) => trip.date.split("/").includes(currentYear));
    let allDestinations = this.getTravelerDestinations(tripsData, destinationsData);
    let tripsLodgingCost = thisYearsTrips.reduce((acc, trip) => {
      let getInfo = allDestinations.find(destination => destination.id === trip.destinationID);
      let dollars = getInfo.estimatedFlightCostPerPerson * trip.travelers * 2;
      acc += dollars;
      return acc;
    }, 0);
    return tripsLodgingCost;
  };

  getYearlyTotalSpent = (tripsData, destinationsData) => {
    let lodging = this.getLodgingCosts(tripsData, destinationsData) * 1.1;
    let flights = this.getFlightCosts(tripsData, destinationsData) * 1.1;
    return (lodging + flights).toFixed(2);
  };

  getPastTrips = (tripsData, destinationsData) => {
    let allTrips = this.getTravelerTrips(tripsData);
    let currentDate = new Date().toJSON().slice(0, 10);
    let allDestinations = this.getTravelerDestinations(tripsData, destinationsData);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (trip.date.split("/").join("") < currentDate.split("-").join("") && destination.id === trip.destinationID) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}`);
        }
      });
      return acc;
    }, []);
    if(getDates.length < 1) {
      return `No past trips`
    } else {
    return getDates;
    }
  };

  getUpcomingTrips = (tripsData, destinationsData) => {
    let allTrips = this.getTravelerTrips(tripsData);
    let currentDate = new Date().toJSON().slice(0, 10);
    let allDestinations = this.getTravelerDestinations(tripsData, destinationsData);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (trip.date.split("/").join("") >= currentDate.split("-").join("") && destination.id === trip.destinationID) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}`);
        }
      });
      return acc;
    }, []);
    if(getDates.length < 1) {
      return `No upcoming trips`
    } else {
    return getDates;
    }
  }

  getPendingTrips = (tripsData, destinationsData) => {
    let allTrips = this.getTravelerTrips(tripsData);
    let allDestinations = this.getTravelerDestinations(tripsData, destinationsData);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (trip.status === 'pending' && destination.id === trip.destinationID) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}, Status : ${trip.status}`);
        }
      });
      return acc;
    }, []);
    if(getDates.length < 1) {
      return `No pending trips`
    } else {
      return getDates;
    }
  }
}

export default Traveler;
