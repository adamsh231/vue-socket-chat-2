<template>
  <div class="container clearfix">

    <div class="chat">

      <div class="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar"/>

        <div v-for="profile in profiles" class="chat-about">
          <div v-if="profile.id != id" class="chat-with">{{ profile.name }}</div>
          <div v-if="profile.id != id" class="chat-num-messages">online</div>
        </div>


      </div>

      <div class="chat-history">


        <div v-for="message in messages" class="clearfix">
          <div :class="'message-data ' + (message.id != id ? 'align-right' : 'align-left')">
            <span v-if="message.id != id">
              <span class="message-data-time">{{ message.time }}</span> &nbsp; &nbsp;
              <span class="message-data-name">{{ message.from }}</span> &nbsp;
            </span>
            <span v-if="message.id == id">
              <span class="message-data-name">{{ message.from }}</span> &nbsp;
              <span class="message-data-time">{{ message.time }}</span> &nbsp; &nbsp;
            </span>
          </div>

          <div :class="'message ' + (message.id != id ? 'other-message float-right' : 'my-message')">
            {{ message.message }}
          </div>
        </div>

        <br ref="send" style="background-color: white">

      </div> <!-- end chat-history -->

      <div class="chat-message clearfix">
        <textarea name="message-to-send" v-model="message" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

        <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i class="fa fa-file-image-o"></i>

        <button @click="sendMessage(id)" >Send</button>

      </div> <!-- end chat-message -->

    </div> <!-- end chat -->

  </div> <!-- end container -->
</template>

<script>
import io from 'socket.io-client';
const socket = io('192.168.0.6:3000', { transports: ["websocket"] })

export default {
  name: "Chat",
  props: ['id'],
  data() {
    let date = new Date()
    return {
      message: "",
      profiles: [
        {id: 1, name: "Adam Syarif"},
        {id: 2, name: "Roudhlotul Jannah"}
      ],
      messages: []
    }
  },
  mounted() {
    socket.on("connection", (response) => {
      console.log(response);
    });
    socket.on("sendMessage", (response) => {
      this.messages.push(response)
      var audio = new Audio(require("../assets/audio/wa.mp3"))
      audio.play()
    });
  },
  beforeUnmount() {
    socket.off()
  },
  methods: {
    sendMessage(id){
      let date = new Date()
      let msg = ""
      if(id == 1){
        msg = {id: 1, from: "Adam", message: this.message, time: date.getHours() + ":" + date.getMinutes()}
        this.messages.push(msg)
      }else{
        msg = {id: 2, from: "Nana", message: this.message, time: date.getHours() + ":" + date.getMinutes()}
        this.messages.push(msg)
      }
      socket.emit('sendMessage', msg)
      this.message = ""
    }
  },
  updated() {
    this.$refs.send.scrollIntoView();
  }
}
</script>

<style src="../assets/css/chat.scss" lang="scss"></style>
