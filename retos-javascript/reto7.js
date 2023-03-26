const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {
  const gifts = [];
  const handleGifts = (item) => {
    if (
      (!a2.includes(item) && !a3.includes(item)) ||
      (!a1.includes(item) && !a3.includes(item)) ||
      (!a1.includes(item) && !a2.includes(item))
    ) {
      gifts.includes(item) ? null : gifts.push(item);
    }
  };
  a1.map((item) => handleGifts(item));
  a2.map((item) => handleGifts(item));
  a3.map((item) => handleGifts(item));
  return gifts;
}

console.log(getGiftsToRefill(a1, a2, a3));