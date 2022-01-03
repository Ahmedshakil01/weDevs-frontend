<template>
  <h3>{{permissions}}</h3>
  <!-- <div v-for="permisssion of permissions" v-bind:key="permisssion.id"> -->
    <!-- <div v-if="permisssions.name=='profile.view'">
        {{user.name}}
    </div> -->
  <!-- </div> -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "profile",
  data() {
    return {
      permissions: [],
      user: [],
    };
  },
  created(){
      this.permissions = this.permission;
      this.user = this.userData;
  },
  computed: {
    ...mapState("user", ["user"]),
    permission(){
       let total = [];
      this.$store.state.user.permission.forEach((item) => {
        total.push(item.name)
      });
      return total;  
    },
    userData(){
      return  this.$store.state.user;
    }
  },
};
</script>

<style>
</style>