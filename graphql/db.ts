export let people = [
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

export const deletePerson = (id: number) => {
  const filteredPeople = people.filter((person) => person.id !== id);
  if (people.length > filteredPeople.length) {
    people = filteredPeople;
    return true;
  } else {
    return false;
  }
};

export const addPerson = (name: string, age: number, gender: string) => {
  const newPerson = {
    id: people.length,
    name,
    age,
    gender,
  };
  people.push(newPerson);
  return newPerson;
};
