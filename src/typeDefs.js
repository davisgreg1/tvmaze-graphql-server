import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Show {
    genres: [String]
    mediumImage: String
    originalImage: String
    name: String
    score: Float
    summary: String
  }

  type Query {
    search(query: String!): [Show]
  }
`
