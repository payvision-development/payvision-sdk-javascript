const ValueObject = require('../../../../infrastructure/ValueObject')

class pv_Header extends ValueObject {
  constructor({
    businessId,
  } = {},
  isResponse) {
    super()
    this.importValue('businessId', businessId, { type: 'string', required: isResponse ? false : true, isArray: false })
  }
  
  getBusinessId() {
    return this.businessId
  }
  

}

module.exports = pv_Header
