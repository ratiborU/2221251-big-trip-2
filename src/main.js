import FiltersView from './view/filters-view.js';
import MainPresenter from './presenter/main-presenter.js';
import MenuView from './view/menu-view.js';
import { render } from './render.js';
import PointModel from './model/point-model.js';
import { getPoints, getDestinations, getOffersByType } from './mock/point.js';


const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new MainPresenter(siteMainElement.querySelector('.trip-events'));

const points = getPoints();
//console.log(points);
const destinations = getDestinations();
const offersByType = getOffersByType();
const pointsModel = new PointModel();

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new MenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

pointsModel.init(points, destinations, offersByType);
tripPresenter.init(pointsModel);
