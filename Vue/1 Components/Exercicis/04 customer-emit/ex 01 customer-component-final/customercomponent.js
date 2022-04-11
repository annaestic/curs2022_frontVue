Vue.component('customercomponent',{
    template :
    `
    <div class = "Table">
     <div class = "Row"  >
         <div class = "Cell"><p>{{index}}</p></div>
         <div class = "Cell"><p>{{itr.fname}}</p></div>
         <div class = "Cell"><p>{{itr.lname}}</p></div>
         <div class = "Cell"><p>{{itr.addr}}</p></div>         
         <div class = "Cell"><p>
            <button v-on:click = "$emit('removeelement', observacions )">X</button></p>
         </div>
         <div>
             <input type="text" placeholder="Observacions" v-model="observacions" />
         </div>
      </div>
      </div>
    `,
    props: ['itr','index'],
    data: function() {
       return {         
          observacions:""
       }
    }
 });