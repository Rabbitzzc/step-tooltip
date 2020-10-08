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
import stepTip from 'step-tooltip'
// import stepTip from '../../src/index.js'
import 'step-tooltip/dist/index.min.css'

const options = {
    initialText: 'Hello, are you ready？',
    steps: [{
        element: '#step1',
        container: 'step-tooltip'
    },{
        element: '#step2',
        container: 'step by step tooltip guilder for any website.lightweight, & minify✨✨✨.',
        placement: 'top'
    },{
        element: '#step3',
        container: 'It\'s lightweight, minify',
        placement: 'right'
    },{
        element: '#step4',
        container: '<p>github: "https://github.com/Rabbitzzc/step-tooltip"</p>',
        placement: 'right'
    },{
        element: '#step5',
        container: 'author: Rabbitzzc',
        placement: 'bottom'
    },{
        element: '#step6',
        container: 'email: zzclovelcs@gmail.com',
        placement: 'bottom'
    },{
        element: '#step7',
        container: 'blog: rabbitzzc.top',
        placement: 'left'
    },{
        element: '#step8',
        container: 'Thanks',
        placement: 'top'
    }],
    options: {
        backLabel: 'back',
        nextLabel: 'next',
        skipLabel: 'skip',
        doneLabel: 'done',
    }
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
    position: relative;
}
body {
    background: #2c3e50;

}

.example {
    /* margin: 0 auto;
    width: 700px;
    padding: 30px;
    background: lightgrey; */
    color: #fff;
}

#step1 {
    position: absolute;
    left:200px;
    top:100px;
    margin: 10px;
    width: 50px;
    height: 50px;
    background: rebeccapurple;
}
#step2 {
    position: absolute;
    left:30px;
    top:340px;
    margin: 10px;
    width: 100px;
    height: 50px;
    background: tan;
}
#step3 {
    position: absolute;
    left:240px;
    top:60px;
    margin: 10px;
    width: 300px;
    height: 50px;
    background: teal;
}
#step4 {
    position: absolute;
    left:240px;
    top:370px;
    margin: 10px;
    width: 220px;
    height: 50px;
    background: aqua;
}
#step5 {
    position: absolute;
    margin: 10px;
    width: 100px;
    left:460px;
    top:520px;
    height: 50px;
    background: sandybrown;
}

#step6 {
    position: absolute;
    margin: 10px;
    width: 50px;
    height: 50px;
    left:630px;
    top:720;
    background: gold;
}
#step7 {
    position: absolute;
    margin: 10px;
    width: 300px;
    height: 50px;
    left:600px;
    top:525px;
    background: tomato;
}
#step8 {
    position: absolute;
    margin: 10px;
    width: 300px;
    left:820px;
    top:420px;
    height: 50px;
    background: teal;
}
</style>
