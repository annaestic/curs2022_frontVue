<template>
  <div class="about">
    <HeaderAcudits />

    <h2>Acudits relacionats amb cheese</h2>
    <section v-if="errored">
      <p>
        {{ txtError }}
      </p>
    </section>
    <section v-else>
      Numero de chistes: {{ total }}
      <b-list-group>
        <b-list-group-item v-for="(item, index) in acudits" :key="item.id">
          {{ index + 1 }} - {{ item.value }}</b-list-group-item
        >
      </b-list-group>
    </section>
    <FootAcudits />
  </div>
</template>

<script>
import axios from "axios";
import HeaderAcudits from "@/components/HeaderAcudits.vue";
import FootAcudits from "@/components/FootAcudits.vue";

export default {
  name: "ApiView",
  components: {
    HeaderAcudits,
    FootAcudits,
  },
  data() {
    return {
      post: null,
      acudits: [],
      errored: false,
      txtError: "",
      total: 0,
    };
  },
  mounted() {
    axios
      .get("https://api.chucknorris.io/jokes/search?query=cheese")
      .then((response) => {
        this.acudits = response.data.result;
        this.total = response.data.total;
      })
      // Ojo si fem servir javascript classic, no funciona !!!
      .catch((error) => {
        this.errored = true;
        this.txtError="Error"
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("El servidor respon amb missatge d'error:");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          this.txtError = error.response.headers;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("El servidor NO respon");
          console.log(error.request);
          this.txtError = error.request;
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("hi ha algun problema amb la request");
          console.log("Error", error.message);
          this.txtError = error.message;
        }
        console.log("Hi ha hagut un error en la configuració");
        console.log(error.config);
        this.txtError = error.config;
      });
  },
};
</script>






