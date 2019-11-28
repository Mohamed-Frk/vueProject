<template>

<div>
    <h1 class="h1">Accueil</h1>
  <b-jumbotron>
    <template v-slot:header>Bienvenue</template>

    <template v-slot:lead>
      sur mon application réalisé avec le framework front-end Vue.js
    </template>

    <hr class="my-4">

    <p>
      Je vous invites à vous rendre sur les différents composants de l'application pour voir mes réalisations.
    </p>

    <b-button variant="primary" to="/todos">Todos</b-button>
    <b-button variant="secondary" to="/carousel">Carousel</b-button>
  </b-jumbotron>
</div>
</template>

<script>

export default {}

</script>

<style>

.h1 {
	font-size: 130px;
	text-align: center;
    color: rgba(47, 92, 175, 0.15);
    
}

</style>