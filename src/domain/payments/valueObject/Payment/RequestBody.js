const pv_PaymentRequestTransaction = require('../Payment/RequestTransaction')
const pv_PaymentRequestBank = require('../Payment/RequestBank')
const pv_PaymentRequestBillingAddress = require('../Payment/RequestBillingAddress')
const pv_PaymentRequestCard = require('../Payment/RequestCard')
const pv_Customer = require('../Customer')
const pv_PaymentRequestDba = require('../Payment/RequestDba')
const pv_PaymentRequestOption = require('../Payment/RequestOption')
const pv_Order = require('../Order')
const pv_PaymentRequestQr = require('../Payment/RequestQr')
const pv_PaymentRequestShippingAddress = require('../Payment/RequestShippingAddress')
const pv_PaymentRequestThreeDSecure = require('../Payment/RequestThreeDSecure')
const pv_PaymentRequestWallet = require('../Payment/RequestWallet')
const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_RequestBody extends ValueObject {
  constructor({
    transaction,
    bank,
    billingAddress,
    card,
    customer,
    dba,
    option,
    order,
    qr,
    shippingAddress,
    threeDSecure,
    wallet,
  } = {},
  isResponse) {
    super()
    this.transaction = transaction instanceof pv_PaymentRequestTransaction ? transaction : new pv_PaymentRequestTransaction(transaction, isResponse)
    if (bank != null) this.bank = bank instanceof pv_PaymentRequestBank ? bank : new pv_PaymentRequestBank(bank, isResponse)
    if (billingAddress != null) this.billingAddress = billingAddress instanceof pv_PaymentRequestBillingAddress ? billingAddress : new pv_PaymentRequestBillingAddress(billingAddress, isResponse)
    if (card != null) this.card = card instanceof pv_PaymentRequestCard ? card : new pv_PaymentRequestCard(card, isResponse)
    if (customer != null) this.customer = customer instanceof pv_Customer ? customer : new pv_Customer(customer, isResponse)
    if (dba != null) this.dba = dba instanceof pv_PaymentRequestDba ? dba : new pv_PaymentRequestDba(dba, isResponse)
    if (option != null) this.option = option instanceof pv_PaymentRequestOption ? option : new pv_PaymentRequestOption(option, isResponse)
    if (order != null) this.order = order instanceof pv_Order ? order : new pv_Order(order, isResponse)
    if (qr != null) this.qr = qr instanceof pv_PaymentRequestQr ? qr : new pv_PaymentRequestQr(qr, isResponse)
    if (shippingAddress != null) this.shippingAddress = shippingAddress instanceof pv_PaymentRequestShippingAddress ? shippingAddress : new pv_PaymentRequestShippingAddress(shippingAddress, isResponse)
    if (threeDSecure != null) this.threeDSecure = threeDSecure instanceof pv_PaymentRequestThreeDSecure ? threeDSecure : new pv_PaymentRequestThreeDSecure(threeDSecure, isResponse)
    if (wallet != null) this.wallet = wallet instanceof pv_PaymentRequestWallet ? wallet : new pv_PaymentRequestWallet(wallet, isResponse)
  }
  
  getTransaction() {
    return this.transaction
  }
  
  getBank() {
    return this.bank
  }
  
  getBillingAddress() {
    return this.billingAddress
  }
  
  getCard() {
    return this.card
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
  
  getQr() {
    return this.qr
  }
  
  getShippingAddress() {
    return this.shippingAddress
  }
  
  getThreeDSecure() {
    return this.threeDSecure
  }
  
  getWallet() {
    return this.wallet
  }
  

}

module.exports = pv_RequestBody
