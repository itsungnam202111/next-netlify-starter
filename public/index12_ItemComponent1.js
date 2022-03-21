/*
확장팩 추가설치하면 코드를 보다 편히 볼 수 있다.
es6-string-html
es6-string-css
es6-string-javascript
*/
export default {
    props: {
       // 변수명 : 타입, ....
        item : Object
    },
    template:/*html*/ `
      <li>{{ item.idx }}. {{ item.text }}</li>
    `
}