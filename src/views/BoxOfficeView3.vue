<template>
  <div class="box-office" id="boxOffice">
    <!-- datetimePicker 사용 -->
    <date-picker  v-model:value="date"
        format="YYYYMMDD"
        type="date"
        placeholder="Select date"
        @change="setDate" 
        ></date-picker> 
        <hr/>
        <div id="boxOfficeResult" v-if="result">
          <h3 >
            {{ result.boxofficeType}}({{ result.showRange.split('~')[0]}})
          </h3>
          <hr>
          <ol v-if="result.dailyBoxOfficeList.length">
              <li v-for="item of result.dailyBoxOfficeList" v-bind:key="item.rank">
                {{ item.movieNm}} (개봉일 : {{ item.openDt}})
              </li>
          </ol>
        </div>
  </div>
</template>
<script>
  // import $ from 'jquery';
  // https://github.com/mengxiong10/vue-datepicker-next
  // 설치 : npm install vue-datepicker-next --save
  // 사용법 : https://mengxiong10.github.io/vue-datepicker-next/
  import DatePicker from 'vue-datepicker-next';
  import 'vue-datepicker-next/index.css';
  import 'vue-datepicker-next/locale/ko';
  import axios from 'axios';
  // moment 사용
  // npm install moment --save
  import moment from 'moment';
  // numeral 사용
  // npm install numeral-es6
  // import numeral from 'numeral';
  const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="; 
  // 하루전
  let date =  new Date();
  date.setDate(date.getDate()-1);
 
  let result = null;
  export default {
    components: { DatePicker },
    data() {
      return {
        date : date,
        result: result,
      }
    },
    mounted: async function() {
      this.date = date;
      const urlAddress = url + moment(date).format('YYYYMMDD');
      let data = null;
      await axios.get(urlAddress)
      .then(function (response) {
          // 성공 핸들링
          data = response.data.boxOfficeResult;
          // console.log("mounted axios 결과  : " + JSON.stringify(response.data.boxOfficeResult));
        }).catch(function(error){
          // 실패 핸들링
          console.log(`mounted 에러 : ${error.message}`)
        });
        this.result = data;
    },
    methods: {
      // 화살표 함수에는 this가 없다. 함수로 해서 변수에 값을 대입하면 갱신된다. 😍😍😍😍😍😍😍😍😍😍😍
      setDate : async function(date) {
        this.date = date;
        const urlAddress = url + moment(date).format('YYYYMMDD');
        let data = null;
        await axios.get(urlAddress)
              .then(function (response) {
                // 성공 핸들링
                data = response.data.boxOfficeResult;
                // console.log("setDate axios 결과  : " + JSON.stringify(data));
              }).catch(function(error){
                // 실패 핸들링
                console.log(`setDate 에러 : ${error.message}`)
              });
        this.result = data;
      },
    }
  }
</script>
<style>
  .box-office{
    padding: 30px; 
    border: 1px solid gray;
    border-radius: 30px;
    margin: 20px;
    text-align: left;
    font-size: 12pt;
  }
</style>
