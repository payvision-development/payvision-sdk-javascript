# Payvision Javascript SDK

This is the official Javascript SDK for the Payvision payment platform (<https://www.payvision.com>).
It can be used to make use of the following features of the Payvision API:

- Payments
    - Make payment requests
    - Make capture requests
    - Make cancel requests
    - Make refund requests
    - Get transaction status updates
- Paymentlink
    - Make new paymentlink
    - Get status of existing paymentlink
    - Cancel existing paymentlink
- Checkout
    - Initialize new checkout
    - Get checkout status
- Webhooks
    - Convert RAW webhook data to the proper objects

## Usage

A simple example implementation can be found [here](example/simple.js)

The different json bodies the API accepts can be found in the documentation of the [Payvision API](https://developers.acehubpaymentservices.com/reference).

To initialize the SDK you need to supply it with a username, password, businessId and a baseUri, optionally you can add a webhookSecret if you will be handling webhooks using the SDK.

```javascript
const payvision = new Payvision({
    username: 'username',
    password: 'password',
    businessId: 123456,
    baseUri: 'https://stagconnect.acehubpaymentservices.com/gateway/v3/',
    webhookSecret: 'webhookSecret',
})
```

### API

The following methods are currently provided on the SDK.

- `payvision.payments.newPayment(json)`
- `payvision.payments.captureTransaction(json, id)`
- `payvision.payments.cancelTransaction(json, id)`
- `payvision.payments.refundTransaction(json, id)`
- `payvision.payments.getPayments(businessId, trackingCode)`
- `payvision.payments.getTransactionStatus(id, businessId)`
- `payvision.checkouts.newCheckout(json)`
- `payvision.checkouts.getCheckoutStatus(id, businessId)`
- `payvision.links.newLink(json)`
- `payvision.links.getLinkStatus(id, businessId)`
- `payvision.links.cancelLink(json, id)`

## Webhooks

Webhooks can also be handled by the SDK. In order to do so you need the
following input data:

 - The Event Signature (also known as a Json Web Token (JWT). This is sent in the header)
 - The secret that is used to sign the JWT
 - The body of the webhook (as string).

You can find an example of this [here](example/webhook.js)

## Rhino

A Rhino build is included in the `dist` directory.
