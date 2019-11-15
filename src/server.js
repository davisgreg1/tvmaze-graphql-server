/* eslint-disable import/first */
require('dotenv').config()
require('@babel/register')
import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { TVMazeAPI } from './TVMazeAPI'

const isDev = process.env.NODE_ENV !== 'production'

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  dataSources: () => ({
    TVMazeAPI: new TVMazeAPI()
  }),
  tracing: isDev
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
