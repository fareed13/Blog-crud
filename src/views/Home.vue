<template>
<div>
  <Firstpage msg="hello fareed prop"/>
  <Proppractice :test="groceryList"/>
  <computedMethod />
</div>
</template>

<script>
  import Firstpage from '../components/Firstpage.vue'
  import Proppractice from '../components/propPractice.vue'
  import computedMethod from '../components/computedMethod.vue'

  export default {
    name: 'Home',
    components: {
      Firstpage,
      Proppractice,
      computedMethod
    },
    data() {
    return {
      groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
    }
    },

    //life cycle hook

   beforeCreate(){
     alert('Before Created component has even been add to dom but no access to dom');
   },
   created(){
     alert('Created is mean instance created we acces reactive data');
   },
   beforeMount(){
     alert('Before Mount template and render function have been compiled');
   },
   mounted(){
     alert('Mounted we have access to 1)reactive compnent 2)template 3)render dom');
   },
   beforeUpdate(){
     alert('Before upadte runs before data changes dom is patched and re-rendered');
   },
   updated(){
     alert('Updated after change data and dom re-rendered');
   },
    
  }
</script>
