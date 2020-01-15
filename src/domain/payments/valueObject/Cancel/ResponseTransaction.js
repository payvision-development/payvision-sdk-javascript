const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_ResponseTransaction extends ValueObject {
  constructor({
    action,
    id,
    parentId,
    trackingCode,
    brandId,
    descriptor,
  } = {},
  isResponse) {
    super()
    this.importValue('action', action, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('id', id, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('parentId', parentId, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('trackingCode', trackingCode, { type: 'string', required: isResponse ? false : true, isArray: false })
    this.importValue('brandId', brandId, { type: 'number', required: isResponse ? false : false, isArray: false })
    this.importValue('descriptor', descriptor, { type: 'string', required: isResponse ? false : false, isArray: false })
  }
  
  getAction() {
    return this.action
  }
  
  getId() {
    return this.id
  }
  
  getParentId() {
    return this.parentId
  }
  
  getTrackingCode() {
    return this.trackingCode
  }
  
  getBrandId() {
    return this.brandId
  }
  
  getDescriptor() {
    return this.descriptor
  }
  

}

module.exports = pv_ResponseTransaction
