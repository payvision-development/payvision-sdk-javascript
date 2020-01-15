const pv_CheckoutResponseCheckout = require('./CheckoutResponseCheckout')
const pv_Error = require('./Error')
const pv_PaymentResponse = require('./Payment/Response')
const pv_CheckoutResponseTransaction = require('./CheckoutResponseTransaction')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_StatusResponseBody extends ValueObject {
  constructor({
    checkout,
    error,
    payments,
    transaction,
  } = {},
  isResponse) {
    super()
    if (checkout != null) this.checkout = checkout instanceof pv_CheckoutResponseCheckout ? checkout : new pv_CheckoutResponseCheckout(checkout, isResponse)
    if (error != null) this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse)
  
    if (payments != null) { 
      if (!Array.isArray(payments)) throw new Error(`Property [payments] expected an array, got [${typeof payments}] on [pv_StatusResponseBody]`)
      this.payments = payments.map(payments_single => (payments_single instanceof pv_PaymentResponse ? payments_single : new pv_PaymentResponse(payments_single, isResponse)))
    }
  
    if (transaction != null) this.transaction = transaction instanceof pv_CheckoutResponseTransaction ? transaction : new pv_CheckoutResponseTransaction(transaction, isResponse)
  }
  
  getCheckout() {
    return this.checkout
  }
  
  getError() {
    return this.error
  }
  
  getPayments() {
    return this.payments
  }
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_StatusResponseBody
