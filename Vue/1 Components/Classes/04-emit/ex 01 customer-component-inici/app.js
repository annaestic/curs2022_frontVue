var vm = new Vue({
   el: '#databinding',
   data: {
      fname: '',
      lname: '',
      addr: '',
      custdet: []
   },
   methods: {
      showdata: function () {
         this.custdet.push({
            fname: this.fname,
            lname: this.lname,
            addr: this.addr
         });
         this.fname = "";
         this.lname = "";
         this.addr = "";
         console.log(this.custdet);
      },
      eliminar: function (observacions, index) {
         alert("eliminem el registre " + index + " degut a: "  + observacions)
         this.custdet.splice(index, 1)
      }
   },

});