const travelersData = [
    {
      'id': 1,
      'name': 'Colby Pearce',
      'travelerType': 'relaxer'
    },
    {
      'id': 2,
      'name': 'Natalie Pearce',
      'travelerType': 'foodie'
    },
    {
      'id': 3,
      'name': 'Crosby Pearce',
      'travelerType': 'thrill-seeker'
    }
  ]
  
  const tripsData = [
    {
      'id': 10,
      'userID': 1,
      'destinationID': 4,
      'travelers': 2,
      'date': '2022/10/10',
      'duration': 5,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 30,
      'userID': 1,
      'destinationID': 8,
      'travelers': 3,
      'date': '2021/12/01',
      'duration': 4,
      'status': 'pending',
      'suggestActivities': []
    },
    {
      'id': 20,
      'userID': 1,
      'destinationID': 6,
      'travelers': 2,
      'date': '2022/05/04',
      'duration': 7,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 20,
      'userID': 2,
      'destinationID': 6,
      'travelers': 2,
      'date': '2022/05/04',
      'duration': 7,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 10,
      'userID': 2,
      'destinationID': 4,
      'travelers': 2,
      'date': '2021/12/10',
      'duration': 5,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 30,
      'userID': 2,
      'destinationID': 8,
      'travelers': 3,
      'date': '2022/06/01',
      'duration': 4,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 20,
      'userID': 4,
      'destinationID': 6,
      'travelers': 2,
      'date': '2018/05/04',
      'duration': 7,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 10,
      'userID': 4,
      'destinationID': 4,
      'travelers': 2,
      'date': '2021/12/20',
      'duration': 5,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 30,
      'userID': 4,
      'destinationID': 8,
      'travelers': 3,
      'date': '2022/06/01',
      'duration': 4,
      'status': 'pending',
      'suggestActivities': []
    }
  ]
  
  const destinationsData = [
    {
      'id': 4,
      'destination': 'Cartagena, Colombia',
      'estimatedLodgingCostPerDay': 65,
      'estimatedFlightCostPerPerson': 350,
      'image': 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      'alt': 'boats at a dock during the day time'
    },
    {
      'id': 6,
      'destination': 'Jakarta, Indonesia',
      'estimatedLodgingCostPerDay': 70,
      'estimatedFlightCostPerPerson': 890,
      'image': 'https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      'alt': 'lit up city at night'
    },
    {
      'id': 8,
      'destination': 'Tokyo, Japan',
      'estimatedLodgingCostPerDay': 125,
      'estimatedFlightCostPerPerson': 1000,
      'image': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80',
      'alt': 'city with people walking in crosswalk and brightly lit shops at night'
    }
  ]
  
  export { travelersData, tripsData, destinationsData }