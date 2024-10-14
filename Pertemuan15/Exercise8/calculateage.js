export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = (person) => {
  let age = calculateAge(person.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${person.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${person.firstName} is already retired.`);
  }
};
