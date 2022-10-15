export default class ThemeLamp {
  constructor() {
    this._themeLigth = document.querySelector('.icons__button-theme_light');
    this._themeDark = document.querySelector('.icons__button-theme_dark');
  }

  setIconsActive() {
    const iconsTheme = document.querySelectorAll('.icons__button-theme');
    const darkBg = document.querySelector('.interior-demo__image');
    iconsTheme.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('icons__button-theme_light')) {
        item.classList.add('icons__button-theme_is-active');
        this._themeDark.classList.remove('icons__button-theme_is-active');
        darkBg.classList.remove('interior-demo__image_dark');
      }
      else{
        darkBg.classList.add('interior-demo__image_dark');
        item.classList.add('icons__button-theme_is-active');
        this._themeLigth.classList.remove('icons__button-theme_is-active');
      }
    })
  })
  }
}




