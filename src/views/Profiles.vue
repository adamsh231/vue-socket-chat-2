<template>
  <div v-for="index in 2" :key="index" style="margin-top: 20px" id="fb">
    <div id="fb-top">
    </div>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" height="100"
         width="100" alt="Image of woman">
    <p id="info">
      <b>Adam Syarif</b>
      <br>
      <span>online </span>
    </p>
    <div id="button-block">
      <router-link to="/chat">
        <div id="confirm">Choose</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiles",
}

</script>

<style src="../assets/css/profiles.css" scoped></style>
