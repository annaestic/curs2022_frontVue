<template>
  <div class="home">
    <AdiosWorld msg="Adios to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AdiosWorld from '@/components/AdiosWorld.vue'

export default {
  name: 'AdiosView',
  components: {
    AdiosWorld
  }
}
</script>
