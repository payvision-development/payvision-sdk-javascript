const webhookService = require('../../../src/infrastructure/webhookService')
const CancelResponseRequest = require('../../../src/domain/payments/valueObject/Cancel/Response')
const CaptureResponseRequest = require('../../../src/domain/payments/valueObject/Capture/Response')
const ResponseRequest = require('../../../src/domain/payments/valueObject/Payment/Response')
const RefundResponseRequest = require('../../../src/domain/payments/valueObject/Refund/Response')

describe('webhookService', () => {

  describe('verifyWebhook', () => {
    const payload = '{"foo":"bar"}'
    const eventSignature = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lIjoiZGF0YSIsImNyYzMyIjoiN19Vcl9nIn0.1zgPSLhg5xzRLZHi4wjyKS-bgJwFXufg6Mdabtz6uuE'
    const webhookSecret = 'testsecret'

    it('throws when jwt is malformed', () => {
      expect(webhookService.verifyWebhook('payload', 'eventSignature', 'secret')).rejects.toThrowErrorMatchingSnapshot()
    })
    it('throws when jwt does not match secret', () => {
      expect(webhookService.verifyWebhook('payload', 'eventSignature.test.test', 'secret')).rejects.toThrowErrorMatchingSnapshot()
    })
    it('throws when checksum does not match', () => {
      expect(webhookService.verifyWebhook(`${payload} foo`, eventSignature, webhookSecret)).rejects.toThrowErrorMatchingSnapshot()
    })
    it('returns parsed json when all is valid', () => {
      expect(webhookService.verifyWebhook(payload, eventSignature, webhookSecret)).resolves.toEqual({ foo: 'bar' })
    })
  })

  describe('parseWebhook', () => {
    let verifyWebhookSpy
    let defaultResponse
    beforeEach(() => {
      verifyWebhookSpy = jest.spyOn(webhookService, 'verifyWebhook')
      defaultResponse = {
        Payload: {
          description: 'description',
          result: 0,
          body: {
            transaction: {
              amount: 1,
              currencyCode: 'currencyCode',
              id: 'id',
              parentId: 'parentId',
              trackingCode: 'trackingCode',
            },
          },
        },
      }
    })

    it('passes its arguments on to verifyWebhook', async () => {
      defaultResponse.Payload.body.transaction.action = 'authorize'
      verifyWebhookSpy.mockReturnValue(defaultResponse)
      await webhookService.parseWebhook(1, 2, 3)
      expect(webhookService.verifyWebhook).toHaveBeenCalledWith(1, 2, 3)
    })

    it('generates a CancelResponseRequest object when the action is cancel', async () => {
      defaultResponse.Payload.body.transaction.action = 'cancel'
      verifyWebhookSpy.mockReturnValue(defaultResponse)
      expect((await webhookService.parseWebhook(1, 2, 3)).Payload).toBeInstanceOf(CancelResponseRequest)
    })
    it('generates a CaptureResponseRequest object when the action is capture', async () => {
      defaultResponse.Payload.body.transaction.action = 'capture'
      verifyWebhookSpy.mockReturnValue(defaultResponse)
      expect((await webhookService.parseWebhook(1, 2, 3)).Payload).toBeInstanceOf(CaptureResponseRequest)
    })
    it('generates a ResponseRequest object when the action is authorize', async () => {
      defaultResponse.Payload.body.transaction.action = 'authorize'
      verifyWebhookSpy.mockReturnValue(defaultResponse)
      expect((await webhookService.parseWebhook(1, 2, 3)).Payload).toBeInstanceOf(ResponseRequest)
    })
    it('generates a ResponseRequest object when the action is payment', async () => {
      defaultResponse.Payload.body.transaction.action = 'payment'
      verifyWebhookSpy.mockReturnValue(defaultResponse)
      expect((await webhookService.parseWebhook(1, 2, 3)).Payload).toBeInstanceOf(ResponseRequest)
    })
    it('generates a RefundResponseRequest object when the action is refund', async () => {
      defaultResponse.Payload.body.transaction.action = 'refund'
      verifyWebhookSpy.mockReturnValue(defaultResponse)
      expect((await webhookService.parseWebhook(1, 2, 3)).Payload).toBeInstanceOf(RefundResponseRequest)
    })
  })
})
