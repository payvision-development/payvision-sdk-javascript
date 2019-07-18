const Payvision = require('../../src/sdk')
const ResponseRequest = require('../../src/domain/payments/valueObject/Payment/Response')

let payvision
beforeEach(() => {
  payvision = new Payvision(payvisionConfig)
})
describe('Ideal', () => {
  const getPayment = amount => {
    return payvision.payments.newPayment({
      action: 'payment',
      header: {
        businessId: '325668',
      },
      body: {
        transaction: {
          trackingCode: `test-unique-number-${Date.now()}`,
          brandId: 3010,
          amount,
          currencyCode: 'EUR',
          returnUrl: 'http://www.example.com',
          descriptor: 'descriptor',
          purchaseId: '1234',
        },
        bank: {
          countryCode: 'NL',
          issuerId: 20,
        },
      },
    })
  }
  describe('newPayment', () => {
    let result
    beforeEach(async () => {
      const paymentRequest = getPayment(1)
      result = await payvision.send(paymentRequest)
    })

    it('returns a pending state', async () => {
      expect(result.statusCode).toBe(200)
      expect(result.body.description).toBe('Pending')
    })
    it('returns a redirect URL', async () => {
      expect(result.data.body.redirect.method).toBe('GET')
      expect(typeof result.data.body.redirect.url).toBe('string')
      expect(result.data instanceof ResponseRequest)
    })
  })
  describe('getTransactionStatus', () => {
    const getStatusResult = async amount => {
      const paymentRequest = getPayment(amount)
      const result = await payvision.send(paymentRequest)
      const statusRequest = payvision.payments.getTransactionStatus(result.data.body.transaction.id)
      return payvision.send(statusRequest)
    }
    it('returns an OK status using an amount of 1', async () => {
      const statusResult = await getStatusResult(1)

      expect(statusResult.statusCode).toBe(200)
      expect(statusResult.data.result).toBe(0)
      expect(statusResult.data.description).toBe('Ok')
    })
    it('returns a Customer processing error status using an amount of 2', async () => {
      const statusResult = await getStatusResult(2)

      expect(statusResult.statusCode).toBe(200)
      expect(statusResult.data.result).toBe(-10)
      expect(statusResult.data.description).toBe('Customer processing error')
    })
    it('returns a Timeout status using an amount of 3', async () => {
      const statusResult = await getStatusResult(3)

      expect(statusResult.statusCode).toBe(200)
      expect(statusResult.data.result).toBe(4)
      expect(statusResult.data.description).toBe('Timeout')
    })
    it('returns a Pending status using an amount of 4', async () => {
      const statusResult = await getStatusResult(4)

      expect(statusResult.statusCode).toBe(200)
      expect(statusResult.data.result).toBe(2)
      expect(statusResult.data.description).toBe('Pending')
    })
    it('returns a Failed status using an amount of 5', async () => {
      const statusResult = await getStatusResult(5)

      expect(statusResult.statusCode).toBe(200)
      expect(statusResult.data.result).toBe(-2)
      expect(statusResult.data.description).toBe('Failed')
    })
  })
})
