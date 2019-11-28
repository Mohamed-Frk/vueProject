<template>

    <div>
  <b-navbar id="nav" toggleable="lg" type="dark" >
    <b-navbar-brand to="/">Accueil</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/todos">Todos</b-nav-item>
        <b-nav-item to="/carousel">Carousel</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>

export default {}

</script>

<style src="./Header.css"></style>