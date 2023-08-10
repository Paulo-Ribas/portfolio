<template>
    <div class="menu">
        <MainMenu :MenuFixoProps="true" :ActivatedProps="'cd'"></MainMenu>
    </div>
    <section id="projects">
        <div class="projects-window-container">
            <WindowProject :ImgProps="'favIcone.png'"   @project="(showProject($event))" ProjectNameProps="LinkCut"></WindowProject>
            <WindowProject :ImgProps="'logotipoPauloRibas.png'" @project="(showProject($event))" ProjectNameProps="ChatSocket"></WindowProject>
            <WindowProject :ImgProps="'logotipo-ces.png'"  @project="(showProject($event))" ProjectNameProps="Portfolio"></WindowProject>
            <WindowProject :ImgProps="'amgLogotipo.png'" @project="(showProject($event))" ProjectNameProps="AMG"></WindowProject>
        </div>
        <div class="project-container">
            <Transition name="projectsTransition-1">
                <Project v-if="LinkCut_data" :projectImgProps="'linkcut.png'" projectNameProps="LinkCut" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon: 'node-js', prefix: 'fab'},{nameIcon:'circle', prefix:'fas'}]"></Project>
            </Transition>
            <Transition name="projectsTransition-2">
                <Project v-if="ChatSocket_data" :projectImgProps="'logotipoPauloRibas.png'" projectNameProps="ChatSocket" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></Project>
            </Transition>
            <Transition name="projectsTransition-3">
                <Project v-if="Portfolio_data" :projectImgProps="'eu33.png'" projectNameProps="Portfolio" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></Project>
            </Transition>
            <Transition name="projectsTransition-4">
                <Project v-if="AMG_data" :projectImgProps="'logoTeste5.png'" projectNameProps="AMG" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></Project>
            </Transition>    
            <div class="project-text-container">
                <h2>Link Cut</h2>
                <p>bla bla bla lorem34</p>
            </div>
        </div>
    </section>
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import WindowProject from "../components/ProjectWindow.vue"
import Project from '../components/Project.vue'
export default {
    name: 'Projects-',
    components:{
        MainMenu,
        WindowProject,
        Project
    },
    data(){
        return {
            LinkCut_data: false,
            ChatSocket_data: false,
            Portfolio_data: false,
            AMG_data: false
        }
    },
    methods: {
        showProject(projeto){
            projeto === 'LinkCut' ? this.LinkCut_data = true : this.LinkCut_data = false
            projeto === 'ChatSocket' ? this.ChatSocket_data = true : this.ChatSocket_data = false
            projeto === 'Portfolio' ? this.Portfolio_data = true : this.Portfolio_data = false
            projeto === 'AMG' ? this.AMG_data = true : this.AMG_data = false
        }
    }
}
</script>

<style scoped>
.menu{
    position: absolute;
    bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
#projects {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.projects-window-container {
    width: 70%;
    max-width: 900px;
    height: 50px;
    border: 2px solid #fff;
    margin: 10px auto 10px;
    display: flex;
    border-radius: 30px 30px 30px 30px;
    justify-content: space-evenly;
}
.project-container{
    min-height: 500px;
    width: 100%;
    height: 500px;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-self: center;
    
}
.project-text-container{
    flex: 1;
    max-height: 500px;
    overflow-Y: auto;
    color: var(--texto-padrao);
    font-size: 1.1em
}

.projectsTransition-1-enter-active,
.projectsTransition-2-enter-active,
.projectsTransition-3-enter-active,
.projectsTransition-4-enter-active,  
.projectsTransition-1-leave-active,
.projectsTransition-2-leave-active,
.projectsTransition-3-leave-active,
.projectsTransition-4-leave-active {
    transition: 0.7s;
}
.projectsTransition-1-enter-from,
.projectsTransition-2-enter-from,
.projectsTransition-3-enter-from,
.projectsTransition-4-enter-from {
    width: 0%;
    opacity: 0;
    transform: translateX(-50%);
}
.projectsTransition-1-enter-to,
.projectsTransition-2-enter-to,
.projectsTransition-3-enter-to,
.projectsTransition-4-enter-to {
   width: 50%;
   opacity: 1;
   transform: translateX(0);
}
.projectsTransition-1-leave-from,
.projectsTransition-2-leave-from,
.projectsTransition-3-leave-from,
.projectsTransition-4-leave-from {
   width: 50%;
   opacity: 1;
   transform: translateX(0);

}
.projectsTransition-1-leave-to,
.projectsTransition-2-leave-to,
.projectsTransition-3-leave-to,
.projectsTransition-4-leave-to {
    width: 0%;
    opacity: 0;
    transform: translateX(-100%);
}
    


</style>