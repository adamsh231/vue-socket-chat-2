<template>
  <div v-for="(profile, index) in profiles" style="margin-top: 20px" id="fb">
    <div id="fb-top">
    </div>
    <img :src="'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_0'+ (index + 4)  +'.jpg'" height="100"
         width="100" alt="Image of woman">
    <p id="info">
      <b>{{ profile.name }}</b>
      <br>
      <span> online </span>
    </p>
    <div id="button-block">
      <router-link :to="'/chat/' + profile.id">
        <div id="confirm">Choose</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiles",
  data(){
    return{
      profiles: [
        {id: 1, name: "Adam Syarif"},
        {id: 2, name: "Roudhlotul Jannah"}
      ]
    }
  }
}

</script>

<style src="../assets/css/profiles.css" scoped></style>
