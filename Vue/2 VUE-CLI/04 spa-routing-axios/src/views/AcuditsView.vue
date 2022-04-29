<template>
  <div class="about">    
    <HeaderAcudits />
    {{ acudit }}
    <FootAcudits />
  </div>
</template>

<script>
import axios from "axios";
import HeaderAcudits from '@/components/HeaderAcudits.vue';
import FootAcudits from '@/components/FootAcudits.vue';

export default {
  name: 'AcuditView',
  components: {
    HeaderAcudits,
    FootAcudits
  },
  data() {
    return {     
      post: null,
      acudit:[]
    };
  },  
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/search?query=cheese")     
      .then((response) => (this.acudit = response.data.result));
  },
};

</script>






