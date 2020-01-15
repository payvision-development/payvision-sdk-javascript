const pv_Error = require('./Error')
const pv_LinkResponseLink = require('./LinkResponseLink')
const pv_LinkResponsePayment = require('./LinkResponsePayment')
const pv_LinkResponseTransaction = require('./LinkResponseTransaction')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkResponseBody extends ValueObject {
  constructor({
    error,
    link,
    payments,
    transaction,
  } = {},
  isResponse) {
    super()
    if (error != null) this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse)
    if (link != null) this.link = link instanceof pv_LinkResponseLink ? link : new pv_LinkResponseLink(link, isResponse)
  
    if (payments != null) { 
      if (!Array.isArray(payments)) throw new Error(`Property [payments] expected an array, got [${typeof payments}] on [pv_LinkResponseBody]`)
      this.payments = payments.map(payments_single => (payments_single instanceof pv_LinkResponsePayment ? payments_single : new pv_LinkResponsePayment(payments_single, isResponse)))
    }
  
    if (transaction != null) this.transaction = transaction instanceof pv_LinkResponseTransaction ? transaction : new pv_LinkResponseTransaction(transaction, isResponse)
  }
  
  getError() {
    return this.error
  }
  
  getLink() {
    return this.link
  }
  
  getPayments() {
    return this.payments
  }
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_LinkResponseBody
