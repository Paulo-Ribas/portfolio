<template>
<section id="home">
  <Logo></Logo>
  <h2 class="texto-especial">Objetivo Do Portfólio</h2>
  <p class="texto-comum">Esse portfólio foi criado com o objetivo de ser um meio de demonstrar conhecimento para empresas<br>
  não foi criado com intuito de conseguir trabalhos freelancers, ou seja não estou interessado ou aceitarei proposta para tal<br>
  mostrarei meus projetos pessoais, falarei como criei, minhas dificuldades e pontos fracos durante o desenvolvimento deles <br>
  assim como meus pontos fortes e a facilidade em criar tal projeto e/ou em utilizar as ferramentas escolhidas<br>
  </p>  
  <BtnRouter LabelProps="Ver Portifolio" LinkProps="/start"></BtnRouter>
</section>
</template>

<script>
import BtnRouter from '../components/Button.vue'
import Logo from "../components/LogoImg.vue";

export default {
    name: 'Home-',
    components:{
        BtnRouter,
        Logo
    }

}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #home{
        height: 100vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }
    .texto-comum {
        color: var(--texto-padrao);
  
    }
    .texto-especial{
        color: var(--texto-especial)
    }
</style>