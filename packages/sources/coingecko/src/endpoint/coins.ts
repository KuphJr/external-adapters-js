import { Requester, Validator } from '@chainlink/ea-bootstrap'
import { Config, ExecuteWithConfig, InputParameters } from '@chainlink/types'
import overrides from './../config/symbols.json'

export const supportedEndpoints = ['coins']

export const inputParameters: InputParameters = {}

export interface CoinsResponse {
  id: string
  symbol: string
  name: string
}

export const execute: ExecuteWithConfig<Config> = async (request, _, config) => {
  const validator = new Validator(request, {}, { overrides })

  const jobRunID = validator.validated.id
  const url = '/coins/list'
  const options = {
    ...config.api,
    url,
    params: {
      x_cg_pro_api_key: config.apiKey,
    },
  }
  const response = await Requester.request<CoinsResponse[]>(options)
  return Requester.success(jobRunID, response, true)
}
