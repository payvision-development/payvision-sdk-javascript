exports.ids = [3];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_BasicAddress = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_BasicAddress, _ValueObject);

  var _super = _createSuper(pv_BasicAddress);

  function pv_BasicAddress() {
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

    _classCallCheck(this, pv_BasicAddress);

    _this = _super.call(this);

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

  _createClass(pv_BasicAddress, [{
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

  return pv_BasicAddress;
}(ValueObject);

module.exports = pv_BasicAddress;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_BasicCustomer = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_BasicCustomer, _ValueObject);

  var _super = _createSuper(pv_BasicCustomer);

  function pv_BasicCustomer() {
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

    _classCallCheck(this, pv_BasicCustomer);

    _this = _super.call(this);

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

  _createClass(pv_BasicCustomer, [{
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

  return pv_BasicCustomer;
}(ValueObject);

module.exports = pv_BasicCustomer;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkRequestDba = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkRequestDba, _ValueObject);

  var _super = _createSuper(pv_LinkRequestDba);

  function pv_LinkRequestDba() {
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

    _classCallCheck(this, pv_LinkRequestDba);

    _this = _super.call(this);

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

  _createClass(pv_LinkRequestDba, [{
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

  return pv_LinkRequestDba;
}(ValueObject);

module.exports = pv_LinkRequestDba;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkRequestOrderLine = __webpack_require__(104);

var ValueObject = __webpack_require__(10);

var pv_LinkRequestOrder = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkRequestOrder, _ValueObject);

  var _super = _createSuper(pv_LinkRequestOrder);

  function pv_LinkRequestOrder() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        orderlines = _ref.orderlines;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkRequestOrder);

    _this = _super.call(this);
    if (!Array.isArray(orderlines)) throw new Error("Property [orderlines] expected an array, got [".concat(_typeof(orderlines), "] on [pv_LinkRequestOrder]"));
    _this.orderlines = orderlines.map(function (orderlines_single) {
      return orderlines_single instanceof pv_LinkRequestOrderLine ? orderlines_single : new pv_LinkRequestOrderLine(orderlines_single, isResponse);
    });
    return _this;
  }

  _createClass(pv_LinkRequestOrder, [{
    key: "getOrderlines",
    value: function getOrderlines() {
      return this.orderlines;
    }
  }]);

  return pv_LinkRequestOrder;
}(ValueObject);

module.exports = pv_LinkRequestOrder;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkRequestOrderLine = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkRequestOrderLine, _ValueObject);

  var _super = _createSuper(pv_LinkRequestOrderLine);

  function pv_LinkRequestOrderLine() {
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

    _classCallCheck(this, pv_LinkRequestOrderLine);

    _this = _super.call(this);

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

  _createClass(pv_LinkRequestOrderLine, [{
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

  return pv_LinkRequestOrderLine;
}(ValueObject);

module.exports = pv_LinkRequestOrderLine;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_Header = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_Header, _ValueObject);

  var _super = _createSuper(pv_Header);

  function pv_Header() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        businessId = _ref.businessId;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Header);

    _this = _super.call(this);

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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_RequestHeader = __webpack_require__(105);

var ValueObject = __webpack_require__(10);

var pv_Request = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_Request, _ValueObject);

  var _super = _createSuper(pv_Request);

  function pv_Request() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        header = _ref.header;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Request);

    _this = _super.call(this);
    _this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_Request, [{
    key: "getHeader",
    value: function getHeader() {
      return this.header;
    }
  }]);

  return pv_Request;
}(ValueObject);

module.exports = pv_Request;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkResponseBody = __webpack_require__(108);

var pv_BasicResponseHeader = __webpack_require__(120);

var ValueObject = __webpack_require__(10);

var pv_LinkResponse = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponse, _ValueObject);

  var _super = _createSuper(pv_LinkResponse);

  function pv_LinkResponse() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        description = _ref.description,
        header = _ref.header,
        result = _ref.result;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponse);

    _this = _super.call(this);

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

    _this.body = body instanceof pv_LinkResponseBody ? body : new pv_LinkResponseBody(body, isResponse);
    _this.header = header instanceof pv_BasicResponseHeader ? header : new pv_BasicResponseHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_LinkResponse, [{
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

  return pv_LinkResponse;
}(ValueObject);

module.exports = pv_LinkResponse;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_Error = __webpack_require__(109);

var pv_LinkResponseLink = __webpack_require__(110);

var pv_LinkResponsePayment = __webpack_require__(112);

var pv_LinkResponseTransaction = __webpack_require__(119);

var ValueObject = __webpack_require__(10);

var pv_LinkResponseBody = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponseBody, _ValueObject);

  var _super = _createSuper(pv_LinkResponseBody);

  function pv_LinkResponseBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        error = _ref.error,
        link = _ref.link,
        payments = _ref.payments,
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponseBody);

    _this = _super.call(this);
    if (error != null) _this.error = error instanceof pv_Error ? error : new pv_Error(error, isResponse);
    if (link != null) _this.link = link instanceof pv_LinkResponseLink ? link : new pv_LinkResponseLink(link, isResponse);

    if (payments != null) {
      if (!Array.isArray(payments)) throw new Error("Property [payments] expected an array, got [".concat(_typeof(payments), "] on [pv_LinkResponseBody]"));
      _this.payments = payments.map(function (payments_single) {
        return payments_single instanceof pv_LinkResponsePayment ? payments_single : new pv_LinkResponsePayment(payments_single, isResponse);
      });
    }

    if (transaction != null) _this.transaction = transaction instanceof pv_LinkResponseTransaction ? transaction : new pv_LinkResponseTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_LinkResponseBody, [{
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "getLink",
    value: function getLink() {
      return this.link;
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

  return pv_LinkResponseBody;
}(ValueObject);

module.exports = pv_LinkResponseBody;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_Error = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_Error, _ValueObject);

  var _super = _createSuper(pv_Error);

  function pv_Error() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        code = _ref.code,
        message = _ref.message;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Error);

    _this = _super.call(this);

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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkResponseRedirect = __webpack_require__(111);

var ValueObject = __webpack_require__(10);

var pv_LinkResponseLink = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponseLink, _ValueObject);

  var _super = _createSuper(pv_LinkResponseLink);

  function pv_LinkResponseLink() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        brandIds = _ref.brandIds,
        expirationTime = _ref.expirationTime,
        linkId = _ref.linkId,
        redirect = _ref.redirect,
        status = _ref.status;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponseLink);

    _this = _super.call(this);

    _this.importValue('brandIds', brandIds, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: true
    });

    _this.importValue('expirationTime', expirationTime, {
      type: 'datetime',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('linkId', linkId, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('status', status, {
      type: 'string',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.redirect = redirect instanceof pv_LinkResponseRedirect ? redirect : new pv_LinkResponseRedirect(redirect, isResponse);
    return _this;
  }

  _createClass(pv_LinkResponseLink, [{
    key: "getBrandIds",
    value: function getBrandIds() {
      return this.brandIds;
    }
  }, {
    key: "getExpirationTime",
    value: function getExpirationTime() {
      return this.expirationTime;
    }
  }, {
    key: "getLinkId",
    value: function getLinkId() {
      return this.linkId;
    }
  }, {
    key: "getRedirect",
    value: function getRedirect() {
      return this.redirect;
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }
  }]);

  return pv_LinkResponseLink;
}(ValueObject);

module.exports = pv_LinkResponseLink;

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkResponseRedirect = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponseRedirect, _ValueObject);

  var _super = _createSuper(pv_LinkResponseRedirect);

  function pv_LinkResponseRedirect() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        method = _ref.method,
        url = _ref.url;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponseRedirect);

    _this = _super.call(this);

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

  _createClass(pv_LinkResponseRedirect, [{
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

  return pv_LinkResponseRedirect;
}(ValueObject);

module.exports = pv_LinkResponseRedirect;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkResponsePaymentBody = __webpack_require__(113);

var pv_LinkResponsePaymentHeader = __webpack_require__(118);

var ValueObject = __webpack_require__(10);

var pv_LinkResponsePayment = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponsePayment, _ValueObject);

  var _super = _createSuper(pv_LinkResponsePayment);

  function pv_LinkResponsePayment() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        description = _ref.description,
        header = _ref.header,
        result = _ref.result;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponsePayment);

    _this = _super.call(this);

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

    _this.body = body instanceof pv_LinkResponsePaymentBody ? body : new pv_LinkResponsePaymentBody(body, isResponse);
    _this.header = header instanceof pv_LinkResponsePaymentHeader ? header : new pv_LinkResponsePaymentHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_LinkResponsePayment, [{
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

  return pv_LinkResponsePayment;
}(ValueObject);

module.exports = pv_LinkResponsePayment;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkResponsePaymentBank = __webpack_require__(114);

var pv_LinkResponsePaymentCard = __webpack_require__(115);

var pv_LinkResponsePaymentError = __webpack_require__(116);

var pv_LinkResponsePaymentTransaction = __webpack_require__(117);

var ValueObject = __webpack_require__(10);

var pv_LinkResponsePaymentBody = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponsePaymentBody, _ValueObject);

  var _super = _createSuper(pv_LinkResponsePaymentBody);

  function pv_LinkResponsePaymentBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        bank = _ref.bank,
        card = _ref.card,
        error = _ref.error,
        transaction = _ref.transaction;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponsePaymentBody);

    _this = _super.call(this);
    if (bank != null) _this.bank = bank instanceof pv_LinkResponsePaymentBank ? bank : new pv_LinkResponsePaymentBank(bank, isResponse);
    if (card != null) _this.card = card instanceof pv_LinkResponsePaymentCard ? card : new pv_LinkResponsePaymentCard(card, isResponse);
    if (error != null) _this.error = error instanceof pv_LinkResponsePaymentError ? error : new pv_LinkResponsePaymentError(error, isResponse);
    if (transaction != null) _this.transaction = transaction instanceof pv_LinkResponsePaymentTransaction ? transaction : new pv_LinkResponsePaymentTransaction(transaction, isResponse);
    return _this;
  }

  _createClass(pv_LinkResponsePaymentBody, [{
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

  return pv_LinkResponsePaymentBody;
}(ValueObject);

module.exports = pv_LinkResponsePaymentBody;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkResponsePaymentBank = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponsePaymentBank, _ValueObject);

  var _super = _createSuper(pv_LinkResponsePaymentBank);

  function pv_LinkResponsePaymentBank() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        accountHolderName = _ref.accountHolderName,
        bic = _ref.bic,
        countryCode = _ref.countryCode,
        iban = _ref.iban,
        name = _ref.name;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponsePaymentBank);

    _this = _super.call(this);

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

  _createClass(pv_LinkResponsePaymentBank, [{
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

  return pv_LinkResponsePaymentBank;
}(ValueObject);

module.exports = pv_LinkResponsePaymentBank;

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkResponsePaymentCard = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponsePaymentCard, _ValueObject);

  var _super = _createSuper(pv_LinkResponsePaymentCard);

  function pv_LinkResponsePaymentCard() {
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

    _classCallCheck(this, pv_LinkResponsePaymentCard);

    _this = _super.call(this);

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

  _createClass(pv_LinkResponsePaymentCard, [{
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

  return pv_LinkResponsePaymentCard;
}(ValueObject);

module.exports = pv_LinkResponsePaymentCard;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkResponsePaymentError = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponsePaymentError, _ValueObject);

  var _super = _createSuper(pv_LinkResponsePaymentError);

  function pv_LinkResponsePaymentError() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        code = _ref.code,
        message = _ref.message;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponsePaymentError);

    _this = _super.call(this);

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

  _createClass(pv_LinkResponsePaymentError, [{
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

  return pv_LinkResponsePaymentError;
}(ValueObject);

module.exports = pv_LinkResponsePaymentError;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkResponsePaymentTransaction = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponsePaymentTransaction, _ValueObject);

  var _super = _createSuper(pv_LinkResponsePaymentTransaction);

  function pv_LinkResponsePaymentTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        brandId = _ref.brandId,
        currencyCode = _ref.currencyCode,
        id = _ref.id,
        trackingCode = _ref.trackingCode;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponsePaymentTransaction);

    _this = _super.call(this);

    _this.importValue('amount', amount, {
      type: 'number',
      required: isResponse ? false : true,
      isArray: false
    });

    _this.importValue('brandId', brandId, {
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

    return _this;
  }

  _createClass(pv_LinkResponsePaymentTransaction, [{
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }
  }, {
    key: "getBrandId",
    value: function getBrandId() {
      return this.brandId;
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
  }]);

  return pv_LinkResponsePaymentTransaction;
}(ValueObject);

module.exports = pv_LinkResponsePaymentTransaction;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkResponsePaymentHeader = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponsePaymentHeader, _ValueObject);

  var _super = _createSuper(pv_LinkResponsePaymentHeader);

  function pv_LinkResponsePaymentHeader() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        requestTimestamp = _ref.requestTimestamp;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponsePaymentHeader);

    _this = _super.call(this);

    _this.importValue('requestTimestamp', requestTimestamp, {
      type: 'datetime',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_LinkResponsePaymentHeader, [{
    key: "getRequestTimestamp",
    value: function getRequestTimestamp() {
      return this.requestTimestamp;
    }
  }]);

  return pv_LinkResponsePaymentHeader;
}(ValueObject);

module.exports = pv_LinkResponsePaymentHeader;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkResponseTransaction = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkResponseTransaction, _ValueObject);

  var _super = _createSuper(pv_LinkResponseTransaction);

  function pv_LinkResponseTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        authorizationMode = _ref.authorizationMode,
        currencyCode = _ref.currencyCode,
        trackingCode = _ref.trackingCode;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkResponseTransaction);

    _this = _super.call(this);

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

  _createClass(pv_LinkResponseTransaction, [{
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

  return pv_LinkResponseTransaction;
}(ValueObject);

module.exports = pv_LinkResponseTransaction;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_BasicResponseHeader = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_BasicResponseHeader, _ValueObject);

  var _super = _createSuper(pv_BasicResponseHeader);

  function pv_BasicResponseHeader() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        requestTimestamp = _ref.requestTimestamp;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_BasicResponseHeader);

    _this = _super.call(this);

    _this.importValue('requestTimestamp', requestTimestamp, {
      type: 'datetime',
      required: isResponse ? false : true,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_BasicResponseHeader, [{
    key: "getRequestTimestamp",
    value: function getRequestTimestamp() {
      return this.requestTimestamp;
    }
  }]);

  return pv_BasicResponseHeader;
}(ValueObject);

module.exports = pv_BasicResponseHeader;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkResponseBody = __webpack_require__(108);

var pv_BasicResponseHeader = __webpack_require__(120);

var ValueObject = __webpack_require__(10);

var pv_StatusResponse = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_StatusResponse, _ValueObject);

  var _super = _createSuper(pv_StatusResponse);

  function pv_StatusResponse() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        description = _ref.description,
        header = _ref.header,
        result = _ref.result;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_StatusResponse);

    _this = _super.call(this);

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

    _this.body = body instanceof pv_LinkResponseBody ? body : new pv_LinkResponseBody(body, isResponse);
    _this.header = header instanceof pv_BasicResponseHeader ? header : new pv_BasicResponseHeader(header, isResponse);
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkResponseBody = __webpack_require__(108);

var pv_BasicResponseHeader = __webpack_require__(120);

var ValueObject = __webpack_require__(10);

var pv_Response = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_Response, _ValueObject);

  var _super = _createSuper(pv_Response);

  function pv_Response() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        description = _ref.description,
        header = _ref.header,
        result = _ref.result;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_Response);

    _this = _super.call(this);

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

    _this.body = body instanceof pv_LinkResponseBody ? body : new pv_LinkResponseBody(body, isResponse);
    _this.header = header instanceof pv_BasicResponseHeader ? header : new pv_BasicResponseHeader(header, isResponse);
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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkRequestBody = __webpack_require__(97);

var pv_RequestHeader = __webpack_require__(105);

var ValueObject = __webpack_require__(10);

var pv_LinkRequest = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkRequest, _ValueObject);

  var _super = _createSuper(pv_LinkRequest);

  function pv_LinkRequest() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        body = _ref.body,
        header = _ref.header;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkRequest);

    _this = _super.call(this);
    _this.body = body instanceof pv_LinkRequestBody ? body : new pv_LinkRequestBody(body, isResponse);
    _this.header = header instanceof pv_RequestHeader ? header : new pv_RequestHeader(header, isResponse);
    return _this;
  }

  _createClass(pv_LinkRequest, [{
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

  return pv_LinkRequest;
}(ValueObject);

module.exports = pv_LinkRequest;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pv_LinkRequestTransaction = __webpack_require__(98);

var pv_LinkRequestLink = __webpack_require__(99);

var pv_BasicAddress = __webpack_require__(100);

var pv_BasicCustomer = __webpack_require__(101);

var pv_LinkRequestDba = __webpack_require__(102);

var pv_LinkRequestOrder = __webpack_require__(103);

var ValueObject = __webpack_require__(10);

var pv_LinkRequestBody = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkRequestBody, _ValueObject);

  var _super = _createSuper(pv_LinkRequestBody);

  function pv_LinkRequestBody() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        transaction = _ref.transaction,
        link = _ref.link,
        billingAddress = _ref.billingAddress,
        customer = _ref.customer,
        dba = _ref.dba,
        order = _ref.order,
        shippingAddress = _ref.shippingAddress;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkRequestBody);

    _this = _super.call(this);
    _this.transaction = transaction instanceof pv_LinkRequestTransaction ? transaction : new pv_LinkRequestTransaction(transaction, isResponse);
    _this.link = link instanceof pv_LinkRequestLink ? link : new pv_LinkRequestLink(link, isResponse);
    if (billingAddress != null) _this.billingAddress = billingAddress instanceof pv_BasicAddress ? billingAddress : new pv_BasicAddress(billingAddress, isResponse);
    if (customer != null) _this.customer = customer instanceof pv_BasicCustomer ? customer : new pv_BasicCustomer(customer, isResponse);
    if (dba != null) _this.dba = dba instanceof pv_LinkRequestDba ? dba : new pv_LinkRequestDba(dba, isResponse);
    if (order != null) _this.order = order instanceof pv_LinkRequestOrder ? order : new pv_LinkRequestOrder(order, isResponse);
    if (shippingAddress != null) _this.shippingAddress = shippingAddress instanceof pv_BasicAddress ? shippingAddress : new pv_BasicAddress(shippingAddress, isResponse);
    return _this;
  }

  _createClass(pv_LinkRequestBody, [{
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }, {
    key: "getLink",
    value: function getLink() {
      return this.link;
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

  return pv_LinkRequestBody;
}(ValueObject);

module.exports = pv_LinkRequestBody;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkRequestTransaction = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkRequestTransaction, _ValueObject);

  var _super = _createSuper(pv_LinkRequestTransaction);

  function pv_LinkRequestTransaction() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        amount = _ref.amount,
        authorizationMode = _ref.authorizationMode,
        currencyCode = _ref.currencyCode,
        trackingCode = _ref.trackingCode,
        countryCode = _ref.countryCode,
        descriptor = _ref.descriptor,
        invoiceId = _ref.invoiceId,
        storeId = _ref.storeId,
        type = _ref.type;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkRequestTransaction);

    _this = _super.call(this);

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

  _createClass(pv_LinkRequestTransaction, [{
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

  return pv_LinkRequestTransaction;
}(ValueObject);

module.exports = pv_LinkRequestTransaction;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ValueObject = __webpack_require__(10);

var pv_LinkRequestLink = /*#__PURE__*/function (_ValueObject) {
  _inherits(pv_LinkRequestLink, _ValueObject);

  var _super = _createSuper(pv_LinkRequestLink);

  function pv_LinkRequestLink() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        brandIds = _ref.brandIds,
        returnUrl = _ref.returnUrl,
        duration = _ref.duration,
        expirationTime = _ref.expirationTime;

    var isResponse = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, pv_LinkRequestLink);

    _this = _super.call(this);

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

    _this.importValue('duration', duration, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    _this.importValue('expirationTime', expirationTime, {
      type: 'string',
      required: isResponse ? false : false,
      isArray: false
    });

    return _this;
  }

  _createClass(pv_LinkRequestLink, [{
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
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getExpirationTime",
    value: function getExpirationTime() {
      return this.expirationTime;
    }
  }]);

  return pv_LinkRequestLink;
}(ValueObject);

module.exports = pv_LinkRequestLink;

/***/ })

};;