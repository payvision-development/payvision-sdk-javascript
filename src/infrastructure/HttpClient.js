const globalRequest = require('request')

class HttpClient {
  constructor(options) {
    if (options) {
      this.config(options)
    }
  }

  config({
    username,
    password,
    baseUri,
    debug,
  }) {
    this.username = username
    this.password = password
    this.debug = debug
    this.request = globalRequest.defaults({
      baseUrl: baseUri,
    })
  }

  send({
    uri,
    method = 'GET',
    parameters: qs = {},
    body,
    headers = {},
  }) {
    // Handle HTTP request and response
    return new Promise((resolve, reject) => {
      this.request({
        method,
        uri,
        qs,
        body,
        headers,
        auth: {
          user: this.username,
          pass: this.password,
        },
        json: true,
      }, (error, response, responseBody) => {
        if (error) {
          return reject(error)
        }
        return resolve({
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
          headers: response.headers,

          body: responseBody,
          originalResponse: response,
        })
      })
    })
  }
}

module.exports = HttpClient
