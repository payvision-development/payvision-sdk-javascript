const pv_Error = require('../Error')
const pv_CancelResponseTransaction = require('../Cancel/ResponseTransaction')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseBody extends ValueObject {
  constructor({
    error,
    transaction,
  } = {},
  isResponse) {
    super()
    if (error != null) this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse)
    if (transaction != null) this.transaction = transaction instanceof pv_CancelResponseTransaction ? transaction : new pv_CancelResponseTransaction(transaction, isResponse)
  }
  
  getError() {
    return this.error
  }
  
  getTransaction() {
    return this.transaction
  }
  

}

module.exports = pv_ResponseBody
