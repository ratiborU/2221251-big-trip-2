const getRandomInteger = (a = 0, b = 1) => Math.floor(Math.ceil(Math.min(a, b)) + Math.random() * (Math.floor(Math.max(a, b)) - Math.ceil(Math.min(a, b)) + 1));
const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


export { getRandomInteger, getRandomElement };

