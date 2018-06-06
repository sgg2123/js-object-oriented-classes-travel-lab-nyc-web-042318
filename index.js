class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let h = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    let v = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(h) + Math.abs(v))
  }

  estimatedTime(peakHours) {
    if (peakHours === true) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
