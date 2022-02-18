import { Requester } from '@chainlink/ea-bootstrap'
import { assertError } from '@chainlink/ea-test-helpers'
import { AdapterRequest } from '@chainlink/types'
import { makeExecute } from '../../src/adapter'

describe('price endpoint', () => {
  const jobID = '1'
  const execute = makeExecute()
  process.env.API_KEY = process.env.API_KEY ?? 'test_api_key'

  describe('basic request', () => {
    const requests = [
      {
        name: 'basic request without overrides',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: 'COMP',
          },
        },
        expectedIds: 'compound-governance-token',
      },
      {
        name: 'basic override',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: 'COMP',
            override: {
              coingecko: {
                COMP: 'this-id-should-not-be-used',
              },
            },
          },
        },
        expectedIds: 'compound-governance-token',
      },
      {
        name: 'request using coinid',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: 'COMP',
            coinid: 'specified-coin-id',
          },
        },
        expectedIds: 'specified-coin-id',
      },
    ]
    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        try {
          const response = await execute(req.testData as AdapterRequest, {})
          expect(response.result).toBeGreaterThan(0)
          expect(response.result).toBeLessThan(1000)
        } catch (error) {
          expect(error.cause.config.params.ids).toBe(req.expectedIds)
        }
      })
    })
  })

  describe('symbol to id override', () => {
    const requests = [
      {
        name: 'symbol to id override of a token with an existing override',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: 'COMP',
            symbolToIdOverride: {
              coingecko: {
                COMP: 'overridden-token-id',
              },
            },
          },
        },
        expectedIds: 'overridden-token-id',
      },
      {
        name: 'symbol to id override of token without an existing override',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: 'AAAA',
            symbolToIdOverride: {
              coingecko: {
                AAAA: 'overridden-token-id',
              },
            },
          },
        },
        expectedIds: 'overridden-token-id',
      },
      {
        name: 'multiple symbol to id override of a tokens with an existing overrides',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: ['COMP', 'FNX', 'FTT'],
            symbolToIdOverride: {
              coingecko: {
                COMP: 'overridden-token-id-a',
                FNX: 'overridden-token-id-b',
                FTT: 'overridden-token-id-c',
              },
            },
          },
        },
        expectedIds: 'overridden-token-id-a,overridden-token-id-b,overridden-token-id-c',
      },
      {
        name: 'multiple symbol to id override of a tokens without an existing overrides',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: ['CCCC', 'AAAA'],
            symbolToIdOverride: {
              coingecko: {
                AAAA: 'overridden-token-id-a',
                BBBB: 'overridden-token-id-b',
                CCCC: 'overridden-token-id-c',
              },
            },
          },
        },
        expectedIds: 'overridden-token-id-a,overridden-token-id-c',
      },
      {
        name: 'multiple symbol to id override of a tokens with and without an existing overrides',
        testData: {
          id: jobID,
          data: {
            to: 'USD',
            from: 'BCH',
            symbolToIdOverride: {
              coingecko: {
                AAAA: 'overridden-token-id-a',
                BCH: 'overridden-token-id-b',
                COMP: 'overridden-token-id-c',
              },
            },
          },
        },
        expectedIds: 'overridden-token-id-b',
      },
    ]
    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        try {
          await execute(req.testData as AdapterRequest, {})
          fail('Execute did not throw an error as expected')
        } catch (error) {
          expect(error.cause.config.params.ids).toBe(req.expectedIds)
        }
      })
    })
  })

  describe('validation error', () => {
    const requests = [
      { name: 'empty body', testData: {} },
      { name: 'empty data', testData: { data: {} } },
      {
        name: 'base not supplied',
        testData: { id: jobID, data: { quote: 'USD' } },
      },
      {
        name: 'quote not supplied',
        testData: { id: jobID, data: { base: 'ETH' } },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        try {
          await execute(req.testData as AdapterRequest, {})
        } catch (error) {
          const errorResp = Requester.errored(jobID, error)
          assertError({ expected: 400, actual: errorResp.statusCode }, errorResp, jobID)
        }
      })
    })
  })
})
