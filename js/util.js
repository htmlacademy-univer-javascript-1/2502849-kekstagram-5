const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

function makeUniqueId(array, index, count, a, b) {
  while(index < count){
    const vaule = getRandomInteger(a, b);
    if (findDuplicatesId(array, vaule) === 0) {
      array[index] = vaule;
      index++;
    }
  }
  return array;
}

function findDuplicatesId(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return 1;
    }
  }
  return 0;
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger};
export {makeUniqueId};
export {getRandomArrayElement};
