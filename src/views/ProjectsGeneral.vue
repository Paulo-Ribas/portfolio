<template>
  <section id="projects-general">
    <MqResponsive class="menu" :target="['xl', 'sm', 'md', 'lg', 'xxl']">
        <Menu :MenuFixoProps="true" :ActivatedProps="'cdg'"></Menu>
    </MqResponsive>
    <MqResponsive class="menu" target="xs"> 
        <MainMenuMobile :closedProps="true" :ActivatedProps="'cdg'"/>
    </MqResponsive>
    <h1>Projetos Gerais</h1>
    <div class="carrossel">
        <div class="carrossel-container">
            <div class="carrossel-itens">
                <ProjectGeneral nameProps="Estética Excepcional" linkProps="https://esteticaexcepcional.com.br/" textProps="landing page sobre emagrecimento" :finishedProps="true" imgUrlProps="estetica.png" :iconsArrayProps="[{name:'html5', prefix:'fab'},{name:'css3', prefix:'fab'},{name:'js', prefix:'fab'},{name:'node',prefix:'fab'}]"></ProjectGeneral>
                <ProjectGeneral nameProps="Funil Whats" linkProps="https://ryannghisii.site/" textProps="landing page para venda de cursos" imgUrlProps="projetos/funnil.png" :finishedProps="true" :iconsArrayProps="[{ name: 'html5', prefix: 'fab' }, { name: 'css3', prefix: 'fab' }, { name: 'js', prefix: 'fab' }, { name: 'vuejs', prefix: 'fab' }]"></ProjectGeneral>
                <ProjectGeneral nameProps="Furty Of" linkProps="#" textProps="portifólio sobre games (projeto em freeze por solicitação do cliente)" imgUrlProps="projetos/furty.png" :finishedProps="false" :iconsArrayProps="[{ name: 'html5', prefix: 'fab' }, { name: 'css3', prefix: 'fab' }, { name: 'js', prefix: 'fab' }]"></ProjectGeneral>
                <ProjectGeneral nameProps=" MD2" linkProps="#" textProps="landing page sobre uma Barbearia" imgUrlProps="projetos/Barbearia.png" :finishedProps="false" :iconsArrayProps="[{ name: 'html5', prefix: 'fab' }, { name: 'css3', prefix: 'fab' }, { name: 'js', prefix: 'fab' }]"></ProjectGeneral>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import ProjectGeneral from '@/components/ProjectGeneral.vue'
import Menu from '@/components/NavegationMenu.vue'
import MainMenuMobile from '../components/NavegationMenuMobile.vue'

export default {
  components: { ProjectGeneral, Menu, MainMenuMobile },
  head(){
        return {
            title: 'Projetos Gerais',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            ],
        }
    },

}
</script>

<style scoped>
.menu{
    position: absolute;
    bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    width: 100%;
    
}

    #projects-general {
        width: 100%;
        height: 100vh;
    }
    #projects-general h1 {
        font-size: 2.3rem;
        margin-top: 40px;
        color: var(--texto-padrao);
    }
    .carrossel {
        width: 100%;
        height: calc(100% - 92px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .carrossel-container {
        width: 100%;
        height: 100%;
        max-height: 400px;
        overflow-x: hidden;
        position: relative;
    }
    .carrossel-itens {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        flex-wrap: wrap;
        flex-shrink: unset;
        overflow-x: auto;
        
    }
    @media screen and (max-width: 556px) {
        #projects-general h1 {
            color: var(--texto-especial);
        }
        
    }

</style>