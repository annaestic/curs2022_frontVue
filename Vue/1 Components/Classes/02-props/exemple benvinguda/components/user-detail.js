Vue.component('user-detail', {
   template: 
   `
   <div>
      <p>Hi {{ first }} - {{ last }}</p>
    </div>  
   `,
   props: ['first','last']   
  })

