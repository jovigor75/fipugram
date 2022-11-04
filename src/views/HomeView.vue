<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <InstagramCard />
      <InstagramCard />
      <!--poziv komponente InstagramCard-->
    </div>
    <div class="col-3">... ovdje ide Sidebar!</div>
  </div>
</template>

<script>
// @ is an alias to /src. Import komponente
import InstagramCard from "@/components/InstagramCard.vue";

export default {
  name: "HomeView", //naziv za view isti kao naziv fajla
  components: {
    InstagramCard, //komponente koje se koriste u view-u
  },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 200 px;
}
</style>
