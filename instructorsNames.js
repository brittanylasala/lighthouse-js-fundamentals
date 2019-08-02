const instructorWithLongestName = function(instructors) {
  let longestLength = 0;
  let longestIndex = 0;
  instructors.forEach(function(person, index) {
    if (person.name.length > longestLength) {
      longestLength = person.name.length;
      longestIndex = index;
    }
  });
  return instructors[longestIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));