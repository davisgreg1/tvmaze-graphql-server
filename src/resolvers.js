
export const resolvers = {
  Query: {
    search: async (_, { query }, { dataSources }) => {
      return dataSources.TVMazeAPI.search(query)
    }
  }
}
