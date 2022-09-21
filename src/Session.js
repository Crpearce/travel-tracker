class Session {
    constructor(travelersData, tripsData, destinationsData) {
        this.travelersData = travelersData;
        this.tripsData = tripsData;
        this.destinationsData = destinationsData;
    }
    getUsersTrips = (id) => this.tripsData.filter(trip => trip.userID === id);

    getUsersDestinations = (id) => {
        let allTrips = this.getUsersTrips(id);
        let allDestinations = allTrips.reduce((acc, trip) => {
            this.destinationsData.forEach(destination => {
                if(destination.id === trip.destinationID) {
                    acc.push(destination);
                }
            })
            return acc;
        }, [])
        return allDestinations;
    }
    
    getYear = (id) => {
        let allTrips = this.getUsersTrips(id);
        let allYears = allTrips.map(trip => trip.date.split("/"))
        if(allYears.length >= 1) {
            let curr = allYears.sort((a, b) => b[0] - a[0])[0][0];
            return curr;
        } else {
            return '0';
        }
    }

    getUsersLodgingCosts = (id) => {
        let allTrips = this.getUsersTrips(id);
        let currentYear = this.getYear(id);
        let thisYearsTrips = allTrips.filter(trip => trip.date.split("/").includes(currentYear));
        let allDestinations = this.getUsersDestinations(id);
        let tripsLodgingCost = thisYearsTrips.reduce((acc, trip) => {
            let getInfo = allDestinations.find(destination => destination.id === trip.destinationID);
            let dollars = getInfo.estimatedLodgingCostPerDay * trip.duration;
            acc += dollars;
            return acc;
        }, 0)
        return tripsLodgingCost;
    }

    getUsersFlightsCosts = (id) => {
        let allTrips = this.getUsersTrips(id);
        let currentYear = this.getYear(id);
        let thisYearsTrips = allTrips.filter(trip => trip.date.split("/").includes(currentYear));
        let allDestinations = this.getUsersDestinations(id);
        let tripsFlightCost = thisYearsTrips.reduce((acc, trip) => {
            let getInfo = allDestinations.find(destination => destination.id === trip.destinationID);
            let dollars = (getInfo.estimatedFlightCostPerPerson * trip.travelers) * 2;
            acc += dollars;
            return acc;
        }, 0)
        return tripsFlightCost;
    }

    getUsersTotalSpent = (id) => {
        let lodging = this.getUsersLodgingCosts(id) * 1.1;
        let flights = this.getUsersFlightsCosts(id) * 1.1;
        return (lodging + flights).toFixed(2);
    }
}

export default Session