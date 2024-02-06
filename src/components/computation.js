export function convertToTimeFormat(input) {
  const parts = input.split('.');

  // Получаем часы и минуты из частей строки
  const hours = parts.length > 0 ? parts[0] : '00';
  const minutes = parts.length > 1 ? parts[1] : '00';

  // Добавляем нули в начало строк для получения формата '00'
  const formattedHours = hours.padStart(2, '0');
  const formattedMinutes = minutes.padEnd(2, '0');

  // Возвращаем строку в формате '00.00'
  return `${formattedHours}.${formattedMinutes}`;
}

// Функция для складывания времени
export function addTime(timeInput1, timeInput2) {
  const time1 = convertToTimeFormat(timeInput1);
  const time2 = convertToTimeFormat(timeInput2);

  // Разбиваем строку времени на часы и минуты
  const [hours1, minutes1] = time1.split('.').map(parseFloat);
  const [hours2, minutes2] = time2.split('.').map(parseFloat);

  console.log(hours1, minutes1, hours2, minutes2);
  if (hours1 >= 24 || hours2 >= 24 || minutes1 >= 60 || minutes2 >= 60) {
    return 'Invalid time';
  }
  // Складываем часы и минуты
  let totalHours = hours1 + hours2;
  let totalMinutes = minutes1 + minutes2;

  // Если количество минут превышает 60, пересчитываем часы и минуты
  if (totalMinutes >= 60) {
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;
  }

  // Если количество часов превышает 24, пересчитываем часы
  totalHours %= 24;

  // Форматируем результат
  const formattedHours = String(totalHours).padStart(2, '0');
  const formattedMinutes = String(totalMinutes).padStart(2, '0');

  // Возвращаем суммарное время
  return `${formattedHours}.${formattedMinutes}`;
}

// Функция для вычитания времени
export function subtractTime(timeInput1, timeInput2) {
  const time1 = convertToTimeFormat(timeInput1);
  const time2 = convertToTimeFormat(timeInput2);
  // Разбиваем строку времени на часы и минуты
  const [hours1, minutes1] = time1.split('.').map(parseFloat);
  const [hours2, minutes2] = time2.split('.').map(parseFloat);

  // Вычитаем часы и минуты
  let totalHours = hours1 - hours2;
  let totalMinutes = minutes1 - minutes2;

  // Если количество минут меньше 0, корректируем часы и минуты
  if (totalMinutes < 0) {
    totalHours -= 1;
    totalMinutes += 60;
  }

  // Если количество часов меньше 0, добавляем 24 часа
  if (totalHours < 0) {
    totalHours += 24;
  }

  // Форматируем результат
  const formattedHours = String(totalHours).padStart(2, '0');
  const formattedMinutes = String(totalMinutes).padStart(2, '0');

  // Возвращаем разницу времени
  return `${formattedHours}.${formattedMinutes}`;
}
