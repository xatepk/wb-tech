export default class ThemeLamp {
  constructor() {
    this._themeLigth = document.querySelector('.icons__button-theme_light');
    this._themeDark = document.querySelector('.icons__button-theme_dark');
  }

  setIconsActive() {
    const iconsTheme = document.querySelectorAll('.icons__button-theme');
    const darkTheme = document.querySelector('.interior-demo__image-dark');
    iconsTheme.forEach((item) => {
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
