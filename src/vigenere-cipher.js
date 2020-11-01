const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse
}
  encrypt(message, key) {
    if (!message || !key) throw new Error()
    let arr = []
  message=message.toUpperCase()
  key=key.toUpperCase()
    for (let i =65; i <91; i++)
    {
      arr.push(String.fromCharCode(i))
    }
    let resNumber;
    let res='';
    let numberMessage;
    let numberKey;
    for (let i=0, k=0; i<message.length; i++,k++) {
      if (arr.includes(message[i])) {
        numberMessage =arr.indexOf(message[i]) ;
        numberKey = arr.indexOf(key.charAt(k % key.length));
        resNumber = numberMessage+numberKey;
        if (resNumber >=26) resNumber = Math.abs(26-resNumber);
      //  console.log(resNumber)
        res += arr[resNumber];
    }else {
            k = k - 1
            res += message[i]
    }
    }
    
    return (this.reverse === false) ? res.split('').reverse().join('') : res;
  }    


  decrypt(message, key) {
    if (!message || !key) throw new Error()
    let arr = []
  message=message.toUpperCase()
  key=key.toUpperCase()
    for (let i =65; i <91; i++)
    {
      arr.push(String.fromCharCode(i))
    }
    let resNumber;
    let res='';
    let numberMessage;
    let numberKey;
    for (let i=0, k=0; i<message.length; i++,k++) {
      if (arr.includes(message[i])) {
        numberMessage =arr.indexOf(message[i]) ;
        numberKey = arr.indexOf(key.charAt(k % key.length));
        resNumber = numberMessage-numberKey;
        if (resNumber < 0 ) resNumber = Math.abs(26+resNumber);
      //  console.log(resNumber)
        res += arr[resNumber];
    }else {
            k = k - 1
            res += message[i]
    }
    }
    
    return (this.reverse === false) ? res.split('').reverse().join('') : res;
  }
}

module.exports = VigenereCipheringMachine;
