const organizeInstructors = function(instructors) {
  let organizeCourses = {};
  instructors.forEach(function(person) {
    if (organizeCourses[person.course] === undefined) {
      organizeCourses[person.course] = [person.name];
    } else {
      organizeCourses[person.course].push(person.name);
    };
  });
  return organizeCourses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));