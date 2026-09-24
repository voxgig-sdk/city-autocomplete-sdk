
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CityAutocompleteSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CityAutocompleteSDK.test()
    equal(testsdk instanceof CityAutocompleteSDK, true,
      'CityAutocompleteSDK.test() must return a client synchronously')
  })

})
