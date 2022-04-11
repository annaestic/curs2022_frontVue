Vue.component('user-detail', {
   template: 
   `
   <div>
      <p>Hi ( user-detail ) {{ first }} {{ last }} </p>
    </div>  
   `,
   props: ['first','last']   
  })

