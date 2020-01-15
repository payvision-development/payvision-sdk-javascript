const pv_OrderLine = require('./OrderLine')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_Order extends ValueObject {
  constructor({
    orderLines,
  } = {},
  isResponse) {
    super()
  
    
    if (!Array.isArray(orderLines)) throw new Error(`Property [orderLines] expected an array, got [${typeof orderLines}] on [pv_Order]`)
    this.orderLines = orderLines.map(orderLines_single => (orderLines_single instanceof pv_OrderLine ? orderLines_single : new pv_OrderLine(orderLines_single, isResponse)))
    
  
  }
  
  getOrderLines() {
    return this.orderLines
  }
  

}

module.exports = pv_Order
