
export const resolvers = {
  Query: {
    search: async (_source, _args, { dataSources }) => {
      return dataSources.TVMazeAPI.search()
    }
  }
}
