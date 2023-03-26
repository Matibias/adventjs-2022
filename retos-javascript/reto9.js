// const leds = [0, 1, 1, 0, 1]
// const leds = [0, 0, 0, 1];
const leds = [0, 0, 1, 0, 0];

function countTime(leds) {
  let counter = 0;
  let arr = leds;
  let arr2 = []
  let validador = false;
  while (!validador) {
    arr2.splice(0, arr2.length-1)
    arr.map((led, index) => {
      console.log(`entre ${index}`);
      console.log(arr);
      if (led === 1){
        // if (index === 0) {
        //   // arr[leds.length - 1] = 1;
        //   arr2.push(arr[leds.length - 1])
        // }
      console.log('push')
        // arr2.push(index)
        arr[index-1] = 1;
      }
    });

    // console.log(arr2)

    // arr2.forEach(element => {
    //   if (element === 0) {
    //     arr[leds.length - 1] = 1;
    //   }
    //   console.log('element' ,element)
    //   arr[element] = 1;
    // });
    // console.log(arr)

    counter += 7;
    if (!arr.some(item => item === 0)) {
      console.log("hola");
      validador = true;
    }
  }
  return counter;
}

console.log(countTime(leds));
