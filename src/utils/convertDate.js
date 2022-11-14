const allMonths = [
  'Січеня',
  'Лютий',
  'Березеня',
  'Квітеня',
  'Травеня',
  'Червеня',
  'Липеня',
  'Серпеня',
  'Вересеня',
  'Жовтеня',
  'Листопад',
  'Груденя',
];

/* Получаем 05 серпня 11:00 */
export const getDate = date => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();

  const dayString = String(day).padStart(2, 0);
  const hourString = String(hour).padStart(2, 0);
  const minutesString = String(minutes).padStart(2, 0);

  return `${dayString} ${allMonths[month]} ${hourString}:${minutesString}`;
};

/* Получаем 14:59 */
export const getOnlyTime = date => {
  const newDate = new Date(date);

  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();

  const hourString = String(hour).padStart(2, 0);
  const minutesString = String(minutes).padStart(2, 0);

  return `${hourString}:${minutesString}`;
};

/* Получаем 05 Серпня */
export const getDayAndMonth = date => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();

  const dayString = String(day).padStart(2, 0);

  return `${dayString} ${allMonths[month]}`;
};
