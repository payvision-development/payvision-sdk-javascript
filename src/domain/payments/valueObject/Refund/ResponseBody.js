const pv_RefundResponseCard = require('../Refund/ResponseCard')
const pv_Error = require('../Error')
const pv_RefundResponseTransaction = require('../Refund/ResponseTransaction')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseBody extends ValueObject {
  constructor({
    card,
    error,
    transaction,
  } = {},
  isResponse) {
    super()
    if (card != null) this.card = card instanceof pv_RefundResponseCard ? card : new pv_RefundResponseCard(card, isResponse)
    if (error != null) this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse)
    if (transaction != null) this.transaction = transaction instanceof pv_RefundResponseTransaction ? transaction : new pv_RefundResponseTransaction(transaction, isResponse)
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

module.exports = pv_ResponseBody
