export const people = [
  {
    id: 0,
    name: "ANGJIN",
    age: 26,
    gender: "male",
  },
  {
    id: 1,
    name: "Youngjin",
    age: 22,
    gender: "female",
  },
  {
    id: 2,
    name: "Kim",
    age: 25,
    gender: "male",
  },
  {
    id: 3,
    name: "Dami",
    age: 1,
    gender: "male",
  },
];

export const getById = (id: number) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
