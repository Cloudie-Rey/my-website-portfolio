import assert from 'node:assert/strict';
import test from 'node:test';
import { getEasterSunday, getHolidayThemes, getNthWeekdayOfMonth } from './holiday-calendar.js';

const themesOn = (year, month, day) => getHolidayThemes(new Date(year, month - 1, day));

test('finds the fourth Thursday and switches from Thanksgiving to Christmas', () => {
  assert.equal(getNthWeekdayOfMonth(2026, 10, 4, 4).getDate(), 26);
  assert.equal(themesOn(2026, 11, 1).thanksgiving, true);
  assert.equal(themesOn(2026, 11, 26).thanksgiving, true);
  assert.equal(themesOn(2026, 11, 26).christmas, false);
  assert.equal(themesOn(2026, 11, 27).christmas, true);
  assert.equal(themesOn(2026, 12, 26).christmas, true);
  assert.equal(themesOn(2026, 12, 27).christmas, false);
});

test('limits fixed-date themes to their requested dates', () => {
  assert.equal(themesOn(2026, 10, 1).halloween, true);
  assert.equal(themesOn(2026, 10, 31).halloween, true);
  assert.equal(themesOn(2026, 11, 1).halloween, false);
  assert.equal(themesOn(2027, 1, 1).newYear, true);
  assert.equal(themesOn(2026, 12, 31).newYear, true);
  assert.equal(themesOn(2026, 2, 14).valentines, true);
  assert.equal(themesOn(2026, 2, 15).valentines, false);
  assert.equal(themesOn(2026, 2, 15).birthday, true);
  assert.equal(themesOn(2026, 6, 12).alvinBirthday, true);
  assert.equal(themesOn(2026, 6, 11).alvinBirthday, false);
  assert.equal(themesOn(2026, 6, 13).alvinBirthday, false);
});

test('covers the day before and day of Easter and Diwali', () => {
  assert.equal(getEasterSunday(2026).getDate(), 5);
  assert.equal(themesOn(2026, 4, 4).easter, true);
  assert.equal(themesOn(2026, 4, 5).easter, true);
  assert.equal(themesOn(2026, 4, 6).easter, false);
  assert.equal(themesOn(2026, 11, 7).diwali, true);
  assert.equal(themesOn(2026, 11, 7).diwaliLamp, true);
  assert.equal(themesOn(2026, 11, 8).diwali, true);
  assert.equal(themesOn(2026, 11, 8).diwaliLamp, false);
  assert.equal(themesOn(2026, 11, 9).diwali, false);
});

test('marks spring petals throughout March and April', () => {
  assert.equal(themesOn(2026, 3, 1).cherryBlossoms, true);
  assert.equal(themesOn(2026, 4, 30).cherryBlossoms, true);
  assert.equal(themesOn(2026, 5, 1).cherryBlossoms, false);
});
