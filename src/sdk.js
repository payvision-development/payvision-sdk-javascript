const ApiConnection = require('./infrastructure/ApiConnection')
const internalWebhookService = require('./infrastructure/webhookService')
const PaymentsApi = require('./application/payments/api')
const CheckoutsApi = require('./application/checkouts/api')
const LinksApi = require('./application/paymentlink/api')

class PayvisionSDK {
  constructor({
    username,
    password,
    businessId,
    baseUri,
    debug,
    webhookSecret,
    httpClient,
    webhookService,
  }) {
    this.apiConnection = new ApiConnection({
      username, password, businessId, baseUri, debug, httpClient,
    })

    this.webhookService = process.env.TARGET_ENVIRONMENT === 'RHINO' ? webhookService : internalWebhookService

    this.webhookSecret = webhookSecret
    this.payments = PaymentsApi
    this.checkouts = CheckoutsApi
    this.links = LinksApi
  }

  send(request) {
    return this.apiConnection.send(request)
  }

  verifyWebhook(payload, eventSignature) {
    return this.webhookService.verifyWebhook(payload, eventSignature, this.webhookSecret)
  }

  parseWebhook(payload, eventSignature) {
    return this.webhookService.parseWebhook(payload, eventSignature, this.webhookSecret)
  }
}

module.exports = PayvisionSDK
