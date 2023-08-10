<template>
    <section id="skills">
        <div class="menu">
            <MainMenu :MenuFixoProps="true" :ActivatedProps="'sk'"></MainMenu>
        </div>
        <div class="container">
            <div class="text-container">
                <TransitionGroup name="text-group">
                <div class="html-text" v-if="html">
                    <h2>HTML</h2> <!-- tag abreviamento -->
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis facere non eius reiciendis mollitia ipsum ex commodi accusantium, quasi, iure laudantium enim illum dolores id consequatur? Perferendis quo, pariatur esse quae distinctio qui error magnam quasi minima totam temporibus porro voluptas dolore possimus aspernatur laborum officia dolorum impedit maiores cupiditate. Praesentium non, ratione maxime et, odio ab nemo nesciunt inventore facilis blanditiis neque! Sit hic veniam possimus magni odio accusamus illo modi iste quis! Unde perspiciatis earum quae? Debitis, vitae.
                </div>
                <div class="css-text" v-if="css">
                    <h2>CSS</h2> <!-- tag sobre abreviamento -->
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni explicabo iste voluptatum hic doloribus esse, consequuntur eum aliquam blanditiis omnis autem illo quas libero voluptas, perferendis quisquam laborum cum non animi. Doloribus error quasi incidunt voluptate mollitia vitae odio consectetur eligendi rerum quos expedita laboriosam dolores unde cum, eum qui, veritatis maxime? Doloribus aliquid dicta enim vel explicabo velit asperiores reprehenderit nesciunt inventore libero, id obcaecati ducimus dolorum totam ratione voluptate eius voluptatum voluptatem rerum eveniet delectus? Reiciendis quos quod aperiam. Aspernatur placeat doloribus cumque perferendis, libero laboriosam nesciunt.
                </div>
                <div class="js-text" v-if="js">
                    <h2>Java Script</h2>
                    <p>
                        iniciei meus estudos em janeiro de 2021, comprei livro <!-- tag  de citação --> js(livro) <!-- / --> e então parti para os cursos, começei pela lógica de programação usando portugol, depois de 1 mês, senti que estava pronto para partir para uma linguagem de verdade, decidi focar em javascript, assim que eu terminei de estudar lógica, e sentia que estava competente com html e css, comprei cursos focados em javascript, saldjsaodhosadhsa, jsdsajdasdhsadhs, complementei meus estudos pesquisando, procurando conteudos fora, e praticando, sempre fazendo tudo do 0 pois pela minha consepção, em um emprego você tem que está preparado para fazer qualquer coisa que seja possivel, e possivel é o que basta para você conseguir fazer o que tem que ser feito mesmo não tendo sido "ensinado" antes   
                    </p>
                </div>
                <div class="node-text" v-if="node">
                    <h2>Node</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aliquam sapiente, sunt recusandae molestias, porro, reprehenderit sint quo odit sequi omnis quos pariatur eaque sit? Dolor, ad provident? Porro minima est labore, reiciendis deserunt ullam id fugit, iusto pariatur ducimus maxime nam unde vero impedit possimus, adipisci rerum quam ipsa numquam laudantium! Molestias ullam libero quis consectetur. Et, delectus. Officia aspernatur quos obcaecati commodi, odio eius sunt. Sit, dolorum vel blanditiis accusamus praesentium consectetur cum soluta consequatur commodi quidem necessitatibus tempora aspernatur nulla rerum aperiam reprehenderit numquam non accusantium velit aliquam. Dicta a tenetur in tempora saepe repudiandae quaerat deleniti mollitia voluptates ut, voluptate commodi libero aut quam accusamus molestias, aliquam, nemo maiores ex modi earum iusto aspernatur! A vero molestiae tenetur cumque aspernatur dolorum dolore ea. Impedit quasi vitae quia quidem et laborum, harum recusandae maxime consequatur quo quam.
                </div>
                <div class="mysql-text" v-if="mysql">
                    <h2>Mysql</h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sapiente accusamus, cupiditate modi nostrum quisquam assumenda provident excepturi ad sequi incidunt neque debitis optio. Eligendi at necessitatibus quam qui, fugit doloribus! Eveniet laboriosam vel earum perferendis nobis consequuntur veniam laborum iste labore eligendi non inventore minus, enim doloribus dolore laudantium et nostrum doloremque. Excepturi explicabo vel aspernatur beatae iure odio corrupti, earum pariatur, veniam voluptas quae praesentium saepe aperiam nisi magnam est nemo nihil illo? Delectus molestias provident nihil placeat possimus soluta autem natus recusandae quod culpa pariatur animi distinctio esse eum omnis debitis, facere minus fugit nesciunt? Omnis vitae dolorum modi accusamus quae deserunt, amet tempore laborum, doloremque fugit incidunt labore nobis corrupti rem repudiandae voluptate, numquam dignissimos voluptas?
                </div>
                <div class="mongo-text" v-if="mongo">
                    <h2>MongoDB</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aliquam sint. Iusto iste est officiis consectetur corrupti explicabo dolor dolorum beatae consequatur repellat dolorem blanditiis voluptate aut, in maiores alias dolore ratione enim tempore! Nesciunt officiis aliquam dignissimos. Minima, fugiat quia! Animi sequi atque tenetur optio recusandae officia quod expedita, ipsum aperiam sint dicta nisi officiis ad! Repellendus modi quis magnam id impedit, asperiores commodi, dicta voluptates adipisci sit saepe voluptate quibusdam, officia fuga tempore aspernatur! Illum quod est ex, doloribus aut minima nobis laudantium fugiat expedita maxime eveniet quae aspernatur excepturi provident odit ipsam libero. Ab cum magnam nobis dolorum praesentium quam repellendus omnis commodi asperiores? Asperiores harum error sapiente ratione at deserunt consectetur repellendus, laudantium laboriosam quis assumenda.
                </div>
                <div class="knex-text" v-if="knex">
                    <h2>KNEX.JS</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit aut officiis ad. Quas sit repudiandae possimus commodi doloribus fuga expedita exercitationem assumenda eos cum fugit amet, tempore pariatur culpa sapiente tenetur vel! Fugit, alias. Voluptatum quos autem eligendi animi sint impedit neque laudantium, praesentium placeat perferendis aspernatur alias in aliquid dolore voluptates libero voluptate ipsa rem nostrum odit nam quas reprehenderit. Expedita, fugit animi distinctio, soluta a suscipit, nulla asperiores enim sequi iste nostrum voluptate atque reprehenderit natus obcaecati porro possimus. Rerum eaque ex similique rem tempore? Laudantium odit non perspiciatis neque. Aliquam impedit iste, excepturi est sit itaque.
                </div>
                <div class="mongoose-text" v-if="mongoose">
                    <h2>Mongoose</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus sunt illum earum nulla cumque, porro, exercitationem laboriosam ullam, velit voluptate. Incidunt ab dolor laborum natus officiis deserunt quam unde veritatis? Omnis, eum exercitationem. Maxime, tenetur voluptates temporibus at sint natus quasi laborum veniam blanditiis tempora dignissimos! Illo eaque beatae ipsam error minima dolorem? Delectus maxime exercitationem id asperiores sequi blanditiis quod, incidunt quaerat, nobis harum aut dolor magni atque iure iste! Ab necessitatibus illo nulla temporibus! Iusto voluptate dolorem veniam illo incidunt perferendis tempore eum sunt. Corporis aliquam quasi iure inventore? Inventore alias, harum rem officia eos asperiores eius.
                </div>
                <div class="sequelize-text" v-if="sequelize">
                    <h2>Sequelize</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo modi quam pariatur optio perspiciatis nesciunt assumenda molestias. Quasi aliquid accusantium inventore voluptatem excepturi cupiditate eum, neque atque porro. Expedita excepturi, laboriosam explicabo deleniti fugiat sapiente provident harum itaque nihil eius reprehenderit quae autem, nesciunt culpa eum doloribus similique. Rem.
                </div>
                <div class="sass-text" v-if="sass">
                    <h2>SASS</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora nisi expedita explicabo aliquam! Autem sequi nostrum et maiores iste optio dignissimos quasi labore ea voluptates officiis tempore, ipsum ducimus voluptas provident velit, laborum aut suscipit cupiditate numquam. Repellat, maiores fugiat optio nostrum facilis accusantium obcaecati ipsa illo rem nihil itaque ipsum expedita qui veritatis eius ratione consequuntur error iure! Deleniti assumenda magni dolores cum tenetur amet repudiandae rem commodi?
                </div>
                <div class="vue-text" v-if="vue">
                    <h2>Vue.Js</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit pariatur, perferendis ab magnam praesentium obcaecati animi illum. Maxime magni rem tenetur reiciendis cumque odit facilis cum fuga, totam fugit ea veritatis, soluta commodi hic sit accusamus. Voluptates, laborum optio. Rem ad perspiciatis sapiente quidem maiores praesentium quia suscipit sint quam facere! Nam accusamus minus pariatur fuga tempore distinctio eos itaque ullam cupiditate corrupti adipisci eius, recusandae eveniet ipsa animi molestias quod autem! Iste quasi dolore asperiores mollitia distinctio explicabo eius, odit, sit recusandae adipisci cupiditate porro doloribus blanditiis! Nihil libero vero voluptates debitis accusantium aut quam. Perferendis dolor quas nesciunt consectetur harum amet fugiat necessitatibus a, non dolores sit inventore, illo earum! Dolorum nostrum nemo ratione, maxime eum vel pariatur ab fuga libero fugiat mollitia voluptates assumenda consequatur aliquid cumque similique. Sed quos sunt quod eos vitae rerum praesentium numquam nobis iste? Eos dicta qui repellat porro sint facilis rem ipsa explicabo tenetur at voluptates quae repudiandae eveniet sapiente saepe assumenda sit, nobis nesciunt illo laudantium, dolores maxime ut est! Nihil, esse hic voluptate corrupti laboriosam, aliquam cumque ipsa non similique libero at repudiandae laborum culpa veritatis fugit illo quam delectus quae! Magnam, assumenda omnis recusandae tempore aliquid tenetur.
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
                    <div class="scroll-container" @scroll="scrolled($event)">
                        <div class="scroll">
                            <span class="point">.</span>
                        </div>
                    </div>
                    <div class="icon-containers">
                        <span :class="{ spanHidden, spanNotHidden}" v-show="spanNotHidden">Isso é tudo (por enquanto)</span>
                        <div class="icons">
                             <IconMenu :class="{html, 'absolute': true, 'zindex-up': true, 'active': html}" prefixProps="fab" iconNameProps="html5" @clicked="iconClicked" nameProps="html"></IconMenu>
                             <IconMenu class="css absolute zindex-up" prefixProps="fab" iconNameProps="css3" @clicked="iconClicked" nameProps="css"></IconMenu>
                             <IconMenu class="js absolute zindex-up" prefixProps="fab" iconNameProps="js" @clicked="iconClicked" nameProps="js"></IconMenu>
                             <IconMenu class="node absolute zindex-up" prefixProps="fab" iconNameProps="node-js" @clicked="iconClicked" nameProps="node"></IconMenu>
                             <IconMenu class="mysql absolute zindex-up" prefixProps="fas" iconNameProps="database" @clicked="iconClicked" nameProps="mysql"></IconMenu>
                             <IconMenu class="mongo absolute zindex-up" prefixProps="fas" iconNameProps="leaf" @clicked="iconClicked" nameProps="mongo"></IconMenu>
                             <IconMenu class="knex absolute zindex-up" prefixProps="fas" iconNameProps="dharmachakra" @clicked="iconClicked" nameProps="knex"></IconMenu>
                             <IconMenu class="mongoose absolute zindex-up" prefixProps="fas" iconNameProps="dog" @clicked="iconClicked" nameProps="mongoose"></IconMenu>
                             <IconMenu class="sequelize absolute zindex-up" prefixProps="fas" iconNameProps="person-pregnant" @clicked="iconClicked" nameProps="sequelize"></IconMenu>
                             <IconMenu class="vue absolute zindex-up" prefixProps="fab" iconNameProps="vuejs" @clicked="iconClicked" nameProps="vue"></IconMenu>
                             <IconMenu class="sass absolute zindex-up" prefixProps="fab" iconNameProps="sass" @clicked="iconClicked" nameProps="sass"></IconMenu>
                             <IconMenu class="info absolute zindex-up" prefixProps="fas" iconNameProps="info-circle" @clicked="iconClicked" nameProps="info"></IconMenu>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </section>
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import IconMenu from '../components/Icons.vue'
export default {
    name: 'Skills-',
    components:{
        MainMenu,
        IconMenu
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
            info: false,
            spanHidden: true,
            spanNotHidden: false,
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
            name === 'info' ? this.info = true : this.info = false
        },
        scrolled($event){
            const Rodar = document.querySelector('.icons')
            if($event.target.scrollTop < 100){
                Rodar.style.transform = `rotate(0deg)`
                this.toggleIcon(1, false)
                this.toggleIcon(2, true)
                this.toggleIcon(4, true)

                this.spanHidden = true
                this.spanNotHidden = false
            }
            if($event.target.scrollTop >= 100 && $event.target.scrollTop < 200){
                Rodar.style.transform = `rotate(110deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(2, false)
                this.toggleIcon(3, true)

                this.spanHidden = true
                this.spanNotHidden = false
                
            }
            if($event.target.scrollTop >= 200 && $event.target.scrollTop < 300){
                Rodar.style.transform = `rotate(200deg)`
                this.toggleIcon(2, true)
                this.toggleIcon(3, false)
                this.toggleIcon(4, true)

                this.spanHidden = true
                this.spanNotHidden = false
            }
            if($event.target.scrollTop >= 300 && $event.target.scrollTop < 400){
                Rodar.style.transform = `rotate(284deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(4, false)
                this.toggleIcon(3, true)

                this.spanHidden = true
                this.spanNotHidden = false
            }
            if($event.target.scrollTop >= 400 && $event.target.scrollTop < 500){
                Rodar.style.transform = `rotate(361deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(2, true)
                this.toggleIcon(3, true)
                this.toggleIcon(4, true, true)

                this.spanHidden = true
                this.spanNotHidden = false
            }
            if($event.target.scrollTop >= 500 && $event.target.scrollTop <= 600){
                Rodar.style.transform = `rotate(460deg)`
                this.toggleIcon(1, true)
                this.toggleIcon(2, true)
                this.toggleIcon(3, true)
                this.toggleIcon(4, true)

                this.spanHidden = false
                this.spanNotHidden = true
            }
            //Rodar.style.transform = `translate(-33%, -53%) rotate(${count}deg)`
        },
        toggleIcon(iconGroup, hidden, info = false){
            setTimeout(() => { 
                if(info) {
                    document.querySelector('.info').style.opacity = 1
                    document.querySelector('.info').style.zIndex = 7 
                }
                else {
                    document.querySelector('.info').style.opacity = 0
                    document.querySelector('.info').style.zIndex = 1
    
                }
                if (hidden) {
                    if (iconGroup === 1) {
                        document.querySelector('.html').style.opacity = 0 
                        document.querySelector('.css').style.opacity = 0 
                        document.querySelector('.js').style.opacity = 0 
                        
                    }
                    if (iconGroup === 2) {
                        document.querySelector('.node').style.opacity = 0 
                        document.querySelector('.mysql').style.opacity = 0 
                        document.querySelector('.mongo').style.opacity = 0 
                        
                    }
                    if (iconGroup === 3) {
                        document.querySelector('.knex').style.opacity = 0 
                        document.querySelector('.mongoose').style.opacity = 0 
                        document.querySelector('.sequelize').style.opacity = 0 
                        
                    }
                    if (iconGroup === 4) {
                        document.querySelector('.sass').style.opacity = 0 
                        document.querySelector('.vue').style.opacity = 0 
                        
                    }
                    
                }
                else {
                    if (iconGroup === 1) {
                        document.querySelector('.html').style.opacity = 1 
                        document.querySelector('.css').style.opacity = 1 
                        document.querySelector('.js').style.opacity = 1 
                        
                    }
                    if (iconGroup === 2) {
                        document.querySelector('.node').style.opacity = 1 
                        document.querySelector('.mysql').style.opacity = 1 
                        document.querySelector('.mongo').style.opacity = 1 
                        
                    }
                    if (iconGroup === 3) {
                        document.querySelector('.knex').style.opacity = 1 
                        document.querySelector('.mongoose').style.opacity = 1 
                        document.querySelector('.sequelize').style.opacity = 1 
                        
                    }
                    if (iconGroup === 4) {
                        document.querySelector('.sass').style.opacity = 1 
                        document.querySelector('.vue').style.opacity = 1 
                        
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
    bottom: 6%;
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
}
.container-skills {
    width: 40%;
    height: 100%;
    position: relative;
    padding-right: 5px;
    
    
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
    height: 100%
 
}

.text-container h2 {
    color: var(--texto-especial);
    font-size: 1.9em;
    margin: 20px 0px;
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
}
.css{
    left: 5%;
    top: 46%;
    /* transform: translate(22%, 321%); */
}
.js{
    left: 53px;
    top: 68%;
}
.node{
    left: 42%;
    top: 83%;
    transform: rotate(252deg);
    opacity: 0;
}
.mysql{
    left: 61%;
    top: 76%;
    transform: rotate(252deg);
}
.mongo{
    left: 75%;
    top: 64%;
    transform: rotate(252deg);
}
.knex{
    left: 0;
    top: 0;
    transform: translate(471px, 236px);
}
.mongoose{
    left: 0;
    top: 0;
    transform: translate(433px, 150px) rotate(160deg);
}
.sequelize{
    left: 0;
    top: 0;
    transform: translate(400px, 56px) rotate(160deg);
}
.sass {
    left: 0;
    top: 0;
    transform: translate(108px, 56px) rotate(77deg);
    opacity: 0;

}
.vue{
    left: 0;
    top: 0;
    transform:  translate(206px, 8px) rotate(77deg);
}
.info {
    left: 0;
    top: 0;
    transform: translate(8px, 273px);
    opacity: 0;
    z-index: 7;
}
.html, .css, .js, .node, .mysql, .mongo, .knex, .mongosse, .sequelize, .sass, .vue, .info {
    transition: 0.1s;
}
.zindex-up {
    z-index: 5;
    pointer-events: all;
    cursor: pointer;
}
.absolute {
    position: absolute;
}
.text-container {
    color: var(--texto-padrao);
    display: flex;
    padding: 2% 2%;
    justify-content: center;
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
    
.spanNotHidden {
    color: var(--texto-padrao);
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translate(-50%, -30%);
    font-size: 0.6em;
    opacity: 1;
    transition: opacity 0.9s;
}
.spanHidden {
    opacity: 0;
    transition: opacity 0.6s;
    
}
.active {
    color: white !important;
}
</style>