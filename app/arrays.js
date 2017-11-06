exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => {
    return arr.indexOf(item)
  },

  sum: function(arr) {
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

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

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
