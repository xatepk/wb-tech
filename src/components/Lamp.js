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
      this._handleLampClick(this._element);
    });
  }

}
