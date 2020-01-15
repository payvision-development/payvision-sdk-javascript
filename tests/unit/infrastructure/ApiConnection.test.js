jest.mock('../../../src/infrastructure/HttpClient')
const HttpClient = require('../../../src/infrastructure/HttpClient')
const ApiConnection = require('../../../src/infrastructure/ApiConnection')

describe('ApiConnection', () => {
  let defaultConfig
  beforeEach(() => {
    defaultConfig = {
      username: 'username',
      password: 'password',
      businessId: 'businessId',
      baseUri: 'baseUri',
      debug: true,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('uses a default httpClient is none provided', async () => {
    const apiConnection = new ApiConnection(defaultConfig)
    expect(HttpClient).toHaveBeenCalledTimes(1)
    expect(apiConnection.httpClient instanceof HttpClient).toBe(true)
  })

  it('allows adding a custom httpClient', async () => {
    const httpClient = {
      config: jest.fn(),
      send: jest.fn(),
    }
    const apiConnection = new ApiConnection({
      ...defaultConfig,
      httpClient,
    })
    expect(HttpClient).toHaveBeenCalledTimes(0)
    expect(httpClient.send).toHaveBeenCalledTimes(0)
    expect(httpClient.config).toHaveBeenCalledTimes(1)
    expect(httpClient.config).toHaveBeenCalledWith({
      username: 'username',
      password: 'password',
      baseUri: 'baseUri',
      debug: true,
    })
    expect(apiConnection.httpClient instanceof HttpClient).toBe(false)
  })

  it('does basic validation of the httpClient in the constructor', () => {
    expect(() => new ApiConnection({
      ...defaultConfig,
      httpClient: {},
    })).toThrowErrorMatchingSnapshot()
    expect(() => new ApiConnection({
      ...defaultConfig,
      httpClient: {
        config: () => {},
      },
    })).toThrowErrorMatchingSnapshot()
  })
})
