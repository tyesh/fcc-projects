import { technologiesList } from './technologiesList';

const getRandomNum = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomTechnology = () => {
  return technologiesList[getRandomNum(technologiesList.length)];
};

const getRandomQuote = (technology) => {
  return technology.quotes[getRandomNum(technology.quotes.length)];
};

export { getRandomNum, getRandomTechnology, getRandomQuote };
