/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: 0 */
require('dotenv').config()
const Payvision = require('../src/sdk')
const Transaction = require('../src/domain/payments/valueObject/Transaction')

const init = async () => {
  const payvision = new Payvision({
    // global configuration data
    username: process.env.TEST_API_USERNAME,
    password: process.env.TEST_API_PASSWORD,
    businessId: process.env.TEST_BUSINESS_ID,
    baseUri: process.env.TEST_API_BASE_URL,
    debug: true,
  })

  const paymentRequest = payvision.payments.newPayment({
    action: 'payment',
    header: {
      businessId: '325668',
    },
    body: {
      transaction: new Transaction({
        trackingCode: `test-unique-number-${Date.now()}`,
        brandId: 3010,
        amount: '1.00',
        currencyCode: 'EUR',
        returnUrl: 'http://www.example.com',
        descriptor: 'descriptor',
        purchaseId: '1234',
      }),
      bank: {
        countryCode: 'NL',
        issuerId: 20,
      },
    },
  })

  const result = await payvision.send(paymentRequest)
  console.log(result.body.description)

  const statusRequest = payvision.payments.getTransactionStatus(result.data.body.transaction.id)
  const statusResult = await payvision.send(statusRequest)
  console.log(statusResult.body.description)
}
init()
