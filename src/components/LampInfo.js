export default class LampInfo {
  constructor(lampValueSelector, lampImageSelector ) {
    this._list = document.querySelectorAll(lampValueSelector);
    this._image = document.querySelectorAll(lampImageSelector);
  }

  setLampInfo({ material, height, width, weight, electrification, image }) {
    this._list[0].textContent = material;
    this._list[1].textContent = `H ${height} x W ${width} x D ${width}`;
    this._list[2].textContent = `${weight} kg`;
    this._list[3].textContent = electrification;
    this._image.forEach((item) => {
      item.src = image;
      item.alt = material;
    });
  }
}
