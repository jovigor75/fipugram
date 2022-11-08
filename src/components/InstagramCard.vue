<!-- Komponenta za prikazivanje instagram kartice-->

<template>
  <div class="card">
    <!-- Bootstrap klasa card-->
    <div class="card-header text-left">{{ info.title }}</div>
    <!--natpis u hederu poravnat u lijevo-->
    <!--u hederu se prikazuje svojstvo title objekat title koji se preko parametra info iz HomeView.vue proslijeđuje u InstagramCard-->
    <!--Tijelo card-->
    <div class="card-body p-0">
      <!-- Slučajna slika sa piscum-a koja je učitana u svojstvo url objekta iz niza cards -->
      <!-- Informacija o adresi slike se prenosi preko parametra info tj. objekta koji sadrži svojstva title, time i url. Sadržaj svojstva url služi i za prikaz slike i kao alternativni tekst ako se slika ne učita-->
      <img class="card-img-top" :src="info.url" :alt="info.url" />
      <!--ako se izostave dvotačke ispred src i alt ti atributi će uzeti vrijednost stringa navedenog iza = i pod navodnicima. U ovom slučaju riječi info.url-->
      <!--: je isto kao v-bind označava da se  parametar koji predajemo ne predaje kao običan string već je riječ o JavaScript varijabli ili složenijem izrazu-->
    </div>
    <div class="card-footer text-muted text-left">{{ info.time }}</div>
    <!--natpis u hederu poravnat u lijevo i ispisuje se svojstvo time objekta info koji se kao parametar proslijeđuje iz HomeView.vue-->
  </div>
</template>

<script>
export default {
  props: ["info"], //parametri koje komponenta prima i preko koje komunicira sa komponentom roditeljem.  To je niz u kojem se navode imena parametara.
  name: "InstagramCard", // naziv komponente mora biti isti kao naziv fajla
};
</script>
