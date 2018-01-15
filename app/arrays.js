exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => {
    return arr.indexOf(item)
  },

  sum: (arr) => {
    return arr.reduce((accu, num) => {
      accu += num
      return accu
    }, 0)
  },

  remove: function(arr, item) {
    return arr.filter(num => num !== item)
  },

  removeWithoutCopy: function(arr, item) {
    const newArray = arr.filter(num => num !== item)
    arr.splice(0, arr.length)
    newArray.forEach(num => arr.push(num))

    return arr
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    const newArr = arr.filter(num => num === item);
    return newArr.length;
  },

  duplicates: function(arr) {
    let duplicates = [];
    let numbers = [];

    arr.forEach(num => {
      if (numbers.includes(num) && !duplicates.includes(num)) {
        return duplicates.push(num);
      }
      numbers.push(num);
    })

    return duplicates;
  },

  square: function(arr) {
    return arr.map(num => Math.pow(num, 2));
  },

  findAllOccurrences: function(arr, target) {
    const indexArray = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        indexArray.push(i);
      };
    };
    return indexArray;
  }
};
