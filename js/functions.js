/* eslint-disable no-console */
const getStringLength = (string, maxiLength) => (string.length <= maxiLength);

console.log('Вывод для первой функции');
console.log(getStringLength('проверяемая строка', 20)); // true
console.log(getStringLength('проверяемая строка', 18)); // true
console.log(getStringLength('проверяемая строка', 10)); // false


const isPalindrome = (string) => {
  let normalizedString;
  normalizedString = string.toLowerCase();
  normalizedString = normalizedString.replaceAll(' ', '');

  let invertedString = '';
  for (let i = (normalizedString.length - 1); i >= 0; i--) {
    invertedString += normalizedString[i];
  }

  if (invertedString === normalizedString) {
    return true;
  } else {
    return false;
  }
};

console.log('Вывод для второй функции');
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл')); // true
console.log(isPalindrome('Маша на полке клопа нашлф')); // false
console.log(isPalindrome('А роза упала на лапу Азора')); // true

