import { expect } from "chai";
import { travelersData, tripsData, destinationsData } from "../src/sample-data";
import Trip from "../src/Trip";

describe("Trip", () => {
  let trip1;
  let trip2;
  let trip3;
  let trip4;

  beforeEach(() => {
    trip1 = (tripsData[0])
    trip2 = (tripsData[1])
    trip3 = (tripsData[2])
    trip4 = (tripsData[3])
  });

  it("Should be a function", () => {
    expect(Trip).to.be.a("function");
  });

  it("should be able to determine a trip id", () => {
    expect(trip1.id).to.equal(10);
    expect(trip2.id).to.equal(30);
    expect(trip3.id).to.equal(20);
    expect(trip4.id).to.equal(20);
  });

  it("should be able to determine a trip userID", () => {
    expect(trip1.userID).to.equal(1);
    expect(trip4.userID).to.equal(2);
  });

  it("should have a trip destination id", () => {
    expect(trip1.destinationID).to.equal(4);
    expect(trip2.destinationID).to.equal(8);
  });

  it("should have a travelers", () => {
    expect(trip3.travelers).to.equal(2);
    expect(trip4.travelers).to.equal(2);
  });

  it("should have a trip date", () => {
    expect(trip1.date).to.equal("2022/10/10");
    expect(trip4.date).to.equal("2022/05/04");
  });

  it("should have a trip duration", () => {
    expect(trip2.duration).to.equal(4);
    expect(trip3.duration).to.equal(7);
  });

  it("should have a trip status", () => {
    expect(trip3.status).to.equal("approved");
    expect(trip4.status).to.equal("approved");
  });

  it("should have a suggested activities", () => {
    expect(trip1.suggestActivities).to.be.an("array");
    expect(trip2.suggestActivities).to.be.an("array");
  });
});