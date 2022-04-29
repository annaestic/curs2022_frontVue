<template>
  <div class="container border">
    <!-- start container -->

    <div class="row border"  >
      <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    </div>

    <!-- Como no se indica el tamaño para pantallas grandes las columnas
siempre ocuparán el 50% -->
    <div class="row border">
      <div class="col-6">.col-6</div>
      <div class="col-6">.col-6</div>
    </div>

    <!-- end container -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "FormularisView",
  components: {},
  data() {
    return {
      value: "",
    };
  },
};
</script>
