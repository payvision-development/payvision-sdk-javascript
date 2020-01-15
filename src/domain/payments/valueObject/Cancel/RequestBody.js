const pv_CancelRequestTransaction = require('../Cancel/RequestTransaction')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestBody extends ValueObject {
  constructor({
    transaction,
  } = {},
  isResponse) {
    super()
    this.transaction = transaction instanceof pv_CancelRequestTransaction ? transaction : new pv_CancelRequestTransaction(transaction, isResponse)
  }
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_RequestBody
