const pv_LinkRequestTransaction = require('./LinkRequestTransaction')
const pv_LinkRequestLink = require('./LinkRequestLink')
const pv_BasicAddress = require('./BasicAddress')
const pv_BasicCustomer = require('./BasicCustomer')
const pv_LinkRequestDba = require('./LinkRequestDba')
const pv_LinkRequestOrder = require('./LinkRequestOrder')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkRequestBody extends ValueObject {
  constructor({
    transaction,
    link,
    billingAddress,
    customer,
    dba,
    order,
    shippingAddress,
  } = {},
  isResponse) {
    super()
    this.transaction = transaction instanceof pv_LinkRequestTransaction ? transaction : new pv_LinkRequestTransaction(transaction, isResponse)
    this.link = link instanceof pv_LinkRequestLink ? link : new pv_LinkRequestLink(link, isResponse)
    if (billingAddress != null) this.billingAddress = billingAddress instanceof pv_BasicAddress ? billingAddress : new pv_BasicAddress(billingAddress, isResponse)
    if (customer != null) this.customer = customer instanceof pv_BasicCustomer ? customer : new pv_BasicCustomer(customer, isResponse)
    if (dba != null) this.dba = dba instanceof pv_LinkRequestDba ? dba : new pv_LinkRequestDba(dba, isResponse)
    if (order != null) this.order = order instanceof pv_LinkRequestOrder ? order : new pv_LinkRequestOrder(order, isResponse)
    if (shippingAddress != null) this.shippingAddress = shippingAddress instanceof pv_BasicAddress ? shippingAddress : new pv_BasicAddress(shippingAddress, isResponse)
  }
  
  getTransaction() {
    return this.transaction
  }
  
  getLink() {
    return this.link
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
  
  getOrder() {
    return this.order
  }
  
  getShippingAddress() {
    return this.shippingAddress
  }
  

}

module.exports = pv_LinkRequestBody
