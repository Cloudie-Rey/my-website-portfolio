const DIWALI_DATES = {
  2024: [10, 31],
  2025: [10, 20],
  2026: [11, 8],
  2027: [10, 29],
  2028: [10, 17],
  2029: [11, 5],
  2030: [10, 26],
  2031: [11, 14],
  2032: [11, 2],
  2033: [10, 22],
  2034: [11, 10],
  2035: [10, 30]
};

const dayNumber = date => Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000;

export function getNthWeekdayOfMonth(year, month, weekday, occurrence) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const firstOccurrence = 1 + (weekday - firstWeekday + 7) % 7;
  return new Date(year, month, firstOccurrence + (occurrence - 1) * 7);
}

export function getEasterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
}

export function getHolidayThemes(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError('getHolidayThemes expects a valid Date.');
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const thanksgiving = getNthWeekdayOfMonth(year, 10, 4, 4);
  const diwaliParts = DIWALI_DATES[year];
  const diwaliDate = diwaliParts ? new Date(year, diwaliParts[0] - 1, diwaliParts[1]) : null;
  const daysUntilDiwali = diwaliDate ? dayNumber(diwaliDate) - dayNumber(date) : null;
  const easterSunday = getEasterSunday(year);
  const daysUntilEaster = dayNumber(easterSunday) - dayNumber(date);

  return {
    newYear: (month === 0 && day === 1) || (month === 11 && day === 31),
    christmas: month === 11
      ? day <= 26
      : month === 10 && day > thanksgiving.getDate(),
    thanksgiving: month === 10
      ? day >= 1 && day <= thanksgiving.getDate()
      : false,
    halloween: month === 9 && day >= 1 && day <= 31,
    diwali: daysUntilDiwali === 0 || daysUntilDiwali === 1,
    diwaliLamp: daysUntilDiwali === 1,
    diwaliDateKnown: Boolean(diwaliDate),
    easter: daysUntilEaster === 0 || daysUntilEaster === 1,
    cherryBlossoms: month === 2 || month === 3,
    valentines: month === 1 && day === 14,
    birthday: month === 1 && day === 15,
    alvinBirthday: month === 5 && day === 12
  };
}
