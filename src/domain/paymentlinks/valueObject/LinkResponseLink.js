const pv_LinkResponseRedirect = require('./LinkResponseRedirect')
const ValueObject = require('../../../infrastructure/ValueObject')

class pv_LinkResponseLink extends ValueObject {
  constructor({
    brandIds,
    expirationTime,
    linkId,
    redirect,
    status,
  } = {},
  isResponse) {
    super()
    this.importValue('brandIds', brandIds, { type: 'number', required: isResponse ? false : true, isArray: true })
    this.importValue('expirationTime', expirationTime, { type: 'datetime', required: isResponse ? false : true, isArray: false })
    this.importValue('linkId', linkId, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('status', status, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.redirect = redirect instanceof pv_LinkResponseRedirect ? redirect : new pv_LinkResponseRedirect(redirect, isResponse)
  }
  
  getBrandIds() {
    return this.brandIds
  }
  
  getExpirationTime() {
    return this.expirationTime
  }
  
  getLinkId() {
    return this.linkId
  }
  
  getRedirect() {
    return this.redirect
  }
  
  getStatus() {
    return this.status
  }
  

}

module.exports = pv_LinkResponseLink
