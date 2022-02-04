<template>
  <div class="computed-console">
      <h1>Computed vs method Properties</h1>

       <v-btn v-on:click="a++">Add to A</v-btn>
       <v-btn v-on:click="b++">Add to B</v-btn>

       <!-- FOR METHOD -->
       <!-- <p>Age + A = {{ addToAcomputed() }}</p>
       <p>Age + B = {{ addToBcomputed ()}}</p> -->
       <!-- also change computed to methods -->
      

       <!-- FOR COMPUTED -->
       <p>Age + A = {{ addToAcomputed }}</p>
       <p>Age + B = {{ addToBcomputed }}</p>
    </div>

</template>

<script>
export default {
  name: 'computedMethod',
  
  data() {
    return {
      a:0,
      b:0,
      age:20,
      }
      
  },
  computed: {
        addToAcomputed: function(){
            console.log('addToAcomputed');
            return this.a + this.age;
        },
        addToBcomputed: function(){
            console.log('addToBcomputed');
            return this.b + this.age;
        }
    }
  
}
</script>


<style scoped lang="scss">

</style>
