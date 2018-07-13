<template>
  <div>
    <div
      v-for="(slide, i) in slides" :key="i"
      v-show="i === currentIndex"
      class="slide__img"
      :style="`background-image: url(${slide.img})`"
    >
      <h2>{{ slide.title }}</h2>
      <a :href="slide.link">Подробнее</a>
    </div>

    <div class="slider__buttons">
      <button
        v-for="(slide, i) in slides" :key="i"
        :class="{ 'active': i === currentIndex }"
        @click="currentIndex = i"
      ></button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
      validator: (slides) => slides.every((slide) => slide && slide.img && slide.title && slide.link)
    }
  },
  data: () => ({
    currentIndex: 0
  })
}
</script>

<style scoped>
.slide__img {
  width: 400px;
  height: 400px;
  background-size: cover;
}
button {
  width: 20px;
  height: 20px;
  background-color: grey;
}
button.active {
  background-color: blue;
}

.slider__buttons {
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
}
</style>
