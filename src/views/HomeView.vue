<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr/>
    <h2>{{ message }}</h2>
    <!-- https://bootstrap-vue.org/docs/icons 에서 아이콘 검색 -->
    <BootstrapIcon icon="heart-fill" variant="danger" size="4x" animation="spin-reverse"></BootstrapIcon>
    &nbsp;
    <BootstrapIcon icon="exclamation-circle-fill" variant="success" size="3x"></BootstrapIcon>
    <BootstrapIcon icon="exclamation-circle-fill" variant="warning" size="3x"></BootstrapIcon>
    <BootstrapIcon icon="exclamation-circle-fill" variant="danger" size="3x"></BootstrapIcon>
    <BootstrapIcon icon="exclamation-circle-fill" variant="info" size="3x"></BootstrapIcon>
    <BootstrapIcon icon="exclamation-circle-fill" variant="primary" size="3x"></BootstrapIcon>
    <BootstrapIcon icon="exclamation-circle-fill" variant="secondary" size="3x"></BootstrapIcon>
    <BootstrapIcon icon="exclamation-circle-fill" variant="dark" size="3x"></BootstrapIcon>
    &nbsp;
    <BootstrapIcon icon="globe" variant="danger" size="4x" animation="spin-reverse"></BootstrapIcon>
    <hr/>
    <b-button variant="primary" id="btn1">경고창</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// jquery를 사용하는 파일에 import 후 사용
import $ from 'jquery';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      message :"Hello Bootstrap Icon!!!"
    }
  },
  mounted() { // 여기에서 Jquery를 사용함
    $('#btn1').click(function() {
        alert('Vue에서 Jquery 사용');
    });
  }
}
</script>
