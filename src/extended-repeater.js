const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
} = options

if (addition === null) {
  addition = 'null';
}

let arrayAddition = [];
let resStr = [];
for (let i = 0; i < additionRepeatTimes; i++) {
  arrayAddition.push(addition);
}
let strNew = str + arrayAddition.join(additionSeparator);



for (let i = 0; i < repeatTimes; i++) {
  resStr.push(strNew);
}
return resStr.join(separator);

  //Например: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3,
  // additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
};
  