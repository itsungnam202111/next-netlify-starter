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
        <div id="boxOfficeResult"></div>
  </div>
</template>
<script>
  import $ from 'jquery';
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
  import numeral from 'numeral';
  const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="; 
  // 하루전
  let date =  new Date();
  date.setDate(date.getDate()-1);

  // 얻어오기
  function getResult(date){
    const urlAddress = url + date;
    // console.log(urlAddress);
    axios.get(urlAddress)
          .then(function (response) {
            // 성공 핸들링
            // console.log(response.data);
            const boxOfficeResult = response.data.boxOfficeResult;
            // return response.data;
            let result = "<h3>" + boxOfficeResult.boxofficeType + "(" + boxOfficeResult.showRange.split('~')[0] + ")</h3>";
            boxOfficeResult.dailyBoxOfficeList.forEach( item => {
              result += "<strong>" + numeral(item.rank).format('00') + "</strong>. " + item.movieNm + "<br/>";
            });
            $("#boxOfficeResult").html(result);
          })
          .catch(function (error) {
            // 에러 핸들링
            console.log(error);
          })
          .then(function () {
            // 항상 실행되는 영역
          });
          //setTimeout(()=>{ }, 1000); // 1초후 숨겨진 버튼 클릭
  }
  export default {
    components: { DatePicker },
    setup() {
      return {
          date : date,
      }
    },
    mounted() {
      getResult(moment(date).format('YYYYMMDD'));
    },
    methods: {
      setDate : (date) => {
        getResult(moment(date).format('YYYYMMDD'));
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
