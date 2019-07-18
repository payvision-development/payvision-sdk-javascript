class Request {
  constructor({
    uri,
    method = Request.METHOD_POST,
    parameters = [],
    headers = {},
    body = {},
    pathParams = [],
    responsePipelines = {},
  }) {
    this.uri = uri
    this.method = method
    this.parameters = parameters
    this.headers = headers
    this.body = body
    this.pathParams = pathParams
    this.responsePipelines = responsePipelines
  }

  getUri() {
    return Object.keys(this.pathParams).reduce((uri, pathParam) => uri.replace(`{${pathParam}}`, this.pathParams[pathParam]), this.uri)
  }

  getMethod() {
    return this.method
  }

  getParameters() {
    return this.parameters
  }

  getHeaders() {
    return this.headers
  }

  getBody() {
    return this.body
  }

  getPathParams() {
    return this.pathParams
  }

  getResponsePipeline(statusCode) {
    return this.responsePipelines[statusCode]
  }
}

Request.METHOD_GET = 'GET'
Request.METHOD_POST = 'POST'

module.exports = Request
