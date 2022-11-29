import test from 'ava'

import { LexicaAPI } from './lexica-api'

test('LexicaAPI search', async (t) => {
  const lexica = new LexicaAPI()

  const res0 = await lexica.search('apples')
  t.truthy(res0?.images?.length)
})

test('LexicaAPI reverseImageSearch', async (t) => {
  const lexica = new LexicaAPI()

  const res0 = await lexica.reverseImageSearch(
    'https://media.gettyimages.com/photos/crete-senesi-countryside-in-summer-tuscany-italy-picture-id1411845730'
  )
  t.truthy(res0?.images?.length)
})
