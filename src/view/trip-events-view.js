import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);


export default class TripEventsView extends AbstractView {
  get template() {
    return createTemplate;
  }
}
