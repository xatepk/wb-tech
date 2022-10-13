import './styles/index.less';
import Api from './components/Api';
import { iconContainer } from './utils/utils';
import Section from './components/Section';
import Lamp from './components/Lamp';

const api = new Api({
  baseUrl: 'https://private-anon-983412ab49-lampshop.apiary-mock.com/lamps',
  headers: {
    'Content-Type': 'application/json'
  }
  }
);

api.getInitialLamps()
.then((result) => {
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
      handleLampClick: () => {
        console.log('поменяй картинку');
      },
    }, '#icons').generateLamp();
    return lampElement
  }

  lampsList.renderItems();
})
.catch((err) => {
  console.log(err);
});
