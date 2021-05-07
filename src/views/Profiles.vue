<template>
  <input type="text" style="margin-right: 20px">
  <button>Add</button>
  <div v-for="index in 20" style="margin-top: 20px" id="fb">
    <div id="fb-top">
    </div>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" height="100" width="100" alt="Image of woman">
    <p id="info">
      <b>Natalie G.</b>
      <br>
      <span>online </span>
    </p>
    <div id="button-block">
      <div id="confirm">Choose</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiles"
}
</script>

<style src="../assets/css/profiles.css" scoped></style>