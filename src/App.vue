<template>
  <div id="app" class="wrapper">
    <button
      :class="['hamb', 'hamburger', ' hamburger--collapse', { 'is-active': isShow }]"
      @click="isShow = !isShow"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"/>
      </span>
    </button>
   <header>
      <slider :slides="slides" />
      <nav :class="{ active: isShow }">
        <a href=""><img src="./assets/images/logo.png" alt="Логотип"></a>
        <router-link to="/home">Home</router-link>
        <a href="">ПРОДУКЦИЯ И УСЛУГИ</a>
        <a href="">РЕШЕНИЯ ПО АВТОМАТИЗАЦИИ</a>
        <a href="">О КОМПАНИИ</a>
        <a href="tel: +78001234545"><img src="./assets/images/call.png">8(800) 123 45 45</a>
        <a href="mailto:ugpa@info.ru"><img src="./assets/images/mail.png">ugpa@info.ru</a>
        <input type="text" required>
      </nav>
       <div class="header-content">
         <div class="container">
           <h1>Автоматизация<br>
           <span>технологических процессов<br>
           под ключ</span>
         </h1>
         <button>ПОДРОБНЕЕ</button>
         </div>
         <div class="social-network social-network__header">
          <p>© 2018 ООО “НПП ”Югпромавтоматизация”</p>
          <a href="" target="_blank"><img src="./assets/images/vk.svg"></a>
          <a href="" target="_blank"><img src="./assets/images/twitter.svg"></a>
          <a href="" target="_blank"><img src="./assets/images/facebook.svg"></a>
         </div>
       </div>
    </header>
    <div>
      <router-view />
     </div>
    <footervue/>
  </div>
</template>

<script>
import mainvue from './components/Main.vue'
import footervue from './components/Footer.vue'
import slider from './components/Slider.vue'

export default {
  components: {
    mainvue,
    footervue,
    slider
  },
  name: 'app',
  data () {
    return {
      isShow: false,
      slides: [
        {
          img: 'http://img.desktopwallpapers.ru/animals/pics/wide/1920x1080/37fff35ef8adf56c3d9c80be263d2daa.jpg',
          title: 'Первый слайд',
          link: '#'
        },
        {
          img: 'http://lookw.ru/1/184/1380317242-168537.jpg',
          title: 'Vtoroy слайд',
          link: '#'
        },
        {
          img: 'http://www.1280x800.net/large/201211/9315.jpg',
          title: 'tretiy слайд',
          link: '#'
        },
        {
          img: 'http://www.1280x800.net/large/201211/9315.jpg',
          title: '4etvertiy слайд',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./helpers";
@import "./hamburgers.css";

@font-face {
  font-family: "SF";
  src: url("./assets/fonts/SFUIDisplay-Regular.woff");
}

@font-face {
  font-family: "UL";
  src: url("./assets/fonts/SFUIDisplay-Ultralight.otf");
}

* {
  font-family: "SF";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  font-size: 48px;
  font-weight: 100;
  @include screen-sm {
    font-size: 35px;
  }
}

.wrapper {
  max-width: 1920px;
  margin: auto;
}

.container {
  margin: auto;
  max-width: 1250px;

  @include screen-lg {
    max-width: 990px;
  }

   @include screen-sm {
     max-width: 690px;
  }
}

.hamb {
  display: none;

  @include screen-lg {
    display: block;
    outline: none;
  }
}

header {
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 140px;
    background-color: #262f44;
    a:nth-child(3), a:nth-child(4) {
      color: #6685cd;
      text-decoration: underline;
    }
    a:nth-child(6) {
      text-decoration: underline;
    }
    @include screen-lg {
      flex-direction: column;
      position: absolute;
      z-index: 9998;
      top: 50;
      right: 0;
      width: 100%;
      height: 80%;
      display: none;
    }
  }
}

a {
  text-decoration: none;
  color: white;
  font-size: 14px;
  padding: 5px;
  margin-right: 10px;
  @include screen-sm {
    font-size: 11px;
  }

  img {
    padding-right: 8px;
  }
}

input {
  width: 222px;
  height: 40px;
  background: none;
  background-color: rgb( 44, 54, 77 );
  border: none;
  border-radius: 20px;
  outline: none;
  color: white;
  font-size: 18px;
  padding: 0 20px;
}

input:invalid {
  background: url(./assets/images/search.png) no-repeat center left 20px;
  background-color: rgb( 44, 54, 77 );
}

.header-content {
  color: white;
  background-image: url(./assets/images/EcoStruxure_Low-res.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 140px);
  min-height: 530px;
  width: 100%;
  max-height: 1200px;
  position: relative;

  h1 {
    font-size: 72px;
    font-weight: 900;
    font-family: "UL";
    padding-bottom: 50px;

    @include screen-lg {
      font-size: 36px;
    }
  }
  span {
    font-family: "UL";
    font-weight: 100;
  }

  button {
    color: white;
    width: 180px;
    height: 40px;
    border-radius: 20px;
    border: 2px white solid;
    outline: none;
    text-decoration: none;
    background-color: transparent;
  }
}

.social-network {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  p {
    @include screen-md {
      display: none;
    }
  }
}

.social-network__header {
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.active {
  display: flex;
}

</style>
