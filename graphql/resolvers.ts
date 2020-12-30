import {
  people,
  getById,
  addPerson,
  deletePerson,
  getMovies,
  getMovie,
  getSuggestions,
} from "./db";

// resolves Query or mutation
const resolvers = {
  Query: {
    // schema에 정의된 query와 같은 이름으로 Resolver 설정
    people: () => people,
    person: (_, { id }) => getById(id),

    // Wrapping REST API with GraphQL
    getMovies: (_, { limit, rating }) => getMovies(limit, rating),
    getMovie: (_, { id }) => getMovie(id),
    getSuggestions: (_, { id }) => getSuggestions(id),
  },

  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
    deletePerson: (_, { id }) => deletePerson(id),
  },
};

export default resolvers;
