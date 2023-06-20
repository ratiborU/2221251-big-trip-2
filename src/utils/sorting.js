import dayjs from 'dayjs';
import { SortType } from '../const';


const sortPointsByDay = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
const sortPointsByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortPointsByTime = (pointA, pointB) => {
  const timePointA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const timePointB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));
  return timePointB - timePointA;
};


const sorting = {
  [SortType.DAY]: (points) => points.sort(sortPointsByDay),
  [SortType.TIME]: (points) => points.sort(sortPointsByTime),
  [SortType.PRICE]: (points) => points.sort(sortPointsByPrice)
};


export { sorting };

