export default class PointModel {
  constructor() {
    this.points = [];
  }

  init(points, destinations, offers) {
    this.points = points;
    this.destinations = destinations;
    this.offers = offers;
    //console.log(this.points);
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
