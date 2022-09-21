import { expect } from "chai";
import { travelersData } from "../src/sample-data";
import Traveler from "../src/Traveler";

describe("Traveler", () => {
  let traveler1;
  let traveler2;
  let traveler3;
  let travelersData;

  beforeEach(() => {
    traveler1 = new Traveler({'id': 1, 'name': 'Colby Pearce', 'travelerType': 'relaxer'});
    traveler2 = new Traveler({'id': 2, 'name': 'Natalie Pearce','travelerType': 'foodie'});
    traveler3 = new Traveler({'id': 3, 'name': 'Crosby Pearce', 'travelerType': 'thrill-seeker'});
    travelersData = [
      {'id': 1, 'name': 'Colby Pearce', 'travelerType': 'relaxer'},
      {'id': 2, 'name': 'Natalie Pearce','travelerType': 'foodie'},
      {'id': 3, 'name': 'Crosby Pearce', 'travelerType': 'thrill-seeker'}
    ];
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
});