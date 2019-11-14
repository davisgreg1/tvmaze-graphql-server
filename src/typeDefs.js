import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Show {
    name: String
    score: Float
    summary: String
  }

  type Query {
    search: [Show]
  }
`
