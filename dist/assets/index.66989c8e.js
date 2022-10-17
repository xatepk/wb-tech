import './styles/index.less';
import Api from './components/Api';
import Lamp from './components/Lamp';
import LampInfo from './components/LampInfo';
import Section from './components/Section';
import ThemeLamp from './components/ThemeLamp';
import { iconContainer, lampIcons, lampIconsEmpty, lampImage, lampInfoEmpty, lampInfoList, lampValue, preloader, preloaderNone } from './utils/utils';
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