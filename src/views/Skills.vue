<template>
    <section id="skills">
        <MqResponsive class="menu" :target="['xl', 'sm', 'md', 'lg', 'xxl']">
            <MainMenu :MenuFixoProps="true" :ActivatedProps="'sk'"></MainMenu>
        </MqResponsive>
        <MqResponsive class="menu" target="xs"> 
            <MainMenuMobile :closedProps="true" :ActivatedProps="'sk'"/>
        </MqResponsive>
        <MqResponsive class="mq" :target="['xl', 'sm', 'md', 'lg', 'xxl']">
            <div class="container">
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
        <p>AAAAA EU ESQUECI QUE APRENDI ISSO</p>
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
                        <div class="scroll-container" @scroll="scrolled($event)">
                            <div class="scroll">
                                <span class="point">.</span>
                            </div>
                        </div>
                        <div class="icon-containers">
                            <span :class="{ spanHidden, spanNotHidden}" v-show="spanNotHidden">Isso é tudo <br> (por enquanto)</span>
                            <div class="icons">
                                 <IconMenu :class="{'html': true, 'absolute': true, 'zindex-up': true, 'active': html}" prefixProps="fab" iconNameProps="html5" @clicked="iconClicked" nameProps="html"></IconMenu>
                                 <IconMenu :class="{'css':true, 'absolute':true, 'zindex-up': true, 'active': css}" prefixProps="fab" iconNameProps="css3" @clicked="iconClicked" nameProps="css"></IconMenu>
                                 <IconMenu :class="{'js':true, 'absolute':true, 'zindex-up': true, 'active': js}" prefixProps="fab" iconNameProps="js" @clicked="iconClicked" nameProps="js"></IconMenu>
                                 <IconMenu :class="{'node':true, 'absolute':true, 'zindex-up': true, 'active': node}" prefixProps="fab" iconNameProps="node-js" @clicked="iconClicked" nameProps="node"></IconMenu>
                                 <IconMenu :class="{'mysql':true, 'absolute':true, 'zindex-up': true, 'active': mysql}" prefixProps="fas" iconNameProps="database" @clicked="iconClicked" nameProps="mysql"></IconMenu>
                                 <IconMenu :class="{'mongo':true, 'absolute':true, 'zindex-up': true, 'active': mongo}" prefixProps="fas" iconNameProps="leaf" @clicked="iconClicked" nameProps="mongo"></IconMenu>
                                 <CostumIcon v-for="(icon, index) in arraySavior" :key="index + icon.iconName" :class="{ 'costumIcon': true, 'absolute': true, 'zindex-up': true, 'active': false }" :iconClassNameProps="icon.className" :iconNameProps="icon.iconName" :whiteProps="icon.white" :activeEffectProps="icon.activeEffectProps" sizeProps="4rem" :effectHoverProps="true" :indexIconProps="index" :iconColorProps="false" :hoverProps="icon.hoverProps" :fillProps="icon.fillProps" @clicked="iconClicked($event), costumIconClicked($event)"></CostumIcon>
                                 <IconMenu :class="{'vue':true, 'absolute':true, 'zindex-up': true, 'active': vue}" prefixProps="fab" iconNameProps="vuejs" @clicked="iconClicked" nameProps="vue"></IconMenu>
                                 <IconMenu :class="{'sass':true, 'absolute':true, 'zindex-up': true, 'active': sass}" prefixProps="fab" iconNameProps="sass" @clicked="iconClicked" nameProps="sass"></IconMenu>
                                 <IconMenu v-show="showInfo" :class="{'info':true, 'absolute':true, 'zindex-up': true, 'active': info}" prefixProps="fas" iconNameProps="info-circle" @clicked="iconClicked" nameProps="info"></IconMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MqResponsive>



        <MqResponsive class="mq" target="xs">
            <SkillsMobile :costumIconsArrayProps="[arrayMobileGroup1, arrayMobileGroup2]"></SkillsMobile>
        </MqResponsive>
    </section>
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import IconMenu from '../components/Icons.vue'
import CostumIcon from "../components/svg/CostumIcon.vue";
import MainMenuMobile from '../components/NavegationMenuMobile.vue'
import SkillsMobile from '@/components/SkillsMobile.vue';
export default {
    name: 'Skills-',
    components:{
        MainMenu,
        IconMenu,
        CostumIcon,
        MainMenuMobile,
        SkillsMobile
        
    },
    data(){
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
            socket:false,
            info: false,
            spanHidden: true,
            spanNotHidden: false,
            showInfo: false,
            arraySavior: [
                { className: 'knex', iconName: 'knex', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' },
                { className: 'mongoose', iconName: 'mongoose', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' },
                { className: 'sequelize', iconName: 'sequelize', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' },
                { className: 'nuxt', iconName: 'nuxt', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' },
                { className: 'webpack', iconName: 'webpack', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' },
                { className: 'socket', iconName: 'socket', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' },
               
            ],

            arrayMobileGroup1: [{ className: 'knex', iconName: 'knex', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#0085FF' },
            { className: 'mongoose', iconName: 'mongoose', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#0085FF' },
            { className: 'sequelize', iconName: 'sequelize', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#0085FF' },
            ],

            arrayMobileGroup2: [{ className: 'nuxt', iconName: 'nuxt', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#0085FF' },
            { className: 'webpack', iconName: 'webpack', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#0085FF' },
            { className: 'socket', iconName: 'socket', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#0085FF' }]
        }
    },
    mounted(){
        this.html = true
    },
    methods:{
        iconClicked(name){
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
        costumIconClicked(iconName){
            let arrayIconNames = this.arraySavior.map(icon => {
                return {iconName: icon.iconName, className: icon.className, effectHoverProps: iconName === icon.name, activeEffectProps: true, white: icon.iconName === iconName, hoverProps: icon.hoverProps, fillProps: icon.fillProps}
            })
            this.arraySavior = arrayIconNames

        },
        scrolled($event){
            console.log($event.target.scrollTop, 'eventos')
            const Rodar = document.querySelector('.icons')
            if($event.target.scrollTop < 100){
                Rodar.style.transform = `rotate(0deg)`
                this.toggleIcon(1, false)
                this.toggleIcon(2, true)
                this.toggleIcon(3, true)
                this.toggleIcon(4, true)
                this.toggleIcon(5, true)

                this.spanHidden = true
                this.spanNotHidden = false
            }
            if($event.target.scrollTop >= 100 && $event.target.scrollTop < 200){
                Rodar.style.transform = `rotate(110deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(2, false)
                this.toggleIcon(3, true)
                this.toggleIcon(5, true)

                this.spanHidden = true
                this.spanNotHidden = false
                
            }
            if($event.target.scrollTop >= 200 && $event.target.scrollTop < 300){
                Rodar.style.transform = `rotate(200deg)`
                this.toggleIcon(2, true)
                this.toggleIcon(3, false)
                this.toggleIcon(4, true)
                this.toggleIcon(5, true)

                this.spanHidden = true
                this.spanNotHidden = false
            }
            if($event.target.scrollTop >= 300 && $event.target.scrollTop < 400){
                Rodar.style.transform = `rotate(284deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(4, false)
                this.toggleIcon(3, true)
                this.toggleIcon(5, true)

                this.spanHidden = true
                this.spanNotHidden = false
            }
            if($event.target.scrollTop >= 400 && $event.target.scrollTop < 500){
                 Rodar.style.transform = `rotate(361deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(2, true)
                this.toggleIcon(3, true)
                this.toggleIcon(4, true)
                this.toggleIcon(5, false)
            }
            if($event.target.scrollTop >= 500 && $event.target.scrollTop < 600){
                Rodar.style.transform = `rotate(460deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(2, true)
                this.toggleIcon(3, true)
                this.toggleIcon(4, true, true)
                this.toggleIcon(5, true)

                this.spanHidden = true
                this.spanNotHidden = false

            }
            if($event.target.scrollTop >= 600) {
                this.spanHidden = false
                this.spanNotHidden = true

            }
            //Rodar.style.transform = `translate(-33%, -53%) rotate(${count}deg)`
        },
        toggleIcon(iconGroup, hidden, info = false){
            setTimeout(() => { 
                if(info) {
                    this.showInfo = true
                    document.querySelector('.info').style.opacity = 1
                    document.querySelector('.info').style.zIndex = 7 
                }
                else {
                    document.querySelector('.info').style.opacity = 0
                    document.querySelector('.info').style.zIndex = 0
    
                }
                if (hidden) {
                    if (iconGroup === 1) {
                        document.querySelector('.html').style.opacity = 0 
                        document.querySelector('.css').style.opacity = 0 
                        document.querySelector('.js').style.opacity = 0 
                        
                         document.querySelector('.html').style.pointerEvents = 'none' 
                        document.querySelector('.css').style.pointerEvents = 'none' 
                        document.querySelector('.js').style.pointerEvents = 'none' 
                        
                    }
                    if (iconGroup === 2) {
                        document.querySelector('.node').style.opacity = 0 
                        document.querySelector('.mysql').style.opacity = 0 
                        document.querySelector('.mongo').style.opacity = 0 

                         document.querySelector('.node').style.pointerEvents = 'none' 
                        document.querySelector('.mysql').style.pointerEvents = 'none' 
                        document.querySelector('.mongo').style.pointerEvents = 'none' 
                        
                    }
                    if (iconGroup === 3) {
                        document.querySelector('.knex').style.opacity = 0 
                        document.querySelector('.mongoose').style.opacity = 0 
                        document.querySelector('.sequelize').style.opacity = 0 

                         document.querySelector('.knex').style.pointerEvents = 'none' 
                        document.querySelector('.mongoose').style.pointerEvents = 'none' 
                        document.querySelector('.sequelize').style.pointerEvents = 'none' 
                        
                    }
                    if (iconGroup === 4) {
                        document.querySelector('.sass').style.opacity = 0 
                        document.querySelector('.vue').style.opacity = 0
                        document.querySelector('.nuxt').style.opacity = 0

                         document.querySelector('.sass').style.pointerEvents = 'none' 
                        document.querySelector('.vue').style.pointerEvents = 'none' 
                        document.querySelector('.nuxt').style.pointerEvents = 'none'   
                        
                    }
                    if (iconGroup === 5) {
                        document.querySelector('.webpack').style.opacity = 0
                        document.querySelector('.socket').style.opacity = 0

                         document.querySelector('.webpack').style.pointerEvents = 'none' 
                        document.querySelector('.socket').style.pointerEvents = 'none' 
                    }
                    
                }
                else {
                    if (iconGroup === 1) {
                        document.querySelector('.html').style.opacity = 1 
                        document.querySelector('.css').style.opacity = 1 
                        document.querySelector('.js').style.opacity = 1 

                        document.querySelector('.html').style.pointerEvents = 'all' 
                        document.querySelector('.css').style.pointerEvents = 'all' 
                        document.querySelector('.js').style.pointerEvents = 'all' 
                        
                    }
                    if (iconGroup === 2) {
                        document.querySelector('.node').style.opacity = 1 
                        document.querySelector('.mysql').style.opacity = 1 
                        document.querySelector('.mongo').style.opacity = 1 

                        document.querySelector('.node').style.pointerEvents = 'all' 
                        document.querySelector('.mysql').style.pointerEvents = 'all' 
                        document.querySelector('.mongo').style.pointerEvents = 'all' 
                        
                    }
                    if (iconGroup === 3) {
                        document.querySelector('.knex').style.opacity = 1 
                        document.querySelector('.mongoose').style.opacity = 1 
                        document.querySelector('.sequelize').style.opacity = 1 

                        document.querySelector('.knex').style.pointerEvents = 'all' 
                        document.querySelector('.mongoose').style.pointerEvents = 'all' 
                        document.querySelector('.sequelize').style.pointerEvents = 'all' 
                        
                    }
                    if (iconGroup === 4) {
                        document.querySelector('.sass').style.opacity = 1 
                        document.querySelector('.vue').style.opacity = 1
                        document.querySelector('.nuxt').style.opacity = 1  

                        document.querySelector('.sass').style.pointerEvents = 'all' 
                        document.querySelector('.vue').style.pointerEvents = 'all'
                        document.querySelector('.nuxt').style.pointerEvents = 'all' 
                        
                    }
                    if(iconGroup === 5){
                        document.querySelector('.webpack').style.opacity = 1
                        document.querySelector('.socket').style.opacity = 1

                        document.querySelector('.webpack').style.pointerEvents = 'all'
                        document.querySelector('.socket').style.pointerEvents = 'all'
                    }
                }
            }, 300);

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
    z-index: 10;
    width: 100%;

}
#skills {
    height: 100vh;
    width: 100%;
    margin: auto;
    display: flex;
    overflow: hidden;
    justify-content: center;
}
.container {
    width: 100%;
    height: 100%;
    max-width: 1366px;
    display: flex;
    align-items: center;
    margin: auto;
}
.mq {
    width: 100%
}
.container-skills {
    width: 40%;
    height: 100%;
    position: relative;
    padding-right: 5px;
    
    
    
}
.spanNotHidden {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(25%, -50%);
    color: var(--texto-padrao);
    font-size: 1.4rem;
}
.general-container {
    width: 100%;
    height: 100%;
    position: relative;
    max-height: 450px;
}
.icon-containers {
    position: absolute;
    right: 0%;
    background: none;
    width: 100%;
    transform: translateX(50%);
    max-width: 450px;
    height: 100%;
    max-height: 450px;
    border-radius: 50%;
    font-size: 2em;
    overflow: hidden;
    z-index: 3;
    pointer-events: none;
    
}
.icons{
    position: absolute;
    left: 0%;
    width: 100%;
    max-height: 550px;
    height: 100%;
    border-radius: 50%;
    font-size: 2em;
    color: var(--background);
    transition: 1s;
    min-width: 450px;
    border-left: 3px solid #0085FF;
    
    
}
.scroll-container {
    position: absolute;
    z-index: 1;
    height: 300px;
    overflow-y: scroll;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    width: 100%;
}
.text-container {
    width: 60%;
    height: 100%;
    color: white
 
}

.text-container h2 {
    color: #0085FF;
    font-size: 1.9em;
    margin-top: 20px;
}

.text-container h3 {
    margin: 5px 0px;
    font-size: 1.2rem;
    font-weight: 100;
    /* text-shadow: 0px 0px 1px white; */
    color: var(--texto-padrao);
}
.text-container p {
    color: white;
    width: 90%;
    white-space: break-spaces;
}
.scroll {
    height: 2000px;
    z-index: 0;
    position: absolute;
}
.html {
    left: 0;
    top: 0;
    transform: translate(66%, 166%);
    pointer-events: all
}
.css{
    left: 5%;
    top: 46%;
    pointer-events: all
    /* transform: translate(22%, 321%); */
}
.js{
    left: 53px;
    top: 68%;
    pointer-events: all
}
.node{
    left: 36%;
    top: 82%;
    transform: rotate(252deg);
    opacity: 0;
    pointer-events: none;
}
.mysql{
    left: 58%;
    top: 76%;
    transform: rotate(252deg);
    opacity: 0;
    pointer-events: none;
}
.mongo{
    left: 75%;
    top: 64%;
    transform: rotate(252deg) !important;
    opacity: 0;
    pointer-events: none;
}
.knex {
    left: 81%;
    top: 49%;
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
}
.mongoose{
    left: 77%;
    top: 33%;
    opacity: 0;
    pointer-events: none;
    transform: rotate(160deg);
}
.sequelize{
    left: 64%;
    top: 9%;
    opacity: 0;
    pointer-events: none;
}
.sass {
    left: 52%;
    top: 5%;
    transform: rotate(75deg);
    opacity: 0;
    pointer-events: none;

}
.vue{
    left: 30%;
    top: 8.5%;
    transform: rotate(75deg);
    opacity: 0;
    pointer-events: none;
}
.nuxt {
    left: 12%;
    top: 18.5%;
    transform: rotate(75deg);
    opacity: 0;
    pointer-events: none;
}
.webpack {
    left: 6%;
    top: 23%;
    opacity: 0;
    pointer-events: none;
}
.socket{
    left: 5%;
    top: 46%;
    opacity: 0;
    pointer-events: none;
    /* transform: translate(22%, 321%); */
}
.api{
    left: 53px;
    top: 68%;
    opacity: 0;
    pointer-events: nonde;
}
.info {
    left: 5%;
    top: 46%;
    opacity: 0;
    z-index: -1;
}
.html, .css, .js, .node, .mysql, .mongo, .knex, .mongosse, .sequelize, .sass, .vue, .info , .nuxt {
    transition: 0.1s;
    cursor: pointer;
}
.html-text, .css-text, .js-text, 
.node-text, .mysql-text, .mongo-text,
.knex-text, .sequelize-text, .mongoose-text,
.sass-text, .vue-text, .nuxt-text, 
.webpack-text .socket-text {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.zindex-up {
    z-index: 5;
}
.absolute {
    position: absolute;
}
.text-group-enter-active, .text-group-leave-active {
  transition: 1.2s;
}

.text-group-enter-from{
    transform:translate(100%, -20%) scale(0);

    
}
.text-group-enter-to{
    transform:translate(0%, 0%) scale(1);
    
}
.text-group-leave-from{
    position: absolute;
    transform:translate(0%, 0%) scale(1);
}
.text-group-leave-to{
    position: absolute;
    transform:translate(100%, -20%) scale(0);    
}

</style>