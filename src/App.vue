<template>
  <div id="app" class="wrapper">
    <button :class="['hamburger', ' hamburger--collapse', { 'is-active': isShow }]" @click="isShow =!isShow" type="button">
    <span class="hamburger-box">
    <span class="hamburger-inner"></span>
    </span>
    </button>
   <header>
      <nav :class="{active: isShow }">
        <a href=""><img src="./assets/logo.png" alt="Логотип"></a>
        <a href="">ПРОДУКЦИЯ И УСЛУГИ</a>
        <a href="">РЕШЕНИЯ ПО АВТОМАТИЗАЦИИ</a>
        <a href="">О КОМПАНИИ</a>
        <a href="">РЕШЕНИЯ ПО АВТОМАТИЗАЦИИ</a>
        <a href="tel: +78001234545"><img src="./assets/call.png">8(800) 123 45 45</a>
        <a href="mailto:ugpa@info.ru"><img src="./assets/mail.png">ugpa@info.ru</a>
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
         <div class="social-network">
          <p>© 2018 ООО “НПП ”Югпромавтоматизация”</p>
          <a href="" target="_blank"><img src="./assets/vk.svg"></a>
          <a href="" target="_blank"><img src="./assets/twitter.svg"></a>
          <a href="" target="_blank"><img src="./assets/facebook.svg"></a>
         </div>
       </div>
    </header>
    <main>
      <div class="egg egg-one"></div>
      <div class="main-text">
        <h2>Промышленная<br>автоматизация</h2>
        <p>общее название разнообразных механических, электрических,<br>
        пневматических, гидравлических и электронных устройств,<br>
        применяемых для автоматизации технологических процессов,<br>
        дискретных, непрерывных и гибридных производств — ТЭЦ, конвейеров,<br>
        станков с числовым программным управлением, промышленных<br>
        роботов, зданий, а также транспортных средств и транспортной<br>
        инфраструктуры, систем логистики.
        </p>
        <button>ПОДРОБНЕЕ</button>
      </div>
      <div class="main-text">
        <h2>Транспорт</h2>
        <p>совокупность всех видов путей сообщения, транспортных средств, технических<br>
        устройств исооружений на путях сообщения, обеспечивающих процесс перемещения <br>
        людей и грузов различного назначения из одного места в другое. В данной статье<br>
        раскрывается понятие транспорта именно в этом значении. В зависимости от среды, в<br>
        которой этот транспорт выполняет свои функции.
        </p>
        <button>ПОДРОБНЕЕ</button>
      </div>
      <div class="egg egg-two"></div>
      <div class="egg egg-three"></div>
      <div class="main-text">
        <h2>Энергетика</h2>
        <p>область хозяйственно-экономической деятельности человека, совокупность больших<br>
        естественных и искусственных подсистем, служащих для преобразования, распределения и <br>
        использования энергетических ресурсов всех видов. Её целью является обеспечение производства <br>
        энергии путём преобразования первичной, природной энергии во вторичную, например <br>
        в электрическую или тепловую энергию</p>
        <button>ПОДРОБНЕЕ</button>
      </div>
      <div class="main-text">
        <h2>Водное<br>хозяйство</h2>
        <p>Водное хозяйство – это отрасль народного хозяйства государства, которая ставит перед собой <br>
        задачи, связанные с водообеспечением населения страны, а также работами, которые затрагивают <br>
        водную флору и фауну. В водном хозяйстве выделяется несколько сторон, причем одной из них <br>
        всегда будет являться Правительство РФ и его подинстанции, которые будут проводить контроль <br>
        за частными предприятиями водного хозяйства. на сегодняшний день стоят перед водным <br>
        хозяйством <br>
        Российской Федерации и зарубежных государств.</p>
        <button>ПОДРОБНЕЕ</button>
      </div>
      <div class="egg egg-four"></div>
      <div class="egg egg-five"></div>
      <div class="main-text">
        <h2>Ситуационные<br>центры</h2>
        <p>Центр используется для сбора информации о дорожной ситуации.<br>
        Позволяет контролировать информацию с сотен камер видеонаблюдения,<br>
        установленных на дорогах города, отображать текущую дорожную обстановку (аварии, пробки и <br>
        др.) на интерактивной карте, оперативно управлять дорожной ситуацией (координировать <br>
        действие патрулей ГИБДД, менять режимы работы светофоров,<br>
        режимы проезда на улицах) и многое другое. Центр используется для сбора.<br>
        Позволяет контролировать информацию с сотен камер видеонаблюдения.</p>
        <button>ПОДРОБНЕЕ</button>
      </div>
      <div class="main-text">
        <h2>Програмное<br>обеспечение</h2>
        <p>Комплекс программ, которые обеспечивают управление компонентами компьютерной <br>
        системы, такими как процессор, оперативная память, устройства ввода-вывода, сетевое <br>
        оборудование, выступая как «межслойный интерфейс», с одной стороны которого <br>
        аппаратура, а с другой — приложения пользователя. В отличие от прикладного <br>
        программного обеспечения, системное не решает конкретные практические задачи, а <br>
        лишь обеспечивает работу других программ, предоставляя им сервисные функции, <br>
        абстрагирующие детали аппаратной и микропрограммной реализации.
        </p>
        <button>ПОДРОБНЕЕ</button>
      </div>
      <div class="egg egg-six"></div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      isShow: false
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

.wrapper {
  max-width: 1920px;
  margin: auto;
  button {
  display: none;
  @include screen-md {
   display: block;
   outline: none;
  }
}
}

nav {
  justify-content: center;
  min-height: 140px;
  background-color: #262f44;
  display: flex;
   @include screen-lg {
    flex-wrap: wrap;
  }
  @include screen-md {
    flex-direction: column;
    position: absolute;
    z-index: 9998;
    top: 50;
    right: 0;
    width: 100%;
    height: 50%;
    display: none;
  }
}

a {
  align-self: center;
  text-decoration: none;
  color: white;
  font-size: 14px;
  margin-right: 10px;

  img{
    padding-right: 8px;
  }
}
.container{
  margin: auto;
  max-width: 1250px;
}

.header-content {
  color: white;
  background-image: url(./assets/EcoStruxure_Low-res.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 140px);
  min-height: 530px;
  width: 100%;
  position: relative;

  h1{
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
  .social-network {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 30px;
    right: 30px;
    align-items: center;
    p{
      @include screen-md {
        display: none;
      }
    }
  }
}

input {
  align-self: center;
  width: 222px;
  height: 40px;
  background: none;
  background-color: rgb( 44, 54, 77 );
  border: none;
  border-radius: 20px;
  outline:none;
  color: white;
  font-size: 18px;
  padding: 0 20px;
}

input:invalid {
  background: url(./assets/search.png) no-repeat center left 20px;
  background-color: rgb( 44, 54, 77 );
}
main{
  margin: auto;
  max-width: 1250px;
  width:100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 14px;

  button{
    width: 180px;
    height: 40px;
    color: #6685cd;
    border-radius: 20px;
    border: solid #6685cd 2px;
    outline: none;
    text-decoration: none;
    background-color: transparent;
    font-weight: 600;
  }
}

.main-text{
  width:650px;
  height: 526px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;

  h2{
   font-size: 48px;
   font-weight: 100;
  }

  p{
    font-weight: 600;
    line-height: 1.8;
    margin: 20px 0;
  }
}
.egg{
  width:550px;
  height: 500px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.egg-one{
    background-image: url(./assets/egg-one.png);
}
.egg-two{
    background-image: url(./assets/egg-two.png);
}

.egg-three{
    background-image: url(./assets/egg-three.png);
}

.egg-four{
    background-image: url(./assets/egg-four.png);
}

.egg-five{
    background-image: url(./assets/egg-five.png);
}

.egg-six{
    background-image: url(./assets/egg-six.png);
}
.active{
  display: flex;
}
</style>
