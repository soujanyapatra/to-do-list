<template>
  <div class="p-3 mb-2 bg-info text-dark">
    <h4>Welcome to Home page</h4>
    <div>
      <table>
        <tr>
          <td>Task name</td>
          <td>priority</td>
          <td>change Satus</td>
          <td>Status</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
        <tr v-for="blog in blogs" :key="blog.id">
          <td> {{ blog.task }} </td>
          <td> {{blog.priority}} </td>
          <td><button @click="$router.push({name: 'Status', params:{id: blog.id}})">Edit</button></td>
          <td> {{blog.status}} </td>
          <td><button @click="$router.push({name: 'Edittask', params:{id: blog.id}})" class="btn btn-secondary">Edit</button></td>
          <td>
            <button @click="Del(blog.id)" class="btn btn-info btn-lg"> Delete</button> 
          </td>
        </tr>
      </table>
    </div>
  </div>
  <br>
  <div>
    <button @click="Add_Task" class="btn btn-success"> Add Task</button>  
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      blogs: []
    };
  },
  created() {
    let d = this;
    axios.get("https://new-demo-3bd77-default-rtdb.firebaseio.com/tasks.json").then(function (data) {
      var blogsArray = [];
      let blog_data = data.data
      for (let key in blog_data){
        blog_data[key].id = key;
        blogsArray.push(blog_data[key]);
      }
      d.blogs = blogsArray;
      console.log(d.blogs);
    })
  },
  methods:{
    Add_Task(){
      this.$router.push({name:'Addtask'})
    },
    Del(id){
      axios.delete('https://new-demo-3bd77-default-rtdb.firebaseio.com/tasks/'+id+'.json').then(function(data){
      console.log(data)
      })
    },
    changed(){
      this.$router.push({name:'Status'})
    }
  },
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
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>