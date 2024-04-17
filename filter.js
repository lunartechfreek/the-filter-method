  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// Mini challenge - my method ** worked
// const paul = people.filter(person => person.name === "Paul" ? person: null);
// console.log(paul);

// Their method
const paul = people.filter(p => p.name === "Paul");
console.log(paul);

// To remove result logged from the array targert the item [0]
// const paul = people.filter(p => p.name === "Paul")[0];


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// ************Long Method *****************
// const candidates = students.filter(student => {
//   // Filter inner skills array to those with at least 5 years exp
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// });

const has5yrsExp = skill => skill.yrsExperience >= 5
const hasStrongSkills = student => student.skills.filter(has5yrsExp).length > 0;

const candidates = students.filter(hasStrongSkills);

const candidateName = candidates.map(candidate => candidate.name);

console.log(candidateName);