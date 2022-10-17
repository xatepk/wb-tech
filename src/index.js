import './styles/index.less';
import Api from './components/Api';
import { iconContainer, lampIcons, lampIconsEmpty, lampImage, lampInfoEmpty, lampInfoList, lampValue, preloader, preloaderNone } from './utils/utils';
import Section from './components/Section';
import Lamp from './components/Lamp';
import LampInfo from './components/LampInfo';
import ThemeLamp from './components/ThemeLamp';

const api = new Api({
  baseUrl: 'https://private-anon-983412ab49-lampshop.apiary-mock.com/lamps',
  headers: {
    'Content-Type': 'application/json'
  }
  }
);

api.getInitialLamps()
.then((result) => {
  document.querySelector(preloader).classList.remove(preloaderNone);
  document.querySelector(lampInfoList).classList.remove(lampInfoEmpty);
  document.querySelector(lampIcons).classList.remove(lampIconsEmpty);
  const initialLamps = result;

  //создаем экземпляр класса Section для инициализации лампочек с сервера
  const lampsList = new Section({
    items: initialLamps,
    renderer: (item) => {
      const lampElement = createLamp(item);
      lampsList.addItem(lampElement);
      }
    }, iconContainer
  );

  const createLamp = (item) => {
    const lampElement = new Lamp({
      item,
      handleLampClick: (context) => {
        context.setClassIsActive();
        const lampInfo = new LampInfo(lampValue, lampImage);
        lampInfo.setLampInfo(item);

        const themeLamp = new ThemeLamp(item);
        themeLamp.setIconsActive();
      },
    }, '#icons').generateLamp();
    return lampElement
  }

  lampsList.renderItems();
  lampsList.getHeigth();
})
.catch((err) => {
  console.log(err);
});
