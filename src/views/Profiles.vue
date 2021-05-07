<template>
  <input type="text" v-model="profile" style="margin-right: 20px">
  <button @click="addProfile">Add</button>
  <div v-for="profile in tempProfiles" style="margin-top: 20px" id="fb">
    <div id="fb-top">
    </div>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" height="100" width="100" alt="Image of woman">
    <p id="info">
      <b>{{ profile.name }}</b>
      <br>
      <span>online </span>
    </p>
    <div id="button-block">
      <div id="confirm">Choose</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profiles",
  data(){
    return{
      profile: "",
      profiles: []
    }
  },
  methods: {
    addProfile(){
        this.$store.commit("addProfile", [{name: this.profile}])
        this.profile = ""
    }
  },
  computed : {
    ...mapState({
      tempProfiles: state => state.profiles
    })
  }
}
// let data = {
//   name: "ferry"
// }
//
// let umur = {
//   umur: 24
// }
//
// data = {
//   ...data,
//   ...umur
// }

</script>

<style src="../assets/css/profiles.css" scoped></style>