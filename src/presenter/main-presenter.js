import PointView from '../view/point-view.js';
import TripEventsView from '../view/trip-events-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
// import CreatePointView from '../view/create-point-view.js';
import { render } from '../render.js';


export default class MainPresenter {
  constructor (tripContainer) {
    this.eventsList = new TripEventsView();
    this.tripContainer = tripContainer;
  }

  init (pointsModel) {
    this.pointsModel = pointsModel;
    this.points = [...this.pointsModel.getPoints()];
    this.destinations = [...this.pointsModel.getDestinations()];
    this.offers = [...this.pointsModel.getOffers()];

    render(new SortView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditPointView(this.points[0], this.destinations, this.offers), this.eventsList.getElement());

    for (const point of this.points) {
      render(new PointView(point, this.destinations, this.offers), this.eventsList.getElement());
    }
  }
}
