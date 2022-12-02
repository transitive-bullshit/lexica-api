[lexica-api](../readme.md) / [Exports](../modules.md) / LexicaAPI

# Class: LexicaAPI

## Table of contents

### Constructors

- [constructor](LexicaAPI.md#constructor)

### Methods

- [reverseImageSearch](LexicaAPI.md#reverseimagesearch)
- [search](LexicaAPI.md#search)

## Constructors

### constructor

• **new LexicaAPI**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.apiBaseUrl?` | `string` |

#### Defined in

[lexica-api.ts:18](https://github.com/transitive-bullshit/lexica-api/blob/0e2a2f8/src/lexica-api.ts#L18)

## Methods

### reverseImageSearch

▸ **reverseImageSearch**(`imageUrl`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageUrl` | `string` |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)\>

#### Defined in

[lexica-api.ts:31](https://github.com/transitive-bullshit/lexica-api/blob/0e2a2f8/src/lexica-api.ts#L31)

___

### search

▸ **search**(`query`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)\>

#### Defined in

[lexica-api.ts:26](https://github.com/transitive-bullshit/lexica-api/blob/0e2a2f8/src/lexica-api.ts#L26)
