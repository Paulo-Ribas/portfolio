<template>
    <Transition name="Load">
      <Loading v-if="loading"></Loading>
    </Transition>
    <router-view v-show="!loading"></router-view>
</template>

<script>
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  mounted(){
    this.createImgs()
  },
  data(){
    return {
      loading: true,
      countImg: 0,
    }
  },
   components: {
    Loading
  },
  methods: {
    createImgs(){
      let backgroundImg1 = new Image(1000, 1000)
      let backgroundImg2 = new Image(1000, 1000)
      backgroundImg1.src = require('./assets/img/background.png')
      backgroundImg2.src = require('./assets/img/linkcut.png')
      backgroundImg1.onload = this.countIncrement()
      backgroundImg2.onload = this.countIncrement()
    },
    countIncrement(){
      this.countImg++
    }
  },
  watch: {
    countImg() {
      if(this.countImg === 2) {
        setTimeout(() => {
          this.loading = false
        }, 1600);
      }
    },

  }
}
</script>

<style>
@font-face {
  font-family: 'Caveat', cursive;
  src: url('./assets/fonts/Caveat-VariableFont_wght.ttf');
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
::-webkit-scrollbar {
  width: 9px;
  height: 20px;
             
}

::-webkit-scrollbar-track {
  background: var(--special-gradient);
  border-radius: 6px;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: #fff;    /* color of the scroll thumb */
  border-radius: 6px;
  height: 20px;       /* roundness of the scroll thumb */
}

:root {
      --logo-titulo: #0652dd;
      --texto-especial: #70a1ff;
      --texto-padrao: #a5b1c2;
      --background:#000428;
      --background-gradient: linear-gradient(to right, #000428, #004e92);
      --background-gradient-support: -webkit-linear-gradient(to right, #000428, #004e92);
      --background-special: #2b5876;
      --special-gradient: linear-gradient(to right, #4e4376, #2b5876);
      --special-gradient-support: -webkit-linear-gradient(to right, #4e4376, #2b5876);
}
body {
  background: var(--background); 
  background: var(--background-gradient-support);
  background: var(--background-gradient);
  background-image: url('./assets/img/background.png');


}
#app {
  text-align: center;
  font-family: 'Caveat', cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  align-items: center;
  padding-bottom: 50px

};

.Load-enter-active, .Load-leave-active {
  opacity: 1;
  transition: all 1.5s;
}
.Load-move {
  transition: all 2s
}
.Load-leave-from {
  opacity: 1;
}
.Load-leave-to {
  opacity: 0;
}
</style>
