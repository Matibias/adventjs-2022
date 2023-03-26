const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
function wrapping(gifts) {
  let giftWrapping = gifts.map((gift) => {
    const paper = "*";
    const large = gift.length;
    const paperLarge = paper.repeat(large + 2);
    const giftWrapped =
      paperLarge + "\n" + paper + gift + paper + "\n" + paperLarge;
    return giftWrapped;
  });
  return giftWrapping;
}
console.log(wrapped);
