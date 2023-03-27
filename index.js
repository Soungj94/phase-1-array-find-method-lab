// code your solution here

// superbowlWin(record)
// 1) returns a year the Denver Broncos won the superbowl
// 2) returns undefined if the record has no win objects

// function superbowlWin(record) {
//   const winningYear = record.find(function (entry) {
//     return entry.result === "W";
//   });
//   return winningYear ? winningYear.year : undefined;
// }

function superbowlWin(record) {
  const winningYear = record.find((entry) => entry.result === "W");
  return winningYear ? winningYear.year : undefined;
}
