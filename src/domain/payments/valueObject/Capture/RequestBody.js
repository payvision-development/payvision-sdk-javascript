const pv_CaptureRequestTransaction = require('../Capture/RequestTransaction')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestBody extends ValueObject {
  constructor({
    transaction,
  } = {},
  isResponse) {
    super()
    this.transaction = transaction instanceof pv_CaptureRequestTransaction ? transaction : new pv_CaptureRequestTransaction(transaction, isResponse)
  }
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_RequestBody
