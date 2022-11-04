<!-- Komponenta za prikazivanje instagram kartice-->

<template>
  <div class="card">
    <!-- Bootstrap klasa card-->
    <div class="card-header text-left">Featured</div>
    <!--natpis u hederu poravnat u lijevo-->
    <!--Tijelo card-->
    <div class="card-body p-0">
      <!-- Slučajna slika sa piscum-a širine 800-->
      <img
        class="card-img-top"
        src="https://picsum.photos/800"
        alt="Random image 1"
      />
    </div>
    <div class="card-footer text-muted text-left">2 days ago</div>
    <!--natpis u hederu poravnat u lijevo-->
  </div>
</template>

<script>
export default {
  name: "InstagramCard", // naziv komponente mora biti isti kao naziv fajla
  props: {
    msg: String,
  },
};
</script>
