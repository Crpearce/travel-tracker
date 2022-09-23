class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
  }

  getName = () => this.name.split(" ")[0];

  getTravelerType = () => this.travelerType;




  // getUpcomingTrips = (tripsData, destinationsData) => {
  //   let allTrips = this.getTravelerTrips(tripsData);
  //   let currentDate = new Date().toJSON().slice(0, 10);
  //   let allDestinations = this.getTravelerDestinations(tripsData, destinationsData);
  //   let getDates = allTrips.reduce((acc, trip) => {
  //     allDestinations.forEach((destination) => {
  //       if (trip.date.split("/").join("") >= currentDate.split("-").join("") && destination.id === trip.destinationID) {
  //         acc.push(`</br> ${trip.date}:  ${destination.destination}`);
  //       }
  //     });
  //     return acc;
  //   }, []);
  //   if(getDates.length < 1) {
  //     return `No upcoming trips`
  //   } else {
  //   return getDates;
  //   }
  // }

  // getPendingTrips = (tripsData, destinationsData) => {
  //   let allTrips = this.getTravelerTrips(tripsData);
  //   let allDestinations = this.getTravelerDestinations(tripsData, destinationsData);
  //   let getDates = allTrips.reduce((acc, trip) => {
  //     allDestinations.forEach((destination) => {
  //       if (trip.status === 'pending' && destination.id === trip.destinationID) {
  //         acc.push(`</br> ${trip.date}:  ${destination.destination}, Status : ${trip.status}`);
  //       }
  //     });
  //     return acc;
  //   }, []);
  //   if(getDates.length < 1) {
  //     return `No pending trips`
  //   } else {
  //     return getDates;
  //   }
  // }
}

export default Traveler;
