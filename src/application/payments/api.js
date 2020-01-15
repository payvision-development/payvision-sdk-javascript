/**
 * @copyright Copyright (c) 2020 Payvision B.V. (https://www.payvision.com/)
 * @license see LICENCE.TXT
 *
 * Warning! This file is auto-generated! Any changes made to this file will be deleted in the future!
 */

const Request = require('../../infrastructure/Request')
const pv_PaymentRequest = require('../../domain/payments/valueObject/Payment/Request')
const pv_CaptureRequest = require('../../domain/payments/valueObject/Capture/Request')
const pv_CancelRequest = require('../../domain/payments/valueObject/Cancel/Request')
const pv_RefundRequest = require('../../domain/payments/valueObject/Refund/Request')
const pv_ResponsePayment = require('../../domain/payments/valueObject/Payment/Response')
const pv_ResponseCapture = require('../../domain/payments/valueObject/Capture/Response')
const pv_ResponseCancel = require('../../domain/payments/valueObject/Cancel/Response')
const pv_ResponseRefund = require('../../domain/payments/valueObject/Refund/Response')
const pv_StatusResponse = require('../../domain/payments/valueObject/StatusResponse')

class Api {
  static newPayment(
    input,
    
  ) {
    return new Request({
      uri: 'payments',
      method: 'POST',
      body: input instanceof pv_PaymentRequest ? input : new pv_PaymentRequest(input),
      parameters: {
      },
      pathParams: {
        
      },
      responsePipelines: {
        [200]: pv_ResponsePayment,
        [400]: pv_ResponsePayment,
        [401]: pv_ResponsePayment,
        [404]: pv_ResponsePayment,
        [500]: pv_ResponsePayment,
        [501]: pv_ResponsePayment,
      },
    })
  }

  static captureTransaction(
    input,
    id,
  ) {
    return new Request({
      uri: 'payments/{id}/capture',
      method: 'POST',
      body: input instanceof pv_CaptureRequest ? input : new pv_CaptureRequest(input),
      parameters: {
      },
      pathParams: {
        id,
      },
      responsePipelines: {
        [200]: pv_ResponseCapture,
        [400]: pv_ResponseCapture,
        [401]: pv_ResponseCapture,
        [404]: pv_ResponseCapture,
        [500]: pv_ResponseCapture,
        [501]: pv_ResponseCapture,
      },
    })
  }

  static cancelTransaction(
    input,
    id,
  ) {
    return new Request({
      uri: 'payments/{id}/cancel',
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
        [404]: pv_ResponseCancel,
        [500]: pv_ResponseCancel,
        [501]: pv_ResponseCancel,
      },
    })
  }

  static refundTransaction(
    input,
    id,
  ) {
    return new Request({
      uri: 'payments/{id}/refund',
      method: 'POST',
      body: input instanceof pv_RefundRequest ? input : new pv_RefundRequest(input),
      parameters: {
      },
      pathParams: {
        id,
      },
      responsePipelines: {
        [200]: pv_ResponseRefund,
        [400]: pv_ResponseRefund,
        [401]: pv_ResponseRefund,
        [404]: pv_ResponseRefund,
        [500]: pv_ResponseRefund,
        [501]: pv_ResponseRefund,
      },
    })
  }

  static getPayments(
    
    
    businessId,
    trackingCode,
  ) {
    return new Request({
      uri: 'payments',
      method: 'GET',
      parameters: {
        'businessId': businessId,
        'trackingCode': trackingCode,
      },
      pathParams: {
        
      },
      responsePipelines: {
        [200]: pv_StatusResponse,
        [400]: pv_StatusResponse,
        [401]: pv_StatusResponse,
        [404]: pv_StatusResponse,
        [500]: pv_StatusResponse,
        [501]: pv_StatusResponse,
      },
    })
  }

  static getTransactionStatus(
    
    id,
    businessId,
  ) {
    return new Request({
      uri: 'payments/{id}',
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
        [404]: pv_StatusResponse,
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
