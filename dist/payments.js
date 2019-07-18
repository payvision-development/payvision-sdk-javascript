exports.ids = [1];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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

var pv_PaymentRequestBody = __webpack_require__(8);

var pv_RequestHeader = __webpack_require__(23);

var ValueObject = __webpack_require__(10);

var pv_Request =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Request, _ValueObject);

  function pv_Request() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        action = _ref.action,
        body = _ref.body,
        header = _ref.header;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Request);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Request).call(this));

    _this.importValue('action', action, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.body = body instanceof pv_PaymentRequestBody ? body : new pv_PaymentRequestBody(body, isResponse);
    _this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_Request, [{
    key: "getAction",
    value: function getAction() {
      return this.action;
    }
  }, {
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

  return pv_Request;
}(ValueObject);

module.exports = pv_Request;

/***/ }),
/* 8 */
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

var pv_PaymentRequestTransaction = __webpack_require__(9);

var pv_PaymentRequestBank = __webpack_require__(11);

var pv_PaymentRequestBillingAddress = __webpack_require__(12);

var pv_PaymentRequestCard = __webpack_require__(13);

var pv_Customer = __webpack_require__(14);

var pv_PaymentRequestDba = __webpack_require__(15);

var pv_PaymentRequestOption = __webpack_require__(16);

var pv_Order = __webpack_require__(17);

var pv_PaymentRequestQr = __webpack_require__(19);

var pv_PaymentRequestShippingAddress = __webpack_require__(20);

var pv_PaymentRequestThreeDSecure = __webpack_require__(21);

var pv_PaymentRequestWallet = __webpack_require__(22);

var ValueObject = __webpack_require__(10);

var pv_RequestBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestBody, _ValueObject);

  function pv_RequestBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        transaction = _ref.transaction,
        bank = _ref.bank,
        billingAddress = _ref.billingAddress,
        card = _ref.card,
        customer = _ref.customer,
        dba = _ref.dba,
        option = _ref.option,
        order = _ref.order,
        qr = _ref.qr,
        shippingAddress = _ref.shippingAddress,
        threeDSecure = _ref.threeDSecure,
        wallet = _ref.wallet;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestBody).call(this));
    _this.transaction = transaction instanceof pv_PaymentRequestTransaction ? transaction : new pv_PaymentRequestTransaction(transaction, isResponse);
    if (bank != null) _this.bank = bank instanceof pv_PaymentRequestBank ? bank : new pv_PaymentRequestBank(bank, isResponse);
    if (billingAddress != null) _this.billingAddress = billingAddress instanceof pv_PaymentRequestBillingAddress ? billingAddress : new pv_PaymentRequestBillingAddress(billingAddress, isResponse);
    if (card != null) _this.card = card instanceof pv_PaymentRequestCard ? card : new pv_PaymentRequestCard(card, isResponse);
    if (customer != null) _this.customer = customer instanceof pv_Customer ? customer : new pv_Customer(customer, isResponse);
    if (dba != null) _this.dba = dba instanceof pv_PaymentRequestDba ? dba : new pv_PaymentRequestDba(dba, isResponse);
    if (option != null) _this.option = option instanceof pv_PaymentRequestOption ? option : new pv_PaymentRequestOption(option, isResponse);
    if (order != null) _this.order = order instanceof pv_Order ? order : new pv_Order(order, isResponse);
    if (qr != null) _this.qr = qr instanceof pv_PaymentRequestQr ? qr : new pv_PaymentRequestQr(qr, isResponse);
    if (shippingAddress != null) _this.shippingAddress = shippingAddress instanceof pv_PaymentRequestShippingAddress ? shippingAddress : new pv_PaymentRequestShippingAddress(shippingAddress, isResponse);
    if (threeDSecure != null) _this.threeDSecure = threeDSecure instanceof pv_PaymentRequestThreeDSecure ? threeDSecure : new pv_PaymentRequestThreeDSecure(threeDSecure, isResponse);
    if (wallet != null) _this.wallet = wallet instanceof pv_PaymentRequestWallet ? wallet : new pv_PaymentRequestWallet(wallet, isResponse);
    return _this;
  }

  _createClass(pv_RequestBody, [{
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }, {
    key: "getBank",
    value: function getBank() {
      return this.bank;
    }
  }, {
    key: "getBillingAddress",
    value: function getBillingAddress() {
      return this.billingAddress;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      return this.card;
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
    key: "getQr",
    value: function getQr() {
      return this.qr;
    }
  }, {
    key: "getShippingAddress",
    value: function getShippingAddress() {
      return this.shippingAddress;
    }
  }, {
    key: "getThreeDSecure",
    value: function getThreeDSecure() {
      return this.threeDSecure;
    }
  }, {
    key: "getWallet",
    value: function getWallet() {
      return this.wallet;
    }
  }]);

  return pv_RequestBody;
}(ValueObject);

module.exports = pv_RequestBody;

/***/ }),
/* 9 */
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

var pv_RequestTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestTransaction, _ValueObject);

  function pv_RequestTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        trackingCode = _ref.trackingCode,
        currencyCode = _ref.currencyCode,
        returnUrl = _ref.returnUrl,
        tokenize = _ref.tokenize,
        token = _ref.token,
        storeId = _ref.storeId,
        source = _ref.source,
        payTimeout = _ref.payTimeout,
        purchaseId = _ref.purchaseId,
        brandId = _ref.brandId,
        notifyUrl = _ref.notifyUrl,
        languageCode = _ref.languageCode,
        invoiceId = _ref.invoiceId,
        descriptor = _ref.descriptor,
        countryCode = _ref.countryCode,
        type = _ref.type;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestTransaction).call(this));

    _this.importValue('amount', amount, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('trackingCode', trackingCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('currencyCode', currencyCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('returnUrl', returnUrl, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('tokenize', tokenize, {
      type: 'boolean',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('token', token, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('storeId', storeId, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('source', source, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('payTimeout', payTimeout, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('purchaseId', purchaseId, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('brandId', brandId, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('notifyUrl', notifyUrl, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('languageCode', languageCode, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('invoiceId', invoiceId, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('descriptor', descriptor, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('countryCode', countryCode, {
      type: 'string',
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

  _createClass(pv_RequestTransaction, [{
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }
  }, {
    key: "getTrackingCode",
    value: function getTrackingCode() {
      return this.trackingCode;
    }
  }, {
    key: "getCurrencyCode",
    value: function getCurrencyCode() {
      return this.currencyCode;
    }
  }, {
    key: "getReturnUrl",
    value: function getReturnUrl() {
      return this.returnUrl;
    }
  }, {
    key: "getTokenize",
    value: function getTokenize() {
      return this.tokenize;
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return this.token;
    }
  }, {
    key: "getStoreId",
    value: function getStoreId() {
      return this.storeId;
    }
  }, {
    key: "getSource",
    value: function getSource() {
      return this.source;
    }
  }, {
    key: "getPayTimeout",
    value: function getPayTimeout() {
      return this.payTimeout;
    }
  }, {
    key: "getPurchaseId",
    value: function getPurchaseId() {
      return this.purchaseId;
    }
  }, {
    key: "getBrandId",
    value: function getBrandId() {
      return this.brandId;
    }
  }, {
    key: "getNotifyUrl",
    value: function getNotifyUrl() {
      return this.notifyUrl;
    }
  }, {
    key: "getLanguageCode",
    value: function getLanguageCode() {
      return this.languageCode;
    }
  }, {
    key: "getInvoiceId",
    value: function getInvoiceId() {
      return this.invoiceId;
    }
  }, {
    key: "getDescriptor",
    value: function getDescriptor() {
      return this.descriptor;
    }
  }, {
    key: "getCountryCode",
    value: function getCountryCode() {
      return this.countryCode;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }]);

  return pv_RequestTransaction;
}(ValueObject);

module.exports = pv_RequestTransaction;

/***/ }),
/* 10 */,
/* 11 */
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

var pv_RequestBank =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestBank, _ValueObject);

  function pv_RequestBank() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        accountHolderName = _ref.accountHolderName,
        accountNumber = _ref.accountNumber,
        bankCode = _ref.bankCode,
        bic = _ref.bic,
        countryCode = _ref.countryCode,
        dateCollection = _ref.dateCollection,
        dateMandateSigned = _ref.dateMandateSigned,
        iban = _ref.iban,
        issuerId = _ref.issuerId,
        mandateId = _ref.mandateId,
        name = _ref.name;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestBank);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestBank).call(this));

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

    _this.importValue('bankCode', bankCode, {
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

    _this.importValue('dateCollection', dateCollection, {
      type: 'datetime',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('dateMandateSigned', dateMandateSigned, {
      type: 'datetime',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('iban', iban, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('issuerId', issuerId, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('mandateId', mandateId, {
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

  _createClass(pv_RequestBank, [{
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
    key: "getBankCode",
    value: function getBankCode() {
      return this.bankCode;
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
    key: "getDateCollection",
    value: function getDateCollection() {
      return this.dateCollection;
    }
  }, {
    key: "getDateMandateSigned",
    value: function getDateMandateSigned() {
      return this.dateMandateSigned;
    }
  }, {
    key: "getIban",
    value: function getIban() {
      return this.iban;
    }
  }, {
    key: "getIssuerId",
    value: function getIssuerId() {
      return this.issuerId;
    }
  }, {
    key: "getMandateId",
    value: function getMandateId() {
      return this.mandateId;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return pv_RequestBank;
}(ValueObject);

module.exports = pv_RequestBank;

/***/ }),
/* 12 */
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

var pv_RequestBillingAddress =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestBillingAddress, _ValueObject);

  function pv_RequestBillingAddress() {
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

    _classCallCheck(this, pv_RequestBillingAddress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestBillingAddress).call(this));

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

  _createClass(pv_RequestBillingAddress, [{
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

  return pv_RequestBillingAddress;
}(ValueObject);

module.exports = pv_RequestBillingAddress;

/***/ }),
/* 13 */
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

var pv_RequestCard =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestCard, _ValueObject);

  function pv_RequestCard() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cvv = _ref.cvv,
        expiryMonth = _ref.expiryMonth,
        expiryYear = _ref.expiryYear,
        holderName = _ref.holderName,
        issueNumber = _ref.issueNumber,
        number = _ref.number;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestCard).call(this));

    _this.importValue('cvv', cvv, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('expiryMonth', expiryMonth, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('expiryYear', expiryYear, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('holderName', holderName, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('issueNumber', issueNumber, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('number', number, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_RequestCard, [{
    key: "getCvv",
    value: function getCvv() {
      return this.cvv;
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
    key: "getHolderName",
    value: function getHolderName() {
      return this.holderName;
    }
  }, {
    key: "getIssueNumber",
    value: function getIssueNumber() {
      return this.issueNumber;
    }
  }, {
    key: "getNumber",
    value: function getNumber() {
      return this.number;
    }
  }]);

  return pv_RequestCard;
}(ValueObject);

module.exports = pv_RequestCard;

/***/ }),
/* 14 */
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
/* 15 */
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

var pv_RequestDba =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestDba, _ValueObject);

  function pv_RequestDba() {
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

    _classCallCheck(this, pv_RequestDba);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestDba).call(this));

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

  _createClass(pv_RequestDba, [{
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

  return pv_RequestDba;
}(ValueObject);

module.exports = pv_RequestDba;

/***/ }),
/* 16 */
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

var pv_RequestOption =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestOption, _ValueObject);

  function pv_RequestOption() {
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

    _classCallCheck(this, pv_RequestOption);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestOption).call(this));

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
      type: 'number',
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

  _createClass(pv_RequestOption, [{
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

  return pv_RequestOption;
}(ValueObject);

module.exports = pv_RequestOption;

/***/ }),
/* 17 */
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

var pv_OrderLine = __webpack_require__(18);

var ValueObject = __webpack_require__(10);

var pv_Order =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Order, _ValueObject);

  function pv_Order() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        orderLines = _ref.orderLines;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Order);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Order).call(this));
    if (!Array.isArray(orderLines)) throw new Error("Property [orderLines] expected an array, got [".concat(_typeof(orderLines), "] on [pv_Order]"));
    _this.orderLines = orderLines.map(function (orderLines_single) {
      return orderLines_single instanceof pv_OrderLine ? orderLines_single : new pv_OrderLine(orderLines_single, isResponse);
    });
    return _this;
  }

  _createClass(pv_Order, [{
    key: "getOrderLines",
    value: function getOrderLines() {
      return this.orderLines;
    }
  }]);

  return pv_Order;
}(ValueObject);

module.exports = pv_Order;

/***/ }),
/* 18 */
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

var pv_OrderLine =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_OrderLine, _ValueObject);

  function pv_OrderLine() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        description = _ref.description,
        productCode = _ref.productCode,
        purchaseType = _ref.purchaseType,
        quantity = _ref.quantity,
        taxPercentage = _ref.taxPercentage,
        totalAmount = _ref.totalAmount;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_OrderLine);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_OrderLine).call(this));

    _this.importValue('description', description, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('productCode', productCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('purchaseType', purchaseType, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('quantity', quantity, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('taxPercentage', taxPercentage, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('totalAmount', totalAmount, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_OrderLine, [{
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "getProductCode",
    value: function getProductCode() {
      return this.productCode;
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

  return pv_OrderLine;
}(ValueObject);

module.exports = pv_OrderLine;

/***/ }),
/* 19 */
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

var pv_RequestQr =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestQr, _ValueObject);

  function pv_RequestQr() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        generate = _ref.generate,
        size = _ref.size;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestQr);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestQr).call(this));

    _this.importValue('generate', generate, {
      type: 'boolean',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('size', size, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_RequestQr, [{
    key: "getGenerate",
    value: function getGenerate() {
      return this.generate;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }]);

  return pv_RequestQr;
}(ValueObject);

module.exports = pv_RequestQr;

/***/ }),
/* 20 */
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

var pv_Customer = __webpack_require__(14);

var ValueObject = __webpack_require__(10);

var pv_RequestShippingAddress =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestShippingAddress, _ValueObject);

  function pv_RequestShippingAddress() {
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

    _classCallCheck(this, pv_RequestShippingAddress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestShippingAddress).call(this));

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

  _createClass(pv_RequestShippingAddress, [{
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

  return pv_RequestShippingAddress;
}(ValueObject);

module.exports = pv_RequestShippingAddress;

/***/ }),
/* 21 */
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

var pv_RequestThreeDSecure =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestThreeDSecure, _ValueObject);

  function pv_RequestThreeDSecure() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        avv = _ref.avv,
        checkEnrollment = _ref.checkEnrollment,
        eci = _ref.eci,
        xid = _ref.xid;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestThreeDSecure);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestThreeDSecure).call(this));

    _this.importValue('avv', avv, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('checkEnrollment', checkEnrollment, {
      type: 'boolean',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('eci', eci, {
      type: 'number',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('xid', xid, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_RequestThreeDSecure, [{
    key: "getAvv",
    value: function getAvv() {
      return this.avv;
    }
  }, {
    key: "getCheckEnrollment",
    value: function getCheckEnrollment() {
      return this.checkEnrollment;
    }
  }, {
    key: "getEci",
    value: function getEci() {
      return this.eci;
    }
  }, {
    key: "getXid",
    value: function getXid() {
      return this.xid;
    }
  }]);

  return pv_RequestThreeDSecure;
}(ValueObject);

module.exports = pv_RequestThreeDSecure;

/***/ }),
/* 22 */
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

var pv_RequestWallet =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestWallet, _ValueObject);

  function pv_RequestWallet() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        accountIdentifier = _ref.accountIdentifier,
        accountKey = _ref.accountKey;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestWallet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestWallet).call(this));

    _this.importValue('accountIdentifier', accountIdentifier, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('accountKey', accountKey, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_RequestWallet, [{
    key: "getAccountIdentifier",
    value: function getAccountIdentifier() {
      return this.accountIdentifier;
    }
  }, {
    key: "getAccountKey",
    value: function getAccountKey() {
      return this.accountKey;
    }
  }]);

  return pv_RequestWallet;
}(ValueObject);

module.exports = pv_RequestWallet;

/***/ }),
/* 23 */
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
/* 24 */
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

var pv_CaptureRequestBody = __webpack_require__(25);

var pv_RequestHeader = __webpack_require__(23);

var ValueObject = __webpack_require__(10);

var pv_Request =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Request, _ValueObject);

  function pv_Request() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        header = _ref.header;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Request);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Request).call(this));
    _this.body = body instanceof pv_CaptureRequestBody ? body : new pv_CaptureRequestBody(body, isResponse);
    _this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_Request, [{
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

  return pv_Request;
}(ValueObject);

module.exports = pv_Request;

/***/ }),
/* 25 */
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

var pv_CaptureRequestTransaction = __webpack_require__(26);

var ValueObject = __webpack_require__(10);

var pv_RequestBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestBody, _ValueObject);

  function pv_RequestBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestBody).call(this));
    _this.transaction = transaction instanceof pv_CaptureRequestTransaction ? transaction : new pv_CaptureRequestTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_RequestBody, [{
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }]);

  return pv_RequestBody;
}(ValueObject);

module.exports = pv_RequestBody;

/***/ }),
/* 26 */
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

var pv_RequestTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestTransaction, _ValueObject);

  function pv_RequestTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        currencyCode = _ref.currencyCode,
        trackingCode = _ref.trackingCode,
        invoiceId = _ref.invoiceId;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestTransaction).call(this));

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

    _this.importValue('trackingCode', trackingCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('invoiceId', invoiceId, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_RequestTransaction, [{
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
    key: "getTrackingCode",
    value: function getTrackingCode() {
      return this.trackingCode;
    }
  }, {
    key: "getInvoiceId",
    value: function getInvoiceId() {
      return this.invoiceId;
    }
  }]);

  return pv_RequestTransaction;
}(ValueObject);

module.exports = pv_RequestTransaction;

/***/ }),
/* 27 */
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

var pv_CancelRequestBody = __webpack_require__(28);

var pv_RequestHeader = __webpack_require__(23);

var ValueObject = __webpack_require__(10);

var pv_Request =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Request, _ValueObject);

  function pv_Request() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        header = _ref.header;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Request);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Request).call(this));
    _this.body = body instanceof pv_CancelRequestBody ? body : new pv_CancelRequestBody(body, isResponse);
    _this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_Request, [{
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

  return pv_Request;
}(ValueObject);

module.exports = pv_Request;

/***/ }),
/* 28 */
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

var pv_CancelRequestTransaction = __webpack_require__(29);

var ValueObject = __webpack_require__(10);

var pv_RequestBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestBody, _ValueObject);

  function pv_RequestBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestBody).call(this));
    _this.transaction = transaction instanceof pv_CancelRequestTransaction ? transaction : new pv_CancelRequestTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_RequestBody, [{
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }]);

  return pv_RequestBody;
}(ValueObject);

module.exports = pv_RequestBody;

/***/ }),
/* 29 */
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

var pv_RequestTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestTransaction, _ValueObject);

  function pv_RequestTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        trackingCode = _ref.trackingCode;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestTransaction).call(this));

    _this.importValue('trackingCode', trackingCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_RequestTransaction, [{
    key: "getTrackingCode",
    value: function getTrackingCode() {
      return this.trackingCode;
    }
  }]);

  return pv_RequestTransaction;
}(ValueObject);

module.exports = pv_RequestTransaction;

/***/ }),
/* 30 */
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

var pv_RefundRequestBody = __webpack_require__(31);

var pv_RequestHeader = __webpack_require__(23);

var ValueObject = __webpack_require__(10);

var pv_Request =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_Request, _ValueObject);

  function pv_Request() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        header = _ref.header;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Request);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_Request).call(this));
    _this.body = body instanceof pv_RefundRequestBody ? body : new pv_RefundRequestBody(body, isResponse);
    _this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_Request, [{
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

  return pv_Request;
}(ValueObject);

module.exports = pv_Request;

/***/ }),
/* 31 */
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

var pv_RefundRequestTransaction = __webpack_require__(32);

var pv_Order = __webpack_require__(17);

var ValueObject = __webpack_require__(10);

var pv_RequestBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestBody, _ValueObject);

  function pv_RequestBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        transaction = _ref.transaction,
        order = _ref.order;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestBody).call(this));
    _this.transaction = transaction instanceof pv_RefundRequestTransaction ? transaction : new pv_RefundRequestTransaction(transaction, isResponse);
    if (order != null) _this.order = order instanceof pv_Order ? order : new pv_Order(order, isResponse);
    return _this;
  }

  _createClass(pv_RequestBody, [{
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }, {
    key: "getOrder",
    value: function getOrder() {
      return this.order;
    }
  }]);

  return pv_RequestBody;
}(ValueObject);

module.exports = pv_RequestBody;

/***/ }),
/* 32 */
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

var pv_RequestTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_RequestTransaction, _ValueObject);

  function pv_RequestTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        currencyCode = _ref.currencyCode,
        trackingCode = _ref.trackingCode;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_RequestTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_RequestTransaction).call(this));

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

    _this.importValue('trackingCode', trackingCode, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_RequestTransaction, [{
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
    key: "getTrackingCode",
    value: function getTrackingCode() {
      return this.trackingCode;
    }
  }]);

  return pv_RequestTransaction;
}(ValueObject);

module.exports = pv_RequestTransaction;

/***/ }),
/* 33 */
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

var pv_PaymentResponseBody = __webpack_require__(34);

var pv_PaymentResponseHeader = __webpack_require__(43);

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
/* 34 */
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

var pv_PaymentResponseBank = __webpack_require__(35);

var pv_PaymentResponseCard = __webpack_require__(36);

var pv_Error = __webpack_require__(37);

var pv_PaymentResponseQr = __webpack_require__(38);

var pv_PaymentResponseRedirect = __webpack_require__(39);

var pv_PaymentResponseThreeDSecure = __webpack_require__(40);

var pv_PaymentResponseToken = __webpack_require__(41);

var pv_PaymentResponseTransaction = __webpack_require__(42);

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
        qr = _ref.qr,
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
    if (qr != null) _this.qr = qr instanceof pv_PaymentResponseQr ? qr : new pv_PaymentResponseQr(qr, isResponse);
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
    key: "getQr",
    value: function getQr() {
      return this.qr;
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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

var pv_ResponseQr =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseQr, _ValueObject);

  function pv_ResponseQr() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        resource = _ref.resource;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseQr);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseQr).call(this));

    _this.importValue('resource', resource, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_ResponseQr, [{
    key: "getResource",
    value: function getResource() {
      return this.resource;
    }
  }]);

  return pv_ResponseQr;
}(ValueObject);

module.exports = pv_ResponseQr;

/***/ }),
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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

var pv_CaptureResponseBody = __webpack_require__(45);

var pv_CaptureResponseHeader = __webpack_require__(48);

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

    _this.body = body instanceof pv_CaptureResponseBody ? body : new pv_CaptureResponseBody(body, isResponse);
    _this.header = header instanceof pv_CaptureResponseHeader ? header : new pv_CaptureResponseHeader(header, isResponse);
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
/* 45 */
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

var pv_CaptureResponseBank = __webpack_require__(46);

var pv_PaymentResponseCard = __webpack_require__(36);

var pv_Error = __webpack_require__(37);

var pv_CaptureResponseTransaction = __webpack_require__(47);

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
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseBody).call(this));
    if (bank != null) _this.bank = bank instanceof pv_CaptureResponseBank ? bank : new pv_CaptureResponseBank(bank, isResponse);
    if (card != null) _this.card = card instanceof pv_PaymentResponseCard ? card : new pv_PaymentResponseCard(card, isResponse);
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);
    if (transaction != null) _this.transaction = transaction instanceof pv_CaptureResponseTransaction ? transaction : new pv_CaptureResponseTransaction(transaction, isResponse);
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
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }]);

  return pv_ResponseBody;
}(ValueObject);

module.exports = pv_ResponseBody;

/***/ }),
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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

var pv_CancelResponseBody = __webpack_require__(50);

var pv_CancelResponseHeader = __webpack_require__(52);

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

    _this.body = body instanceof pv_CancelResponseBody ? body : new pv_CancelResponseBody(body, isResponse);
    _this.header = header instanceof pv_CancelResponseHeader ? header : new pv_CancelResponseHeader(header, isResponse);
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
/* 50 */
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

var pv_Error = __webpack_require__(37);

var pv_CancelResponseTransaction = __webpack_require__(51);

var ValueObject = __webpack_require__(10);

var pv_ResponseBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseBody, _ValueObject);

  function pv_ResponseBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        error = _ref.error,
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseBody).call(this));
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);
    if (transaction != null) _this.transaction = transaction instanceof pv_CancelResponseTransaction ? transaction : new pv_CancelResponseTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_ResponseBody, [{
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

  return pv_ResponseBody;
}(ValueObject);

module.exports = pv_ResponseBody;

/***/ }),
/* 51 */
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
/* 52 */
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
/* 53 */
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

var pv_RefundResponseBody = __webpack_require__(54);

var pv_RefundResponseHeader = __webpack_require__(57);

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

    _this.body = body instanceof pv_RefundResponseBody ? body : new pv_RefundResponseBody(body, isResponse);
    _this.header = header instanceof pv_RefundResponseHeader ? header : new pv_RefundResponseHeader(header, isResponse);
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
/* 54 */
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

var pv_RefundResponseCard = __webpack_require__(55);

var pv_Error = __webpack_require__(37);

var pv_RefundResponseTransaction = __webpack_require__(56);

var ValueObject = __webpack_require__(10);

var pv_ResponseBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_ResponseBody, _ValueObject);

  function pv_ResponseBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        card = _ref.card,
        error = _ref.error,
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseBody).call(this));
    if (card != null) _this.card = card instanceof pv_RefundResponseCard ? card : new pv_RefundResponseCard(card, isResponse);
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);
    if (transaction != null) _this.transaction = transaction instanceof pv_RefundResponseTransaction ? transaction : new pv_RefundResponseTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_ResponseBody, [{
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
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }]);

  return pv_ResponseBody;
}(ValueObject);

module.exports = pv_ResponseBody;

/***/ }),
/* 55 */
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
        expiryMonth = _ref.expiryMonth,
        expiryYear = _ref.expiryYear,
        firstSixDigits = _ref.firstSixDigits,
        holderName = _ref.holderName,
        lastFourDigits = _ref.lastFourDigits;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_ResponseCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_ResponseCard).call(this));

    _this.importValue('approvalCode', approvalCode, {
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

    return _this;
  }

  _createClass(pv_ResponseCard, [{
    key: "getApprovalCode",
    value: function getApprovalCode() {
      return this.approvalCode;
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
  }]);

  return pv_ResponseCard;
}(ValueObject);

module.exports = pv_ResponseCard;

/***/ }),
/* 56 */
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
/* 57 */
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
/* 58 */
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

var pv_StatusResponseBody = __webpack_require__(59);

var pv_StatusResponseHeader = __webpack_require__(61);

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
/* 59 */
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

var pv_PaymentResponseBank = __webpack_require__(35);

var pv_PaymentResponseCard = __webpack_require__(36);

var pv_Error = __webpack_require__(37);

var pv_PaymentResponseRedirect = __webpack_require__(39);

var pv_PaymentResponseThreeDSecure = __webpack_require__(40);

var pv_PaymentResponseQr = __webpack_require__(38);

var pv_StatusResponseTransaction = __webpack_require__(60);

var ValueObject = __webpack_require__(10);

var pv_StatusResponseBody =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_StatusResponseBody, _ValueObject);

  function pv_StatusResponseBody() {
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

    _classCallCheck(this, pv_StatusResponseBody);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_StatusResponseBody).call(this));
    if (bank != null) _this.bank = bank instanceof pv_PaymentResponseBank ? bank : new pv_PaymentResponseBank(bank, isResponse);
    if (card != null) _this.card = card instanceof pv_PaymentResponseCard ? card : new pv_PaymentResponseCard(card, isResponse);
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);
    if (redirect != null) _this.redirect = redirect instanceof pv_PaymentResponseRedirect ? redirect : new pv_PaymentResponseRedirect(redirect, isResponse);
    if (threeDSecure != null) _this.threeDSecure = threeDSecure instanceof pv_PaymentResponseThreeDSecure ? threeDSecure : new pv_PaymentResponseThreeDSecure(threeDSecure, isResponse);
    if (token != null) _this.token = token instanceof pv_PaymentResponseQr ? token : new pv_PaymentResponseQr(token, isResponse);
    if (transaction != null) _this.transaction = transaction instanceof pv_StatusResponseTransaction ? transaction : new pv_StatusResponseTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_StatusResponseBody, [{
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

  return pv_StatusResponseBody;
}(ValueObject);

module.exports = pv_StatusResponseBody;

/***/ }),
/* 60 */
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

var pv_StatusResponseTransaction =
/*#__PURE__*/
function (_ValueObject) {
  _inherits(pv_StatusResponseTransaction, _ValueObject);

  function pv_StatusResponseTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        action = _ref.action,
        amount = _ref.amount,
        currencyCode = _ref.currencyCode,
        id = _ref.id,
        trackingCode = _ref.trackingCode,
        brandId = _ref.brandId,
        descriptor = _ref.descriptor,
        parentid = _ref.parentid;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_StatusResponseTransaction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_StatusResponseTransaction).call(this));

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

    _this.importValue('parentid', parentid, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_StatusResponseTransaction, [{
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
  }, {
    key: "getParentid",
    value: function getParentid() {
      return this.parentid;
    }
  }]);

  return pv_StatusResponseTransaction;
}(ValueObject);

module.exports = pv_StatusResponseTransaction;

/***/ }),
/* 61 */
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
        requestTimestamp = _ref.requestTimestamp,
        requestCode = _ref.requestCode;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_StatusResponseHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(pv_StatusResponseHeader).call(this));

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

  _createClass(pv_StatusResponseHeader, [{
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

  return pv_StatusResponseHeader;
}(ValueObject);

module.exports = pv_StatusResponseHeader;

/***/ })
];;