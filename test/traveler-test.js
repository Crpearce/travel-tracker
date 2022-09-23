import { expect } from "chai";
import { travelersData, tripsData, destinationsData } from "../src/sample-data";
import Traveler from "../src/Traveler";

describe("Traveler", () => {
  let traveler1;
  let traveler2;
  let traveler3;

  beforeEach(() => {
    traveler1 = new Traveler(travelersData[0]);
    traveler2 = new Traveler(travelersData[1]);
    traveler3 = new Traveler(travelersData[2]);
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
    expect(traveler1.getName()).to.equal('Colby');
    expect(traveler2.getName()).to.equal('Natalie');
  });

  it("should be able to determine a Traveler type", () => {
    expect(traveler1.travelerType).to.equal('relaxer');
    expect(traveler2.travelerType).to.equal('foodie');
  });
  

});