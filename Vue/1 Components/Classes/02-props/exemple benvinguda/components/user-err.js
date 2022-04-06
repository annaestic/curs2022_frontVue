Vue.component('user-err', {
   template: 
   `
   <div>
      <p>Error No se muestran porque hemos usado camelCase {{ firstName }} - {{ lastName }}</p>
    </div>  
   `,
   props: ['firstName','lastName']   
  })

