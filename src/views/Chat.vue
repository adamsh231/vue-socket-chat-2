<template>
  <div class="container clearfix">
    <div class="people-list" id="people-list">

      <div class="list" style="height: 90px; padding: 20px">

        <li class="clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg" alt="avatar"/>
          <div class="about" style="margin-top: 15px">
            <div class="name" style="color: white">Roudhlotul Jannah</div>
          </div>
        </li>

      </div>

      <hr>

      <ul class="list">

        <li v-for="index in 20" class="clearfix">
          <img :src="'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_0'+ (index % 10 == 0 ? 1 : index % 10) +'.jpg'" alt="avatar"/>
          <div class="about" style="margin-top: 15px">
            <div class="name" style="color: white">Vincent {{ index }}</div>
          </div>
        </li>

      </ul>

    </div>

    <div class="chat">

      <div class="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar"/>

        <div class="chat-about">
          <div class="chat-with">Adam Syarif Hidayatullah</div>
          <div class="chat-num-messages">online</div>
        </div>
      </div>

      <div class="chat-history">


          <div class="clearfix">
            <div class="message-data align-right">
              <span class="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
              <span class="message-data-name">Olia</span> &nbsp;
            </div>

            <div class="message other-message float-right">
              Hi Vincent, how are you? How is the project coming along?
            </div>
          </div>

          <div>
            <div class="message-data align-left">
              <span class="message-data-name">Vincent</span>
              <span class="message-data-time">10:12 AM, Today</span>
            </div>
            <div class="message my-message">
              Are we meeting today? Project has been already finished and I have results to show you.
            </div>
          </div>


      </div> <!-- end chat-history -->

      <div class="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

        <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i class="fa fa-file-image-o"></i>

        <button>Send</button>

      </div> <!-- end chat-message -->

    </div> <!-- end chat -->

  </div> <!-- end container -->
</template>

<script>
export default {
  name: "Chat"
}
</script>

<!--<style src="../assets/css/chat.scss" lang="scss"></style>-->