<template>
    <div class="container-mobile">
        <div class="text-container">
            <TransitionGroup name="text-group">
                
 <div class="html-text" v-if="html">
        <h2>HTML</h2> <!-- tag abreviamento -->
        <h3>(HTML é a linguagem padrão de marcação utilizada para criar e estruturar páginas web.)</h3>
        <p>Iniciei meus estudos em meados de 2020, focando em aprender a semântica para criar páginas acessíveis a todo tipo de público, com ou sem deficiência visual.</p>
    </div>
    <div class="css-text" v-if="css">
        <h2>CSS</h2> <!-- tag sobre abreviamento -->
        <h3>(CSS é uma linguagem de estilo utilizada para controlar a aparência e o layout de uma página web.)</h3>
        <p>Comecei meus estudos em meados de 2020 junto com HTML, visando aprender a usar todo potencial do CSS sem depender da utilização de frameworks e linguagens de programação (JavaScript).</p>
    </div>
    <div class="js-text" v-if="js">
        <h2>JavaScript</h2>
        <h3>(JavaScript é uma linguagem de programação de alto nível e orientada a objetos amplamente utilizada para tornar as páginas web interativas e dinâmicas.)</h3>
        <p>Iniciei meus estudos em janeiro de 2021, comprei livro <!-- tag de citação --> JS(livro) <!-- / --> e então parti para os cursos. Comecei pela lógica de programação usando Portugol, depois de 1 mês, senti que estava pronto para partir para uma linguagem de verdade, decidi focar em JavaScript. Assim que terminei de estudar lógica, e sentia que estava competente com HTML e CSS, comprei cursos focados em JavaScript. Complementei meus estudos pesquisando, procurando conteúdos fora, e praticando, sempre fazendo tudo do zero, pois pela minha concepção, em um emprego você tem que estar preparado para fazer qualquer coisa que seja possível, e possível é o que basta para você conseguir fazer o que tem que ser feito mesmo não tendo sido "ensinado" antes.</p>
    </div>
    <div class="node-text" v-if="node">
        <h2>Node</h2>
        <h3>(Node.js é um ambiente de execução para JavaScript do lado do servidor. Ele permite que os desenvolvedores usem JavaScript para criar aplicações backend.)</h3>
        <p>Comecei meus estudos em 2021. Conforme eu ia aumentando o nível das aplicações que eu criava, vi a necessidade de um servidor para gerenciar cada uma delas. Comecei a estudar o conceito WEB, protocolos HTTP, e o conceito de API (API Rest). Após dominar esses assuntos, eu comecei a criar minhas próprias APIs utilizando frameworks como o Express e EJS. Após perceber como era simples utilizar JS no lado do servidor comecei a estudar mais a fundo e usar o Node.js para facilitar/automatizar tarefas próprias, assim manipulando os arquivos, dentre outras necessidades que eu tinha.</p>
    </div>
    <div class="mysql-text" v-if="mysql">
        <h2>MySQL</h2>
        <h3>(MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, amplamente utilizado em aplicações web e empresariais.)</h3>
        <p>Após avançar mais no Node.js comecei a entrar na parte de banco de dados, sendo meu primeiro contato com banco de dados relacionais. Conforme ia criando meus projetos fui aprendendo e dominando fazer relações de um para um, um para muitos e muitos para muitos o que me fez capaz de criar desde um simples blog e sessão de comentários, até um sistema de adição de amigos entre usuários.</p>
    </div>
    <div class="mongo-text" v-if="mongo">
        <h2>MongoDB</h2>
        <h3>(MongoDB é um banco de dados NoSQL orientado a documentos, projetado para armazenar, consultar e processar grandes volumes de dados.)</h3>
        <p>E depois de aprender sobre bancos de dados relacionais e criar projetos na prática utilizando eles, comecei a estudar banco de dados não relacionais, o que fez aumentar minha versatilidade e produtividade, utilizando o melhor dos dois mundos em projetos pude fazer sistemas complexos de maneira eficaz com uma infraestrutura superior em situações em que o MongoDB brilha em comparação aos bancos relacionais.</p>
    </div>
    <div class="knex-text" v-if="knex">
        <h2>KNEX.JS</h2>
        <h3>(Knex.js é um construtor de consultas SQL para Node.js que facilita a interação com bancos de dados relacionais.)</h3>
        <p>Knex é uma das bibliotecas que mais utilizo na criação de minhas API's. <!-- (colocar depois uma tag de citação ou link para demonstrar o que é API) --> Além de ser uma ótima ferramenta que torna o manuseio de dados algo mais sólido e prático, também possibilitou e me aprofundou a fazer migrações, criando as tabelas e colunas de uma forma automática e eficiente e mantendo o sistema muito mais sustentável e escalável.</p>
    </div>
    <div class="mongoose-text" v-if="mongoose">
        <h2>Mongoose</h2>
        <h3>(Mongoose é uma biblioteca Node.js que simplifica a interação com bancos de dados MongoDB, um banco de dados NoSQL baseado em documentos.)</h3>
        <p>Mongoose fica em par com o Knex nesse quesito de bibliotecas que mais utilizo também, a forma simples e direta de se conectar e criar schema e models sem a necessidade de você mesmo ter que preparar isso antes, fazem com que os projetos utilizando essa ferramenta sejam além de bastante eficientes, divertidos também. Como o MongoDB praticamente salva os dados em objetos em vez de tabelas e colunas, faz com que seja possível salvar vários tipos de dados distintos em um só objeto, aumenta a liberdade e possibilidades de alterar, remover e inserir quantidades de informações distintas de uma única vez, fez com que eu conseguisse criar sistema de gerenciamento de usuários e salas em tempo real, e tudo isso como se tudo fosse um simples arquivo puramente de JavaScript graças ao Mongoose.</p>
    </div>
    <div class="sequelize-text" v-if="sequelize">
        <h2>Sequelize</h2>
        <h3>(Sequelize é um ORM (Object-Relational Mapping) para Node.js e JavaScript, que facilita a interação com bancos de dados relacionais.)</h3>
        <p>Embora minha experiência com o Sequelize não seja tão recente ou grande comparado às citadas anteriormente, tive a oportunidade de trabalhar com ele em projetos anteriores. Compreendo os conceitos fundamentais e a estrutura de código associada ao Sequelize. Sou capaz e estou disposto a refrescar e aprofundar meu conhecimento, caso a utilização do Sequelize seja necessária em futuros projetos.</p>
    </div>
    <div class="sass-text" v-if="sass">
        <h2>SASS</h2>
        <h3>SASS é uma linguagem de estilos de CSS estáticos misturados com linguagem de programação para facilitar a gestão de estilos.</h3>
        <p>Já utilizei SASS em meus projetos, para facilitar e deixar mais prático o desenvolvimento deles . Posso me aprofundar mais no assunto caso seja necessário.</p>
    </div>
    <div class="vue-text" v-if="vue">
        <h2>Vue.js</h2>
        <h3>(Vue.js é um framework de JavaScript que facilita a criação de interfaces de usuário interativas e reativas, amplamente usado em criação de SPA (single page application))</h3>
        <p>Iniciei os estudos em 2022, após criar vários projetos "na mão" usando JavaScript, HTML e CSS puro. Decidi que já poderia e que já estava na hora de utilizar algum framework, entre React, Angular e Vue, Vue foi o que me conquistou, pelo fato dele ser simples, fácil de aprender e muito intuitivo. Conforme eu fui utilizando Vue, percebi que saber e dominar as bases (HTML, CSS, JS) realmente foi essencial para tornar possível tudo que criei utilizando Vue sem ter limitações ou erros permanentes, saber os conceitos da DOM e JS fizeram com que problemas e erros fossem facilmente superados. Criei projetos usando Vuex, Vue Router, Vue CLI e CDN. É minha ferramenta favorita e sempre estou evoluindo com ela.</p>
    </div>
    <div class="nuxt-text" v-if="nuxt">
        <h2>Nuxt.js</h2>
        <h3>(Nuxt.js é um framework de aplicativo web construído em cima de Vue.js que facilita a criação de aplicações Vue universais e otimizadas para SEO)</h3>
        <p>Iniciei os estudos em 2022 alguns meses após ter usado Vue em projetos pessoais. Como buscava fazer algo grande, resolvi dar uma olhada nesse framework. Com suas funcionalidades de server-side-rendering e a forma de manipular as rotas por meio de diretórios, usar componentes sem ter que importá-los e o jeito simples de usar o Vuex, junto com as opções de middlewares e layout, fez com que fosse a ferramenta perfeita para criar meu projeto de assistir vídeos ao mesmo tempo. Sistema de banimento de salas, assim como deslogamento, ficaram muito mais eficazes utilizando a funcionalidade do server-side. Assim como o asyncData e fetch para a busca de arquivos. Uma ótima ferramenta e uma mão na roda para criar aplicações grandes e complexas.</p>
    </div>
    <div class="webpack-text" v-if="webpack">
        <h2>Webpack</h2>
        <h3> (Webpack é uma ferramenta de empacotamento (bundling) para aplicações web. Ele agrupa e organiza arquivos de código-fonte)</h3>
        <p>Comecei meus estudos no final de 2021 com o objetivo de ter uma compreensão mais racional e lógica de como funcionavam os imports e builders. Porque como eu vi que tanto React, tanto o Vue e Angular e vários outros frameworks/bibliotecas utilizam-se dele, quis me aprofundar um pouco antes na base para ficar mais preparado e ter uma compreensão melhor para pensar fora da caixa caso encontrasse problemas usando tais ferramentas.</p>
    </div>
    <div class="socket-text" v-if="socket">
        <h2>Socket.io</h2>
        <h3>(Socket.IO é uma biblioteca JavaScript que permite a comunicação em tempo real)</h3>
        <p>Comecei meus estudos em meados de 2021 criando interações entre chats e evolui o meu nível ao criar toda uma aplicação baseada em comunicação em tempo real, indo de mensagens de chat para eventos de vídeos, sistema de administração e requisições de amizade, o que me deu ampla capacidade de raciocínio e modo de utilização dos eventos do Socket.IO para criar as funcionalidades desejadas.</p>
    </div>
    <div class="info-text" v-if="info">
        <h2>Adicional</h2>
        <p>Em alguns dos meus projetos, eu também utilizei Sequelize, o que eu não irei adicionar aqui, pois foi há 1 ano, não absorvi completamente pelo tempo e prática que tive o utilizando, porém tenho familiaridade, já tive e ainda sei resolver alguns problemas do Sequelize, e entendo o código se eu rever meu código ou ver de terceiros, também consigo criar um novo com essa base dos meus projetos antigos. <br>
        Consumo de API, API/Rest/Restful entre outros eu também aprendi e absorvi e pratiquei, não irei adicioná-los aqui pois, sinto que seria muitas "skills" sem um propósito direto, apenas para "aumentar a quantidade", não que API'S sejam desnecessárias ou deveriam ser deixadas de mão ou não tenham importância, longe e completamente longe disso, é uma das coisas mais importantes caso você queira mostrar conhecimentos, mas o uso e o quanto sei e o que eu criei, vai ficar nítido e mais claro nos projetos do que aqui, então optei por destacar isso na descrição dos projetos, e no fim, a melhor demonstração será o próprio projeto.</p>
    </div>

    
    </TransitionGroup>
                    </div>
                    <div class="container-skills">
                        <div class="general-container">
                            <div class="icon-containers-mobile" @click="setMousePosition" @mousedown="DragStart($event)" @touchstart="DragStart($event)" @mousemove="Drag($event)" @touchmove="Drag($event)" @mouseup="StopDrag($event)" @mouseleave="StopDrag($event)" @touchend="StopDrag($event)">
                                <span :class="{ spanHidden, spanNotHidden }" v-show="spanNotHidden">Isso é tudo <br> (por enquanto)</span>
                                <Transition name="animationIcons">
                                    <div class="icons" v-if="mountedBar">
                                         <IconMenu :class="{ 'html': true, 'absolute': true, 'zindex-up': true, 'active': html }" prefixProps="fab" iconNameProps="html5" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="html"></IconMenu>
                                         <IconMenu :class="{ 'css': true, 'absolute': true, 'zindex-up': true, 'active': css }" prefixProps="fab" iconNameProps="css3" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="css"></IconMenu>
                                         <IconMenu :class="{ 'js': true, 'absolute': true, 'zindex-up': true, 'active': js }" prefixProps="fab" iconNameProps="js" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="js"></IconMenu>
                                         <IconMenu :class="{ 'node': true, 'absolute': true, 'zindex-up': true, 'active': node }" prefixProps="fab" iconNameProps="node-js" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="node"></IconMenu>
                                         <IconMenu :class="{ 'mysql': true, 'absolute': true, 'zindex-up': true, 'active': mysql }" prefixProps="fas" iconNameProps="database" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="mysql"></IconMenu>
                                         <IconMenu :class="{ 'mongo': true, 'absolute': true, 'zindex-up': true, 'active': mongo }" prefixProps="fas" iconNameProps="leaf" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="mongo"></IconMenu>
                                         <CostumIcon v-for="(icon, index) in iconArrayGroup1" :key="index" :class="{ 'costumIcon': true, 'absolute': true, 'zindex-up': true, 'active': knex }" @click.stop="slideToIcon" :iconNameProps="icon.iconName" :activeEffectProps="icon.activeEffectProps" sizeProps="4rem" @costumIconClicked="costumIconToggleActive($event), iconClicked($event)"  :indexIconProps="index" :iconColorProps="false" :hoverProps="icon.hoverProps" :whiteProps="icon.white" :fillProps="icon.fillProps"></CostumIcon>
                                         <IconMenu :class="{ 'vue': true, 'absolute': true, 'zindex-up': true, 'active': vue }" prefixProps="fab" iconNameProps="vuejs" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="vue"></IconMenu>
                                         <IconMenu :class="{ 'sass': true, 'absolute': true, 'zindex-up': true, 'active': sass }" prefixProps="fab" iconNameProps="sass" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="sass"></IconMenu>
                                         <CostumIcon v-for="(icon, index) in iconArrayGroup2" :key="index" :class="{ 'costumIcon': true, 'absolute': true, 'zindex-up': true, 'active': knex }" @click.stop="slideToIcon" :iconNameProps="icon.iconName" :activeEffectProps="icon.activeEffectProps" sizeProps="4rem" @costumIconClicked="costumIconToggleActive($event), iconClicked($event)" :indexIconProps="index" :iconColorProps="false" :hoverProps="icon.hoverProps" :whiteProps="icon.white" :fillProps="icon.fillProps"></CostumIcon>
                                         <IconMenu v-show="showInfo" :class="{ 'info': true, 'absolute': true, 'zindex-up': info, 'active': info }" prefixProps="fas" iconNameProps="info-circle" @click.stop="slideToIcon" @clicked="iconClicked($event), costumIconToggleActive($event)" nameProps="info"></IconMenu>
                                    </div>
                                </Transition>
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
            nuxt: false,
            webpack: false,
            socket: false,
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
            prevIconClickedPosition: 0,
            canSlideToLeft: false,
            mountedBar: false,

        }
    },
    mounted() {
        this.html = true
        this.mountedBar = true
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
            name === 'nuxt' ? this.nuxt = true : this.nuxt = false
            name === 'webpack' ? this.webpack = true : this.webpack = false
            name === 'socket' ? this.socket = true : this.socket = false
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

        
        slideToIcon($event){
            let currentPosition = $event.pageX || $event.touches[0].pageX
            let roundCurrentPositon = Math.round(currentPosition)
            let roundPrevIconClickedPosition = Math.round(this.prevIconClickedPosition)
            
            setTimeout(() => {
                if(this.IsDragging) return
                if(roundCurrentPositon > roundPrevIconClickedPosition) {
                    this.currentTranslate -= 70
                    this.setTranslate()
                    this.movedBy()
                    return
                }
                if(roundCurrentPositon < roundPrevIconClickedPosition) {
                    this.currentTranslate += 70
                    this.setTranslate()
                    this.movedBy()
                    return
                }
                if(roundCurrentPositon == roundPrevIconClickedPosition) {
                    let half = this.getHalfWidth()
                    console.log(half, roundCurrentPositon, roundCurrentPositon > half, this.currentTranslate)
                    if (roundCurrentPositon > half) {
                        this.currentTranslate -= 70
                        this.setTranslate()
                        this.movedBy()
                        return
                    }
                    if(roundCurrentPositon < half){
                        if(this.canSlideToLeft) this.currentTranslate += 70
                        if(!this.canSlideToLeft) this.currentTranslate -= 70
                        this.setTranslate()
                        this.movedBy()
                        return
                    }
                    if(half == roundCurrentPositon){
                        this.movedBy()
                        return
                    }
                }
            }, 50);
        },
        getHalfWidth(){
            let half = document.querySelector('.icon-containers-mobile').offsetWidth
            return Math.round(half / 2)
        },

        moveToIcon($event) {
            setTimeout(() => {
                if (this.IsDragging) return
                let currentPosition = $event.pageX || $event.touches[0].pageX
                if (Math.round(currentPosition) > Math.round(this.prevIconClickedPosition)) {
                    this.currentTranslate -= 70
                    console.log('é maior', this.currentTranslate)
                    this.setTranslate()
                    this.prevIconClickedPosition = currentPosition - 70
                    this.prevTranslate = this.currentTranslate

                    return
                }
                if (Math.round(currentPosition) < Math.round(this.prevIconClickedPosition)) {
                    this.currentTranslate += 70
                    this.setTranslate()
                    this.prevIconClickedPosition = currentPosition + 70
                    this.prevTranslate = this.currentTranslate
                    return
                }
                if (Math.round(currentPosition) === Math.round(this.prevIconClickedPosition)) {
                    let screen = document.querySelector('body').offsetWidth
                    let half = screen / 2
                    if (half > Math.round(currentPosition)) {
                        this.currentTranslate += 70
                        this.setTranslate()
                        this.prevIconClickedPosition = currentPosition + 70
                        this.prevTranslate = this.currentTranslate
                        return

                    }
                    else {
                        this.currentTranslate -= 70
                        this.setTranslate()
                        this.prevIconClickedPosition = currentPosition
                        this.prevTranslate = this.currentTranslate

                        return
                    }


                }
                this.prevIconClickedPosition = currentPosition
                this.prevTranslate = this.currentTranslate
            }, 50);
        },
        Drag($event){
            if(!this.IsDragging) return
            let currentPosition = $event.clientX || $event.touches[0].clientX
            this.currentTranslate = (this.prevTranslate + (currentPosition - this.startMousePosition))
            this.startMousePosition <= currentPosition ? this.currentTranslate += 33 : this.currentTranslate -= 33
            this.setTranslate()
        },
        StopDrag(){
            this.prevIconClickedPosition = this.startMousePosition
            if(!this.IsDragging) return
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
            console.log(distanceBorderLeft)
            if(distanceBorderLeft <= -231) {
                this.canSlideToLeft = true
            }
            if(distanceBorderLeft >= 33) {
                this.currentTranslate = 0
                this.prevTranslate = 0
                this.startMousePosition = 0
                icons.style.transform = `translateX(${this.currentTranslate}px)`
                this.canSlideToLeft = false
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
.sass-text, .vue-text, .nuxt-text, 
.webpack-text, .socket-text {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
}
.text-container h2 {
    color: #0085FF;
    font-size: 1.9em;
    margin-top: 20px;
}

.text-container h3 {
    margin: 5px 0px;
    font-size: 1rem;
    font-weight: 100;
    /* text-shadow: 0px 0px 1px white; */
    color: var(--texto-padrao);
}
.text-container p {
    color: white;
    width: 90%;
    white-space: break-spaces;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 290px;
    margin-top: 3px;
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
/* .container-mobile .html {
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
 
} */

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
.animationIcons-enter-active {
    transition: 0.7s !important;
}
.animationIcons-enter-from {
    transform: translateX(350px) !important;
}
.animationIcons-enter-to {
    transform: translateX(0px) !important;

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
    overflow: hidden !important;
    transform:translate(-50%, 0%) scale(1);

    
}
.text-group-enter-to{
    width: 100%;
    opacity: 1;
    overflow: hidden;
    transform:translate(0%, 0%) scale(1);
    
}
.text-group-leave-from{
    width: 100%;
    opacity: 1;
    overflow: hidden !important;
    transform:translate(0%, 0%) scale(1);
}
.text-group-leave-to{
    width: 0%;
    transform:translate(-100%, -0%) scale(1);
    opacity: 0;    
    overflow: hidden;
}

</style>