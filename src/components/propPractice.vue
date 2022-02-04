<template>
  <div class="hello">
      <!-- {{test}} -->
      <p>test listing prop from child getting data of array from parent </p>
    <ol>
        <li v-for="(grocery ,item) in test" :key="item">
           {{grocery.text}}
        </li>
    </ol>
    <v-btn @click="deleteEvent">delete</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Firstpage',
  props: {
      test:{
          type:Array
      }
  },
  data() {
    return {
      
      }
      
  },
  methods:{
    deleteEvent(event) {
  this.test.splice(this.test.indexOf(event), 1);
}
  }
  
}
</script>


<style scoped lang="scss">

</style>
