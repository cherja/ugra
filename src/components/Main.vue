<template>
  <main>
    <div class="main-header container">
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
    </div>
    <div class="main-footer">
      <h2>Наши новинки</h2>
      <div class="main-footer__content container">
        <div>
          <div class="novelty novelty-one"></div>
          <p>Новое оборудование<br>для видеофиксаций<br>нарушений</p>
        </div>
        <div>
          <div class="novelty novelty-two"></div>
          <p>Усовершенствованное ПО<br>для автоматизации<br>ЖД переездов</p>
        </div>
        <div>
          <div class="novelty novelty-three"></div>
          <p>Новый алгоритм выччисления<br>аврийных ситуаций<br>на заводах</p>
        </div>
        <div>
          <div class="novelty novelty-four"></div>
          <p>Изменение текущих<br>автоматизированных процессов<br>в отрасли энергетики</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../helpers";

.main-header {
  width:100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
  @include screen-sm {
    font-size: 11px;
  }
  button {
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

.main-footer {
  padding: 50px 0;
  text-align: center;
  width: 100%;
  background-color: #eef0f6;
}

.main-footer__content {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
   @include screen-md {
    display: block;
  }

  p {
    text-decoration:underline;
    line-height: 1.5;
    color: #6685cd;
    margin: 20px;
  }
}

.main-text {
  margin: 20px 0;
  width:650px;
  text-align: center;

  p {
    font-weight: 600;
    line-height: 1.8;
    margin: 20px 0;
  }
}

.novelty{
  width: 220px;
  height: 220px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  margin-bottom: 40px;
}

.novelty-one {
  background-image: url(../assets/camera.png);
}

.novelty-two {
  background-image: url(../assets/train.png);
}

.novelty-three {
  background-image: url(../assets/plant.png);
}

.novelty-four {
  background-image: url(../assets/computerization.png);
}

.egg {
  margin: 20px 0;
  width:550px;
  height: 500px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  @include screen-sm {
    width:375px;
    height: 350px;
  }
   @include screen-xs {
    width:275px;
    height: 250px;
  }
}

.egg-one {
  background-image: url(../assets/egg-one.png);
}
.egg-two {
  background-image: url(../assets/egg-two.png);
}

.egg-three {
  background-image: url(../assets/egg-three.png);
}

.egg-four {
  background-image: url(../assets/egg-four.png);
}

.egg-five {
  background-image: url(../assets/egg-five.png);
}

.egg-six {
  background-image: url(../assets/egg-six.png);
}

</style>
