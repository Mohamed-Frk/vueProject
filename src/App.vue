<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>


<script>

import Header from './components/Header/Header.vue'
import Accueil from './components/Accueil/Accueil.vue'
import Todos from './components/Todos/Todos.vue'
import Carousel from './components/Carousel/Carousel.vue'
import Footer from './components/Footer/Footer.vue'



export default {
  name:"App",
  components: {
    Header,
    Accueil,
    Todos,
    Carousel,
    Footer
  }
   
}
</script>



