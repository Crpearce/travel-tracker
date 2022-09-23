import { expect } from "chai";
import { travelersData, tripsData, destinationsData } from "../src/sample-data";
import Trip from "../src/Trip";

describe("Trip", () => {
  let trips;

  beforeEach(() => {
    trips = new Trip(tripsData, destinationsData);
  });

  it("Should be a function", () => {
    expect(Trip).to.be.a("function");
  });

  it("should be an instance of Trip", () => {
    expect(trips).to.be.an.instanceOf(Trip);
  });

  it("should have a property to hold all the trips data", () => {
    expect(trips.tripsData).to.deep.equal(tripsData);
  });

  it("should have a property to hold all the destinations data", () => {
    expect(trips.destinationsData).to.deep.equal(destinationsData);
  });
  it("should get the traveler trips", () => {
    const traveler1 = tripsData.filter((object) => object.userID === 1);
    const traveler2 = tripsData.filter((object) => object.userID === 2);
    expect(trips.getTravelerTrips(1)).to.deep.equal(traveler1);
    expect(trips.getTravelerTrips(1).length).to.equal(3);
    expect(trips.getTravelerTrips(2)).to.deep.equal(traveler2);
    expect(trips.getTravelerTrips(2).length).to.equal(3);
  });

  it("should be able to determine a travelers destinations", () => {
    expect(trips.getTravelerDestinations(1)).to.deep.equal([
      destinationsData[0],
      destinationsData[2],
      destinationsData[1],
    ]);
    expect(trips.getTravelerDestinations(2)).to.deep.equal([
      destinationsData[1],
      destinationsData[0],
      destinationsData[2],
    ]);
  });

  it("should be able to determine the last years lodging costs for a user", () => {
    expect(trips.getLodgingCosts(1, "2022-09-23")).to.deep.equal(815);
    expect(trips.getLodgingCosts(2, "2022-09-23")).to.deep.equal(990);
  });

  it("should be able to determine the last years flight costs for a user", () => {
    expect(trips.getFlightCosts(1, "2022-09-23")).to.deep.equal(2480);
    expect(trips.getFlightCosts(2, "2022-09-23")).to.deep.equal(4780);
  });

  it("should be able to determine the total spent, with travel fees, for the last year", () => {
    expect(trips.getYearlyTotalSpent(1, "2022-09-23")).to.deep.equal("3624.50");
    expect(trips.getYearlyTotalSpent(2, "2022-09-23")).to.deep.equal("6347.00");
  });

  it("should be able to determine past trips a traveler has taken", () => {
    expect(trips.getPastTrips(1, "2022-09-23")).to.deep.equal([
      "</br> 2021/12/01:  Tokyo, Japan",
    ]);
    expect(trips.getPastTrips(2, "2022-09-23")).to.deep.equal([
      "</br> 2021/12/10:  Cartagena, Colombia",
    ]);
  });

  it("should be able to determine travelers upcoming trips", () => {
    expect(trips.getUpcomingTrips(1, "2022-09-23")).to.deep.equal([
      '</br> 2022/10/10:  Cartagena, Colombia',
      '</br> 2022/05/04:  Jakarta, Indonesia'
    ]);
    expect(trips.getUpcomingTrips(2, "2022-09-23")).to.deep.equal([
      '</br> 2022/05/04:  Jakarta, Indonesia',
      '</br> 2022/06/01:  Tokyo, Japan'
    ]);
  });

  it("should be able to determine travelers pending trips", () => {
    expect(trips.getPendingTrips(1)).to.deep.equal(["</br> 2021/12/01:  Tokyo, Japan, Status : pending"]);
    expect(trips.getPendingTrips(2)).to.deep.equal('No pending trips');
  });
});
