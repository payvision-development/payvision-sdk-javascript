/**
 * @copyright Copyright (c) 2019 Payvision B.V. (https://www.payvision.com/)
 * @license see LICENCE.TXT
 *
 * Warning! This file is auto-generated! Any changes made to this file will be deleted in the future!
 */

const Request = require('../../infrastructure/Request')
const pv_CheckoutRequest = require('../../domain/checkouts/valueObject/CheckoutRequest')
const pv_CheckoutResponse = require('../../domain/checkouts/valueObject/CheckoutResponse')
const pv_StatusResponse = require('../../domain/checkouts/valueObject/StatusResponse')

class Api {
  static newCheckout(
    input,
    
  ) {
    return new Request({
      uri: 'checkouts',
      method: 'POST',
      body: input instanceof pv_CheckoutRequest ? input : new pv_CheckoutRequest(input),
      parameters: {
      },
      pathParams: {
        
      },
      responsePipelines: {
        [200]: pv_CheckoutResponse,
        [400]: pv_CheckoutResponse,
        [500]: pv_CheckoutResponse,
        [501]: pv_CheckoutResponse,
      },
    })
  }

  static getCheckoutStatus(
    
    id,
    businessId,
  ) {
    return new Request({
      uri: 'checkouts/{id}',
      method: 'GET',
      parameters: {
        'businessId': businessId,
      },
      pathParams: {
        id,
      },
      responsePipelines: {
        [200]: pv_StatusResponse,
        [400]: pv_StatusResponse,
        [500]: pv_StatusResponse,
        [501]: pv_StatusResponse,
      },
    })
  }


  static getParameters(params) {
    const copy = {
      ...params,
    }
    delete copy.header
    delete copy.body
    return copy
  }
}

module.exports = Api
