<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <InstagramCard
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
      <!--poziv komponente InstagramCard. for direktiva se smješta na onaj element koji želimo ponavljati-->
      <!--url je promjenjljiva koja uzima elemente iz niza cards, jedan po jedan i u ovom slučaju ih prikazuje-->
      <!--:key je jedinstveni identifikator svakog elementa niza -->
      <!--:info je parametar preko kojeg se prenosi informacija iz komponente roditelja u komponentu djete. Ovde iz HomeeView komponente u InstagramCard komponentu-->
    </div>
    <div class="col-3">
      {{ hello }}
      <div v-for="card in cards" :key="card.url" :info="card">
        {{ card.title }}
      </div>
      <form class="d-flex" role="connect">
        <!-- sa v-model se prenosi ono što se upiše u input polja Ime i Prezime u promjenjljive ime i prezime koja je deklarisana u date funkciji-->
        <input
          v-model="ime"
          class="form-control me-2"
          type="imetype"
          placeholder="unesi ime"
          aria-label="LabelIme"
        />
        <input
          v-model="prezime"
          class="form-control me-2"
          type="prezimetype"
          placeholder="unesi prezime"
          aria-label="LabelPrezime"
        />
      </form>
      {{ imePrezime }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src. Import komponente
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store"; // imort store promjenjljive koja je dostupna svim komponentama iz store.js fajla

export default {
  name: "HomeView", //naziv za view isti kao naziv fajla
  data() {
    return {
      hello: "Sugestion for you",
      // niz cards je niz  objekat koji maju svojstva title, time, url.
      cards: [
        {
          title: "jedan", // title se prikazuje u headeru
          time: "an hour ago", // time se prikazuje u footeru
          url: "https://picsum.photos/id/1/400/400", // url-ovi su adrese slika koje se prikazuju u karticama
        },
        {
          title: "dva",
          time: "2 days ago",
          url: "https://picsum.photos/id/2/400/400",
        },
        {
          title: "tri",
          time: "3 days ago",
          url: "https://picsum.photos/id/3/400/400",
        },
      ],
      store: store,
      ime: "",
      prezime: "",
    };
  },
  computed: {
    imePrezime() {
      return this.ime + " " + this.prezime;
    },

    filteredCards() {
      //let termin = this.store.searchTerm;
      //let newCards = [];

      return this.cards.filter((card) =>
        card.title.includes(this.store.searchTerm)
      );

      /* for (let card of this.cards) {
        if (card.title.indexOf(termin) >= 0) {
          newCards.push(card);
        }
      }
      return newCards;
*/
      // return this.cards.filter((card) => card.title.includes(store.searchTerm));
    },
  },

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
