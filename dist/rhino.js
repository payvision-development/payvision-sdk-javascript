module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}
/******/ 	var dependencyModules = [
/******/ 	  require('./payments.js').modules,
/******/ 	  require('./checkouts.js').modules,
/******/ 	  require('./paymentlink.js').modules,
/******/ 	{}];
/******/ 	dependencyModules.forEach(function (obj) {
/******/ 	  // eslint-disable-next-line no-restricted-syntax
/******/ 	  for (var key in obj) {
/******/ 	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
/******/ 	      modules[key] = obj[key];
/******/ 	    }
/******/ 	  }
/******/ 	});
/******/
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiConnection = __webpack_require__(2);

var internalWebhookService = __webpack_require__(4);

var PaymentsApi = __webpack_require__(5);

var CheckoutsApi = __webpack_require__(62);

var LinksApi = __webpack_require__(95);

var PayvisionSDK =
/*#__PURE__*/
function () {
  function PayvisionSDK(_ref) {
    var username = _ref.username,
        password = _ref.password,
        businessId = _ref.businessId,
        baseUri = _ref.baseUri,
        debug = _ref.debug,
        webhookSecret = _ref.webhookSecret,
        httpClient = _ref.httpClient,
        webhookService = _ref.webhookService;

    _classCallCheck(this, PayvisionSDK);

    this.apiConnection = new ApiConnection({
      username: username,
      password: password,
      businessId: businessId,
      baseUri: baseUri,
      debug: debug,
      httpClient: httpClient
    });
    this.webhookService =  true ? webhookService : undefined;
    this.webhookSecret = webhookSecret;
    this.payments = PaymentsApi;
    this.checkouts = CheckoutsApi;
    this.links = LinksApi;
  }

  _createClass(PayvisionSDK, [{
    key: "send",
    value: function send(request) {
      return this.apiConnection.send(request);
    }
  }, {
    key: "verifyWebhook",
    value: function verifyWebhook(payload, eventSignature) {
      return this.webhookService.verifyWebhook(payload, eventSignature, this.webhookSecret);
    }
  }, {
    key: "parseWebhook",
    value: function parseWebhook(payload, eventSignature) {
      return this.webhookService.parseWebhook(payload, eventSignature, this.webhookSecret);
    }
  }]);

  return PayvisionSDK;
}();

module.exports = PayvisionSDK;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-restricted-globals: 0 */
var ValueObject =
/*#__PURE__*/
function () {
  function ValueObject() {
    _classCallCheck(this, ValueObject);
  }

  _createClass(ValueObject, [{
    key: "importValue",
    value: function importValue(name, value, options) {
      var _this = this;

      var type = options.type || 'any';
      var required = options.required || false;
      var isArray = options.isArray || false;
      this[name] = value;

      if (value == null) {
        if (required) {
          throw new Error("Property [".concat(name, "] is required on [").concat(this.constructor.name, "]"));
        }

        return value;
      }

      if (isArray && !Array.isArray(value)) {
        throw new Error("Property [".concat(name, "] expected an array, got [").concat(_typeof(value), "] on [").concat(this.constructor.name, "]"));
      }

      var wrapper = isArray ? value : [value];
      var values = wrapper.map(function (val) {
        var result = val;

        switch (type) {
          case 'string':
            if (typeof val !== 'string') {
              throw new Error("Property [".concat(name, "] expected a string, got [").concat(_typeof(val), "] [").concat(val, "] on [").concat(_this.constructor.name, "]"));
            }

            break;

          case 'number':
            result = Number(val);

            if (isNaN(result)) {
              throw new Error("Property [".concat(name, "] expected a number, got [").concat(_typeof(val), "] [").concat(val, "] on [").concat(_this.constructor.name, "]"));
            }

            break;

          case 'boolean':
            if (typeof val !== 'boolean') {
              throw new Error("Property [".concat(name, "] expected a boolean, got [").concat(_typeof(val), "] [").concat(val, "] on [").concat(_this.constructor.name, "]"));
            }

            break;

          case 'date':
          case 'datetime':
            if (true) {
              // For Rhino we use the date string as is because Date compatibility is lacking there.
              // Since we don't actually use the data in the sdk we can leave it to the end user how it wants to use the date.
              result = val;
            } else {}

            break;

          default:
        }

        return result;
      });
      return isArray ? values : values[0];
    }
  }]);

  return ValueObject;
}();

module.exports = ValueObject;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HttpClient = __webpack_require__(3); // null on RHINO build via Webpack


var ApiConnection =
/*#__PURE__*/
function () {
  function ApiConnection(_ref) {
    var username = _ref.username,
        password = _ref.password,
        businessId = _ref.businessId,
        baseUri = _ref.baseUri,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug,
        _ref$httpClient = _ref.httpClient,
        httpClient = _ref$httpClient === void 0 ?  true ? undefined : undefined : _ref$httpClient;

    _classCallCheck(this, ApiConnection);

    if (!httpClient) {
      throw new Error('Rhino build requires a custom httpClient to be provided.');
    }

    if (typeof httpClient.config !== 'function') {
      throw new Error('Custom httpClient needs to implement a config function');
    }

    if (typeof httpClient.send !== 'function') {
      throw new Error('Custom httpClient needs to implement a send function');
    }

    this.httpClient = httpClient;
    this.httpClient.config({
      username: username,
      password: password,
      baseUri: baseUri,
      debug: debug
    });
    this.businessId = businessId;
  }

  _createClass(ApiConnection, [{
    key: "send",
    value: function send(request) {
      var req = {
        uri: request.getUri(),
        method: request.getMethod(),
        parameters: request.getParameters(),
        body: request.getBody(),
        headers: request.getHeaders()
      };

      if (['POST', 'PUT', 'PATCH'].indexOf(req.method) >= 0) {
        req.body = req.body || {};
        req.body.header = req.body.headers || {};
        req.body.header.businessId = req.body.header.businessId || this.businessId;
      } else {
        req.parameters.businessId = req.parameters.businessId || this.businessId;
      }

      return this.httpClient.send(req).then(function (httpResult) {
        var result = httpResult;
        var ResponseClass = request.getResponsePipeline(result.statusCode);
        result.body = result.body || {
          description: 'Payvision API error',
          result: -2,
          body: {
            error: {}
          },
          header: {}
        };
        result.data = ResponseClass ? new ResponseClass(result.body, true) : null;
        return result;
      });
    }
  }]);

  return ApiConnection;
}();

module.exports = ApiConnection;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright Copyright (c) 2019 Payvision B.V. (https://www.payvision.com/)
 * @license see LICENCE.TXT
 *
 * Warning! This file is auto-generated! Any changes made to this file will be deleted in the future!
 */
var Request = __webpack_require__(6);

var pv_PaymentRequest = __webpack_require__(7);

var pv_CaptureRequest = __webpack_require__(24);

var pv_CancelRequest = __webpack_require__(27);

var pv_RefundRequest = __webpack_require__(30);

var pv_ResponsePayment = __webpack_require__(33);

var pv_ResponseCapture = __webpack_require__(44);

var pv_ResponseCancel = __webpack_require__(49);

var pv_ResponseRefund = __webpack_require__(53);

var pv_StatusResponse = __webpack_require__(58);

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "newPayment",
    value: function newPayment(input) {
      var _responsePipelines;

      return new Request({
        uri: 'payments',
        method: 'POST',
        body: input instanceof pv_PaymentRequest ? input : new pv_PaymentRequest(input),
        parameters: {},
        pathParams: {},
        responsePipelines: (_responsePipelines = {}, _defineProperty(_responsePipelines, 200, pv_ResponsePayment), _defineProperty(_responsePipelines, 400, pv_ResponsePayment), _defineProperty(_responsePipelines, 401, pv_ResponsePayment), _defineProperty(_responsePipelines, 404, pv_ResponsePayment), _defineProperty(_responsePipelines, 500, pv_ResponsePayment), _defineProperty(_responsePipelines, 501, pv_ResponsePayment), _responsePipelines)
      });
    }
  }, {
    key: "captureTransaction",
    value: function captureTransaction(input, id) {
      var _responsePipelines2;

      return new Request({
        uri: 'payments/{id}/capture',
        method: 'POST',
        body: input instanceof pv_CaptureRequest ? input : new pv_CaptureRequest(input),
        parameters: {},
        pathParams: {
          id: id
        },
        responsePipelines: (_responsePipelines2 = {}, _defineProperty(_responsePipelines2, 200, pv_ResponseCapture), _defineProperty(_responsePipelines2, 400, pv_ResponseCapture), _defineProperty(_responsePipelines2, 401, pv_ResponseCapture), _defineProperty(_responsePipelines2, 404, pv_ResponseCapture), _defineProperty(_responsePipelines2, 500, pv_ResponseCapture), _defineProperty(_responsePipelines2, 501, pv_ResponseCapture), _responsePipelines2)
      });
    }
  }, {
    key: "cancelTransaction",
    value: function cancelTransaction(input, id) {
      var _responsePipelines3;

      return new Request({
        uri: 'payments/{id}/cancel',
        method: 'POST',
        body: input instanceof pv_CancelRequest ? input : new pv_CancelRequest(input),
        parameters: {},
        pathParams: {
          id: id
        },
        responsePipelines: (_responsePipelines3 = {}, _defineProperty(_responsePipelines3, 200, pv_ResponseCancel), _defineProperty(_responsePipelines3, 400, pv_ResponseCancel), _defineProperty(_responsePipelines3, 401, pv_ResponseCancel), _defineProperty(_responsePipelines3, 404, pv_ResponseCancel), _defineProperty(_responsePipelines3, 500, pv_ResponseCancel), _defineProperty(_responsePipelines3, 501, pv_ResponseCancel), _responsePipelines3)
      });
    }
  }, {
    key: "refundTransaction",
    value: function refundTransaction(input, id) {
      var _responsePipelines4;

      return new Request({
        uri: 'payments/{id}/refund',
        method: 'POST',
        body: input instanceof pv_RefundRequest ? input : new pv_RefundRequest(input),
        parameters: {},
        pathParams: {
          id: id
        },
        responsePipelines: (_responsePipelines4 = {}, _defineProperty(_responsePipelines4, 200, pv_ResponseRefund), _defineProperty(_responsePipelines4, 400, pv_ResponseRefund), _defineProperty(_responsePipelines4, 401, pv_ResponseRefund), _defineProperty(_responsePipelines4, 404, pv_ResponseRefund), _defineProperty(_responsePipelines4, 500, pv_ResponseRefund), _defineProperty(_responsePipelines4, 501, pv_ResponseRefund), _responsePipelines4)
      });
    }
  }, {
    key: "getPayments",
    value: function getPayments(businessId, trackingCode) {
      var _responsePipelines5;

      return new Request({
        uri: 'payments',
        method: 'GET',
        parameters: {
          'businessId': businessId,
          'trackingCode': trackingCode
        },
        pathParams: {},
        responsePipelines: (_responsePipelines5 = {}, _defineProperty(_responsePipelines5, 200, pv_StatusResponse), _defineProperty(_responsePipelines5, 400, pv_StatusResponse), _defineProperty(_responsePipelines5, 401, pv_StatusResponse), _defineProperty(_responsePipelines5, 404, pv_StatusResponse), _defineProperty(_responsePipelines5, 500, pv_StatusResponse), _defineProperty(_responsePipelines5, 501, pv_StatusResponse), _responsePipelines5)
      });
    }
  }, {
    key: "getTransactionStatus",
    value: function getTransactionStatus(id, businessId) {
      var _responsePipelines6;

      return new Request({
        uri: 'payments/{id}',
        method: 'GET',
        parameters: {
          'businessId': businessId
        },
        pathParams: {
          id: id
        },
        responsePipelines: (_responsePipelines6 = {}, _defineProperty(_responsePipelines6, 200, pv_StatusResponse), _defineProperty(_responsePipelines6, 400, pv_StatusResponse), _defineProperty(_responsePipelines6, 401, pv_StatusResponse), _defineProperty(_responsePipelines6, 404, pv_StatusResponse), _defineProperty(_responsePipelines6, 500, pv_StatusResponse), _defineProperty(_responsePipelines6, 501, pv_StatusResponse), _responsePipelines6)
      });
    }
  }, {
    key: "getParameters",
    value: function getParameters(params) {
      var copy = _objectSpread({}, params);

      delete copy.header;
      delete copy.body;
      return copy;
    }
  }]);

  return Api;
}();

module.exports = Api;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Request =
/*#__PURE__*/
function () {
  function Request(_ref) {
    var uri = _ref.uri,
        _ref$method = _ref.method,
        method = _ref$method === void 0 ? Request.METHOD_POST : _ref$method,
        _ref$parameters = _ref.parameters,
        parameters = _ref$parameters === void 0 ? [] : _ref$parameters,
        _ref$headers = _ref.headers,
        headers = _ref$headers === void 0 ? {} : _ref$headers,
        _ref$body = _ref.body,
        body = _ref$body === void 0 ? {} : _ref$body,
        _ref$pathParams = _ref.pathParams,
        pathParams = _ref$pathParams === void 0 ? [] : _ref$pathParams,
        _ref$responsePipeline = _ref.responsePipelines,
        responsePipelines = _ref$responsePipeline === void 0 ? {} : _ref$responsePipeline;

    _classCallCheck(this, Request);

    this.uri = uri;
    this.method = method;
    this.parameters = parameters;
    this.headers = headers;
    this.body = body;
    this.pathParams = pathParams;
    this.responsePipelines = responsePipelines;
  }

  _createClass(Request, [{
    key: "getUri",
    value: function getUri() {
      var _this = this;

      return Object.keys(this.pathParams).reduce(function (uri, pathParam) {
        return uri.replace("{".concat(pathParam, "}"), _this.pathParams[pathParam]);
      }, this.uri);
    }
  }, {
    key: "getMethod",
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: "getParameters",
    value: function getParameters() {
      return this.parameters;
    }
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      return this.headers;
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "getPathParams",
    value: function getPathParams() {
      return this.pathParams;
    }
  }, {
    key: "getResponsePipeline",
    value: function getResponsePipeline(statusCode) {
      return this.responsePipelines[statusCode];
    }
  }]);

  return Request;
}();

Request.METHOD_GET = 'GET';
Request.METHOD_POST = 'POST';
module.exports = Request;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright Copyright (c) 2019 Payvision B.V. (https://www.payvision.com/)
 * @license see LICENCE.TXT
 *
 * Warning! This file is auto-generated! Any changes made to this file will be deleted in the future!
 */
var Request = __webpack_require__(6);

var pv_CheckoutRequest = __webpack_require__(63);

var pv_CheckoutResponse = __webpack_require__(76);

var pv_StatusResponse = __webpack_require__(83);

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "newCheckout",
    value: function newCheckout(input) {
      var _responsePipelines;

      return new Request({
        uri: 'checkouts',
        method: 'POST',
        body: input instanceof pv_CheckoutRequest ? input : new pv_CheckoutRequest(input),
        parameters: {},
        pathParams: {},
        responsePipelines: (_responsePipelines = {}, _defineProperty(_responsePipelines, 200, pv_CheckoutResponse), _defineProperty(_responsePipelines, 400, pv_CheckoutResponse), _defineProperty(_responsePipelines, 500, pv_CheckoutResponse), _defineProperty(_responsePipelines, 501, pv_CheckoutResponse), _responsePipelines)
      });
    }
  }, {
    key: "getCheckoutStatus",
    value: function getCheckoutStatus(id, businessId) {
      var _responsePipelines2;

      return new Request({
        uri: 'checkouts/{id}',
        method: 'GET',
        parameters: {
          'businessId': businessId
        },
        pathParams: {
          id: id
        },
        responsePipelines: (_responsePipelines2 = {}, _defineProperty(_responsePipelines2, 200, pv_StatusResponse), _defineProperty(_responsePipelines2, 400, pv_StatusResponse), _defineProperty(_responsePipelines2, 500, pv_StatusResponse), _defineProperty(_responsePipelines2, 501, pv_StatusResponse), _responsePipelines2)
      });
    }
  }, {
    key: "getParameters",
    value: function getParameters(params) {
      var copy = _objectSpread({}, params);

      delete copy.header;
      delete copy.body;
      return copy;
    }
  }]);

  return Api;
}();

module.exports = Api;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @copyright Copyright (c) 2019 Payvision B.V. (https://www.payvision.com/)
 * @license see LICENCE.TXT
 *
 * Warning! This file is auto-generated! Any changes made to this file will be deleted in the future!
 */
var Request = __webpack_require__(6);

var pv_LinkRequest = __webpack_require__(96);

var pv_CancelRequest = __webpack_require__(106);

var pv_LinkResponse = __webpack_require__(107);

var pv_StatusResponse = __webpack_require__(121);

var pv_ResponseCancel = __webpack_require__(122);

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "newLink",
    value: function newLink(input) {
      var _responsePipelines;

      return new Request({
        uri: 'paymentlink/links',
        method: 'POST',
        body: input instanceof pv_LinkRequest ? input : new pv_LinkRequest(input),
        parameters: {},
        pathParams: {},
        responsePipelines: (_responsePipelines = {}, _defineProperty(_responsePipelines, 200, pv_LinkResponse), _defineProperty(_responsePipelines, 400, pv_LinkResponse), _defineProperty(_responsePipelines, 401, pv_LinkResponse), _defineProperty(_responsePipelines, 403, pv_LinkResponse), _defineProperty(_responsePipelines, 404, pv_LinkResponse), _defineProperty(_responsePipelines, 500, pv_LinkResponse), _defineProperty(_responsePipelines, 501, pv_LinkResponse), _responsePipelines)
      });
    }
  }, {
    key: "getLinkStatus",
    value: function getLinkStatus(id, businessId) {
      var _responsePipelines2;

      return new Request({
        uri: 'paymentlink/links/{id}',
        method: 'GET',
        parameters: {
          'businessId': businessId
        },
        pathParams: {
          id: id
        },
        responsePipelines: (_responsePipelines2 = {}, _defineProperty(_responsePipelines2, 200, pv_StatusResponse), _defineProperty(_responsePipelines2, 400, pv_StatusResponse), _defineProperty(_responsePipelines2, 401, pv_StatusResponse), _defineProperty(_responsePipelines2, 403, pv_StatusResponse), _defineProperty(_responsePipelines2, 404, pv_StatusResponse), _defineProperty(_responsePipelines2, 500, pv_StatusResponse), _defineProperty(_responsePipelines2, 501, pv_StatusResponse), _responsePipelines2)
      });
    }
  }, {
    key: "cancelLink",
    value: function cancelLink(input, id) {
      var _responsePipelines3;

      return new Request({
        uri: 'paymentlink/links/{id}/cancel',
        method: 'POST',
        body: input instanceof pv_CancelRequest ? input : new pv_CancelRequest(input),
        parameters: {},
        pathParams: {
          id: id
        },
        responsePipelines: (_responsePipelines3 = {}, _defineProperty(_responsePipelines3, 200, pv_ResponseCancel), _defineProperty(_responsePipelines3, 400, pv_ResponseCancel), _defineProperty(_responsePipelines3, 401, pv_ResponseCancel), _defineProperty(_responsePipelines3, 403, pv_ResponseCancel), _defineProperty(_responsePipelines3, 404, pv_ResponseCancel), _defineProperty(_responsePipelines3, 500, pv_ResponseCancel), _defineProperty(_responsePipelines3, 501, pv_ResponseCancel), _responsePipelines3)
      });
    }
  }, {
    key: "getParameters",
    value: function getParameters(params) {
      var copy = _objectSpread({}, params);

      delete copy.header;
      delete copy.body;
      return copy;
    }
  }]);

  return Api;
}();

module.exports = Api;

/***/ })

/******/ });