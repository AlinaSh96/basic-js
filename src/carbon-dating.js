const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
let age=0;

if (  sampleActivity === undefined || typeof(sampleActivity) != "string" || isNaN(parseFloat(sampleActivity)) || (sampleActivity)=="" || parseFloat(sampleActivity)>0 || isFinite(parseFloat(sampleActivity) ))
{
  return false;
}
  else {
     age =Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)*HALF_LIFE_PERIOD)/0.693);
     return age;
  }
};
