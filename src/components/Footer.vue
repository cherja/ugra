<template>
  <footer>
      <div class="footer-content container">
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
      </div>
    </footer>
</template>

<style scoped lang="scss">

footer{
  padding: 50px;
  background-color: #262f44;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  nav {
    display: flex;
    flex-direction: column;
    color: white;
  }

  a {
    color: #5b7cc9;
  }
}
</style>
