<template>
  <form>
    <div class="p-3 mb-2 bg-info text-dark">
      <h3>Welcome to Edit Task page</h3>
      <div>
        <input type="text" placeholder="Task Name " v-model="content.task">
      </div>
      <br>
      <div>
        <select v-model="content.priority">
          <option v-for="item in priority" :key="item"> {{ item }} </option>
        </select>
      </div>
      <br>
      <button @click.prevent="Submit" class="btn btn-primary"> submit </button>
    </div>
  </form>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      content:{
        task:'',
        priority:''
      },
      priority:['high','medium','low'],
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    Submit(){
      axios.put('https://new-demo-3bd77-default-rtdb.firebaseio.com/tasks/'+this.$route.params.id+'.json',this.content)
      this.$router.push({name:'Home'})
    },
    getData(){
      let d = this
      axios.get('https://new-demo-3bd77-default-rtdb.firebaseio.com/tasks/'+this.$route.params.id+'.json').then(function(response){
        d.content = response.data;
      })
    },
  }
};
</script>


<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

td, th {
  border: 1px solid #5e8e94;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #87916c;
}
</style>