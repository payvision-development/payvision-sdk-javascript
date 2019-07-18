const pv_PaymentResponseBank = require('./Payment/ResponseBank')
const pv_PaymentResponseCard = require('./Payment/ResponseCard')
const pv_Error = require('./Error')
const pv_PaymentResponseRedirect = require('./Payment/ResponseRedirect')
const pv_PaymentResponseThreeDSecure = require('./Payment/ResponseThreeDSecure')
const pv_PaymentResponseQr = require('./Payment/ResponseQr')
const pv_StatusResponseTransaction = require('./StatusResponseTransaction')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_StatusResponseBody extends ValueObject {
  constructor({
    bank,
    card,
    error,
    redirect,
    threeDSecure,
    token,
    transaction,
  } = {},
  isResponse) {
    super()
    if (bank != null) this.bank = bank instanceof pv_PaymentResponseBank ? bank : new pv_PaymentResponseBank(bank, isResponse)
    if (card != null) this.card = card instanceof pv_PaymentResponseCard ? card : new pv_PaymentResponseCard(card, isResponse)
    if (error != null) this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse)
    if (redirect != null) this.redirect = redirect instanceof pv_PaymentResponseRedirect ? redirect : new pv_PaymentResponseRedirect(redirect, isResponse)
    if (threeDSecure != null) this.threeDSecure = threeDSecure instanceof pv_PaymentResponseThreeDSecure ? threeDSecure : new pv_PaymentResponseThreeDSecure(threeDSecure, isResponse)
    if (token != null) this.token = token instanceof pv_PaymentResponseQr ? token : new pv_PaymentResponseQr(token, isResponse)
    if (transaction != null) this.transaction = transaction instanceof pv_StatusResponseTransaction ? transaction : new pv_StatusResponseTransaction(transaction, isResponse)
  }
  
  getBank() {
    return this.bank
  }
  
  getCard() {
    return this.card
  }
  
  getError() {
    return this.error
  }
  
  getRedirect() {
    return this.redirect
  }
  
  getThreeDSecure() {
    return this.threeDSecure
  }
  
  getToken() {
    return this.token
  }
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_StatusResponseBody
