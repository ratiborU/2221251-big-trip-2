import PointView from '../view/point-view.js';
import TripEventsView from '../view/trip-events-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
// import CreatePointView from '../view/create-point-view.js';
import { render } from '../render.js';


export default class MailPresenter {
  constructor () {
    this.eventsList = new TripEventsView();
  }

  init (tripContainer) {
    this.tripContainer = tripContainer;

    render(new SortView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditPointView(), this.eventsList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventsList.getElement());
    }
  }
}
