import { Requester, util } from '@chainlink/ea-bootstrap'
import types from '@chainlink/types'
import { send } from '../endpoint'

export const DEFAULT_DATA_PATH = 'result'
export const DEFAULT_ENDPOINT = send.NAME
export const NAME = 'DYDX_STARK'

export const DEFAULT_API_ENDPOINT = 'https://api.stage.dydx.exchange/v3/price'

const ENV_PRIVATE_KEY = 'PRIVATE_KEY'
const ENV_STARK_MESSAGE = 'STARK_MESSAGE'
const ENV_ORACLE_NAME = 'ORACLE_NAME'

export type Config = types.Config & {
  privateKey: string
  starkMessage: string
  oracleName: string
}

export const makeConfig = (prefix?: string): Config => {
  const defaultConfig = Requester.getDefaultConfig(prefix)
  defaultConfig.api.baseURL = defaultConfig.api.baseURL || DEFAULT_API_ENDPOINT
  return {
    ...defaultConfig,
    privateKey: util.getRequiredEnv(ENV_PRIVATE_KEY, prefix),
    starkMessage: util.getRequiredEnv(ENV_STARK_MESSAGE, prefix),
    oracleName: util.getRequiredEnv(ENV_ORACLE_NAME, prefix),
  }
}
