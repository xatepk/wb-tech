export default class Lamp {
  constructor({ item, handleLampClick }, lampSelector) {
    this._name = item.name || '';
    this._id = item.id;
    this._link = item.image;
    this._material= item.material || '';
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
    const lampElement = document
      .querySelector(this._lampSelector)
      .content
      .cloneNode(true)
      .children[0];

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

    for(let i = 0; i < lampList.length; i++) {
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
