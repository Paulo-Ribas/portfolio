<template>
    <MqResponsive class="menu" :target="['xl', 'sm', 'md', 'lg', 'xxl']">
        <MainMenu :MenuFixoProps="true" :ActivatedProps="'cd'"></MainMenu>
    </MqResponsive>
    <MqResponsive class="menu" target="xs"> 
        <MainMenuMobile :closedProps="true" :ActivatedProps="'cd'"/>
    </MqResponsive>
    <section id="projects">
        <MqResponsive :target="['xl', 'sm', 'md', 'lg']">
            <div class="projects-window-container">
                <WindowProject :ImgProps="'favIcone.png'"   @project="(showProject($event))" ProjectNameProps="LinkCut"></WindowProject>
                <WindowProject :ImgProps="'logotipoPauloRibas.png'" @project="(showProject($event))" ProjectNameProps="ChatSocket"></WindowProject>
                <WindowProject :ImgProps="'logotipo-ces.png'"  @project="(showProject($event))" ProjectNameProps="Portfolio"></WindowProject>
                <WindowProject :ImgProps="'amgLogotipo.png'" @project="(showProject($event))" ProjectNameProps="AMG"></WindowProject>
            </div>
        </MqResponsive>
        <MqResponsive target="xs">
            <div class="projects-window-container">
                    <ProjectWindowMobileV :ImgProps="'favIcone.png'"   @project="(showProject($event))" ProjectNameProps="LinkCut"></ProjectWindowMobileV>
                    <ProjectWindowMobileV :ImgProps="'logotipoPauloRibas.png'" @project="(showProject($event))" ProjectNameProps="ChatSocket"></ProjectWindowMobileV>
                    <ProjectWindowMobileV :ImgProps="'logotipo-ces.png'"  @project="(showProject($event))" ProjectNameProps="Portfolio"></ProjectWindowMobileV>
                    <ProjectWindowMobileV :ImgProps="'amgLogotipo.png'" @project="(showProject($event))" ProjectNameProps="AMG"></ProjectWindowMobileV>
                </div>
        </MqResponsive>
        <MqResponsive :target="['xl', 'sm', 'md', 'lg']">
            <div class="project-container">
                <Transition name="projectsTransition-1">
                    <Project v-if="LinkCut_data" :projectImgProps="'linkcut.png'" projectNameProps="LinkCut" linkProps="https://qqq.com.br" :iconsProps="[
                        { nameIcon: 'html5', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'css3', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'js', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'database', prefix: 'fas', fillProps: '#fff' },
                        { nameIcon: 'node-js', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'ejs', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 0, fillProps: 'white' },
                        { nameIcon: 'sequelize', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 1, fillProps: 'white' }
                    ]"></Project>
                </Transition>
                <Transition name="projectsTransition-2">
                    <Project v-if="ChatSocket_data" :projectImgProps="'logotipoPauloRibas.png'" projectNameProps="ChatSocket" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></Project>
                </Transition>
                <Transition name="projectsTransition-3">
                    <Project v-if="Portfolio_data" :projectImgProps="'eu33.png'" projectNameProps="Portfolio" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></Project>
                </Transition>
                <Transition name="projectsTransition-4">
                    <Project v-if="AMG_data" :projectImgProps="'amigitosespanol.png'" projectNameProps="AMG" linkProps="https://amigitos-espanol-y-sla.com.br/" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'}, { nameIcon: 'nuxt', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 3 }, { nameIcon: 'knex', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 4 }, { nameIcon: 'mongoose', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 5 }, { nameIcon: 'database', prefix: 'fas' }]"></Project>
                </Transition>    
                <div class="project-text-container">
                    <h2>Descrição</h2>
                    <p>{{ text }}</p>
                </div>
            </div>
        </MqResponsive>
        <MqResponsive target="xs" class="mobile">
            <div class="project-container-mobile">
                <Transition name="projectsTransition-1">
                    <ProjectMobileVVue v-if="LinkCut_data" :projectImgProps="'linkcut.png'" projectNameProps="LinkCut" linkProps="https://qqq.com.br" :iconsProps="[{ nameIcon: 'html5', prefix: 'fab' }, { nameIcon: 'css3', prefix: 'fab' }, { nameIcon: 'js', prefix: 'fab' }, { nameIcon: 'database', prefix: 'fas' }, { nameIcon: 'node-js', prefix: 'fab' }, { nameIcon: 'ejs', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 0 }, { nameIcon: 'sequelize', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 1 }]"></ProjectMobileVVue>
                </Transition>
                <Transition name="projectsTransition-2">
                    <ProjectMobileVVue v-if="ChatSocket_data" :projectImgProps="'logotipoPauloRibas.png'" projectNameProps="ChatSocket" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></ProjectMobileVVue>
                </Transition>
                <Transition name="projectsTransition-3">
                    <ProjectMobileVVue v-if="Portfolio_data" :projectImgProps="'eu33.png'" projectNameProps="Portfolio" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></ProjectMobileVVue>
                </Transition>
                <Transition name="projectsTransition-4">
                    <ProjectMobileVVue v-if="AMG_data" :projectImgProps="'amigitosespanol.png'" projectNameProps="AMG" linkProps="https://qqq.com.br" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'dog', prefix:'fas'},{nameIcon:'cube', prefix:'fas'},{nameIcon:'circle', prefix:'fas'}]"></ProjectMobileVVue>
                </Transition>    
                <div class="project-text-container">
                    <h2>Descrição</h2>
                    <p>{{ text }}</p>
                </div>
            </div>
        </MqResponsive>
    </section>
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import WindowProject from "../components/ProjectWindow.vue"
import Project from '../components/Project.vue'
import ProjectMobileVVue from "@/components/ProjectMobileV.vue";
import ProjectWindowMobileV from "@/components/ProjectWindowMobileV.vue";
import MainMenuMobile from '../components/NavegationMenuMobile.vue'

export default {
    name: 'Projects-',
    components:{
        MainMenu,
        WindowProject,
        Project,
        ProjectMobileVVue,
        ProjectWindowMobileV,
        MainMenuMobile
    },
    mounted(){
        this.showProject('LinkCut')
    },
    data(){
        return {
            LinkCut_data: false,
            ChatSocket_data: false,
            Portfolio_data: false,
            AMG_data: false,
            text: '',
            tittle: '',
        }
    },
    methods: {
        showProject(projeto){
            projeto === 'LinkCut' ? this.LinkCut_data = true : this.LinkCut_data = false
            projeto === 'ChatSocket' ? this.ChatSocket_data = true : this.ChatSocket_data = false
            projeto === 'Portfolio' ? this.Portfolio_data = true : this.Portfolio_data = false
            projeto === 'AMG' ? this.AMG_data = true : this.AMG_data = false
        }
    },
    watch: {
        LinkCut_data(){
            if(this.LinkCut_data) {
                this.tittle = 'Link Cut'
                this.text = 'dsadsadsaaaaaa sajkdbsdbsakdbbfdd dfdslfsdbfd.skafb.sdkafbdsk.fbdsaf sdfsdafhsdfh dsaaaaaaaaaaaaaaa  odddosahfodisahfosdfh'
            }
        },
        ChatSocket_data(){
            if(this.ChatSocket_data) {
                this.tittle = 'Venda De Amigos'
                this.text = 'dsadsadsaaaaaa sajkdbsdbsakdbbfdd dfdslfsdbfd.skafb.sdkafbdsk.fbdsaf sdfsdafhsdfhodddosahfodisahfos sdadddddddddddddddddddddddddddd dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dsaddddddddddddddddddddddddddddddd dsadfh'
            }
        },
        Portfolio_data() {
            if (this.Portfolio_data) {
                this.tittle = 'Projeto Futuro'
                this.text = 'dsadsadsaaaaaa sajkdbsdbsakdbbfdd dfdslfsdbfd.skafb.sdkafbdsk.fbdsaf sdfsdafhsdfhodddosahfodisahfosdfh sdfdsfdsfdsfsdfdsfdfs'
            }
        },
        AMG_data() {
            if (this.AMG_data) {
                this.tittle = 'Amigitos Spanol Y Sla'
                this.text = 'dsadsadsaaaaaa sajkdbsdbsakdbbfdd dfdslfsdbfd.skafb.sdkafbdsk.fbdsaf sdfsdafhsdfhodddosahfodisahfosdfh dsadsadsaaaaaa sajkdbsdbsakdbbfdd dfdslfsdbfd.skafb.sdkafbdsk.fbdsaf sdfsdafhsdfhodddosahfodisahfos sdadddddddddddddddddddddddddddd dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dsaddddddddddddddddddddddddddddddd dsadfh dsadsadsaaaaaa sajkdbsdbsakdbbfdd dfdslfsdbfd.skafb.sdkafbdsk.fbdsaf sdfsdafhsdfhodddosahfodisahfos sdadddddddddddddddddddddddddddd dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dsaddddddddddddddddddddddddddddddd dsadfh'
            }
        },
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
    overflow-y: auto;
}
.projects-window-container {
    width: 90%;
    max-width: 900px;
    height: 50px;
    border: 2px solid #fff;
    margin: 10px auto 10px;
    display: flex;
    border-radius: 30px 30px 30px 30px;
    justify-content: space-evenly;
}
.mobile {
    height: 100%;
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
.project-container-mobile{
    min-height: 500px;
    width: 100%;
    height: 500px;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-self: center;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
}
.project-text-container{
    max-height: 500px;
    flex: 1;
    height: calc(100% - 37px);
    max-width: 600px;
    color: var(--texto-padrao);
    font-size: 1.1em;
    padding: 0% 0%;
    overflow-y: auto;
    overflow-x: hidden;
}
.project-container h2 {
    color: #0085FF;
}
.project-text-container p {
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    word-break: break-all;
    padding: 0% 1%;
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
@media screen and (max-height: 384px) {
    .project-container-mobile {
        max-height: 260px;
        height: 98%;
        min-height: unset;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: flex;
        align-self: center;
        flex-direction: row;
        overflow-y: auto;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .project-text-container {
        max-height: 255px;
    }
}
@media screen and (max-width: 384px) {
    .project-text-container {
        margin-top: 5px;
        max-height: 180px;
    }
}


</style>