<template>
  <footer>
      <div class="footer-content container-footer">
        <nav>
          <h3>ПРОДУКЦИЯ И УСЛУГИ</h3>
          <a href="">Промышленная автоматизация</a>
          <a href="">Транспорт</a>
          <a href="">Энергетика</a>
          <a href="">Водное хозяйство</a>
          <a href="">Ситуационные центры</a>
          <a href="">Програмное обеспечение</a>
        </nav>
        <nav>
          <h3>РЕШЕНИЯ ПО АВТОМАТИЗАЦИИ</h3>
          <a href="">Железнодорожная автоматика</a>
          <a href="">Автоматизация сортировочных горок</a>
          <a href="">Автоматизация компресорных станция</a>
          <a href="">Подстанции городского<br>электрического транспорта</a>
          <a href="">Метрополитен</a>
          <a href="">Автоматизация объектов водоснабжения</a>
          <a href="">Автоматизация объектов канализации</a>
          <a href="">Водоемы</a>
          <a href="">Сервис и поддержка</a>
        </nav>
        <nav>
          <h3>О КОМПАНИИ</h3>
          <a href="">О компании</a>
          <a href="">Пресса</a>
          <a href="">Документация</a>
          <a href="">Контакты</a>
        </nav>
        <div class="fod">
          <nav>
            <a href="tel: +78001234545"><img src="../assets/call.png">8(800) 123 45 45</a>
            <a href="mailto:ugpa@info.ru"><img src="../assets/mail.png">ugpa@info.ru</a>
            <input type="text" required>
          </nav>
          <div class="social-network">
            <p>© 2018 ООО “НПП ”Югпромавтоматизация”</p>
            <a href="" target="_blank"><img src="../assets/vk.svg"></a>
            <a href="" target="_blank"><img src="../assets/twitter.svg"></a>
            <a href="" target="_blank"><img src="../assets/facebook.svg"></a>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped lang="scss">
@import "../helpers";

footer{
  padding: 50px;
  background-color: #262f44;
}

.footer-content {
  display: flex;
  @include screen-lg {
    flex-wrap: wrap;
  }
  nav {
    display: flex;
    flex-direction: column;
    color: white;
    padding-right: 45px;
  }

  a {
    color: #5b7cc9;
    padding: 8px 0;
    text-decoration: underline;
  }
}

.fod {
  max-width: 800px;
  padding-left: 60px;

    @include screen-lg {
    display: none;
    }
  nav{
    color: white;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    a:nth-child(1) {
      text-decoration: none;
    }
  }
  a {
      color: white;
      margin-right: 30px;
    }
}

.container-footer{
  margin: auto;
  max-width: 1450px;
}
</style>
