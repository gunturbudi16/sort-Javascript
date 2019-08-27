function Descending(data) {
  var temp = null;
  for (var i = 0; i < data.length - 1; i++) {
    var select = i;
    for (var j = i + 1; j < data.length; j++) {
      if (data[select] < data[j]) {
        select = j;
      }
    }

    temp = data[i];
    data[i] = data[select];
    data[select] = temp;
  }
  return data;
}

function Ascending(data) {
  var temp = null;
  for (var i = 0; i < data.length - 1; i++) {
    var select = i;
    for (var j = i + 1; j < data.length; j++) {
      if (data[select] > data[j]) {
        select = j;
      }
    }

    temp = data[i];
    data[i] = data[select];
    data[select] = temp;
    // console.log(i, '======', data);
  }
  return data;
}

const dummy = [100, 300, 200, 700, 4, 3, 400, 100, 500, 600, 2, 4, 1];
console.log(Descending(dummy));
console.log(Ascending(dummy));
