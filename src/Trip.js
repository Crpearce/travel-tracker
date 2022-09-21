class Trip {
    constructor(id, userID, destinationID, travelers, date, duration, status) {
        this.id = id;
        this.userID = userID;
        this.destinationID = destinationID;
        this.travelers = travelers;
        this.date = date;
        this.duration = duration;
        this.status = status;
        this.suggestActivities = []
    }
}

export default Trip;