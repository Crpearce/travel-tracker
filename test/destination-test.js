import { expect } from "chai";
import Destination from "../src/Destination";

describe("Destination", () => {
  let destination1;
  let destination2;
  let destination3;

  beforeEach(() => {
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
  });

  it("Should be a function", () => {
    expect(Destination).to.be.a("function");
  });

  it("should be an instance of Destination", () => {
    expect(destination1).to.be.instanceOf(Destination);
    expect(destination2).to.be.instanceOf(Destination);
    expect(destination3).to.be.instanceOf(Destination);
  });

  it("should have a destination id", () => {
    expect(destination1.id).to.equal(4);
    expect(destination2.id).to.equal(6);
    expect(destination3.id).to.equal(8);
  });

  it("should have a destination", () => {
    expect(destination1.destination).to.equal("Cartagena, Colombia");
    expect(destination2.destination).to.equal("Jakarta, Indonesia");
    expect(destination3.destination).to.equal("Tokyo, Japan");
  });

  it("should have a destination estimated lodging cost per day", () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(65);
    expect(destination2.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination3.estimatedLodgingCostPerDay).to.equal(125);
  });

  it("should have a destination estimated flight cost per person", () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(350);
    expect(destination2.estimatedFlightCostPerPerson).to.equal(890);
    expect(destination3.estimatedFlightCostPerPerson).to.equal(1000);
  });

  it("should have a destination image", () => {
    expect(destination1.image).to.equal(
      "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    );
    expect(destination2.image).to.equal(
      "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    );
  });

  it("should have a destination image alt tag", () => {
    expect(destination1.alt).to.equal("boats at a dock during the day time");
    expect(destination2.alt).to.equal("lit up city at night");
  });
});