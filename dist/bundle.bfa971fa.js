/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Api.js
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  getInitialLamps() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }
}
;// CONCATENATED MODULE: ./src/components/Lamp.js
class Lamp {
  constructor(_ref, lampSelector) {
    let {
      item,
      handleLampClick
    } = _ref;
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
  _getTemplate() {
    const lampElement = document.querySelector(this._lampSelector).content.cloneNode(true).children[0];
    return lampElement;
  }
  generateLamp() {
    this._element = this._getTemplate();
    this._lampImage = this._element.querySelector('.icons__image');
    this._lampImage.src = this._link;
    this._lampImage.alt = this._name;

    // установка обработчиков событий для лампочки
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._lampImage.addEventListener('click', () => {
      this._handleLampClick(this);
    });
  }
  setClassIsActive() {
    const imageLamp = this._element.querySelector('.icons__image');
    const lampList = document.querySelectorAll('.icons__image');
    const darkTheme = document.querySelector('.interior-demo__image-dark');
    for (let i = 0; i < lampList.length; i++) {
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
}
;// CONCATENATED MODULE: ./src/components/LampInfo.js
class LampInfo {
  constructor(lampValueSelector, lampImageSelector) {
    this._list = document.querySelectorAll(lampValueSelector);
    this._image = document.querySelectorAll(lampImageSelector);
  }
  setLampInfo(_ref) {
    let {
      material,
      height,
      width,
      weight,
      electrification,
      image
    } = _ref;
    this._list[0].textContent = material;
    this._list[1].textContent = `H ${height} x W ${width} x D ${width}`;
    this._list[2].textContent = `${weight} kg`;
    this._list[3].textContent = electrification;
    this._image.forEach((_, idx) => {
      this._image[idx].src = image;
      this._image[idx].alt = material;
    });
  }
}
;// CONCATENATED MODULE: ./src/components/Section.js
class Section {
  constructor(_ref, containerSelector) {
    let {
      items,
      renderer
    } = _ref;
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._container.append(element);
  }
  getHeigth() {
    const iconsItem = this._container.querySelectorAll('.icons__item');
    let height = 0;
    for (let i = 0; i < 3; i++) {
      height += iconsItem[i].offsetHeight;
    }
    this._container.style.maxHeight = `${height}px`;
  }
}
;// CONCATENATED MODULE: ./src/components/ThemeLamp.js
class ThemeLamp {
  constructor() {
    this._themeLigth = document.querySelector('.icons__button-theme_light');
    this._themeDark = document.querySelector('.icons__button-theme_dark');
  }
  setIconsActive() {
    const iconsTheme = document.querySelectorAll('.icons__button-theme');
    const darkTheme = document.querySelector('.interior-demo__image-dark');
    iconsTheme.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('icons__button-theme_light')) {
          item.classList.add('icons__button-theme_is-active');
          this._themeDark.classList.remove('icons__button-theme_is-active');
          darkTheme.classList.remove('interior-demo__image-dark_is-active');
        } else {
          darkTheme.classList.add('interior-demo__image-dark_is-active');
          item.classList.add('icons__button-theme_is-active');
          this._themeLigth.classList.remove('icons__button-theme_is-active');
        }
      });
    });
  }
}
;// CONCATENATED MODULE: ./src/utils/utils.js
const iconContainer = '.icons__list';
const lampValue = '.lamp-section__item-value';
const lampImage = '.interior-demo__lamp';
const lampImageSelector = '.icons__image';
const preloader = '.preloader';
const preloaderNone = 'preloader__ends';
const lampInfoList = '.lamp-section__list';
const lampInfoEmpty = 'lamp-section__list_empty';
const lampIcons = '.icons';
const lampIconsEmpty = 'icons__empty';
;// CONCATENATED MODULE: ./src/js/index.js







const api = new Api({
  baseUrl: 'https://private-anon-983412ab49-lampshop.apiary-mock.com/lamps',
  headers: {
    'Content-Type': 'application/json'
  }
});
api.getInitialLamps().then(result => {
  document.querySelector(preloader).classList.remove(preloaderNone);
  document.querySelector(lampInfoList).classList.remove(lampInfoEmpty);
  document.querySelector(lampIcons).classList.remove(lampIconsEmpty);
  const initialLamps = result;
  const createLamp = item => {
    const lampElement = new Lamp({
      item,
      handleLampClick: context => {
        context.setClassIsActive();
        const lampInfo = new LampInfo(lampValue, lampImage);
        lampInfo.setLampInfo(item);
        const themeLamp = new ThemeLamp(item);
        themeLamp.setIconsActive();
      }
    }, '#icons').generateLamp();
    return lampElement;
  };

  // создаем экземпляр класса Section для инициализации лампочек с сервера
  const lampsList = new Section({
    items: initialLamps,
    renderer: item => {
      const lampElement = createLamp(item);
      lampsList.addItem(lampElement);
    }
  }, iconContainer);
  lampsList.renderItems();
  lampsList.getHeigth();
  const el = document.querySelector('.icons__image');
  if (el) {
    el.click();
  }
}).catch(err => {
  window.console.log(err);
});
/******/ })()
;