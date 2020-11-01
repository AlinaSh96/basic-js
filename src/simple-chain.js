const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainMaker : [],
  getLength() {
   return this.chainMaker.length;
    // remove line with error and write your code here
  },
  addLink(value = ' ') {
    this.chainMaker.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (!position || !(Number.isInteger(position)) || position > this.chainMaker.length || position < 0) {
      this.chainMaker = [];
      throw Error;
    }
    this.chainMaker.splice(position-1,1);
    return this;

  },
  reverseChain() {
    this.chainMaker.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    
    let result = this.chainMaker.join('~~')
    this.chainMaker = []
    return result



  }
};

module.exports = chainMaker;
