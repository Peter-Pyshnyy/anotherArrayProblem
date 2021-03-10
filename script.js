function frip(arr, a, b) {
  for (let item of arr) {
    if (a > item || item > b) {
      arr.splice(indexOf(item), 1);
    }
  }
}

let num = [1, 2, 3, 4, 5, 6];

alert(frip(num, 1, 3));
