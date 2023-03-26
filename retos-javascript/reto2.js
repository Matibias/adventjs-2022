const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD
const countedHours = countHours(year, holidays);

function countHours(year, holidays) {
  let extraHours = holidays.map((holiday) => {
    const fecha = `${year}/${holiday}`;
    const day = new Date(fecha).getDay();
    let Hours = 0;
    if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
      Hours += 2;
    }
    Hours += 0;
    return Hours;
  });
  return extraHours.reduce((a, b) => a + b);
}
console.log(countedHours);
