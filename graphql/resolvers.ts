import { people, getById, addPerson, deletePerson } from "./db";

// resolves Query or mutation
const resolvers = {
  Query: {
    // schema에 정의된 query와 같은 이름으로 Resolver 설정
    people: () => people,
    person: (_, { id }) => getById(id),
  },

  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
    deletePerson: (_, { id }) => deletePerson(id),
  },
};

export default resolvers;
