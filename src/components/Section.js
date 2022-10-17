export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item)});
  }

  addItem(element) {
    this._container.prepend(element);
  }

  getHeigth() {
    const iconsItem = this._container.querySelectorAll('.icons__item');
    let height = 0;
    for (let i = 0; i < 3; i++) {
      height = height + iconsItem[i].offsetHeight;
    }
    this._container.style.maxHeight = height+'px';
  }
}
