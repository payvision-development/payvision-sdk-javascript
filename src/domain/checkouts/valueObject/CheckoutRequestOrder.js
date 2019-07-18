const pv_CheckoutRequestOrderLine = require('./CheckoutRequestOrderLine')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestOrder extends ValueObject {
  constructor({
    orderlines,
  } = {},
  isResponse) {
    super()
  
    if (orderlines != null) { 
      if (!Array.isArray(orderlines)) throw new Error(`Property [orderlines] expected an array, got [${typeof orderlines}] on [pv_CheckoutRequestOrder]`)
      this.orderlines = orderlines.map(orderlines_single => (orderlines_single instanceof pv_CheckoutRequestOrderLine ? orderlines_single : new pv_CheckoutRequestOrderLine(orderlines_single, isResponse)))
    }
  
  }
  
  getOrderlines() {
    return this.orderlines
  }
  

}

module.exports = pv_CheckoutRequestOrder
