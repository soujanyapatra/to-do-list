<template>
  <form>
    <div class="p-3 mb-2 bg-info text-dark">
      <h3>Welcome to Edit Task page</h3>
      <div>
        <input type="text" placeholder="Task Name " v-model="content.task">
      </div>
      <br>
      <div> <p>status</p>
        <select v-model="content.status">
          <option v-for="item in status" :key="item"> {{ item }} </option>
        </select>
      </div>
      <br>
      <button @click="Submit" class="btn btn-primary"> submit </button>
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
        priority:'',
        status:''
        
      },
      status:['done','undone']
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
<style>

</style>