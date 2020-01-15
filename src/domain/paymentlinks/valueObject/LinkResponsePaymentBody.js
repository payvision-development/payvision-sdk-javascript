const pv_LinkResponsePaymentBank = require('./LinkResponsePaymentBank')
const pv_LinkResponsePaymentCard = require('./LinkResponsePaymentCard')
const pv_LinkResponsePaymentError = require('./LinkResponsePaymentError')
const pv_LinkResponsePaymentTransaction = require('./LinkResponsePaymentTransaction')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkResponsePaymentBody extends ValueObject {
  constructor({
    bank,
    card,
    error,
    transaction,
  } = {},
  isResponse) {
    super()
    if (bank != null) this.bank = bank instanceof pv_LinkResponsePaymentBank ? bank : new pv_LinkResponsePaymentBank(bank, isResponse)
    if (card != null) this.card = card instanceof pv_LinkResponsePaymentCard ? card : new pv_LinkResponsePaymentCard(card, isResponse)
    if (error != null) this.error = error instanceof pv_LinkResponsePaymentError ? error : new pv_LinkResponsePaymentError(error, isResponse)
    if (transaction != null) this.transaction = transaction instanceof pv_LinkResponsePaymentTransaction ? transaction : new pv_LinkResponsePaymentTransaction(transaction, isResponse)
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
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_LinkResponsePaymentBody
