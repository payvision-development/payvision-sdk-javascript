const pv_CaptureResponseBank = require('../Capture/ResponseBank')
const pv_PaymentResponseCard = require('../Payment/ResponseCard')
const pv_Error = require('../Error')
const pv_CaptureResponseTransaction = require('../Capture/ResponseTransaction')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseBody extends ValueObject {
  constructor({
    bank,
    card,
    error,
    transaction,
  } = {},
  isResponse) {
    super()
    if (bank != null) this.bank = bank instanceof pv_CaptureResponseBank ? bank : new pv_CaptureResponseBank(bank, isResponse)
    if (card != null) this.card = card instanceof pv_PaymentResponseCard ? card : new pv_PaymentResponseCard(card, isResponse)
    if (error != null) this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse)
    if (transaction != null) this.transaction = transaction instanceof pv_CaptureResponseTransaction ? transaction : new pv_CaptureResponseTransaction(transaction, isResponse)
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

module.exports = pv_ResponseBody
