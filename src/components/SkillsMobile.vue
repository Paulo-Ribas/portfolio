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
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sapiente accusamus, cupiditate modi nostrum quisquam assumenda provident excepturi ad sequi incidunt neque debitis optio. Eligendi at necessitatibus quam qui, fugit doloribus! Eveniet laboriosam vel earum perferendis nobis consequuntur veniam laborum iste labore eligendi non inventore minus, enim doloribus dolore laudantium et nostrum doloremque. Excepturi explicabo vel aspernatur beatae iure odio corrupti, earum pariatur, veniam voluptas quae praesentium saepe aperiam nisi magnam est nemo nihil illo? Delectus molestias provident nihil placeat possimus soluta autem natus recusandae quod culpa pariatur animi distinctio esse eum omnis debitis, facere minus fugit nesciunt? Omnis vitae dolorum modi accusamus quae deserunt, amet tempore laborum, doloremque fugit incidunt labore nobis corrupti rem repudiandae voluptate, numquam dignissimos voluptas?</p>
                        </div>
                        <div class="mongo-text" v-if="mongo">
                            <h2>MongoDB</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aliquam sint. Iusto iste est officiis consectetur corrupti explicabo dolor dolorum beatae consequatur repellat dolorem blanditiis voluptate aut, in maiores alias dolore ratione enim tempore! Nesciunt officiis aliquam dignissimos. Minima, fugiat quia! Animi sequi atque tenetur optio recusandae officia quod expedita, ipsum aperiam sint dicta nisi officiis ad! Repellendus modi quis magnam id impedit, asperiores commodi, dicta voluptates adipisci sit saepe voluptate quibusdam, officia fuga tempore aspernatur! Illum quod est ex, doloribus aut minima nobis laudantium fugiat expedita maxime eveniet quae aspernatur excepturi provident odit ipsam libero. Ab cum magnam nobis dolorum praesentium quam repellendus omnis commodi asperiores? Asperiores harum error sapiente ratione at deserunt consectetur repellendus, laudantium laboriosam quis assumenda.</p>
                        </div>
                        <div class="knex-text" v-if="knex">
                            <h2>KNEX.JS</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit aut officiis ad. Quas sit repudiandae possimus commodi doloribus fuga expedita exercitationem assumenda eos cum fugit amet, tempore pariatur culpa sapiente tenetur vel! Fugit, alias. Voluptatum quos autem eligendi animi sint impedit neque laudantium, praesentium placeat perferendis aspernatur alias in aliquid dolore voluptates libero voluptate ipsa rem nostrum odit nam quas reprehenderit. Expedita, fugit animi distinctio, soluta a suscipit, nulla asperiores enim sequi iste nostrum voluptate atque reprehenderit natus obcaecati porro possimus. Rerum eaque ex similique rem tempore? Laudantium odit non perspiciatis neque. Aliquam impedit iste, excepturi est sit itaque.</p>
                        </div>
                        <div class="mongoose-text" v-if="mongoose">
                            <h2>Mongoose</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus sunt illum earum nulla cumque, porro, exercitationem laboriosam ullam, velit voluptate. Incidunt ab dolor laborum natus officiis deserunt quam unde veritatis? Omnis, eum exercitationem. Maxime, tenetur voluptates temporibus at sint natus quasi laborum veniam blanditiis tempora dignissimos! Illo eaque beatae ipsam error minima dolorem? Delectus maxime exercitationem id asperiores sequi blanditiis quod, incidunt quaerat, nobis harum aut dolor magni atque iure iste! Ab necessitatibus illo nulla temporibus! Iusto voluptate dolorem veniam illo incidunt perferendis tempore eum sunt. Corporis aliquam quasi iure inventore? Inventore alias, harum rem officia eos asperiores eius.</p>
                        </div>
                        <div class="sequelize-text" v-if="sequelize">
                            <h2>Sequelize</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo modi quam pariatur optio perspiciatis nesciunt assumenda molestias. Quasi aliquid accusantium inventore voluptatem excepturi cupiditate eum, neque atque porro. Expedita excepturi, laboriosam explicabo deleniti fugiat sapiente provident harum itaque nihil eius reprehenderit quae autem, nesciunt culpa eum doloribus similique. Rem.</p>
                        </div>
                        <div class="sass-text" v-if="sass">
                            <h2>SASS</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora nisi expedita explicabo aliquam! Autem sequi nostrum et maiores iste optio dignissimos quasi labore ea voluptates officiis tempore, ipsum ducimus voluptas provident velit, laborum aut suscipit cupiditate numquam. Repellat, maiores fugiat optio nostrum facilis accusantium obcaecati ipsa illo rem nihil itaque ipsum expedita qui veritatis eius ratione consequuntur error iure! Deleniti assumenda magni dolores cum tenetur amet repudiandae rem commodi?</p>
                        </div>
                        <div class="vue-text" v-if="vue">
                            <h2>Vue.Js</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit pariatur, perferendis ab magnam praesentium obcaecati animi illum. Maxime magni rem tenetur reiciendis cumque odit facilis cum fuga, totam fugit ea veritatis, soluta commodi hic sit accusamus. Voluptates, laborum optio. Rem ad perspiciatis sapiente quidem maiores praesentium quia suscipit sint quam facere! Nam accusamus minus pariatur fuga tempore distinctio eos itaque ullam cupiditate corrupti adipisci eius, recusandae eveniet ipsa animi molestias quod autem! Iste quasi dolore asperiores mollitia distinctio explicabo eius, odit, sit recusandae adipisci cupiditate porro doloribus blanditiis! Nihil libero vero voluptates debitis accusantium aut quam. Perferendis dolor quas nesciunt consectetur harum amet fugiat necessitatibus a, non dolores sit inventore, illo earum! Dolorum nostrum nemo ratione, maxime eum vel pariatur ab fuga libero fugiat mollitia voluptates assumenda consequatur aliquid cumque similique. Sed quos sunt quod eos vitae rerum praesentium numquam nobis iste? Eos dicta qui repellat porro sint facilis rem ipsa explicabo tenetur at voluptates quae repudiandae eveniet sapiente saepe assumenda sit, nobis nesciunt illo laudantium, dolores maxime ut est! Nihil, esse hic voluptate corrupti laboriosam, aliquam cumque ipsa non similique libero at repudiandae laborum culpa veritatis fugit illo quam delectus quae! Magnam, assumenda omnis recusandae tempore aliquid tenetur.</p>
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
                            <div class="icon-containers-mobile" @mousedown="DragStart($event)" @touchstart="DragStart($event)" @mousemove="Drag($event)" @touchmove="Drag($event)" @mouseup="StopDrag($event)" @mouseleave="StopDrag($event)" @touchend="StopDrag($event)">
                                <span :class="{ spanHidden, spanNotHidden }" v-show="spanNotHidden">Isso é tudo <br> (por enquanto)</span>
                                <div class="icons">
                                     <IconMenu :class="{ 'html': true, 'absolute': true, 'zindex-up': true, 'active': html }" prefixProps="fab" iconNameProps="html5" @clicked="iconClicked" nameProps="html"></IconMenu>
                                     <IconMenu :class="{ 'css': true, 'absolute': true, 'zindex-up': true, 'active': css }" prefixProps="fab" iconNameProps="css3" @clicked="iconClicked" nameProps="css"></IconMenu>
                                     <IconMenu :class="{ 'js': true, 'absolute': true, 'zindex-up': true, 'active': js }" prefixProps="fab" iconNameProps="js" @clicked="iconClicked" nameProps="js"></IconMenu>
                                     <IconMenu :class="{ 'node': true, 'absolute': true, 'zindex-up': true, 'active': node }" prefixProps="fab" iconNameProps="node-js" @clicked="iconClicked" nameProps="node"></IconMenu>
                                     <IconMenu :class="{ 'mysql': true, 'absolute': true, 'zindex-up': true, 'active': mysql }" prefixProps="fas" iconNameProps="database" @clicked="iconClicked" nameProps="mysql"></IconMenu>
                                     <IconMenu :class="{ 'mongo': true, 'absolute': true, 'zindex-up': true, 'active': mongo }" prefixProps="fas" iconNameProps="leaf" @clicked="iconClicked" nameProps="mongo"></IconMenu>
                                     <CostumIcon v-for="(icon, index) in arraySavior" :key="index" :class="{ 'costumIcon': true, 'absolute': true, 'zindex-up': true, 'active': knex }" :iconNameProps="icon.iconName" :activeEffectProps="icon.activeEffectProps" sizeProps="4rem" @clicked="iconClicked" :indexIconProps="index" :iconColorProps="false" :hoverProps="icon.hoverProps" :fillProps="icon.fillProps"></CostumIcon>
                                     <IconMenu :class="{ 'vue': true, 'absolute': true, 'zindex-up': true, 'active': vue }" prefixProps="fab" iconNameProps="vuejs" @clicked="iconClicked" nameProps="vue"></IconMenu>
                                     <IconMenu :class="{ 'sass': true, 'absolute': true, 'zindex-up': true, 'active': sass }" prefixProps="fab" iconNameProps="sass" @clicked="iconClicked" nameProps="sass"></IconMenu>
                                     <IconMenu v-show="showInfo" :class="{ 'info': true, 'absolute': true, 'zindex-up': info, 'active': info }" prefixProps="fas" iconNameProps="info-circle" @clicked="iconClicked" nameProps="info"></IconMenu>
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
            arraySavior: [{ className: 'knex', iconName: 'knex', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' }, { className: 'mongoose', iconName: 'mongoose', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' }, { className: 'sequelize', iconName: 'sequelize', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' }, { className: 'nuxt', iconName: 'nuxt', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' }, { className: 'mongoose', iconName: 'mongoose', activeEffectProps: true, white: false, hoverProps: '#fff' }, { className: 'webpack', iconName: 'webpack', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' }, { className: 'socket', iconName: 'socket', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' }, { className: 'api', iconName: 'socket', activeEffectProps: true, white: false, hoverProps: '#fff', fillProps: '#000428' },],
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
        costumIconClicked(iconName) {
            let arrayIconNames = this.arraySavior.map(icon => {
                return { iconName: icon.iconName, className: icon.className, effectHoverProps: iconName === icon.name, activeEffectProps: true, white: icon.iconName === iconName, hoverProps: icon.hoverProps, fillProps: icon.fillProps }
            })
            this.arraySavior = arrayIconNames

        },
        DragStart($event){
            console.log($event)
            this.IsDragging = true
            this.startMousePosition = $event.clientX || $event.touches[0].clientX

        },
        Drag($event){
            let currentPosition = $event.clientX || $event.touches[0].clientX
            this.currentTranslate = this.prevTranslate + (currentPosition - this.startMousePosition)
            if(this.IsDragging) return this.setTranslate()
        },
        StopDrag(){
            this.prevTranslate = this.currentTranslate
            this.IsDragging = false
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

            if(distanceBorderLeft >= 50) {
                this.currentTranslate = 0
                this.prevTranslate = 0
                this.startMousePosition = 0
                icons.style.transform = `translateX(${this.currentTranslate}px)`
            }
             if(distanceBorderRight <= 250) {
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
    width: 99%;
    height: 100%;
    color: white;
 
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
    max-height: 290px;
}
.container-mobile .container-skills {
    width: 100%;
    height: 25%;
    position: unset;
    padding-right: 5px;
    
    
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
}
.container-mobile .absolute {
    position: relative !important;
}

@media screen and (max-height: 380px) {

    .text-container p {
    color: white;
    width: 90%;
    white-space: break-spaces;
    overflow-y: auto;
    max-height: 140px;
}
}

</style>