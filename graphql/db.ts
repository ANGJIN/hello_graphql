import axios from "axios";

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

// Wrapping REST API with GraphQL
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = BASE_URL + "list_movies.json";
const MOVIE_DETAILS_URL = BASE_URL + "movie_details.json";
const MOVIE_SUGGESTIONS_URL = BASE_URL + "movie_suggestions.json";

export const getMovies = async (limit: number, rating: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id: number) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
