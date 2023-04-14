import dayjs from 'dayjs';


const HOUR_MINUTES = 60;
const DAY_MINUTES = 1440;
const DATE_FORMAT = 'YYYY-MM-DD';
const TIME_FORMAT = 'hh:mm';
const DATE_TIME_FORMAT = 'DD/MM/YY hh:mm';


const getRandomInteger = (a = 1, b = 0) => Math.floor(Math.min(a, b) + Math.random() * (Math.abs(a - b) + 1));
const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const humanizePointDueDate = (date) => dayjs(date).format('DD MMMM');
const getDate = (date) => dayjs(date).format(DATE_FORMAT);
const getTime = (date) => dayjs(date).format(TIME_FORMAT);
const getDateTime = (date) => dayjs(date).format(DATE_TIME_FORMAT);

const duration = (dateFrom, dateTo) => {
  const startDate = dayjs(dateFrom);
  const endDate = dayjs(dateTo);
  const difference = endDate.diff(startDate, 'minute');

  const days = Math.floor(difference / DAY_MINUTES);
  const hours = Math.floor((difference - days * DAY_MINUTES) / HOUR_MINUTES);
  const minutes = difference - days * DAY_MINUTES - hours * HOUR_MINUTES;

  const daysResult = days ? `${days}D` : '';
  const hoursResult = hours ? `${hours}H` : '';
  const minutesResult = minutes ? `${minutes < 10 ? '0': ''}${minutes}M` : '00M';

  return `${daysResult} ${hoursResult} ${minutesResult}`;
};


export { getRandomInteger, getRandomElement, humanizePointDueDate, getDate, getTime, getDateTime, duration };
