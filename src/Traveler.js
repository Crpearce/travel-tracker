class Traveler {
    constructor(id) {
      this.id = id;
      this.name;
      this.travelerType;
    }
  
    getName(travelersData) {
      this.name = travelersData
        .filter(traveler => this.id === traveler.id)
        .map(traveler => traveler.name)[0]
    }
  
    getTravelerType(travelersData) {
      this.travelerType = travelersData
          .filter(traveler => this.id === traveler.id)
          .map(traveler => traveler.travelerType)[0]
    }
  }
  
  export default Traveler;