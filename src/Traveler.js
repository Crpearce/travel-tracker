class Traveler {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.travelerType = data.travelerType;
    }
  
    getName = () => this.name
  
    getTravelerType = () => this.travelerType 

}
  
  export default Traveler;