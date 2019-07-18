exports.ids = [2];
exports.modules = Array(63).concat([
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_CheckoutRequestBody = __webpack_require__(64);

var pv_RequestHeader = __webpack_require__(75);

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequest =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequest, _ValueObject);

  function pv_CheckoutRequest() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        header = _ref.header;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequest).call(this));
    _this.body = body instanceof pv_CheckoutRequestBody ? body : new pv_CheckoutRequestBody(body, isResponse);
    _this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_CheckoutRequest, [{
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return this.header;
    }
  }]);

  return pv_CheckoutRequest;
}(ValueObject);

module.exports = pv_CheckoutRequest;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_CheckoutRequestCheckout = __webpack_require__(65);

var pv_CheckoutRequestTransaction = __webpack_require__(67);

var pv_CheckoutRequestBillingAddress = __webpack_require__(68);

var pv_Customer = __webpack_require__(69);

var pv_CheckoutRequestDba = __webpack_require__(70);

var pv_CheckoutRequestOption = __webpack_require__(71);

var pv_CheckoutRequestOrder = __webpack_require__(72);

var pv_CheckoutRequestShippingAddress = __webpack_require__(74);

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestBody, _ValueObject);

  function pv_CheckoutRequestBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        checkout = _ref.checkout,
        transaction = _ref.transaction,
        billingAddress = _ref.billingAddress,
        customer = _ref.customer,
        dba = _ref.dba,
        option = _ref.option,
        order = _ref.order,
        shippingAddress = _ref.shippingAddress;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestBody).call(this));
    _this.checkout = checkout instanceof pv_CheckoutRequestCheckout ? checkout : new pv_CheckoutRequestCheckout(checkout, isResponse);
    _this.transaction = transaction instanceof pv_CheckoutRequestTransaction ? transaction : new pv_CheckoutRequestTransaction(transaction, isResponse);
    if (billingAddress != null) _this.billingAddress = billingAddress instanceof pv_CheckoutRequestBillingAddress ? billingAddress : new pv_CheckoutRequestBillingAddress(billingAddress, isResponse);
    if (customer != null) _this.customer = customer instanceof pv_Customer ? customer : new pv_Customer(customer, isResponse);
    if (dba != null) _this.dba = dba instanceof pv_CheckoutRequestDba ? dba : new pv_CheckoutRequestDba(dba, isResponse);
    if (option != null) _this.option = option instanceof pv_CheckoutRequestOption ? option : new pv_CheckoutRequestOption(option, isResponse);
    if (order != null) _this.order = order instanceof pv_CheckoutRequestOrder ? order : new pv_CheckoutRequestOrder(order, isResponse);
    if (shippingAddress != null) _this.shippingAddress = shippingAddress instanceof pv_CheckoutRequestShippingAddress ? shippingAddress : new pv_CheckoutRequestShippingAddress(shippingAddress, isResponse);
    return _this;
  }

  _createClass(pv_CheckoutRequestBody, [{
    key: "getCheckout",
    value: function getCheckout() {
      return this.checkout;
    }
  }, {
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }, {
    key: "getBillingAddress",
    value: function getBillingAddress() {
      return this.billingAddress;
    }
  }, {
    key: "getCustomer",
    value: function getCustomer() {
      return this.customer;
    }
  }, {
    key: "getDba",
    value: function getDba() {
      return this.dba;
    }
  }, {
    key: "getOption",
    value: function getOption() {
      return this.option;
    }
  }, {
    key: "getOrder",
    value: function getOrder() {
      return this.order;
    }
  }, {
    key: "getShippingAddress",
    value: function getShippingAddress() {
      return this.shippingAddress;
    }
  }]);

  return pv_CheckoutRequestBody;
}(ValueObject);

module.exports = pv_CheckoutRequestBody;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_OneClick = __webpack_require__(66);

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestCheckout =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestCheckout, _ValueObject);

  function pv_CheckoutRequestCheckout() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        brandIds = _ref.brandIds,
        returnUrl = _ref.returnUrl,
        oneClick = _ref.oneClick,
        threeDSecure = _ref.threeDSecure,
        tokenize = _ref.tokenize;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestCheckout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestCheckout).call(this));

    _this.importValue('brandIds', brandIds, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: true
    });

    _this.importValue('returnUrl', returnUrl, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('threeDSecure', threeDSecure, {
      type: 'boolean',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('tokenize', tokenize, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    if (oneClick != null) _this.oneClick = oneClick instanceof pv_OneClick ? oneClick : new pv_OneClick(oneClick, isResponse);
    return _this;
  }

  _createClass(pv_CheckoutRequestCheckout, [{
    key: "getBrandIds",
    value: function getBrandIds() {
      return this.brandIds;
    }
  }, {
    key: "getReturnUrl",
    value: function getReturnUrl() {
      return this.returnUrl;
    }
  }, {
    key: "getOneClick",
    value: function getOneClick() {
      return this.oneClick;
    }
  }, {
    key: "getThreeDSecure",
    value: function getThreeDSecure() {
      return this.threeDSecure;
    }
  }, {
    key: "getTokenize",
    value: function getTokenize() {
      return this.tokenize;
    }
  }]);

  return pv_CheckoutRequestCheckout;
}(ValueObject);

module.exports = pv_CheckoutRequestCheckout;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_OneClick =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_OneClick, _ValueObject);

  function pv_OneClick() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        requireCvv = _ref.requireCvv,
        threeDSecure = _ref.threeDSecure,
        tokens = _ref.tokens,
        useCustomerTokens = _ref.useCustomerTokens;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_OneClick);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_OneClick).call(this));

    _this.importValue('requireCvv', requireCvv, {
      type: 'boolean',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('threeDSecure', threeDSecure, {
      type: 'boolean',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('tokens', tokens, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: true
    });

    _this.importValue('useCustomerTokens', useCustomerTokens, {
      type: 'boolean',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_OneClick, [{
    key: "getRequireCvv",
    value: function getRequireCvv() {
      return this.requireCvv;
    }
  }, {
    key: "getThreeDSecure",
    value: function getThreeDSecure() {
      return this.threeDSecure;
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: "getUseCustomerTokens",
    value: function getUseCustomerTokens() {
      return this.useCustomerTokens;
    }
  }]);

  return pv_OneClick;
}(ValueObject);

module.exports = pv_OneClick;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestTransaction, _ValueObject);

  function pv_CheckoutRequestTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        authorizationMode = _ref.authorizationMode,
        currencyCode = _ref.currencyCode,
        trackingCode = _ref.trackingCode,
        countryCode = _ref.countryCode,
        descriptor = _ref.descriptor,
        invoiceId = _ref.invoiceId,
        languageCode = _ref.languageCode,
        notifyUrl = _ref.notifyUrl,
        purchaseId = _ref.purchaseId,
        source = _ref.source,
        storeId = _ref.storeId,
        type = _ref.type;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestTransaction).call(this));

    _this.importValue('amount', amount, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('authorizationMode', authorizationMode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('currencyCode', currencyCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('trackingCode', trackingCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('countryCode', countryCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('descriptor', descriptor, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('invoiceId', invoiceId, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('languageCode', languageCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('notifyUrl', notifyUrl, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('purchaseId', purchaseId, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('source', source, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('storeId', storeId, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('type', type, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutRequestTransaction, [{
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }
  }, {
    key: "getAuthorizationMode",
    value: function getAuthorizationMode() {
      return this.authorizationMode;
    }
  }, {
    key: "getCurrencyCode",
    value: function getCurrencyCode() {
      return this.currencyCode;
    }
  }, {
    key: "getTrackingCode",
    value: function getTrackingCode() {
      return this.trackingCode;
    }
  }, {
    key: "getCountryCode",
    value: function getCountryCode() {
      return this.countryCode;
    }
  }, {
    key: "getDescriptor",
    value: function getDescriptor() {
      return this.descriptor;
    }
  }, {
    key: "getInvoiceId",
    value: function getInvoiceId() {
      return this.invoiceId;
    }
  }, {
    key: "getLanguageCode",
    value: function getLanguageCode() {
      return this.languageCode;
    }
  }, {
    key: "getNotifyUrl",
    value: function getNotifyUrl() {
      return this.notifyUrl;
    }
  }, {
    key: "getPurchaseId",
    value: function getPurchaseId() {
      return this.purchaseId;
    }
  }, {
    key: "getSource",
    value: function getSource() {
      return this.source;
    }
  }, {
    key: "getStoreId",
    value: function getStoreId() {
      return this.storeId;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }]);

  return pv_CheckoutRequestTransaction;
}(ValueObject);

module.exports = pv_CheckoutRequestTransaction;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestBillingAddress =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestBillingAddress, _ValueObject);

  function pv_CheckoutRequestBillingAddress() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        city = _ref.city,
        countryCode = _ref.countryCode,
        houseNumber = _ref.houseNumber,
        houseNumberSuffix = _ref.houseNumberSuffix,
        stateCode = _ref.stateCode,
        street = _ref.street,
        streetInfo = _ref.streetInfo,
        zip = _ref.zip;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestBillingAddress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestBillingAddress).call(this));

    _this.importValue('city', city, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('countryCode', countryCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('houseNumber', houseNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('houseNumberSuffix', houseNumberSuffix, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('stateCode', stateCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('street', street, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('streetInfo', streetInfo, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('zip', zip, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutRequestBillingAddress, [{
    key: "getCity",
    value: function getCity() {
      return this.city;
    }
  }, {
    key: "getCountryCode",
    value: function getCountryCode() {
      return this.countryCode;
    }
  }, {
    key: "getHouseNumber",
    value: function getHouseNumber() {
      return this.houseNumber;
    }
  }, {
    key: "getHouseNumberSuffix",
    value: function getHouseNumberSuffix() {
      return this.houseNumberSuffix;
    }
  }, {
    key: "getStateCode",
    value: function getStateCode() {
      return this.stateCode;
    }
  }, {
    key: "getStreet",
    value: function getStreet() {
      return this.street;
    }
  }, {
    key: "getStreetInfo",
    value: function getStreetInfo() {
      return this.streetInfo;
    }
  }, {
    key: "getZip",
    value: function getZip() {
      return this.zip;
    }
  }]);

  return pv_CheckoutRequestBillingAddress;
}(ValueObject);

module.exports = pv_CheckoutRequestBillingAddress;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_Customer =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Customer, _ValueObject);

  function pv_Customer() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        ipAddress = _ref.ipAddress,
        birthDate = _ref.birthDate,
        companyName = _ref.companyName,
        customerId = _ref.customerId,
        deviceType = _ref.deviceType,
        email = _ref.email,
        familyName = _ref.familyName,
        givenName = _ref.givenName,
        httpUserAgent = _ref.httpUserAgent,
        identificationNumber = _ref.identificationNumber,
        identificationTypeId = _ref.identificationTypeId,
        mobileNumber = _ref.mobileNumber,
        phoneNumber = _ref.phoneNumber,
        sex = _ref.sex,
        taxNumber = _ref.taxNumber,
        type = _ref.type;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Customer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Customer).call(this));

    _this.importValue('ipAddress', ipAddress, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('birthDate', birthDate, {
      type: 'datetime',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('companyName', companyName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('customerId', customerId, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('deviceType', deviceType, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('email', email, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('familyName', familyName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('givenName', givenName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('httpUserAgent', httpUserAgent, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('identificationNumber', identificationNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('identificationTypeId', identificationTypeId, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('mobileNumber', mobileNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('phoneNumber', phoneNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('sex', sex, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('taxNumber', taxNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('type', type, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_Customer, [{
    key: "getIpAddress",
    value: function getIpAddress() {
      return this.ipAddress;
    }
  }, {
    key: "getBirthDate",
    value: function getBirthDate() {
      return this.birthDate;
    }
  }, {
    key: "getCompanyName",
    value: function getCompanyName() {
      return this.companyName;
    }
  }, {
    key: "getCustomerId",
    value: function getCustomerId() {
      return this.customerId;
    }
  }, {
    key: "getDeviceType",
    value: function getDeviceType() {
      return this.deviceType;
    }
  }, {
    key: "getEmail",
    value: function getEmail() {
      return this.email;
    }
  }, {
    key: "getFamilyName",
    value: function getFamilyName() {
      return this.familyName;
    }
  }, {
    key: "getGivenName",
    value: function getGivenName() {
      return this.givenName;
    }
  }, {
    key: "getHttpUserAgent",
    value: function getHttpUserAgent() {
      return this.httpUserAgent;
    }
  }, {
    key: "getIdentificationNumber",
    value: function getIdentificationNumber() {
      return this.identificationNumber;
    }
  }, {
    key: "getIdentificationTypeId",
    value: function getIdentificationTypeId() {
      return this.identificationTypeId;
    }
  }, {
    key: "getMobileNumber",
    value: function getMobileNumber() {
      return this.mobileNumber;
    }
  }, {
    key: "getPhoneNumber",
    value: function getPhoneNumber() {
      return this.phoneNumber;
    }
  }, {
    key: "getSex",
    value: function getSex() {
      return this.sex;
    }
  }, {
    key: "getTaxNumber",
    value: function getTaxNumber() {
      return this.taxNumber;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }]);

  return pv_Customer;
}(ValueObject);

module.exports = pv_Customer;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestDba =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestDba, _ValueObject);

  function pv_CheckoutRequestDba() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        city = _ref.city,
        countryCode = _ref.countryCode,
        email = _ref.email,
        name = _ref.name,
        phoneNumber = _ref.phoneNumber,
        shortName = _ref.shortName,
        stateCode = _ref.stateCode,
        street = _ref.street,
        subMerchantId = _ref.subMerchantId,
        zip = _ref.zip;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestDba);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestDba).call(this));

    _this.importValue('city', city, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('countryCode', countryCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('email', email, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('name', name, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('phoneNumber', phoneNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('shortName', shortName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('stateCode', stateCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('street', street, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('subMerchantId', subMerchantId, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('zip', zip, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutRequestDba, [{
    key: "getCity",
    value: function getCity() {
      return this.city;
    }
  }, {
    key: "getCountryCode",
    value: function getCountryCode() {
      return this.countryCode;
    }
  }, {
    key: "getEmail",
    value: function getEmail() {
      return this.email;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getPhoneNumber",
    value: function getPhoneNumber() {
      return this.phoneNumber;
    }
  }, {
    key: "getShortName",
    value: function getShortName() {
      return this.shortName;
    }
  }, {
    key: "getStateCode",
    value: function getStateCode() {
      return this.stateCode;
    }
  }, {
    key: "getStreet",
    value: function getStreet() {
      return this.street;
    }
  }, {
    key: "getSubMerchantId",
    value: function getSubMerchantId() {
      return this.subMerchantId;
    }
  }, {
    key: "getZip",
    value: function getZip() {
      return this.zip;
    }
  }]);

  return pv_CheckoutRequestDba;
}(ValueObject);

module.exports = pv_CheckoutRequestDba;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestOption =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestOption, _ValueObject);

  function pv_CheckoutRequestOption() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        brandName = _ref.brandName,
        cartBorderColor = _ref.cartBorderColor,
        countryRestriction = _ref.countryRestriction,
        headerImage = _ref.headerImage,
        locale = _ref.locale,
        minAgeRestriction = _ref.minAgeRestriction,
        noShipping = _ref.noShipping,
        processingType = _ref.processingType,
        quantity = _ref.quantity;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestOption);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestOption).call(this));

    _this.importValue('brandName', brandName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('cartBorderColor', cartBorderColor, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('countryRestriction', countryRestriction, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('headerImage', headerImage, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('locale', locale, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('minAgeRestriction', minAgeRestriction, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('noShipping', noShipping, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('processingType', processingType, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('quantity', quantity, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutRequestOption, [{
    key: "getBrandName",
    value: function getBrandName() {
      return this.brandName;
    }
  }, {
    key: "getCartBorderColor",
    value: function getCartBorderColor() {
      return this.cartBorderColor;
    }
  }, {
    key: "getCountryRestriction",
    value: function getCountryRestriction() {
      return this.countryRestriction;
    }
  }, {
    key: "getHeaderImage",
    value: function getHeaderImage() {
      return this.headerImage;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "getMinAgeRestriction",
    value: function getMinAgeRestriction() {
      return this.minAgeRestriction;
    }
  }, {
    key: "getNoShipping",
    value: function getNoShipping() {
      return this.noShipping;
    }
  }, {
    key: "getProcessingType",
    value: function getProcessingType() {
      return this.processingType;
    }
  }, {
    key: "getQuantity",
    value: function getQuantity() {
      return this.quantity;
    }
  }]);

  return pv_CheckoutRequestOption;
}(ValueObject);

module.exports = pv_CheckoutRequestOption;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_CheckoutRequestOrderLine = __webpack_require__(73);

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestOrder =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestOrder, _ValueObject);

  function pv_CheckoutRequestOrder() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        orderlines = _ref.orderlines;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestOrder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestOrder).call(this));

    if (orderlines != null) {
      if (!Array.isArray(orderlines)) throw new Error("Property [orderlines] expected an array, got [".concat(_typeof(orderlines), "] on [pv_CheckoutRequestOrder]"));
      _this.orderlines = orderlines.map(function (orderlines_single) {
        return orderlines_single instanceof pv_CheckoutRequestOrderLine ? orderlines_single : new pv_CheckoutRequestOrderLine(orderlines_single, isResponse);
      });
    }

    return _this;
  }

  _createClass(pv_CheckoutRequestOrder, [{
    key: "getOrderlines",
    value: function getOrderlines() {
      return this.orderlines;
    }
  }]);

  return pv_CheckoutRequestOrder;
}(ValueObject);

module.exports = pv_CheckoutRequestOrder;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestOrderLine =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestOrderLine, _ValueObject);

  function pv_CheckoutRequestOrderLine() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        currencyCode = _ref.currencyCode,
        description = _ref.description,
        discountAmount = _ref.discountAmount,
        itemAmount = _ref.itemAmount,
        productCode = _ref.productCode,
        productName = _ref.productName,
        purchaseType = _ref.purchaseType,
        quantity = _ref.quantity,
        sequenceNumber = _ref.sequenceNumber,
        shippingAmount = _ref.shippingAmount,
        taxPercentage = _ref.taxPercentage,
        totalAmount = _ref.totalAmount;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestOrderLine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestOrderLine).call(this));

    _this.importValue('currencyCode', currencyCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('description', description, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('discountAmount', discountAmount, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('itemAmount', itemAmount, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('productCode', productCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('productName', productName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('purchaseType', purchaseType, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('quantity', quantity, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('sequenceNumber', sequenceNumber, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('shippingAmount', shippingAmount, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('taxPercentage', taxPercentage, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('totalAmount', totalAmount, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutRequestOrderLine, [{
    key: "getCurrencyCode",
    value: function getCurrencyCode() {
      return this.currencyCode;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "getDiscountAmount",
    value: function getDiscountAmount() {
      return this.discountAmount;
    }
  }, {
    key: "getItemAmount",
    value: function getItemAmount() {
      return this.itemAmount;
    }
  }, {
    key: "getProductCode",
    value: function getProductCode() {
      return this.productCode;
    }
  }, {
    key: "getProductName",
    value: function getProductName() {
      return this.productName;
    }
  }, {
    key: "getPurchaseType",
    value: function getPurchaseType() {
      return this.purchaseType;
    }
  }, {
    key: "getQuantity",
    value: function getQuantity() {
      return this.quantity;
    }
  }, {
    key: "getSequenceNumber",
    value: function getSequenceNumber() {
      return this.sequenceNumber;
    }
  }, {
    key: "getShippingAmount",
    value: function getShippingAmount() {
      return this.shippingAmount;
    }
  }, {
    key: "getTaxPercentage",
    value: function getTaxPercentage() {
      return this.taxPercentage;
    }
  }, {
    key: "getTotalAmount",
    value: function getTotalAmount() {
      return this.totalAmount;
    }
  }]);

  return pv_CheckoutRequestOrderLine;
}(ValueObject);

module.exports = pv_CheckoutRequestOrderLine;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_Customer = __webpack_require__(69);

var ValueObject = __webpack_require__(10);

var pv_CheckoutRequestShippingAddress =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutRequestShippingAddress, _ValueObject);

  function pv_CheckoutRequestShippingAddress() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        city = _ref.city,
        countryCode = _ref.countryCode,
        customer = _ref.customer,
        houseNumber = _ref.houseNumber,
        houseNumberSuffix = _ref.houseNumberSuffix,
        stateCode = _ref.stateCode,
        street = _ref.street,
        streetInfo = _ref.streetInfo,
        zip = _ref.zip;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutRequestShippingAddress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutRequestShippingAddress).call(this));

    _this.importValue('city', city, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('countryCode', countryCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('houseNumber', houseNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('houseNumberSuffix', houseNumberSuffix, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('stateCode', stateCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('street', street, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('streetInfo', streetInfo, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('zip', zip, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    if (customer != null) _this.customer = customer instanceof pv_Customer ? customer : new pv_Customer(customer, isResponse);
    return _this;
  }

  _createClass(pv_CheckoutRequestShippingAddress, [{
    key: "getCity",
    value: function getCity() {
      return this.city;
    }
  }, {
    key: "getCountryCode",
    value: function getCountryCode() {
      return this.countryCode;
    }
  }, {
    key: "getCustomer",
    value: function getCustomer() {
      return this.customer;
    }
  }, {
    key: "getHouseNumber",
    value: function getHouseNumber() {
      return this.houseNumber;
    }
  }, {
    key: "getHouseNumberSuffix",
    value: function getHouseNumberSuffix() {
      return this.houseNumberSuffix;
    }
  }, {
    key: "getStateCode",
    value: function getStateCode() {
      return this.stateCode;
    }
  }, {
    key: "getStreet",
    value: function getStreet() {
      return this.street;
    }
  }, {
    key: "getStreetInfo",
    value: function getStreetInfo() {
      return this.streetInfo;
    }
  }, {
    key: "getZip",
    value: function getZip() {
      return this.zip;
    }
  }]);

  return pv_CheckoutRequestShippingAddress;
}(ValueObject);

module.exports = pv_CheckoutRequestShippingAddress;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_Header =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Header, _ValueObject);

  function pv_Header() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        businessId = _ref.businessId;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Header).call(this));

    _this.importValue('businessId', businessId, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_Header, [{
    key: "getBusinessId",
    value: function getBusinessId() {
      return this.businessId;
    }
  }]);

  return pv_Header;
}(ValueObject);

module.exports = pv_Header;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_CheckoutResponseBody = __webpack_require__(77);

var pv_CheckoutResponseHeader = __webpack_require__(82);

var ValueObject = __webpack_require__(10);

var pv_CheckoutResponse =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutResponse, _ValueObject);

  function pv_CheckoutResponse() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        description = _ref.description,
        header = _ref.header,
        result = _ref.result;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutResponse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutResponse).call(this));

    _this.importValue('description', description, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('result', result, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.body = body instanceof pv_CheckoutResponseBody ? body : new pv_CheckoutResponseBody(body, isResponse);
    _this.header = header instanceof pv_CheckoutResponseHeader ? header : new pv_CheckoutResponseHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_CheckoutResponse, [{
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return this.header;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
  }]);

  return pv_CheckoutResponse;
}(ValueObject);

module.exports = pv_CheckoutResponse;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_CheckoutResponseCheckout = __webpack_require__(78);

var pv_Error = __webpack_require__(80);

var pv_CheckoutResponseTransaction = __webpack_require__(81);

var ValueObject = __webpack_require__(10);

var pv_CheckoutResponseBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutResponseBody, _ValueObject);

  function pv_CheckoutResponseBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        checkout = _ref.checkout,
        error = _ref.error,
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutResponseBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutResponseBody).call(this));
    if (checkout != null) _this.checkout = checkout instanceof pv_CheckoutResponseCheckout ? checkout : new pv_CheckoutResponseCheckout(checkout, isResponse);
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);
    if (transaction != null) _this.transaction = transaction instanceof pv_CheckoutResponseTransaction ? transaction : new pv_CheckoutResponseTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_CheckoutResponseBody, [{
    key: "getCheckout",
    value: function getCheckout() {
      return this.checkout;
    }
  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }]);

  return pv_CheckoutResponseBody;
}(ValueObject);

module.exports = pv_CheckoutResponseBody;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_CheckoutResponseRedirect = __webpack_require__(79);

var pv_OneClick = __webpack_require__(66);

var ValueObject = __webpack_require__(10);

var pv_CheckoutResponseCheckout =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutResponseCheckout, _ValueObject);

  function pv_CheckoutResponseCheckout() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        brandIds = _ref.brandIds,
        checkoutId = _ref.checkoutId,
        expirationTime = _ref.expirationTime,
        redirect = _ref.redirect,
        oneClick = _ref.oneClick,
        threeDSecure = _ref.threeDSecure,
        tokenize = _ref.tokenize;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutResponseCheckout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutResponseCheckout).call(this));

    _this.importValue('brandIds', brandIds, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: true
    });

    _this.importValue('checkoutId', checkoutId, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('expirationTime', expirationTime, {
      type: 'datetime',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('threeDSecure', threeDSecure, {
      type: 'boolean',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('tokenize', tokenize, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.redirect = redirect instanceof pv_CheckoutResponseRedirect ? redirect : new pv_CheckoutResponseRedirect(redirect, isResponse);
    if (oneClick != null) _this.oneClick = oneClick instanceof pv_OneClick ? oneClick : new pv_OneClick(oneClick, isResponse);
    return _this;
  }

  _createClass(pv_CheckoutResponseCheckout, [{
    key: "getBrandIds",
    value: function getBrandIds() {
      return this.brandIds;
    }
  }, {
    key: "getCheckoutId",
    value: function getCheckoutId() {
      return this.checkoutId;
    }
  }, {
    key: "getExpirationTime",
    value: function getExpirationTime() {
      return this.expirationTime;
    }
  }, {
    key: "getRedirect",
    value: function getRedirect() {
      return this.redirect;
    }
  }, {
    key: "getOneClick",
    value: function getOneClick() {
      return this.oneClick;
    }
  }, {
    key: "getThreeDSecure",
    value: function getThreeDSecure() {
      return this.threeDSecure;
    }
  }, {
    key: "getTokenize",
    value: function getTokenize() {
      return this.tokenize;
    }
  }]);

  return pv_CheckoutResponseCheckout;
}(ValueObject);

module.exports = pv_CheckoutResponseCheckout;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutResponseRedirect =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutResponseRedirect, _ValueObject);

  function pv_CheckoutResponseRedirect() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        method = _ref.method,
        url = _ref.url;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutResponseRedirect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutResponseRedirect).call(this));

    _this.importValue('method', method, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('url', url, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutResponseRedirect, [{
    key: "getMethod",
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.url;
    }
  }]);

  return pv_CheckoutResponseRedirect;
}(ValueObject);

module.exports = pv_CheckoutResponseRedirect;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_Error =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Error, _ValueObject);

  function pv_Error() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        code = _ref.code,
        message = _ref.message;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Error);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Error).call(this));

    _this.importValue('code', code, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('message', message, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_Error, [{
    key: "getCode",
    value: function getCode() {
      return this.code;
    }
  }, {
    key: "getMessage",
    value: function getMessage() {
      return this.message;
    }
  }]);

  return pv_Error;
}(ValueObject);

module.exports = pv_Error;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutResponseTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutResponseTransaction, _ValueObject);

  function pv_CheckoutResponseTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        authorizationMode = _ref.authorizationMode,
        currencyCode = _ref.currencyCode,
        trackingCode = _ref.trackingCode;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutResponseTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutResponseTransaction).call(this));

    _this.importValue('amount', amount, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('authorizationMode', authorizationMode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('currencyCode', currencyCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('trackingCode', trackingCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutResponseTransaction, [{
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }
  }, {
    key: "getAuthorizationMode",
    value: function getAuthorizationMode() {
      return this.authorizationMode;
    }
  }, {
    key: "getCurrencyCode",
    value: function getCurrencyCode() {
      return this.currencyCode;
    }
  }, {
    key: "getTrackingCode",
    value: function getTrackingCode() {
      return this.trackingCode;
    }
  }]);

  return pv_CheckoutResponseTransaction;
}(ValueObject);

module.exports = pv_CheckoutResponseTransaction;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_CheckoutResponseHeader =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_CheckoutResponseHeader, _ValueObject);

  function pv_CheckoutResponseHeader() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        requestTimestamp = _ref.requestTimestamp;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_CheckoutResponseHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_CheckoutResponseHeader).call(this));

    _this.importValue('requestTimestamp', requestTimestamp, {
      type: 'datetime',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_CheckoutResponseHeader, [{
    key: "getRequestTimestamp",
    value: function getRequestTimestamp() {
      return this.requestTimestamp;
    }
  }]);

  return pv_CheckoutResponseHeader;
}(ValueObject);

module.exports = pv_CheckoutResponseHeader;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_StatusResponseBody = __webpack_require__(84);

var pv_StatusResponseHeader = __webpack_require__(94);

var ValueObject = __webpack_require__(10);

var pv_StatusResponse =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_StatusResponse, _ValueObject);

  function pv_StatusResponse() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        description = _ref.description,
        header = _ref.header,
        result = _ref.result;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_StatusResponse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_StatusResponse).call(this));

    _this.importValue('description', description, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('result', result, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.body = body instanceof pv_StatusResponseBody ? body : new pv_StatusResponseBody(body, isResponse);
    _this.header = header instanceof pv_StatusResponseHeader ? header : new pv_StatusResponseHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_StatusResponse, [{
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return this.header;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
  }]);

  return pv_StatusResponse;
}(ValueObject);

module.exports = pv_StatusResponse;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_CheckoutResponseCheckout = __webpack_require__(78);

var pv_Error = __webpack_require__(80);

var pv_PaymentResponse = __webpack_require__(85);

var pv_CheckoutResponseTransaction = __webpack_require__(81);

var ValueObject = __webpack_require__(10);

var pv_StatusResponseBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_StatusResponseBody, _ValueObject);

  function pv_StatusResponseBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        checkout = _ref.checkout,
        error = _ref.error,
        payments = _ref.payments,
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_StatusResponseBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_StatusResponseBody).call(this));
    if (checkout != null) _this.checkout = checkout instanceof pv_CheckoutResponseCheckout ? checkout : new pv_CheckoutResponseCheckout(checkout, isResponse);
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);

    if (payments != null) {
      if (!Array.isArray(payments)) throw new Error("Property [payments] expected an array, got [".concat(_typeof(payments), "] on [pv_StatusResponseBody]"));
      _this.payments = payments.map(function (payments_single) {
        return payments_single instanceof pv_PaymentResponse ? payments_single : new pv_PaymentResponse(payments_single, isResponse);
      });
    }

    if (transaction != null) _this.transaction = transaction instanceof pv_CheckoutResponseTransaction ? transaction : new pv_CheckoutResponseTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_StatusResponseBody, [{
    key: "getCheckout",
    value: function getCheckout() {
      return this.checkout;
    }
  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "getPayments",
    value: function getPayments() {
      return this.payments;
    }
  }, {
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }]);

  return pv_StatusResponseBody;
}(ValueObject);

module.exports = pv_StatusResponseBody;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_PaymentResponseBody = __webpack_require__(86);

var pv_PaymentResponseHeader = __webpack_require__(93);

var ValueObject = __webpack_require__(10);

var pv_Response =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Response, _ValueObject);

  function pv_Response() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        description = _ref.description,
        header = _ref.header,
        result = _ref.result;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Response);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Response).call(this));

    _this.importValue('description', description, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('result', result, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.body = body instanceof pv_PaymentResponseBody ? body : new pv_PaymentResponseBody(body, isResponse);
    _this.header = header instanceof pv_PaymentResponseHeader ? header : new pv_PaymentResponseHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_Response, [{
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return this.header;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
  }]);

  return pv_Response;
}(ValueObject);

module.exports = pv_Response;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var pv_PaymentResponseBank = __webpack_require__(87);

var pv_PaymentResponseCard = __webpack_require__(88);

var pv_Error = __webpack_require__(80);

var pv_PaymentResponseRedirect = __webpack_require__(89);

var pv_PaymentResponseThreeDSecure = __webpack_require__(90);

var pv_PaymentResponseToken = __webpack_require__(91);

var pv_PaymentResponseTransaction = __webpack_require__(92);

var ValueObject = __webpack_require__(10);

var pv_ResponseBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseBody, _ValueObject);

  function pv_ResponseBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        bank = _ref.bank,
        card = _ref.card,
        error = _ref.error,
        redirect = _ref.redirect,
        threeDSecure = _ref.threeDSecure,
        token = _ref.token,
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseBody).call(this));
    if (bank != null) _this.bank = bank instanceof pv_PaymentResponseBank ? bank : new pv_PaymentResponseBank(bank, isResponse);
    if (card != null) _this.card = card instanceof pv_PaymentResponseCard ? card : new pv_PaymentResponseCard(card, isResponse);
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);
    if (redirect != null) _this.redirect = redirect instanceof pv_PaymentResponseRedirect ? redirect : new pv_PaymentResponseRedirect(redirect, isResponse);
    if (threeDSecure != null) _this.threeDSecure = threeDSecure instanceof pv_PaymentResponseThreeDSecure ? threeDSecure : new pv_PaymentResponseThreeDSecure(threeDSecure, isResponse);
    if (token != null) _this.token = token instanceof pv_PaymentResponseToken ? token : new pv_PaymentResponseToken(token, isResponse);
    if (transaction != null) _this.transaction = transaction instanceof pv_PaymentResponseTransaction ? transaction : new pv_PaymentResponseTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_ResponseBody, [{
    key: "getBank",
    value: function getBank() {
      return this.bank;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      return this.card;
    }
  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "getRedirect",
    value: function getRedirect() {
      return this.redirect;
    }
  }, {
    key: "getThreeDSecure",
    value: function getThreeDSecure() {
      return this.threeDSecure;
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return this.token;
    }
  }, {
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }]);

  return pv_ResponseBody;
}(ValueObject);

module.exports = pv_ResponseBody;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_ResponseBank =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseBank, _ValueObject);

  function pv_ResponseBank() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        accountHolderName = _ref.accountHolderName,
        accountNumber = _ref.accountNumber,
        bic = _ref.bic,
        countryCode = _ref.countryCode,
        iban = _ref.iban,
        name = _ref.name;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseBank);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseBank).call(this));

    _this.importValue('accountHolderName', accountHolderName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('accountNumber', accountNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('bic', bic, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('countryCode', countryCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('iban', iban, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('name', name, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseBank, [{
    key: "getAccountHolderName",
    value: function getAccountHolderName() {
      return this.accountHolderName;
    }
  }, {
    key: "getAccountNumber",
    value: function getAccountNumber() {
      return this.accountNumber;
    }
  }, {
    key: "getBic",
    value: function getBic() {
      return this.bic;
    }
  }, {
    key: "getCountryCode",
    value: function getCountryCode() {
      return this.countryCode;
    }
  }, {
    key: "getIban",
    value: function getIban() {
      return this.iban;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return pv_ResponseBank;
}(ValueObject);

module.exports = pv_ResponseBank;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_ResponseCard =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseCard, _ValueObject);

  function pv_ResponseCard() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        approvalCode = _ref.approvalCode,
        avsAuthorizationEntity = _ref.avsAuthorizationEntity,
        avsResult = _ref.avsResult,
        cvvResult = _ref.cvvResult,
        expiryMonth = _ref.expiryMonth,
        expiryYear = _ref.expiryYear,
        firstSixDigits = _ref.firstSixDigits,
        holderName = _ref.holderName,
        lastFourDigits = _ref.lastFourDigits,
        recurringAdvice = _ref.recurringAdvice,
        threeDResult = _ref.threeDResult;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseCard).call(this));

    _this.importValue('approvalCode', approvalCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('avsAuthorizationEntity', avsAuthorizationEntity, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('avsResult', avsResult, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('cvvResult', cvvResult, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('expiryMonth', expiryMonth, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('expiryYear', expiryYear, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('firstSixDigits', firstSixDigits, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('holderName', holderName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('lastFourDigits', lastFourDigits, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('recurringAdvice', recurringAdvice, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('threeDResult', threeDResult, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseCard, [{
    key: "getApprovalCode",
    value: function getApprovalCode() {
      return this.approvalCode;
    }
  }, {
    key: "getAvsAuthorizationEntity",
    value: function getAvsAuthorizationEntity() {
      return this.avsAuthorizationEntity;
    }
  }, {
    key: "getAvsResult",
    value: function getAvsResult() {
      return this.avsResult;
    }
  }, {
    key: "getCvvResult",
    value: function getCvvResult() {
      return this.cvvResult;
    }
  }, {
    key: "getExpiryMonth",
    value: function getExpiryMonth() {
      return this.expiryMonth;
    }
  }, {
    key: "getExpiryYear",
    value: function getExpiryYear() {
      return this.expiryYear;
    }
  }, {
    key: "getFirstSixDigits",
    value: function getFirstSixDigits() {
      return this.firstSixDigits;
    }
  }, {
    key: "getHolderName",
    value: function getHolderName() {
      return this.holderName;
    }
  }, {
    key: "getLastFourDigits",
    value: function getLastFourDigits() {
      return this.lastFourDigits;
    }
  }, {
    key: "getRecurringAdvice",
    value: function getRecurringAdvice() {
      return this.recurringAdvice;
    }
  }, {
    key: "getThreeDResult",
    value: function getThreeDResult() {
      return this.threeDResult;
    }
  }]);

  return pv_ResponseCard;
}(ValueObject);

module.exports = pv_ResponseCard;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_ResponseRedirect =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseRedirect, _ValueObject);

  function pv_ResponseRedirect() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        fields = _ref.fields,
        method = _ref.method,
        url = _ref.url;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseRedirect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseRedirect).call(this));

    _this.importValue('fields', fields, {
      type: 'any',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('method', method, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('url', url, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseRedirect, [{
    key: "getFields",
    value: function getFields() {
      return this.fields;
    }
  }, {
    key: "getMethod",
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.url;
    }
  }]);

  return pv_ResponseRedirect;
}(ValueObject);

module.exports = pv_ResponseRedirect;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_ResponseThreeDSecure =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseThreeDSecure, _ValueObject);

  function pv_ResponseThreeDSecure() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        enrollmentResult = _ref.enrollmentResult,
        validationResult = _ref.validationResult;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseThreeDSecure);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseThreeDSecure).call(this));

    _this.importValue('enrollmentResult', enrollmentResult, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('validationResult', validationResult, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseThreeDSecure, [{
    key: "getEnrollmentResult",
    value: function getEnrollmentResult() {
      return this.enrollmentResult;
    }
  }, {
    key: "getValidationResult",
    value: function getValidationResult() {
      return this.validationResult;
    }
  }]);

  return pv_ResponseThreeDSecure;
}(ValueObject);

module.exports = pv_ResponseThreeDSecure;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_ResponseToken =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseToken, _ValueObject);

  function pv_ResponseToken() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        displayHint = _ref.displayHint,
        newToken = _ref.newToken,
        token = _ref.token;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseToken);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseToken).call(this));

    _this.importValue('displayHint', displayHint, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('newToken', newToken, {
      type: 'boolean',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('token', token, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseToken, [{
    key: "getDisplayHint",
    value: function getDisplayHint() {
      return this.displayHint;
    }
  }, {
    key: "getNewToken",
    value: function getNewToken() {
      return this.newToken;
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return this.token;
    }
  }]);

  return pv_ResponseToken;
}(ValueObject);

module.exports = pv_ResponseToken;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_ResponseTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseTransaction, _ValueObject);

  function pv_ResponseTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        action = _ref.action,
        amount = _ref.amount,
        currencyCode = _ref.currencyCode,
        id = _ref.id,
        parentId = _ref.parentId,
        trackingCode = _ref.trackingCode,
        brandId = _ref.brandId,
        descriptor = _ref.descriptor;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseTransaction).call(this));

    _this.importValue('action', action, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('amount', amount, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('currencyCode', currencyCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('id', id, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('parentId', parentId, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('trackingCode', trackingCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('brandId', brandId, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('descriptor', descriptor, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseTransaction, [{
    key: "getAction",
    value: function getAction() {
      return this.action;
    }
  }, {
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }
  }, {
    key: "getCurrencyCode",
    value: function getCurrencyCode() {
      return this.currencyCode;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getParentId",
    value: function getParentId() {
      return this.parentId;
    }
  }, {
    key: "getTrackingCode",
    value: function getTrackingCode() {
      return this.trackingCode;
    }
  }, {
    key: "getBrandId",
    value: function getBrandId() {
      return this.brandId;
    }
  }, {
    key: "getDescriptor",
    value: function getDescriptor() {
      return this.descriptor;
    }
  }]);

  return pv_ResponseTransaction;
}(ValueObject);

module.exports = pv_ResponseTransaction;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_ResponseHeader =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseHeader, _ValueObject);

  function pv_ResponseHeader() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        requestTimestamp = _ref.requestTimestamp,
        requestCode = _ref.requestCode;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseHeader).call(this));

    _this.importValue('requestTimestamp', requestTimestamp, {
      type: 'datetime',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('requestCode', requestCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseHeader, [{
    key: "getRequestTimestamp",
    value: function getRequestTimestamp() {
      return this.requestTimestamp;
    }
  }, {
    key: "getRequestCode",
    value: function getRequestCode() {
      return this.requestCode;
    }
  }]);

  return pv_ResponseHeader;
}(ValueObject);

module.exports = pv_ResponseHeader;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValueObject = __webpack_require__(10);

var pv_StatusResponseHeader =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_StatusResponseHeader, _ValueObject);

  function pv_StatusResponseHeader() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        requestTimestamp = _ref.requestTimestamp;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_StatusResponseHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_StatusResponseHeader).call(this));

    _this.importValue('requestTimestamp', requestTimestamp, {
      type: 'datetime',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_StatusResponseHeader, [{
    key: "getRequestTimestamp",
    value: function getRequestTimestamp() {
      return this.requestTimestamp;
    }
  }]);

  return pv_StatusResponseHeader;
}(ValueObject);

module.exports = pv_StatusResponseHeader;

/***/ })
]);;