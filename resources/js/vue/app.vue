<template>
    <div class="todoListContainer">
         <div class="heading">
         <h2 id="title"> Todo List </h2>
            <additem-form />
         </div>
         <list-view :items="items" />
    </div>
</template>



<script>
import AdditemForm from './additemForm.vue'
import listView from "./listView"
export default {
    components:{
      AdditemForm,
      listView

    },
    data: function() {
        return {
            items: [],
        }
    },
    methods: {
         getList() {
             axios.get('api/items')
                     .then(response => {
                           if(response.status == 201) {
                                 this.items=response.data;

                           }

                       })
                       .catch(error => {
                           console.log(error);
                       })
         }

    },
    created() {
        this.getList();
    }

}
</script>




<style scoped>
.todoListContainer{
    width: 350px;
    margin: auto;
}
.heading{
    background: #e6e6e6;
    padding: 10px;
}
#title{
    text-align: center;
}

</style>


