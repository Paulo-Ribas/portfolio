<template>
    <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
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


</style>
