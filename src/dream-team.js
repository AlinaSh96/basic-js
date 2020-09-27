const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members === null) return false;
  let membersSort = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let el = members[i].trim().substr(0, 1).toUpperCase();
      membersSort.push(el);
      membersSort.sort();

    }
  }
  return membersSort.join("");
}