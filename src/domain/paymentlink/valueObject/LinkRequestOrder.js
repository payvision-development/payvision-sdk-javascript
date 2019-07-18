const pv_LinkRequestOrderLine = require('./LinkRequestOrderLine')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkRequestOrder extends ValueObject {
  constructor({
    orderlines,
  } = {},
  isResponse) {
    super()
  
    
    if (!Array.isArray(orderlines)) throw new Error(`Property [orderlines] expected an array, got [${typeof orderlines}] on [pv_LinkRequestOrder]`)
    this.orderlines = orderlines.map(orderlines_single => (orderlines_single instanceof pv_LinkRequestOrderLine ? orderlines_single : new pv_LinkRequestOrderLine(orderlines_single, isResponse)))
    
  
  }
  
  getOrderlines() {
    return this.orderlines
  }
  

}

module.exports = pv_LinkRequestOrder
