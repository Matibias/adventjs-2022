const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  const giftWeight = packOfGifts.map((gift) => {
    const weight = gift.length;
    if (weight >0){
      let sumWeight = 0;
      sumWeight += weight;
      return sumWeight;
    }
  });

  const reindeersWeight = reindeers.map((reindeer) => {
    const reindeerWeight = reindeer.length * 2;
    if (reindeerWeight >0){
      let sumReindeer = 0;
      sumReindeer += reindeerWeight;
      return sumReindeer;
    }
  });

  const sumGiftWeight = giftWeight.reduce((a, b) => a + b);
  const SumReindeerWeight = reindeersWeight.reduce((a, b) => a + b);
  const packs = SumReindeerWeight / sumGiftWeight;
  const int = Math.trunc(packs);
  return int;
}

console.log(distributeGifts(packOfGifts, reindeers));
