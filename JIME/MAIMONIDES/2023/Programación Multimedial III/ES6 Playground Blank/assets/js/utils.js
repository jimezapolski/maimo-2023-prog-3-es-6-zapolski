//average
const average = (sum, total) => sum / total;

// filter title
const haveTitle = (array, detectTitle)=> {
  const have = array.filter(({ title }) => title.includes(detectTitle));
  /*.map(({title}) => title)*/ return have;
}

//random
const random = (min, max) => 
   Math.floor(Math.random() * (max - min + 1)) + min;
;

export { haveTitle, random };
export default average;
