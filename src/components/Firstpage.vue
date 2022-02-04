<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="show-hide" v-if="show">
        <p v-bind:title="message">
          Hover your mouse over me for a few seconds
          to see my dynamically bound title!
        </p>
        <p class="parents" :class="{'active-class' : active}">Im active class css</p>
        <v-btn @click="active = !active">Change color with active class</v-btn>
        <div class="parent">
          <ul>
            <li v-for="(collague ,item) in collagues" :key="item">
              {{collague.name}},{{collague.job}}
            </li>
          </ul>
        </div>
    </div>
    <div class="revrse-msg">
      <p>{{msg1}}</p>
      <v-text-field
      v-model="enterName"
      label="Enter Name"></v-text-field>
      <p>{{enterName}}</p>
    </div>
    <v-btn @click="show = !show">Show hide</v-btn>
    <v-btn @click="reverseText">Reverse msg</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Firstpage',
  props: {
    msg: String
  },
  data() {
    return {
      message:'You loaded this page on ' + new Date().toLocaleString(),
      show:true,
      msg1:'im revsre msg',
      enterName:'frontend',
      active:true,
      collagues:[
        {name:'Bilal', job:'FullStack'},
        {name:'Sohaib', job:'React-native'},
        {name:'Mohsin', job:'QA'},
      ]
      }
      
  },
  methods:{
    reverseText(){
      this.msg1 = this.msg1.split('').reverse().join('')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.show-hide .parents.active-class {
  color:red!important;
  background-color: #42b983;
  font-size: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
