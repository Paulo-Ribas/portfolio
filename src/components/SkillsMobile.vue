<template>
    <div class="container-mobile">
                    <div class="text-container">
                        <TransitionGroup name="text-group">
                
                        <div class="html-text" v-if="html">
                            <h2>HTML</h2> <!-- tag abreviamento -->
                            <p>Inicie meus estudos em meados de 2020, focando em aprender a semantica para criar paginas acessiveis a todo tipo de publico, com ou sem deficiencia visual.</p>
                        </div>
                        <div class="css-text" v-if="css">
                            <h2>CSS</h2> <!-- tag sobre abreviamento -->
                            <p>Comecei meus estudos em meados de 2020 junto com html, visando aprender a usar todo potencial do css sem depender da utilização de frameworks e linguagens de programação(JavaScript).</p>
                        </div>
                        <div class="js-text" v-if="js">
                            <h2>Java Script</h2>
                            <p>iniciei meus estudos em janeiro de 2021, comprei livro <!-- tag de citação --> js(livro) <!-- / --> e então parti para os cursos, começei pela lógica de programação usando portugol, depois de 1 mês, senti que estava pronto para partir para uma linguagem de verdade, decidi focar em javascript, assim que eu terminei de estudar lógica, e sentia que estava competente com html e css, comprei cursos focados em javascript, saldjsaodhosadhsa, jsdsajdasdhsadhs, complementei meus estudos pesquisando, procurando conteudos fora, e praticando, sempre fazendo tudo do 0 pois pela minha consepção, em um emprego você tem que está preparado para fazer qualquer coisa que seja possivel, e possivel é o que basta para você conseguir fazer o que tem que ser feito mesmo não tendo sido "ensinado" antes</p>   
                        </div>
                        <div class="node-text" v-if="node">
                            <h2>Node</h2>
                            <p>>Comecei meus estudos em 2021, conforme eu ia aumentando o nivel das aplicações que eu criava, vi a necessidade de um servidor para gerenciar cada uma delas. Comecei a estudar o conceito WEB, protocolos HTTP, e o conceito de API(APIRest), Após dominar esses assuntos, eu comecei a criar minhas proprias APIs utilizando frameworks como o express e ejs. Após perceber como era simples utilizar JS no lado do servidor comecei a estudar mais a fundo e usar o NODE.js para facilitar/automatizar tarefas proprias, assim manipulando os arquivos, dentre outras necessidades que eu tinha.</p>
                        </div>
                        <div class="mysql-text" v-if="mysql">
                            <h2>Mysql</h2>
                            <p>Após avançar mais no node.js comecei a entrar na parte de banco de dados, sendo meu primeiro contato banco de dados relacionais, conforme ia criando meus projetos fui aprendendo e dominando fazer relações de um para um, um para muitos e muitos para muitos o que me fez capaz de criar desde um simples blog e sessão de comentários, até um sistema de adição de amigos entre usuarios</p>
                        </div>
                        <div class="mongo-text" v-if="mongo">
                            <h2>MongoDB</h2>
                            <p>E depois de aprender sobre bancos de dados relacionais e criar projetos na pratica utilizando eles, comecei a estudar banco de dados não relacionais, o que fez aumentar minha versatilidade e produtividade, utilizando o melhor dos dois mundos em projetos pude fazer sistemas complexos de maneira eficaz com uma infraestrutura  superior em situações em que o MongoDb brilha em comparação aos bancos relacionais</p>
                        </div>
                        <div class="knex-text" v-if="knex">
                            <h2>KNEX.JS</h2>
                            <p>knex é uma das biblioteca que mais utilizo na criação de minhas api's <!-- (colocar depois uma tag de citação ou link para demonstrar o que é api) -->, além de ser uma ótima ferramenta que torna o manuzeio de dados algo mais sólido e prático, também possibilitou e me aprofundou a fazer migrações, criando as talas e colunas de uma forma automatica e eficiente e mantendo o sistema muito mais sustentavel e escalavel </p>
                        </div>
                        <div class="mongoose-text" v-if="mongoose">
                            <h2>Mongoose</h2>
                            <p>mongoose fica em par com o knex nesse quesito de bibliotecas que mais utilizo também, a forma simples e direta de se conectar e criar schema e models sem a necessidade você mesmo ter que preparar isso antes, fazem com que os projetos utilizando essa ferramenta sejam além de bastante eficientes, divertidos também, como mongodb praticamente salva os dados em objetos invés de tabelas e colunas, faz com que seja possivel salvar vários tipos de dados destintos em um só objeto, aumenta a liberdade e possibilidades de alterar, remover e inserir quantidades de informações distintas em uma unica vez, fez com que eu conseguisse criar sistema de gerenciamento de usuarios e salas em tempo real, e tudo isso como se tudo fosse um simples arquivo puramente de JavaScript graças ao mongoose</p>
                        </div>
                        <div class="sequelize-text" v-if="sequelize">
                            <h2>Sequelize</h2>
                            <p>Embora minha experiência com o Sequelize não seja tão recente ou grande comparado as citadas anteriormentes, tive a oportunidade de trabalhar com ele em projetos anteriores. Compreendo os conceitos fundamentais e a estrutura de código associada ao Sequelize. Sou capaz e estou disposto a refrescar e aprofundar meu conhecimento, caso a utilização do Sequelize seja necessária em futuros projetos.</p>
                        </div>
                        <div class="sass-text" v-if="sass">
                            <h2>SASS</h2>
                            <p>AAAAA EU ESQUECI QUE APRENDI ISSO</p>
                        </div>
                        <div class="vue-text" v-if="vue">
                            <h2>Vue.Js</h2>
                            <p>iniciei os estudos em 2022, após criar vários projetos a "mão" usando javascript, html e css puro, decidi que já poderia e que já estava na hora de utilizar algum um framework, dentre react, angular e vue, vue foi o que me conquistou, pelo fato dele ser simples facil de aprender e muito intuitivo. Conforme eu fui utilizando vue, percebi que saber e dominar as bases (html, css, js) realmente foi enssensial para tornar possivel tudo que criei utilizando vue sem ter limitações ou erros permanentes, saber os conceitos da DOM e js fizeram com que problemas e erros fossem facilmente superados, criei projetos usando vuex, vue router, vue cli e cdn,  é minha ferramenta favorita e sempre estou evoluindo com ela</p>
                        </div>
                         <div class="vue-text" v-if="vue">
                            <h2>Vue.Js</h2>
                            <p>iniciei os estudos em 2022, após criar vários projetos a "mão" usando javascript, html e css puro, decidi que já poderia e que já estava na hora de utilizar algum um framework, dentre react, angular e vue, vue foi o que me conquistou, pelo fato dele ser simples facil de aprender e muito intuitivo. Conforme eu fui utilizando vue, percebi que saber e dominar as bases (html, css, js) realmente foi enssensial para tornar possivel tudo que criei utilizando vue sem ter limitações ou erros permanentes, saber os conceitos da DOM e js fizeram com que problemas e erros fossem facilmente superados, criei projetos usando vuex, vue router, vue cli e cdn,  é minha ferramenta favorita e sempre estou evoluindo com ela</p>
                        </div>
                         <div class="vue-text" v-if="webpack">
                            <h2>Vue.Js</h2>
                            <p>iniciei os estudos em 2022, após criar vários projetos a "mão" usando javascript, html e css puro, decidi que já poderia e que já estava na hora de utilizar algum um framework, dentre react, angular e vue, vue foi o que me conquistou, pelo fato dele ser simples facil de aprender e muito intuitivo. Conforme eu fui utilizando vue, percebi que saber e dominar as bases (html, css, js) realmente foi enssensial para tornar possivel tudo que criei utilizando vue sem ter limitações ou erros permanentes, saber os conceitos da DOM e js fizeram com que problemas e erros fossem facilmente superados, criei projetos usando vuex, vue router, vue cli e cdn,  é minha ferramenta favorita e sempre estou evoluindo com ela</p>
                        </div>
                         <div class="nuxt-text" v-if="nuxt">
                            <h2>Vue.Js</h2>
                            <p>iniciei os estudos em 2022, após criar vários projetos a "mão" usando javascript, html e css puro, decidi que já poderia e que já estava na hora de utilizar algum um framework, dentre react, angular e vue, vue foi o que me conquistou, pelo fato dele ser simples facil de aprender e muito intuitivo. Conforme eu fui utilizando vue, percebi que saber e dominar as bases (html, css, js) realmente foi enssensial para tornar possivel tudo que criei utilizando vue sem ter limitações ou erros permanentes, saber os conceitos da DOM e js fizeram com que problemas e erros fossem facilmente superados, criei projetos usando vuex, vue router, vue cli e cdn,  é minha ferramenta favorita e sempre estou evoluindo com ela</p>
                        </div>
                         <div class="socket-text" v-if="socket">
                            <h2>Vue.Js</h2>
                            <p>iniciei os estudos em 2022, após criar vários projetos a "mão" usando javascript, html e css puro, decidi que já poderia e que já estava na hora de utilizar algum um framework, dentre react, angular e vue, vue foi o que me conquistou, pelo fato dele ser simples facil de aprender e muito intuitivo. Conforme eu fui utilizando vue, percebi que saber e dominar as bases (html, css, js) realmente foi enssensial para tornar possivel tudo que criei utilizando vue sem ter limitações ou erros permanentes, saber os conceitos da DOM e js fizeram com que problemas e erros fossem facilmente superados, criei projetos usando vuex, vue router, vue cli e cdn,  é minha ferramenta favorita e sempre estou evoluindo com ela</p>
                        </div>
                         <div class="info-text" v-if="info">
                            <h2>Adicional</h2>
                            <p>
                                em alguns dos meus projetos, eu também utilizei sequelize, o que eu não irei adicionar aqui, pois foi há 1 ano, não absorvi completamente pelo tempo e pratica que tive o utilizando, porém tenho familiaridade, já tive e ainda sei resolver alguns problemas do sequelize, e entendo o código se eu rever meu código ou ver de terceiros, também consigo criar um novo com essa base dos meus projetos antigos. <br>
                                consumo de API, API/Rest/Restful entre outros eu também aprendi e absorvi e pratiquei, não irei adiciona-los aqui pois, sinto que seria muitas "skills" sem um propósito direto, apenas para "aumentar a quantidade", não que API'S sejam desnecessárias ou deveriam ser deixado de mão ou não tenham importancia, longe e completamente longe disso, é umas das coisas mais importantes caso você queira mostrar conhecimentos, mas o uso e o quanto sei e o que eu criei, vai ficar nitido e mais claro nos projetos do que aqui, então opitei por destacar isso na descrição dos projetos, e no fim, a melhor demonstração que será o próprio projeto. 
                            </p>
                        </div>
    
                        </TransitionGroup>
                    </div>
                    <div class="container-skills">
                        <div class="general-container">
                            <div class="icon-containers-mobile" @click="setMousePosition" @mousedown="DragStart($event)" @touchstart="DragStart($event)" @mousemove="Drag($event)" @touchmove="Drag($event)" @mouseup="StopDrag($event)" @mouseleave="StopDrag($event)" @touchend="StopDrag($event)">
                                <span :class="{ spanHidden, spanNotHidden }" v-show="spanNotHidden">Isso é tudo <br> (por enquanto)</span>
                                <div class="icons">
                                     <IconMenu :class="{ 'html': true, 'absolute': true, 'zindex-up': true, 'active': html }" prefixProps="fab" iconNameProps="html5" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="html"></IconMenu>
                                     <IconMenu :class="{ 'css': true, 'absolute': true, 'zindex-up': true, 'active': css }" prefixProps="fab" iconNameProps="css3" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="css"></IconMenu>
                                     <IconMenu :class="{ 'js': true, 'absolute': true, 'zindex-up': true, 'active': js }" prefixProps="fab" iconNameProps="js" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="js"></IconMenu>
                                     <IconMenu :class="{ 'node': true, 'absolute': true, 'zindex-up': true, 'active': node }" prefixProps="fab" iconNameProps="node-js" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="node"></IconMenu>
                                     <IconMenu :class="{ 'mysql': true, 'absolute': true, 'zindex-up': true, 'active': mysql }" prefixProps="fas" iconNameProps="database" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="mysql"></IconMenu>
                                     <IconMenu :class="{ 'mongo': true, 'absolute': true, 'zindex-up': true, 'active': mongo }" prefixProps="fas" iconNameProps="leaf" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="mongo"></IconMenu>
                                     <CostumIcon v-for="(icon, index) in iconArrayGroup1" :key="index" :class="{ 'costumIcon': true, 'absolute': true, 'zindex-up': true, 'active': knex }" :iconNameProps="icon.iconName" :activeEffectProps="icon.activeEffectProps" sizeProps="4rem" @costumIconClicked="costumIconToggleActive($event), iconClicked($event)"  :indexIconProps="index" :iconColorProps="false" :hoverProps="icon.hoverProps" :whiteProps="icon.white" :fillProps="icon.fillProps"></CostumIcon>
                                     <IconMenu :class="{ 'vue': true, 'absolute': true, 'zindex-up': true, 'active': vue }" prefixProps="fab" iconNameProps="vuejs" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="vue"></IconMenu>
                                     <IconMenu :class="{ 'sass': true, 'absolute': true, 'zindex-up': true, 'active': sass }" prefixProps="fab" iconNameProps="sass" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="sass"></IconMenu>
                                     <CostumIcon v-for="(icon, index) in iconArrayGroup2" :key="index" :class="{ 'costumIcon': true, 'absolute': true, 'zindex-up': true, 'active': knex }" :iconNameProps="icon.iconName" :activeEffectProps="icon.activeEffectProps" sizeProps="4rem" @costumIconClicked="costumIconToggleActive($event), iconClicked($event)" :indexIconProps="index" :iconColorProps="false" :hoverProps="icon.hoverProps" :whiteProps="icon.white" :fillProps="icon.fillProps"></CostumIcon>
                                     <IconMenu v-show="showInfo" :class="{ 'info': true, 'absolute': true, 'zindex-up': info, 'active': info }" prefixProps="fas" iconNameProps="info-circle" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="info"></IconMenu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>

import IconMenu from '../components/Icons.vue'
import CostumIcon from "../components/svg/CostumIcon.vue";
export default {
    name: 'Skills-Mobile',
    components: {
        IconMenu,
        CostumIcon,

    },
    props: {
        costumIconsArrayProps: Array,
    },
    data() {
        return {
            html: false,
            css: false,
            js: false,
            node: false,
            mysql: false,
            mongo: false,
            knex: false,
            mongoose: false,
            sequelize: false,
            sass: false,
            vue: false,
            info: false,
            spanHidden: true,
            spanNotHidden: false,
            showInfo: false,
            costumIconsArray: this.costumIconsArrayProps,
            iconArrayGroup1: this.costumIconsArrayProps[0],
            iconArrayGroup2: this.costumIconsArrayProps[1],
            startMousePosition: 0,
            prevTranslate: 0,
            currentTranslate: 0,
            IsDragging: false,

        }
    },
    mounted() {
        this.html = true
    },
    methods: {
        iconClicked(name) {
            console.log('icon clicked', name)
            name === 'html' ? this.html = true : this.html = false
            name === 'css' ? this.css = true : this.css = false
            name === 'js' ? this.js = true : this.js = false
            name === 'node' ? this.node = true : this.node = false
            name === 'mysql' ? this.mysql = true : this.mysql = false
            name === 'mongo' ? this.mongo = true : this.mongo = false
            name === 'knex' ? this.knex = true : this.knex = false
            name === 'mongoose' ? this.mongoose = true : this.mongoose = false
            name === 'sequelize' ? this.sequelize = true : this.sequelize = false
            name === 'sass' ? this.sass = true : this.sass = false
            name === 'vue' ? this.vue = true : this.vue = false
            name === 'info' ? this.info = true : this.info = false
        },
        costumIconToggleActive(iconName) {
            let arrayIconNames1 = this.iconArrayGroup1.map(icon => {
                return { iconName: icon.iconName, className: icon.className, effectHoverProps: iconName === icon.iconName, activeEffectProps: true, white: icon.iconName === iconName, hoverProps: icon.hoverProps, fillProps: icon.fillProps }
            })
            let arrayIconNames2 = this.iconArrayGroup2.map(icon => {
                console.log(icon.iconName, iconName)
                return { iconName: icon.iconName, className: icon.className, effectHoverProps: iconName === icon.iconName, activeEffectProps: true, white: icon.iconName === iconName, hoverProps: icon.hoverProps, fillProps: icon.fillProps }
            })
            this.iconArrayGroup1 = arrayIconNames1
            this.iconArrayGroup2 = arrayIconNames2

        },
        DragStart($event){
            this.IsDragging = true
            this.startMousePosition = $event.pageX || $event.touches[0].pageX

        },
        Drag($event){
            if(!this.IsDragging) return
            let currentPosition = $event.clientX || $event.touches[0].clientX
            this.currentTranslate = (this.prevTranslate + (currentPosition - this.startMousePosition))
            this.startMousePosition >= currentPosition ? this.currentTranslate -= 33 : this.currentTranslate += 33
            this.setTranslate()
        },
        StopDrag($event){
            let currentPosition = $event.clientX || $event.touches[0].clientX
            this.startMousePosition >= currentPosition ? this.currentTranslate -= 33 : this.currentTranslate += 33
            this.setTranslate()

            this.prevTranslate = this.currentTranslate
            this.IsDragging = false
            this.startMousePosition = 0
            this.movedBy()

        },
        setTranslate(){
            let icons = document.querySelector('.icons')
            icons.style.transform = `translateX(${this.currentTranslate}px)`
        },
        movedBy() {
            let icons = document.querySelector('.icons')
            let iconsContainer = document.querySelector('.icon-containers-mobile')
            let distanceBorderLeft = Math.round(icons.getBoundingClientRect().left)
            let distanceBorderRight = Math.round(icons.getBoundingClientRect().right)
            console.log(distanceBorderRight)

            if(distanceBorderLeft >= 33) {
                this.currentTranslate = 0
                this.prevTranslate = 0
                this.startMousePosition = 0
                icons.style.transform = `translateX(${this.currentTranslate}px)`
            }
             if(distanceBorderRight <= 340) {
                this.currentTranslate =  iconsContainer.offsetWidth - icons.offsetWidth
                this.prevTranslate = this.currentTranslate
                icons.style.transform = `translateX(${this.currentTranslate}px)`
            }

        }
    }
}
</script>

<style scoped>
    .container-mobile {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

}
.text-container {
    margin-top: 100px;
    width: 99%;
    height: 100%;
    color: white;
    display: flex;
    overflow: hidden;
 
}
.html-text, .css-text, .js-text, 
.node-text, .mysql-text, .mongo-text,
.knex-text, .sequelize-text, .mongoose-text,
.sass-text, .vue-text {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.text-container h2 {
    color: #0085FF;
    font-size: 1.9em;
    margin: 20px 0px;
}
.text-container p {
    color: white;
    width: 90%;
    white-space: break-spaces;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 290px;
}
.container-mobile .container-skills {
    width: 100%;
    height: 25%;
    padding-right: 5px;
    position: absolute;
    top: 0%;
    
    
}
.container-mobile .general-container {
    width: 100%;
    height: 100%;
    position: unset;
    max-height: 100px;
    
}

.container-mobile .text-container {
    padding: 0% 0%;
}
.container-mobile .html {
}
.container-mobile .css{
   
}
.container-mobile .js{
   

}
.container-mobile .node{
    
}
.container-mobile .mysql{
 
}
.container-mobile .mongo{
  
}
.container-mobile .knex{

}
.container-mobile .mongoose{

}
.container-mobile .sequelize{
   
}
.container-mobile .sass {
 

}
.container-mobile .vue{

}
.container-mobile .info {
 
}

.icon-containers-mobile {
    position: relative;
    right: 0%;
    background: none;
    width: 101%;
    height: 100%;
    max-height: 80px;
    border-radius: 0%;
    font-size: 2em;
    overflow: hidden;
    z-index: 3;
    transform: rotate(3deg);
    border-bottom: 3px solid #0085FF;
}
.icon-containers-mobile .icons{
    position: relative;
    left: 0%;
    width: fit-content;
    max-height: unset;
    height: 100%;
    border-radius: 0%;
    font-size: 2em;
    color:    #0085FF;
    min-width: unset;
    border-left: none;
    display: flex;
    gap: 30px;
    transform: translateX(0px);
    display: flex;
    align-items: center;
    transition: all 0.33s ease-out 0s;
}
.container-mobile .absolute {
    position: relative !important;
}

@media screen and (max-height: 380px) {
    .text-container {
        margin-top: 70px;
    }
    .text-container p {
    color: white;
    width: 90%;
    white-space: break-spaces;
    overflow-y: auto;
    max-height: 140px;
}
}
.active {
    color: white;
}
.text-group-enter-active{
    transition-delay: 0.1s;
    transition: 0.5s;
}
 .text-group-leave-active {
  transition: 0.5s;

}

.text-group-enter-from{
    width: 0%;
    opacity: 0.1;
    transform:translate(-50%, 0%) scale(1);

    
}
.text-group-enter-to{
    width: 100%;
    opacity: 1;
    transform:translate(0%, 0%) scale(1);
    
}
.text-group-leave-from{
    width: 100%;
    opacity: 1;
    transform:translate(0%, 0%) scale(1);
}
.text-group-leave-to{
    width: 0%;
    transform:translate(-100%, -0%) scale(1);
    opacity: 0;    
}

</style>