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

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
