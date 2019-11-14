import { RESTDataSource } from 'apollo-datasource-rest'
import { parseHTML } from './utils'

export class TVMazeAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://api.tvmaze.com/'
  }

  search = async (query = '') => {
    const data = await this.get(`search/shows?q=${query}`)
    console.log(data)
    const parsedShowData = data.map(show => ({
      mediumImage: show.show.image?.medium,
      originalImage: show.show.image?.original,
      score: show.score,
      name: show.show.name,
      summary: parseHTML(show.show.summary)
    }))
    console.log(parsedShowData)
    return parsedShowData
  }
}
