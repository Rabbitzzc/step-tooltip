<template>
  <div id="app">
    <div class="example">
      <div id="step1">1</div>
      <div id="step2">2</div>
      <div id="step3">3</div>
      <div id="step4">4</div>
      <div id="step5">5</div>
      <div id="step6">6</div>
      <div id="step7">7</div>
      <div id="step8">8</div>
    </div>
  </div>
</template>

<script>

/** eslint disable */
import stepTip from '../../dist/index.min.js'
import '../../dist/index.min.css'

const options = {
    initialText: '哈喽，准备好了解 step-tooltip 了么？',
    steps: [{
        element: '#step1',
        container: '准备好了解 step-tooltip 了么？'
    },{
        element: '#step2',
        container: 'step2step2step2step2step2step2step2step2step2step2step2step2step2',
        placement: 'top'
    },{
        element: '#step3',
        container: 'step3',
        placement: 'right'
    },{
        element: '#step4',
        container: 'step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4step4',
        placement: 'left'
    },{
        element: '#step5',
        container: 'step5',
        placement: 'bottom'
    }],
}
export default {
    name: 'App',
  components: {
      },
  mounted() {
      console.log(stepTip(options))
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.example {
    position: relative;
    margin: 0 auto;
    width: 700px;
    padding: 30px;
    background: lightgrey;
}

#step1 {
    position: absolute;
    margin: 10px;
    width: 50px;
    height: 50px;
    background: rebeccapurple;
}
#step2 {
    margin: 10px;
    width: 100px;
    height: 50px;
    background: tan;
}
#step3 {
    margin: 10px;
    width: 30px;
    height: 50px;
    background: teal;
}
#step4 {
    margin: 10px;
    width: 420px;
    height: 50px;
    background: lavenderblush;
}
#step5 {
    margin: 10px;
    width: 100px;
    height: 50px;
    background: sandybrown;
}

#step6 {
    margin: 10px;
    width: 50px;
    height: 50px;
    background: rebeccapurple;
}
#step7 {
    margin: 10px;
    width: 300px;
    height: 50px;
    background: tan;
}
#step8 {
    margin: 10px;
    width: 300px;
    height: 50px;
    background: teal;
}
</style>
