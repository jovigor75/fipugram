<template>
  <div class="about">
    <h1>This is an SignUp page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="emailField"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="passwordField"
                placeholder="Password"
              />
              <label for="passwordRepeatField">Repeat Password</label>
              <input
                v-model="passwordRepeat"
                type="password"
                class="form-control"
                id="passwordRepeatField"
                placeholder="Repeat Password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Submit
            </button>
            <!-- Podrazumjevano ponašanje dugmeta tipa submit je da nakon akcije koja se odradi klikom očisti formu
            Umjesto submit type treba da bude button na koji kad se klikne biće pozvana funkcija signup koju definišemo u methods dijelu-->
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js"; // import firebase objekta definisanog u firebase.js fajlu
// vitičaste zagrade kažu da se importuje cijeli objekat koji je eksportovan iz firebase.js fajla i da se iz njega importuje samo objekat koji je njegov dio i koji se naziva firebase
// taj importovani objekat se dalje koristi po imenu unutar skriptnog dijela.

export default {
  name: "Signup", // naziv komponente koja se eksportuje
  data() {
    // data je funkcija  koja vraća objekat sa promjenjljivim koje su preko v-model direktive spojene sa formom
    return {
      email: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      //console.log(firebase); -- ispisuje se objekat u konzoli

      if (this.password == this.passwordRepeat) {
        // provjera da li su password i passwordRepeat isti ako jesu onda se pokreće funkcija kojom se kreira korisnik.
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function () {
            // s obzirom da za izvršavanje ove operacije treba vremena u then dijelu se nastavlja izvršavanje programa kada se funkcija izvrši. JS ne čeka ovo izvršavanje tako da će prva sljedeća naredba iza funkcije biti izvršena bez čekanja da se ova funkcija završi
            console.log("Uspješno ste izvršili registraciju"); //kada se izvrši firebird funkcija u konzoli će biti prikazana poruka
          })
          .catch(function (error) {
            console.error("Došlo je do greške pri registraciji, ", error); // ako firebird funkcija vrati neku informaciju o grešci ona će biti uhvaćena i prikazana ovom naredbom
          });
      } else {
        // ako unesena i ponovljena lozinka nisu iste izbacuje se alert kojim se korisnik o tome obavještava
        alert(
          "Password i ponovljeni password nisu isti. Registracija nije završena "
        );
      }
      console.log("Nastavak"); //ova naredba će se izvršiti ne čekajući da se firebird funkcija izvrši. Kako firebird funkciji treba neko vrijeme da se izvrši na internetu a ovaj spis u konzoli se izvršava lokoalno, najprije će se izvršiti ispis u konzoli.
    },
  },
};
</script>
