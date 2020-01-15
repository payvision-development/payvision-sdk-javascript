const HttpClient = require('./HttpClient') // null on RHINO build via Webpack

class ApiConnection {
  constructor({
    username,
    password,
    businessId,
    baseUri,
    debug = false,
    // HttpClient is null for Rhino builds and a custom httpClient needs to be provided
    httpClient = process.env.TARGET_ENVIRONMENT === 'RHINO' ? undefined : new HttpClient(),
  }) {
    if (!httpClient) {
      throw new Error('Rhino build requires a custom httpClient to be provided.')
    }
    if (typeof httpClient.config !== 'function') {
      throw new Error('Custom httpClient needs to implement a config function')
    }
    if (typeof httpClient.send !== 'function') {
      throw new Error('Custom httpClient needs to implement a send function')
    }

    this.httpClient = httpClient
    this.httpClient.config({
      username,
      password,
      baseUri,
      debug,
    })

    this.businessId = businessId
  }

  send(request) {
    const req = {
      uri: request.getUri(),
      method: request.getMethod(),
      parameters: request.getParameters(),
      body: request.getBody(),
      headers: request.getHeaders(),
    }

    if (['POST', 'PUT', 'PATCH'].indexOf(req.method) >= 0) {
      req.body = req.body || {}
      req.body.header = req.body.headers || {}
      req.body.header.businessId = req.body.header.businessId || this.businessId
    } else {
      req.parameters.businessId = req.parameters.businessId || this.businessId
    }

    return this.httpClient.send(req).then(httpResult => {
      const result = httpResult
      const ResponseClass = request.getResponsePipeline(result.statusCode)
      result.body = result.body || {
        description: 'Payvision API error',
        result: -2,
        body: {
          error: {},
        },
        header: {},
      }
      result.data = ResponseClass ? new ResponseClass(result.body, true) : null
      return result
    })
  }
}

module.exports = ApiConnection
