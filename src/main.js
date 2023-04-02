import FiltersView from './view/filters-view.js';
import MainPresenter from './presenter/main-presenter.js';
import MenuView from './view/menu-view.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new MainPresenter();

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new MenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

tripPresenter.init(siteMainElement.querySelector('.trip-events'));
