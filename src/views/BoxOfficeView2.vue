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
  
  // Promise를 이용하여 처리!!!!
  function getBoxOffice(date) {
      const urlAddress = url + date;
      // Promise 객체를 리턴
      return new Promise(function (resolve, reject) {
          // 비동기 작업
          axios.get(urlAddress)
              .then(function (response) {
                  // 성공 핸들링
                  const boxOfficeResult = response.data.boxOfficeResult;
                  // console.log("axios 결과  : " + boxOfficeResult);
                  resolve(boxOfficeResult); // 성공!!!
              })
              .catch(function (error) {
                  // 에러 핸들링
                  reject(error); // 실패!!!
              })
              .then(function () {
                  // 항상 실행되는 영역
              });
      });
  }
  

  let result = null;
  export default {
    components: { DatePicker },
    data() {
      return {
        date : date,
        result: result,
      }
    },
    mounted() {
      getBoxOffice(moment(date).format('YYYYMMDD'))
        .then((data) => {
            this.result = data;
            this.date = date;
            console.log(`mounted 결과  : ${JSON.stringify(this.result)}`);
        })
        .catch((error) => {
            console.log(`에러 : ${error.message}`);
        });
    },
    methods: {
      // 화살표 함수에는 this가 없다. 함수로 해서 변수에 값을 대입하면 갱신된다. 😍😍😍😍😍😍😍😍😍😍😍
      setDate : function(date) {
        this.date = date;
        getBoxOffice(moment(date).format('YYYYMMDD'))
        .then((data) => {
            // console.log("setDate 결과  : " + JSON.stringify(data));
            // 함수로 해서 변수에 값을 대입하면 갱신된다.
            this.result = data;
        })
        .catch((error) => {
            console.log(`에러 : ${error.message}`);
        });
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
