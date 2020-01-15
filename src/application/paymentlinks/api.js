/**
 * @copyright Copyright (c) 2020 Payvision B.V. (https://www.payvision.com/)
 * @license see LICENCE.TXT
 *
 * Warning! This file is auto-generated! Any changes made to this file will be deleted in the future!
 */

const Request = require('../../infrastructure/Request')
const pv_LinkRequest = require('../../domain/paymentlinks/valueObject/LinkRequest')
const pv_CancelRequest = require('../../domain/paymentlinks/valueObject/Cancel/Request')
const pv_LinkResponse = require('../../domain/paymentlinks/valueObject/LinkResponse')
const pv_StatusResponse = require('../../domain/paymentlinks/valueObject/StatusResponse')
const pv_ResponseCancel = require('../../domain/paymentlinks/valueObject/Cancel/Response')

class Api {
  static newLink(
    input,
    
  ) {
    return new Request({
      uri: 'paymentlinks',
      method: 'POST',
      body: input instanceof pv_LinkRequest ? input : new pv_LinkRequest(input),
      parameters: {
      },
      pathParams: {
        
      },
      responsePipelines: {
        [200]: pv_LinkResponse,
        [400]: pv_LinkResponse,
        [401]: pv_LinkResponse,
        [403]: pv_LinkResponse,
        [404]: pv_LinkResponse,
        [500]: pv_LinkResponse,
        [501]: pv_LinkResponse,
      },
    })
  }

  static getLinkStatus(
    
    id,
    businessId,
  ) {
    return new Request({
      uri: 'paymentlinks/{id}',
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
        [401]: pv_StatusResponse,
        [403]: pv_StatusResponse,
        [404]: pv_StatusResponse,
        [500]: pv_StatusResponse,
        [501]: pv_StatusResponse,
      },
    })
  }

  static cancelLink(
    input,
    id,
  ) {
    return new Request({
      uri: 'paymentlinks/{id}/cancel',
      method: 'POST',
      body: input instanceof pv_CancelRequest ? input : new pv_CancelRequest(input),
      parameters: {
      },
      pathParams: {
        id,
      },
      responsePipelines: {
        [200]: pv_ResponseCancel,
        [400]: pv_ResponseCancel,
        [401]: pv_ResponseCancel,
        [403]: pv_ResponseCancel,
        [404]: pv_ResponseCancel,
        [500]: pv_ResponseCancel,
        [501]: pv_ResponseCancel,
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
