/* eslint-disable import/first */
require('@babel/register')
import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { TVMazeAPI } from './TVMazeAPI'

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  dataSources: () => ({
    TVMazeAPI: new TVMazeAPI()
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
