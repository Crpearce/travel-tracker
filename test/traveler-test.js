import { expect } from "chai";
import { travelersData, tripsData, destinationsData } from "../src/sample-data";
import Traveler from "../src/Traveler";

describe("Traveler", () => {
  let traveler1;
  let traveler2;
  let traveler3;

  beforeEach(() => {
    traveler1 = new Traveler({'id': 1, 'name': 'Colby Pearce', 'travelerType': 'relaxer'});
    traveler2 = new Traveler({'id': 2, 'name': 'Natalie Pearce','travelerType': 'foodie'});
    traveler3 = new Traveler({'id': 3, 'name': 'Crosby Pearce', 'travelerType': 'thrill-seeker'});
  });

  it("Should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of Traveler", () => {
    expect(traveler1).to.be.instanceOf(Traveler);
    expect(traveler2).to.be.instanceOf(Traveler);
  });

  it("should be able to determine a Traveler id", () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
    expect(traveler3.id).to.equal(3);
  });

  it("should be able to find a travelers name by id number", () => {
    expect(traveler1.name).to.equal('Colby Pearce');
    expect(traveler2.name).to.equal('Natalie Pearce');
  });

  it("should be able to determine a Traveler type", () => {
    expect(traveler1.travelerType).to.equal('relaxer');
    expect(traveler2.travelerType).to.equal('foodie');
  });

  it('Should be able to find all of a users trips', () => {
    expect(traveler1.getTravelerTrips(tripsData)).to.deep.equal([tripsData[0], tripsData[1], tripsData[2]])
    expect(traveler2.getTravelerTrips(tripsData)).to.deep.equal([tripsData[3], tripsData[4], tripsData[5]])
  });

  it('Should be able to find all of a users destinations', () => {
    expect(traveler1.getTravelerDestinations(tripsData, destinationsData)).to.deep.equal([destinationsData[0], destinationsData[2], destinationsData[1]])
  });

  it('Should be able to find the year', () => {
    expect(traveler1.getYear(tripsData)).to.equal('2022')
  });

  it('Should be able to find a users lodging costs for all trips this year', () => {
    expect(traveler1.getLodgingCosts(tripsData, destinationsData)).to.equal(815)
    expect(traveler2.getLodgingCosts(tripsData, destinationsData)).to.equal(990)
  });

  it('Should be able to find a users flight costs for all trips this year', () => {
    expect(traveler1.getFlightCosts(tripsData, destinationsData)).to.equal(4960)
    expect(traveler2.getFlightCosts(tripsData, destinationsData)).to.equal(9560)
  });

  it('Should be able to find a users total spent on trips', () => {
    expect(traveler1.getYearlyTotalSpent(tripsData, destinationsData)).to.equal('6352.50')
    expect(traveler2.getYearlyTotalSpent(tripsData, destinationsData)).to.equal('11605.00')
  });

  it('Should be able to find a users past trips', () => {
    expect(traveler1.getPastTrips(tripsData, destinationsData)).to.equal()
    // expect(session.getUsersTotalSpent(2)).to.equal('4301.00')
  });
});