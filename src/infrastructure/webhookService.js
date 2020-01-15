const jwt = require('jsonwebtoken')
const { crc32 } = require('crc')
const CancelResponseRequest = require('../domain/payments/valueObject/Cancel/Response')
const CaptureResponseRequest = require('../domain/payments/valueObject/Capture/Response')
const ResponseRequest = require('../domain/payments/valueObject/Payment/Response')
const RefundResponseRequest = require('../domain/payments/valueObject/Refund/Response')

class WebhookService {
  static async verifyWebhook(payload, eventSignature, webhookSecret) {
    // Verify eventSignature against the webhook secret
    const sigVerification = await jwt.verify(eventSignature, webhookSecret)

    // Recreate the crc32 as created by the Payvision API
    const hash = crc32(payload).toString(16)
    const hashBuffer = Buffer.from(hash, 'hex')
    const base64Crc = hashBuffer.reverse().toString('base64')
    // remove padding and base64UrlEncode by replacing + with - and / with _
    const payvisionCrc32 = base64Crc.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_')

    if (payvisionCrc32 !== sigVerification.crc32) {
      throw new Error('Invalid crc32.')
    }

    // jwt and crc verified, we can now safely return the parsed body
    return JSON.parse(payload)
  }

  static async parseWebhook(payload, eventSignature, webhookSecret) {
    const result = await this.verifyWebhook(payload, eventSignature, webhookSecret)
    switch (result.Payload.body.transaction.action) {
      case 'cancel':
        result.Payload = new CancelResponseRequest(result.Payload, true)
        break
      case 'capture':
        result.Payload = new CaptureResponseRequest(result.Payload, true)
        break
      case 'authorize':
      case 'payment':
        result.Payload = new ResponseRequest(result.Payload, true)
        break
      case 'refund':
        result.Payload = new RefundResponseRequest(result.Payload, true)
        break
      default:
    }
    return result
  }
}

module.exports = WebhookService
