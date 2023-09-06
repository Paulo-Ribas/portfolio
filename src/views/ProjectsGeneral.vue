<template>
  <section id="projects-general">
      <div class="menu">
           <Menu :MenuFixoProps="true" :ActivatedProps="'cdg'"></Menu>
       </div>
    <div class="menu">
    </div>
    <div class="carrossel">
        <div class="carrossel-container">
            <div class="carrossel-itens">
                <ProjectGeneral nameProps="link cut" linkProps="https://linkcut.com.br" textProps="landing page sobre emagrecimento" imgUrlProps="eu33.png" :iconsArrayProps="[{name:'html5', prefix:'fab'},{name:'css3', prefix:'fab'},{name:'js', prefix:'fab'}]"></ProjectGeneral>
                <ProjectGeneral nameProps="link cut" linkProps="https://linkcut.com.br" textProps="landing page sobre emagrecimento" imgUrlProps="eu33.png" :iconsArrayProps="[{ name: 'html5', prefix: 'fab' }, { name: 'css3', prefix: 'fab' }, { name: 'js', prefix: 'fab' }]"></ProjectGeneral>
                <ProjectGeneral nameProps="link cut" linkProps="https://linkcut.com.br" textProps="landing page sobre emagrecimento" imgUrlProps="eu33.png" :iconsArrayProps="[{ name: 'html5', prefix: 'fab' }, { name: 'css3', prefix: 'fab' }, { name: 'js', prefix: 'fab' }]"></ProjectGeneral>
                <ProjectGeneral nameProps="link cut" linkProps="https://linkcut.com.br" textProps="landing page sobre emagrecimento" imgUrlProps="eu33.png" :iconsArrayProps="[{ name: 'html5', prefix: 'fab' }, { name: 'css3', prefix: 'fab' }, { name: 'js', prefix: 'fab' }]"></ProjectGeneral>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import ProjectGeneral from '@/components/ProjectGeneral.vue'
import Menu from '@/components/NavegationMenu.vue'
export default {
  components: { ProjectGeneral, Menu },

}
</script>

<style scoped>
.menu{
    position: absolute;
    bottom: 6%;
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
    .carrossel {
        width: 100%;
        height: 100%;
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


</style>