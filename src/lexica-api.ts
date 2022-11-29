import got from 'got'
import pThrottle from 'p-throttle'

import * as types from './types'

/**
 * Rate-limit HTTP requests to Lexica.
 */
const throttle = pThrottle({
  limit: 20,
  interval: 60000
})

export class LexicaAPI {
  protected _apiBaseUrl: string
  protected _get: (url: string, query: string) => Promise<types.SearchResults>

  constructor({
    apiBaseUrl = ' https://lexica.art/api/v1'
  }: { apiBaseUrl?: string } = {}) {
    this._apiBaseUrl = apiBaseUrl

    this._get = throttle(this._getImpl)
  }

  async search(query: string): Promise<types.SearchResults> {
    const url = `${this._apiBaseUrl}/search`
    return this._get(url, query)
  }

  async reverseImageSearch(imageUrl: string): Promise<types.SearchResults> {
    const url = `${this._apiBaseUrl}/search`
    return this._get(url, imageUrl)
  }

  async _getImpl(url: string, query: string): Promise<types.SearchResults> {
    return got<types.SearchResults>(url, {
      searchParams: {
        q: query
      }
    }).json()
  }
}
