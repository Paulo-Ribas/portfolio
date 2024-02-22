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
                <WindowProject :ImgProps="'fantasmaChatIcon.png'" @project="(showProject($event))" ProjectNameProps="ChatSocket"></WindowProject>
                <WindowProject :ImgProps="'ryannlogo.png'"  @project="(showProject($event))" ProjectNameProps="Portfolio"></WindowProject>
                <WindowProject :ImgProps="'amgLogotipo.png'" @project="(showProject($event))" ProjectNameProps="AMG"></WindowProject>
                <WindowProject :ImgProps="'goldenTimesLogo.png'" @project="(showProject($event))" ProjectNameProps="GoldenTimes"></WindowProject>

            </div>
        </MqResponsive>
        <MqResponsive target="xs">
            <div class="projects-window-container">
                    <ProjectWindowMobileV :ImgProps="'favIcone.png'"   @project="(showProject($event))" ProjectNameProps="LinkCut"></ProjectWindowMobileV>
                    <ProjectWindowMobileV :ImgProps="'fantasmaChatIcon.png'" @project="(showProject($event))" ProjectNameProps="ChatSocket"></ProjectWindowMobileV>
                    <ProjectWindowMobileV :ImgProps="'ryannlogo.png'"  @project="(showProject($event))" ProjectNameProps="Portfolio"></ProjectWindowMobileV>
                    <ProjectWindowMobileV :ImgProps="'amgLogotipo.png'" @project="(showProject($event))" ProjectNameProps="AMG"></ProjectWindowMobileV>
                    <ProjectWindowMobileV :ImgProps="'goldenTimesLogo.png'" @project="(showProject($event))" ProjectNameProps="GoldenTimes"></ProjectWindowMobileV>
                </div>
        </MqResponsive>
        <MqResponsive :target="['xl', 'sm', 'md', 'lg']">
            <div class="project-container">
                <Transition name="projectsTransition-1">
                    <Project v-if="LinkCut_data" :projectImgProps="'linkcut.png'" projectNameProps="LinkCut" linkProps="https://linkcut.fun" :iconsProps="[
                        { nameIcon: 'html5', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'css3', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'js', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'database', prefix: 'fas', fillProps: '#fff' },
                        { nameIcon: 'node-js', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'ejs', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 0, fillProps: '#fff' },
                        { nameIcon: 'sequelize', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 1, fillProps: '#fff' }
                    ]"></Project>
                </Transition>
                <Transition name="projectsTransition-2">
                    <Project v-if="ChatSocket_data" :projectImgProps="'FantasmaChat.png'" projectNameProps="PapoBate" linkProps="https://papobate.fun" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'}, { nameIcon: 'ejs', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 2, fillProps: '#fff' }, { nameIcon: 'webpack', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 3, fillProps: '#fff'}]"></Project>
                </Transition>
                <Transition name="projectsTransition-3">
                    <Project v-if="Portfolio_data" :projectImgProps="'Portfolio.png'" projectNameProps="Portfolio" linkProps="https://www.ryannghisi.com.br/" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'vuejs', prefix:'fab'},{nameIcon:'node', prefix:'fab'}]"></Project>
                </Transition>
                <Transition name="projectsTransition-4">
                    <Project v-if="AMG_data" :projectImgProps="'amigitosespanol.png'" projectNameProps="AMG" linkProps="https://amigitos-espanol-y-sla.com.br/" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'}, { nameIcon: 'nuxt', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 3, fillProps: '#fff' }, { nameIcon: 'knex', white: true, size: '2.1rem', iconClass: 'costumIcons', costum: true, index: 4, fillProps: '#fff' }, { nameIcon: 'mongoose', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 5, fillProps:'#fff' }, { nameIcon: 'database', prefix: 'fas' }, { nameIcon: 'leaf', prefix: 'fas' }, { nameIcon: 'socket', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 6, fillProps: '#fff' }, ]"></Project>
                </Transition>
                <Transition name="projectsTransition-4">
                    <Project v-if="GoldenTimes_data" :projectImgProps="'goldenTimes.png'" projectNameProps="Golden Times" linkProps="https://goldentimes.website/" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'}, {nameIcon:'vuejs', prefix:'fab'}, { nameIcon: 'mongoose', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 5, fillProps:'#fff' }, { nameIcon: 'leaf', prefix: 'fas' } ]"></Project>                
                </Transition>    
                <div class="project-text-container">
                    <h2>Descrição</h2>
                    <p v-html="text"></p>
                </div>
            </div>
        </MqResponsive>
        <MqResponsive target="xs" class="mobile">
            <div class="project-container-mobile">
                <Transition name="projectsTransition-1">
                    <ProjectMobileVVue v-if="LinkCut_data" :projectImgProps="'linkcut.png'" projectNameProps="LinkCut" linkProps="https://linkcut.fun" :iconsProps="[
                        { nameIcon: 'html5', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'css3', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'js', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'database', prefix: 'fas', fillProps: '#fff' },
                        { nameIcon: 'node-js', prefix: 'fab', fillProps: '#fff' },
                        { nameIcon: 'ejs', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 0, fillProps: '#fff' },
                        { nameIcon: 'sequelize', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 1, fillProps: '#fff' }
                    ]"></ProjectMobileVVue>
                </Transition>
               <!--  oaifoaifa -->
                <Transition name="projectsTransition-2">
                    <ProjectMobileVVue v-if="ChatSocket_data" :projectImgProps="'FantasmaChat.png'" projectNameProps="ChatSocket" linkProps="https://papobate.fun" :iconsProps="[{ nameIcon: 'html5', prefix: 'fab' }, { nameIcon: 'css3', prefix: 'fab' }, { nameIcon: 'js', prefix: 'fab' }, { nameIcon: 'ejs', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 0, fillProps: '#fff' }, { nameIcon: 'webpack', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 1, fillProps: '#fff' }]"></ProjectMobileVVue>
                </Transition>
                <Transition name="projectsTransition-3">
                    <ProjectMobileVVue v-if="Portfolio_data" :projectImgProps="'Portfolio.png'" projectNameProps="Portfolio" linkProps="https://www.ryannghisi.com.br/" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'},{nameIcon:'vue', prefix:'fab'},{nameIcon:'node', prefix:'fab'}]"></ProjectMobileVVue>
                </Transition>
                <Transition name="projectsTransition-4">
                    <ProjectMobileVVue v-if="AMG_data" :projectImgProps="'amigitosespanol.png'" projectNameProps="AMG" linkProps="https://amigitos-espanol-y-sla.com.br/" :iconsProps="[{ nameIcon: 'html5', prefix: 'fab' }, { nameIcon: 'css3', prefix: 'fab' }, { nameIcon: 'js', prefix: 'fab' }, { nameIcon: 'nuxt', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 3, fillProps: '#fff' }, { nameIcon: 'knex', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 4, fillProps: '#fff' }, { nameIcon: 'mongoose', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 5 }, { nameIcon: 'database', prefix: 'fas' }, { nameIcon: 'leaf', prefix: 'fas' }, { nameIcon: 'socket', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 8, fillProps: '#fff' },]"></ProjectMobileVVue>
                </Transition> <Transition name="projectsTransition-4">
                    <ProjectMobileVVue v-if="GoldenTimes_data" :projectImgProps="'goldenTimes.png'" projectNameProps="Golden Times" linkProps="https://goldentimes.website/" :iconsProps="[{nameIcon:'html5', prefix:'fab'},{nameIcon:'css3', prefix:'fab'},{nameIcon:'js', prefix:'fab'}, {nameIcon:'vuejs', prefix:'fab'}, { nameIcon: 'mongoose', white: true, size: '2rem', iconClass: 'costumIcons', costum: true, index: 5, fillProps:'#fff' }, { nameIcon: 'leaf', prefix: 'fas' } ]"></ProjectMobileVVue>                
                </Transition>
                <div class="project-text-container">
                    <h2>Descrição</h2>
                    <p v-html="text"></p>
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
    head(){
        return {
            title: 'Projetos',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            ],
        }
    },
    data(){
        return {
            LinkCut_data: false,
            ChatSocket_data: false,
            Portfolio_data: false,
            AMG_data: false,
            GoldenTimes_data: false,
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
            projeto === 'GoldenTimes' ? this.GoldenTimes_data = true : this.GoldenTimes_data = false
        }
    },
    watch: {
        LinkCut_data(){
            if(this.LinkCut_data) {
                this.tittle = 'Link Cut'
                this.text = '(Um Encurtador de URL E Nomeador) <br> Um projeto tanto quanto simples e com o design feio com o figma. foi o meu primeiro projeto após completar o curso de node.js, as tecnologias usadas foram:<br> <span class="projects-span">(html, css, js, ejs, node, express, sequelize).</span> <br> mantive o mesmo código de quando foi criado pela primeira vez e não utilizei nenhuma biblioteca para gerar as urls aleatórias'
            }
        },
        ChatSocket_data(){
            if(this.ChatSocket_data) {
                this.tittle = 'PapoPate'
                this.text = '(Um Chat Em Tempo Real) <br> o segundo projeto que eu criei para entrar no mundo das aplicações em tempo real, com um sistema simples de costumização de cores e tema junto a um sistema de modelação de mensagens e design feito com o figma, as tecnologias usadas foram:<br> <span class="projects-span">(html, css, js, sass, ejs, webpack, express, node, express-flash).</span> '
            }
        },
        Portfolio_data() {
            if (this.Portfolio_data) {
                this.tittle = 'Master Tem Que Escolher O Nome'
                this.text = '(Um portfólio de designer) <br> um projeto que fiz focando em animações e efeitos mais dinamicos para aprimororar a experiencia do usuario e praticar a crianção de animação, feito em vue.js com uso de API de envio de emails, além de design feito no figma, as tecnologias usadas foram: <br>  <span class="projects-span">(html, css, js, vue.js, vueCli, express, node).</span>'
            }
        },
        AMG_data() {
            if (this.AMG_data) {
                this.tittle = 'Amigitos Spanol Y Sla'
                this.text = '(Um Site Para Assistir Videos Ao Mesmo Tempo E Doctor Who) <br> Um projeto complexo que utilizei diversas tecnologias para cria-lo, não utilizei nenhum design e fiz a mão, usei isso para práticar e concretizar totalmente meus conhecimentos de css para nunca depender de ferramentes de design. <br> <br> os sistemas desse site incluem, sistema de: cadastro, login, sistema de requisição, negação, remoção, adição de amizade em tempo real, gerenciamento de conta feito pelo usuario <br> (editar nome, email, senha, imagem, descrição), <br> <br> recuperação de senha via email e token, upload e conversor de videos, criação de salas para assistir videos sincronizados <br> (tanto videos enviados via upload e tanto videos enviados por link do youtube) <br>  <br> e deletamento de tais em tempo real, admistração de salas e gestão de usuarios nas mesmas, player de video, escolher e assistir séries (Doctor Who), chat em tempo real, sincronização de sala, membros e videos e etc... <br> consumindo uma API  própria feita em node.js.  <br> As tecnologias usadas foram: <br> <span class="projects-span">(html, css, js, nuxt, mongoDB, mysql, mysql2, knex, mongoose, node, nodemailer, express, multer, multer-s3, ffmpeg, aws-sdk, bcrypt, jwt, socket.io, jest).</span><br> também cheguei a usar testes unitários como o jest, porém senti que isso estava deixando mais lento e atrapalhando do que ajudando (para meu nivel quando iniciei), porém após uns 7 meses e o conhecimento e evolução que essa aplicação me forneceu, tornou algo até que trivial eu diria, faria com ele se fosse atualmente'
            }
        },
        GoldenTimes_data(){
            if(this.GoldenTimes_data){
                this.tittle = 'Golden Times'
                this.text = '(Um Site Para Fazer Pesquisa De Locações/Estabelecimentos Que Se Encontram No Google Maps) <br> Um projeto que apliquei o conceito de "tenho um problema, mas eu mesmo posso criar uma solução". Esse projeto surgiu via uma ideia que tive durante um período que oferecia serviços contatando diretamente os clientes, procurava os estabelecimentos manualmente pelo google maps, porém isso demandava tempo e esforço, <br> <br> o cansaço de rolar o scroll para obter mais resultados e as chances da maioria dos resultados não atenderem os requisitos que eu queria eram grandes, então eu mesmo tive a ideia de resolver esse problema criando uma plataforma que trouxesse os locais que eu queria com base nos filtros que eu precisasse e que eu pudesse salvar esses locais, copiar o numero já preparado para o contato e também bloquear locais que já tinham sido escolhidos anteriormente. <br> <br>  Também tive a ideia de fazer um sistema de grupos para que eu e meu sócio designer pudessemos trabalhar juntos para procurar tais locais. Tudo isso, mais uma vez, usando uma API própria. <br> as tecnologias usadas foram:<br> <span class="projects-span">(html, scss, js, vueCli, node, express, mongoDB, mongoose, aws-sdk, bcrypt, jw, nodemailer ).</span> <br> "o projeto realiza apenas uma requisição à API do Google Maps para obter os resultados da pesquisa, enquanto os filtros e a organização são tratados exclusivamente pela minha  API. Não houve necessidade de incorporar API do Google neste projeto."'
            }
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
    white-space: break-spaces;
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