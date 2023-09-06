<template>
        <div class="container-loading">
          <div class="svg-icon">
              <img class="fundo" src="../assets/img/fundoLogoTipo.png">  
              <div class="contorno-conteiner">
                  <ContornoVue></ContornoVue>
              </div>
              <PreenchimentoVue></PreenchimentoVue>
              <GlassesVue></GlassesVue>
              <div class="loading-bar"></div>
          </div>
        </div>
</template>

<script>
import ContornoVue from './svg/Contorno.vue'
import GlassesVue from './svg/Glasses.vue'
import PreenchimentoVue from './svg/Preenchimento.vue'

export default {
    name: 'Loading-',
    components: {
        ContornoVue,
        PreenchimentoVue,
        GlassesVue
    }
}
</script>

<style scoped>
    .container-loading {
        background-color: black;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 33;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
    }
    .fundo {
        z-index: 4;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: calc(100% + 0.5px);

    }
    .svg-icon {
        position: relative;
        width: 389px;
        height: 276.622px;
        overflow: hidden;
    }
    .loading-bar {
        width: 100%;
        height: 20px;
        box-shadow: -1px -1px 13px #0085FF,1px 1px 13px #0D1258, 0px 0px 14px white;
        background:linear-gradient(to right, #0085FF, #0D1258);
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translate(-50%, -110%);
        max-width: 300px;
        border-radius: 40px;
        z-index: 3;
        animation: move infinite;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-fill-mode:backwards;
    }

    @keyframes move {
        0%{
            box-shadow: -1px -1px 13px #0085FF,1px 1px 13px #0D1258, 0px 0px 14px white;
            position: absolute;
            top: 110%;
            left: 50%;
            transform: translate(-50%, -110%);
        }
        25% {
            box-shadow: 0px 0px 40px #0085FF,0px 0px 40px #0D1258, 0px 0px 40px white;
        }
        50% {
            box-shadow: 1px 1px 12px #0D1258,-1px -1px 11px #0085FF, 0px 0px 13px white;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 50%);
        }
        75%{
            box-shadow: 0px 0px 40px #0085FF,0px 0px 40px #0D1258, 0px 0px 40px white;
        }
        100% {
            box-shadow: -1px -1px 13px #0085FF,1px 1px 13px #0D1258, 0px 0px 14px white ;
            position: absolute;
            top: -10%;
            left: 50%;
            transform: translate(-50%, -110%);
   
        }
        
    }

</style>