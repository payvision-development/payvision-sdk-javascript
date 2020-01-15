const pv_CheckoutResponseCheckout = require('./CheckoutResponseCheckout')
const pv_Error = require('./Error')
const pv_CheckoutResponseTransaction = require('./CheckoutResponseTransaction')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutResponseBody extends ValueObject {
  constructor({
    checkout,
    error,
    transaction,
  } = {},
  isResponse) {
    super()
    if (checkout != null) this.checkout = checkout instanceof pv_CheckoutResponseCheckout ? checkout : new pv_CheckoutResponseCheckout(checkout, isResponse)
    if (error != null) this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse)
    if (transaction != null) this.transaction = transaction instanceof pv_CheckoutResponseTransaction ? transaction : new pv_CheckoutResponseTransaction(transaction, isResponse)
  }
  
  getCheckout() {
    return this.checkout
  }
  
  getError() {
    return this.error
  }
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_CheckoutResponseBody
