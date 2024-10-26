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


function isMeetingWithinWorkHours (startOfDay, endOfDay, meetingStart, meetingDuration) {

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStart = timeToMinutes(startOfDay);
  const workEnd = timeToMinutes(endOfDay);
  const meetingStartInMinutes = timeToMinutes(meetingStart);
  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;

  return meetingStartInMinutes >= workStart && meetingEndInMinutes <= workEnd;
}

console.log(isMeetingWithinWorkHours('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkHours('8:0', '10:0', '8:0', 120)); // true
console.log(isMeetingWithinWorkHours('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkHours('14:00', '17:30', '08:0', 90)); // false
console.log(isMeetingWithinWorkHours('8:00', '17:30', '08:00', 900)); // false
