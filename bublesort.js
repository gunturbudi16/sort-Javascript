// console.log(data);
function Descending(data) {
  var temp = null;
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data[j] < data[j + 1]) {
        temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

function Ascending(data) {
  var temp = null;
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

const dummy = [100, 300, 200, 700, 4, 3, 400, 100, 500, 600, 2, 4, 1];
console.log(Ascending(dummy));
console.log(Descending(dummy));
