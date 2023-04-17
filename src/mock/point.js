import { getRandomInteger, getRandomElement } from '../utils.js';
import dayjs from 'dayjs';


const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const POINTS_COUNT = 4;

const DESTINATION_NAMES = ['Amsterdam', 'Chamonix', 'Geneva', 'London'];

const OFFER_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const descriptionsMaxCount = 5;
const offersMaxCount = 5;
const pictureNumbers = 10;
const pictureCount = 5;
const priceMin = 10;
const priceMax = 200;


const generateDescription = () => {
  const descriptionsCount = getRandomInteger(1, descriptionsMaxCount);
  return Array.from({ length: descriptionsCount }).map(() => getRandomElement(DESCRIPTIONS)).join(' ');
};


const generatePicture = () => ({
  src: `http://picsum.photos/248/152?r=${getRandomInteger(pictureNumbers)}`,
  description: generateDescription(),
});


const generateDestination = (id) => ({
  id,
  description: generateDescription(),
  name: DESTINATION_NAMES[id],
  pictures: Array.from({length: getRandomInteger(pictureCount)}).map(() => generatePicture())
});


const getDestinations = () => Array.from({ length: DESTINATION_NAMES.length }).map((value, index) => generateDestination(index));


const generateOffer = (id, type) => ({
  id,
  title: `offer for ${type}`,
  price: getRandomInteger(priceMin, priceMax)
});


const generateOffersByType = (type) => ({
  type,
  offers: Array.from({ length: getRandomInteger(1, offersMaxCount) }).map((value, index) => generateOffer(index, type))
});


const getOffersByType = () => Array.from({ length: OFFER_TYPES.length}).map((value, index) => generateOffersByType(OFFER_TYPES[index]));
//console.log();

const offersByType = getOffersByType();
const destinations = getDestinations();
//console.log(offersByType);


const generatePoint = (id) => {
  const offersByTypePoint = getRandomElement(offersByType);
  const allOfferIdsByTypePoint = offersByTypePoint.offers.map((offer) => offer.id);
  const randomDestination = getRandomElement(destinations);
  //console.log(allOfferIdsByTypePoint);
  return {
    basePrice: getRandomInteger(priceMin, priceMax), //getRandomInteger(priceMin, priceMax)
    dateFrom: dayjs().add(getRandomInteger(-3), 'day').add(getRandomInteger(-2), 'hour').add(getRandomInteger(-59), 'minute'),
    dateTo: dayjs().add(getRandomInteger(2), 'day').add(getRandomInteger(2), 'hour').add(getRandomInteger(59), 'minute'),
    destinationId: randomDestination.id,
    id,
    isFavorite: Boolean(getRandomInteger()),
    offerIds: Array.from({length: getRandomInteger(1, offersByTypePoint.offers.length)}).map(() => getRandomElement(allOfferIdsByTypePoint)),
    type: OFFER_TYPES[getRandomInteger(8)]
  };
};

//console.log(getRandomElement(destinations));
//console.log(destinations);


//console.log(generatePoint(1));

const getPoints = () => Array.from({ length: POINTS_COUNT }).map((value, index) => generatePoint(index));

//console.log(generatePoint(1));
//console.log(getPoints());

export{ getPoints, getDestinations, getOffersByType };
