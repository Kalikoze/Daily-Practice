exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const strArr = [...str];
    const arr = [];

    strArr.forEach((elem) => {
      const num = str.split(elem).length - 1;
      const newAmount = num < amount ? num : amount;
      if (arr.slice(-1)[0] !== elem ) {
        for (let i = 0; i<newAmount; i++) {
          arr.push(elem)
        };
      };
    });
    return arr.join('');
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
