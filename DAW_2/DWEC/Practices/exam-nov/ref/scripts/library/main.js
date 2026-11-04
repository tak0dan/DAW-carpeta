'use strict';
// 2: tiers as data, not as a pile of ad-hoc ifs (extensible, DRY).
// Disclaimer (2): the spec does not say if a rate applies to ALL the days
// or only to the days inside its tier. I chose the second (progressive).
const TIERS = [
  { upTo: 7, rate: 0.20 },
  { upTo: 30, rate: 0.35 },
  { upTo: Infinity, rate: 0.50 },
];
const MAX_FINE = 15;
const MEMBER_DISCOUNT = 0.15;

const fineFor = (daysLate, isMember = false) => {
  if (typeof daysLate !== 'number' || Number.isNaN(daysLate) || daysLate < 0) {
    return null; // invalid. NOT 0: 0 is a valid fine ("on time")
  }
  let fine = 0;
  let from = 0;
  for (const { upTo, rate } of TIERS) {
    fine += Math.max(0, Math.min(daysLate, upTo) - from) * rate;
    from = upTo;
  }
  fine = Math.min(fine, MAX_FINE);
  if (isMember) fine *= 1 - MEMBER_DISCOUNT;
  return Math.round(fine * 100) / 100; // 2 decimals as a NUMBER
};

// 3
const lateness = (days) =>
  days <= 0 ? 'on time'
    : days <= 7 ? 'late'
      : days <= 30 ? 'very late'
        : 'lost';

const loanDays = (kind) => {
  switch (kind) {
    case 'book':
    case 'comic': // intentional fall-through: same 21 days
      return 21;
    case 'dvd':
      return 7;
    case 'game':
      return 3;
    default:
      return 14;
  }
};
