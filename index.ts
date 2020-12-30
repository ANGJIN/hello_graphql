import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers /* resolvers : resolvers */,
});

server.start(() => {
  console.log("graphql server start localhost:4000");
});
