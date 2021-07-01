<template>
    <div class="addItem">
        <input type="text" v-model="item.name"/>
        <button @click="additem()" type="button" class="btn btn-primary">Add</button>
    </div>
</template>

<script>
    export default {

               data : function() {
                   return {
                       item: {
                           name:"",
                       }
                   }
               },

               methods: {
                   additem() {
                       if(this.item.name == '') {
                           return;
                       }

                       axios.post('api/item/store', {
                           item:this.item
                       })

                       .then(response => {
                           if(response.status == 201) {
                               this.$toaster.success('Sucessfully Added.')
                               this.item.reset();

                           }

                       })
                       .catch(error => {
                           console.log(error);
                       })
                   }
               }
    }
</script>

<style>

</style>
