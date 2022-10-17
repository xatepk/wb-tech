/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Api.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  _createClass(Api, [{
    key: "getInitialLamps",
    value: function getInitialLamps() {
      return fetch("".concat(this._baseUrl), {
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status)));
      });
    }
  }]);
  return Api;
}();

;// CONCATENATED MODULE: ./src/components/Lamp.js
function Lamp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Lamp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Lamp_createClass(Constructor, protoProps, staticProps) { if (protoProps) Lamp_defineProperties(Constructor.prototype, protoProps); if (staticProps) Lamp_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Lamp = /*#__PURE__*/function () {
  function Lamp(_ref, lampSelector) {
    var item = _ref.item,
      handleLampClick = _ref.handleLampClick;
    Lamp_classCallCheck(this, Lamp);
    this._name = item.name || '';
    this._id = item.id;
    this._link = item.image;
    this._material = item.material || '';
    this._height = item.height || 0;
    this._width = item.width || 0;
    this._weight = item.weight || 0;
    this._electrification = item.electrification || '';
    this._isDarkMode = item.electrification || false;
    this._handleLampClick = handleLampClick;
    this._lampSelector = lampSelector;
    this._darkMode = item.isDarkMode;
  }
  Lamp_createClass(Lamp, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var lampElement = document.querySelector(this._lampSelector).content.cloneNode(true).children[0];
      return lampElement;
    }
  }, {
    key: "generateLamp",
    value: function generateLamp() {
      this._element = this._getTemplate();
      this._lampImage = this._element.querySelector('.icons__image');
      this._lampImage.src = this._link;
      this._lampImage.alt = this._name;

      // установка обработчиков событий для лампочки
      this._setEventListeners();
      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._lampImage.addEventListener('click', function () {
        _this._handleLampClick(_this);
      });
    }
  }, {
    key: "setClassIsActive",
    value: function setClassIsActive() {
      var imageLamp = this._element.querySelector('.icons__image');
      var lampList = document.querySelectorAll('.icons__image');
      var darkTheme = document.querySelector('.interior-demo__image-dark');
      for (var i = 0; i < lampList.length; i++) {
        lampList[i].classList.remove('icons__image_is-active');
      }
      imageLamp.classList.add('icons__image_is-active');
      if (!this._darkMode) {
        darkTheme.classList.remove('interior-demo__image-dark_is-active');
        document.querySelector('.icons__button-theme_light').classList.add('icons__button-theme_is-active');
        document.querySelector('.interior-demo__image').classList.remove('interior-demo__image_dark');
      } else {
        document.querySelector('.icons__button-theme_light').classList.add('icons__button-theme_is-active');
      }
    }
  }]);
  return Lamp;
}();

;// CONCATENATED MODULE: ./src/components/LampInfo.js
function LampInfo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function LampInfo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function LampInfo_createClass(Constructor, protoProps, staticProps) { if (protoProps) LampInfo_defineProperties(Constructor.prototype, protoProps); if (staticProps) LampInfo_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var LampInfo = /*#__PURE__*/function () {
  function LampInfo(lampValueSelector, lampImageSelector) {
    LampInfo_classCallCheck(this, LampInfo);
    this._list = document.querySelectorAll(lampValueSelector);
    this._image = document.querySelectorAll(lampImageSelector);
  }
  LampInfo_createClass(LampInfo, [{
    key: "setLampInfo",
    value: function setLampInfo(_ref) {
      var _this = this;
      var material = _ref.material,
        height = _ref.height,
        width = _ref.width,
        weight = _ref.weight,
        electrification = _ref.electrification,
        image = _ref.image;
      this._list[0].textContent = material;
      this._list[1].textContent = "H ".concat(height, " x W ").concat(width, " x D ").concat(width);
      this._list[2].textContent = "".concat(weight, " kg");
      this._list[3].textContent = electrification;
      this._image.forEach(function (_, idx) {
        _this._image[idx].src = image;
        _this._image[idx].alt = material;
      });
    }
  }]);
  return LampInfo;
}();

;// CONCATENATED MODULE: ./src/components/Section.js
function Section_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Section_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Section_createClass(Constructor, protoProps, staticProps) { if (protoProps) Section_defineProperties(Constructor.prototype, protoProps); if (staticProps) Section_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    Section_classCallCheck(this, Section);
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  Section_createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element);
    }
  }, {
    key: "getHeigth",
    value: function getHeigth() {
      var iconsItem = this._container.querySelectorAll('.icons__item');
      var height = 0;
      for (var i = 0; i < 3; i++) {
        height += iconsItem[i].offsetHeight;
      }
      this._container.style.maxHeight = "".concat(height, "px");
    }
  }]);
  return Section;
}();

;// CONCATENATED MODULE: ./src/components/ThemeLamp.js
function ThemeLamp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ThemeLamp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function ThemeLamp_createClass(Constructor, protoProps, staticProps) { if (protoProps) ThemeLamp_defineProperties(Constructor.prototype, protoProps); if (staticProps) ThemeLamp_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var ThemeLamp = /*#__PURE__*/function () {
  function ThemeLamp() {
    ThemeLamp_classCallCheck(this, ThemeLamp);
    this._themeLigth = document.querySelector('.icons__button-theme_light');
    this._themeDark = document.querySelector('.icons__button-theme_dark');
  }
  ThemeLamp_createClass(ThemeLamp, [{
    key: "setIconsActive",
    value: function setIconsActive() {
      var _this = this;
      var iconsTheme = document.querySelectorAll('.icons__button-theme');
      var darkTheme = document.querySelector('.interior-demo__image-dark');
      iconsTheme.forEach(function (item) {
        item.addEventListener('click', function () {
          if (item.classList.contains('icons__button-theme_light')) {
            item.classList.add('icons__button-theme_is-active');
            _this._themeDark.classList.remove('icons__button-theme_is-active');
            darkTheme.classList.remove('interior-demo__image-dark_is-active');
          } else {
            darkTheme.classList.add('interior-demo__image-dark_is-active');
            item.classList.add('icons__button-theme_is-active');
            _this._themeLigth.classList.remove('icons__button-theme_is-active');
          }
        });
      });
    }
  }]);
  return ThemeLamp;
}();

;// CONCATENATED MODULE: ./src/utils/utils.js
var iconContainer = '.icons__list';
var lampValue = '.lamp-section__item-value';
var lampImage = '.interior-demo__lamp';
var lampImageSelector = '.icons__image';
var preloader = '.preloader';
var preloaderNone = 'preloader__ends';
var lampInfoList = '.lamp-section__list';
var lampInfoEmpty = 'lamp-section__list_empty';
var lampIcons = '.icons';
var lampIconsEmpty = 'icons__empty';
;// CONCATENATED MODULE: ./src/index.js







var api = new Api({
  baseUrl: 'https://private-anon-983412ab49-lampshop.apiary-mock.com/lamps',
  headers: {
    'Content-Type': 'application/json'
  }
});
api.getInitialLamps().then(function (result) {
  document.querySelector(preloader).classList.remove(preloaderNone);
  document.querySelector(lampInfoList).classList.remove(lampInfoEmpty);
  document.querySelector(lampIcons).classList.remove(lampIconsEmpty);
  var initialLamps = result;
  var createLamp = function createLamp(item) {
    var lampElement = new Lamp({
      item: item,
      handleLampClick: function handleLampClick(context) {
        context.setClassIsActive();
        var lampInfo = new LampInfo(lampValue, lampImage);
        lampInfo.setLampInfo(item);
        var themeLamp = new ThemeLamp(item);
        themeLamp.setIconsActive();
      }
    }, '#icons').generateLamp();
    return lampElement;
  };

  // создаем экземпляр класса Section для инициализации лампочек с сервера
  var lampsList = new Section({
    items: initialLamps,
    renderer: function renderer(item) {
      var lampElement = createLamp(item);
      lampsList.addItem(lampElement);
    }
  }, iconContainer);
  lampsList.renderItems();
  lampsList.getHeigth();
  var el = document.querySelector('.icons__image');
  if (el) {
    el.click();
  }
}).catch(function (err) {
  window.console.log(err);
});
/******/ })()
;