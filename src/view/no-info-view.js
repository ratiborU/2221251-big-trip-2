import AbstractView from '../framework/view/abstract-view.js';


const createTemplate = () => (
  `<p class="trip-events__msg">
    Sorry, there was an error loading the data
  </p>`
);


export default class NoInfoView extends AbstractView {
  get template() {
    return createTemplate();
  }
}

