function Descending(data) {
  for (var i = 0; i < data.length; i++) {
    var insert = i;
    for (var j = insert; j >= 0; j--) {
      if (data[j] > data[j - 1]) {
        var temp = data[j];
        data[j] = data[j - 1];
        data[j - 1] = temp;
      }
    }
  }
  return data;
}
function Ascending(data) {
  for (var i = 0; i < data.length; i++) {
    var insert = i;
    for (var j = insert; j >= 0; j--) {
      if (data[j] < data[j - 1]) {
        var temp = data[j];
        data[j] = data[j - 1];
        data[j - 1] = temp;
      }
    }
  }
  return data;
}

const dummy = [100, 300, 200, 700, 4, 3, 400, 100, 500, 600, 2, 4, 1];
console.log(Descending(dummy));
console.log(Ascending(dummy));
