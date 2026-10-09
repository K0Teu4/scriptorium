export function cityHour(date, tz) {
  return +new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', hour12: false }).format(date)
}
export function phaseOf(date, tz) {
  const h = cityHour(date, tz)
  if (h >= 5 && h < 12) return 'morning'
  if (h < 17) return 'day'
  if (h < 22) return 'evening'
  return 'night'
}
export function cityTime(date, tz) {
  return new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(date)
}