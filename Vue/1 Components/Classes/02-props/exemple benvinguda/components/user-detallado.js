Vue.component('user-detallado', {
   template: 
   `
   <div>
      <p>Hi detallado {{ first }} - {{ last }} - {{ edat}}</p>
    </div>  
   `,
   props:{
      first: {
         type: String,
         required: true
      },
      last: {
         type: String,
         required: true
      },
      edat: {
         type: Number,
         required: true
      },
      
   } 
  })

