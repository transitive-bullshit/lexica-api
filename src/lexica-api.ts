import got from 'got'

import * as types from './types'

export class LexicaAPI {
  protected _apiBaseUrl: string

  constructor({
    apiBaseUrl = ' https://lexica.art/api/v1'
  }: { apiBaseUrl?: string } = {}) {
    this._apiBaseUrl = apiBaseUrl
  }

  async search(query: string): Promise<types.SearchResults> {
    const url = `${this._apiBaseUrl}/search`
    return got<types.SearchResults>(url, {
      searchParams: {
        q: query
      }
    }).json()
  }

  async reverseImageSearch(imageUrl: string): Promise<types.SearchResults> {
    const url = `${this._apiBaseUrl}/search`
    return got<types.SearchResults>(url, {
      searchParams: {
        q: imageUrl
      }
    }).json()
  }
}
