<template>
  <div class="about">
    <h1>Aqui farem proves amb les APIsss</h1>
    <h2>Acudit del dia</h2>
    {{ acudit }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AboutView',
  data() {
    return {     
      post: null,
      acudit:"Acudit del dia"
    };
  },
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/random")     
      .then((response) => (this.acudit = response.data.value));
  },
};

</script>






