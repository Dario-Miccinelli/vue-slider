var app = new Vue({
    el: '#app',
    data: {

        images: [ 
               
            {image: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
            {image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80'},
            
            {image: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80'},
          

         ],

         index: 0
    },

        methods: {

            changeLeft: function (){

                if( this.index == 0 ){      
                             
                   return this.index = this.images.length - 1;
                } else{
                   
                  
                   return this.index--;
 
                }
                   
 
             },

             changeRight: function (){

                this.index++;
               
 
                if( this.index >= this.images.length ){
                   return this.index = 0; 
                }
            }
        }
  })