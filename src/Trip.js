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

  getLodgingCosts = (id, currentDate) => {
    let allTrips = this.getTravelerTrips(id);
    let year = currentDate.split("-")[0];
    let thisYearsTrips = allTrips.filter((trip) =>
      trip.date.split("/").includes(year)
    );
    let allDestinations = this.getTravelerDestinations(id);
    let tripsLodgingCost = thisYearsTrips.reduce((acc, trip) => {
      let getInfo = allDestinations.find(
        (destination) => destination.id === trip.destinationID
      );
      let dollars = getInfo.estimatedLodgingCostPerDay * trip.duration;
      acc += dollars;
      return acc;
    }, 0);
    return tripsLodgingCost;
  };

  getFlightCosts = (id, currentDate) => {
    let allTrips = this.getTravelerTrips(id);
    let year = currentDate.split("-")[0];
    let thisYearsTrips = allTrips.filter((trip) =>
      trip.date.split("/").includes(year)
    );
    let allDestinations = this.getTravelerDestinations(id);
    let tripsLodgingCost = thisYearsTrips.reduce((acc, trip) => {
      let getInfo = allDestinations.find(
        (destination) => destination.id === trip.destinationID
      );
      let dollars = getInfo.estimatedFlightCostPerPerson * trip.travelers;
      acc += dollars;
      return acc;
    }, 0);
    return tripsLodgingCost;
  };

  getYearlyTotalSpent = (id, currentDate) => {
    let lodging = this.getLodgingCosts(id, currentDate) * 1.1;
    let flights = this.getFlightCosts(id, currentDate) * 1.1;
    return (lodging + flights).toFixed(2);
  };

  getPastTrips = (id, currentDate) => {
    let allTrips = this.getTravelerTrips(id);
    let year = currentDate.split("-")[0];
    let allDestinations = this.getTravelerDestinations(id);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (
          trip.date.split("/").join("") < year.split("-").join("") &&
          destination.id === trip.destinationID
        ) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}`);
        }
      });
      return acc;
    }, []);
    if (getDates.length < 1) {
      return `No past trips`;
    } else {
      return getDates;
    }
  };

  getUpcomingTrips = (id, currentDate) => {
    let allTrips = this.getTravelerTrips(id);
    let year = currentDate.split("-")[0];
    let allDestinations = this.getTravelerDestinations(id);
    let getDates = allTrips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (
          trip.date.split("/").join("") >= year.split("-").join("") &&
          destination.id === trip.destinationID
        ) {
          acc.push(`</br> ${trip.date}:  ${destination.destination}`);
        }
      });
      return acc;
    }, []);
    if (getDates.length < 1) {
      return `No upcoming trips`;
    } else {
      return getDates;
    }
  };

    getPendingTrips = (id) => {
    let allTrips = this.getTravelerTrips(id);
    let allDestinations = this.getTravelerDestinations(id);
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

export default Trip;
