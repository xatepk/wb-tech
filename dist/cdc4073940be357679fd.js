import"./styles/index.less";import Api from"./components/Api";import{iconContainer,lampIcons,lampIconsEmpty,lampImage,lampInfoEmpty,lampInfoList,lampValue,preloader,preloaderNone}from"./utils/utils";import Section from"./components/Section";import Lamp from"./components/Lamp";import LampInfo from"./components/LampInfo";import ThemeLamp from"./components/ThemeLamp";var api=new Api({baseUrl:"https://private-anon-983412ab49-lampshop.apiary-mock.com/lamps",headers:{"Content-Type":"application/json"}});api.getInitialLamps().then((function(e){document.querySelector(preloader).classList.remove(preloaderNone),document.querySelector(lampInfoList).classList.remove(lampInfoEmpty),document.querySelector(lampIcons).classList.remove(lampIconsEmpty);var o=new Section({items:e,renderer:function(e){var m=n(e);o.addItem(m)}},iconContainer),n=function(e){return new Lamp({item:e,handleLampClick:function(o){o.setClassIsActive(),new LampInfo(lampValue,lampImage).setLampInfo(e),new ThemeLamp(e).setIconsActive()}},"#icons").generateLamp()};o.renderItems(),o.getHeigth()})).catch((function(e){console.log(e)}));