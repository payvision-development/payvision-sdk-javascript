const pv_CheckoutRequestCheckout = require('./CheckoutRequestCheckout')
const pv_CheckoutRequestTransaction = require('./CheckoutRequestTransaction')
const pv_CheckoutRequestBillingAddress = require('./CheckoutRequestBillingAddress')
const pv_Customer = require('./Customer')
const pv_CheckoutRequestDba = require('./CheckoutRequestDba')
const pv_CheckoutRequestOption = require('./CheckoutRequestOption')
const pv_CheckoutRequestOrder = require('./CheckoutRequestOrder')
const pv_CheckoutRequestShippingAddress = require('./CheckoutRequestShippingAddress')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_CheckoutRequestBody extends ValueObject {
  constructor({
    checkout,
    transaction,
    billingAddress,
    customer,
    dba,
    option,
    order,
    shippingAddress,
  } = {},
  isResponse) {
    super()
    this.checkout = checkout instanceof pv_CheckoutRequestCheckout ? checkout : new pv_CheckoutRequestCheckout(checkout, isResponse)
    this.transaction = transaction instanceof pv_CheckoutRequestTransaction ? transaction : new pv_CheckoutRequestTransaction(transaction, isResponse)
    if (billingAddress != null) this.billingAddress = billingAddress instanceof pv_CheckoutRequestBillingAddress ? billingAddress : new pv_CheckoutRequestBillingAddress(billingAddress, isResponse)
    if (customer != null) this.customer = customer instanceof pv_Customer ? customer : new pv_Customer(customer, isResponse)
    if (dba != null) this.dba = dba instanceof pv_CheckoutRequestDba ? dba : new pv_CheckoutRequestDba(dba, isResponse)
    if (option != null) this.option = option instanceof pv_CheckoutRequestOption ? option : new pv_CheckoutRequestOption(option, isResponse)
    if (order != null) this.order = order instanceof pv_CheckoutRequestOrder ? order : new pv_CheckoutRequestOrder(order, isResponse)
    if (shippingAddress != null) this.shippingAddress = shippingAddress instanceof pv_CheckoutRequestShippingAddress ? shippingAddress : new pv_CheckoutRequestShippingAddress(shippingAddress, isResponse)
  }
  
  getCheckout() {
    return this.checkout
  }
  
  getTransaction() {
    return this.transaction
  }
  
  getBillingAddress() {
    return this.billingAddress
  }
  
  getCustomer() {
    return this.customer
  }
  
  getDba() {
    return this.dba
  }
  
  getOption() {
    return this.option
  }
  
  getOrder() {
    return this.order
  }
  
  getShippingAddress() {
    return this.shippingAddress
  }
  

}

module.exports = pv_CheckoutRequestBody
