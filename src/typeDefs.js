import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Show {
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
