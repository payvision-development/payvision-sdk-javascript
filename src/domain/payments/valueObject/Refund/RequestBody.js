const pv_RefundRequestTransaction = require('../Refund/RequestTransaction')
const pv_Order = require('../Order')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestBody extends ValueObject {
  constructor({
    transaction,
    order,
  } = {},
  isResponse) {
    super()
    this.transaction = transaction instanceof pv_RefundRequestTransaction ? transaction : new pv_RefundRequestTransaction(transaction, isResponse)
    if (order != null) this.order = order instanceof pv_Order ? order : new pv_Order(order, isResponse)
  }
  
  getTransaction() {
    return this.transaction
  }
  
  getOrder() {
    return this.order
  }
  

}

module.exports = pv_RequestBody
