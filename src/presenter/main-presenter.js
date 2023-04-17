import PointView from '../view/point-view.js';
import TripEventsView from '../view/trip-events-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import NoPointsView from '../view/no-points-view.js';
// import CreatePointView from '../view/create-point-view.js';
import { render } from '../render.js';


export default class MainPresenter {
  #pointsList = null;
  #tripContainer = null;
  #pointsModel = null;
  #points = null;
  #destinations = null;
  #offers = null;

  constructor (tripContainer) {
    this.#pointsList = new TripEventsView();
    this.#tripContainer = tripContainer;
  }

  #renderPoint = (point) => {
    const pointComponent = new PointView(point, this.#destinations, this.#offers);
    const pointEditComponent = new EditPointView(point, this.#destinations, this.#offers);

    const replacePointToEdit = () => {
      this.#pointsList.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceEditToPoint = () => {
      this.#pointsList.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEdit();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.#pointsList.element);
  };

  init (pointsModel) {
    this.#pointsModel = pointsModel;
    this.#points = [...this.#pointsModel.getPoints()];
    this.#destinations = [...this.#pointsModel.getDestinations()];
    this.#offers = [...this.#pointsModel.getOffers()];

    if (this.#points.length === 0) {
      render(new NoPointsView(), this.#tripContainer);
    } else {
      render(new SortView(), this.#tripContainer);
      render(this.#pointsList, this.#tripContainer);
      for (const point of this.#points) {
        this.#renderPoint(point);
      }
    }
  }
}
