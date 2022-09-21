import chai from "chai";
const expect = chai.expect;

import Traveler from "../src/Traveler";
import Destination from "../src/Destination";
import Trip from "../src/Trip";
import Session from "../src/Session";

describe("Session", () => {
  let trip1;
  let trip2;
  let trip3;
  let trip4;
  let traveler1;
  let traveler2;
  let traveler3;
  let destination1;
  let destination2;
  let destination3;
  let destinationsData;
  let tripsData;
  let travelersData;
  let session;

  beforeEach(() => {
    trip1 = new Trip(10, 1, 4, 2, "2022/10/10", 5, "approved");
    trip2 = new Trip(30, 1, 8, 3, "2021/12/01", 4, "pending");
    trip3 = new Trip(20, 1, 6, 2, "2022/05/04", 7, "approved");
    trip4 = new Trip(20, 2, 6, 2, "2022/05/04", 7, "approved");
    traveler1 = new Traveler(1);
    traveler2 = new Traveler(2);
    traveler3 = new Traveler(3);
    destination1 = new Destination(
      4,
      "Cartagena, Colombia",
      65,
      350,
      "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      "boats at a dock during the day time"
    );
    destination2 = new Destination(
      6,
      "Jakarta, Indonesia",
      70,
      890,
      "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "lit up city at night"
    );
    destination3 = new Destination(
      8,
      "Tokyo, Japan",
      125,
      1000,
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=8",
      "city with people walking in crosswalk and brightly lit shops at night"
    );
    travelersData = [traveler1, traveler2, traveler3];
    tripsData = [trip1, trip2, trip3, trip4];
    destinationsData = [destination1, destination2, destination3];
    session = new Session(travelersData, tripsData, destinationsData);
  });

  it('Should be a function', () => {
    expect(Session).to.be.a('function');
  });

  it('Should have travelers', () => {
    expect(session.travelersData).to.deep.equal([traveler1, traveler2, traveler3])
  });

  it('Should have trips', () => {
    expect(session.tripsData).to.deep.equal([trip1, trip2, trip3, trip4])
  });

  it('Should have destinations', () => {
    expect(session.destinationsData).to.deep.equal([destination1, destination2, destination3])
  });
});