var watch = require('watch');

 watch.watchTree('/Users/neil/git/ndmanvar/JS-Mocha-WebdriverJS-1/neil', function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
      console.log('a');
    } else if (prev === null) {
      console.log('B');
    } else if (curr.nlink === 0) {
      console.log('c');
    } else {
      console.log('d');
    }
  })