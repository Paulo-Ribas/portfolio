<template>
    <MqResponsive class="menu" :target="['xl', 'sm', 'md', 'lg', 'xxl']">
        <MainMenu :MenuFixoProps="true" :ActivatedProps="'ap'"></MainMenu>
    </MqResponsive>
    <MqResponsive class="menu-mobile" target="xs"> 
        <MainMenuMobile :closedProps="true" :ActivatedProps="'ap'"/>
    </MqResponsive>
    <Transition name="hooks">
    <section id="apresentation" v-if="animation">
        <MqResponsive class="apresentation-pc" :target="['xl', 'sm', 'md', 'lg', 'xxl']">
            <div class="container">
                <div class="information-container">
                    <div class="img-container">
                        <img src="../assets/img/eu33.png" alt="minha foto">
                    </div>
                    <div class="informations">
                        <h2>Paulo Ribas</h2>
                        <h3>Desenvolvedor web</h3>
                    </div>
                </div> <!-- fim information-container -->
                <div class="descrition">
                    <h2 v-html="tittle"></h2>
                    <p v-html="text"></p>
                    <div class="icon-container">
                        <div class="icons">
                            <IconsProject @clicked="ChangeCountText('-')" :iconNameProps="'caret-left'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsProject>
                            <div class="numbers">{{countText}}/2</div>
                            <IconsProject @clicked="ChangeCountText('+')" :iconNameProps="'caret-right'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsProject>
                        </div>
                    </div>
                </div> <!--fim descrition-->
            </div> <!--fim container-->
        </MqResponsive>
        <MqResponsive class="width100-height100"  target="xs" >
            <ApresentationMobileV :textProps="text" :tittleProps="tittle"></ApresentationMobileV>
        </MqResponsive>
    </section>
    </Transition>
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import IconsProject from "../components/Icons.vue"
import ApresentationMobileV from "../components/ApresentationMobileV.vue";
import MainMenuMobile from '../components/NavegationMenuMobile.vue'
export default {
    name: 'Apresentation-',
    components:{ 
        MainMenu,
        IconsProject,
        ApresentationMobileV,
        MainMenuMobile
    },
    head(){
        return {
            title: 'Sobre Mim',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            ],
        }
    },
    data(){
        return{
            animation: false,
            text: '',
            tittle: '',
            countText: 0,

        }
    },
    mounted(){
        this.animation = true
        this.countText = 1
    },
    watch:{
        countText(){
            this.ChangeText()
        }
    },
    methods: {
        ChangeText(){
            if (this.countText < 2) {
                this.tittle = "Sobre Mim"
                this.text = `Eae! Eu sou Paulo Ribas, um desenvolvedor web com 21 anos de idade. Minha jornada começou aos 17 anos, quando entrei no mundo da programação usando "linguagens" como HTML e CSS. <br>
        Com o tempo, Ao longo dos meus 4 anos de jornada no desenvolvimento web, evolui de um iniciante utilizando HTML e CSS para um desenvolvedor completo  que domina JavaScript/Node.js. Em meus projetos recentes, criei soluções personalizadas, desde sistemas de cadastro, login, upload de arquivos, até implementações avançadas de chat em tempo real. Minha abordagem  se reflete na capacidade de adaptar-me a diferentes contextos, colaborando eficazmente com o cliente para atender às suas necessidades específicas.


    `
                
            }
            if(this.countText > 1) {
                this.tittle = "Descrição Para Empresa"
                this.text = `Olá, sou Paulo Ribas, tenho 21 anos. Iniciei minha jornada no mundo do desenvolvimento aos 17 anos, focando inicialmente no HTML e CSS para criar páginas web. Com dedicação e estudo, aprimorei minhas habilidades e mergulhei profundamente no JavaScript. <br>

Antes ao JavaScript, aprofundei meu entendimento da lógica de programação e do Document Object Model (DOM). Isso me ajudou muito a  criar projetos práticos com JavaScript, sem depender de frameworks no inicio. <br>

Decidi então partir para o desenvolvimento back-end com Node.js, onde aprendi sobre rotas, protocolos e escopos da web. Criei minhas próprias APIs e aplicações para manipulação de arquivos locais, aprimorando minha capacidade técnica de solucionar problemas até em certo ponto, complexos. <br>

Trabalhei com bancos de dados relacionais e não relacionais, como MySQL e MongoDB, além de explorar frameworks como EJS, Express, Sequelize, Knex e Mongoose. <br>

Por fim, me apaixonei pelo Vue.js e dediquei tempo para aprofundar minhas habilidades nesse framework, incluindo o Nuxt.js para aprimorar meu desenvolvimento front-end. <br>

Nos últimos anos, foquei em projetos desafiadores que ampliaram minha capacidade técnica e solução de problemas. Um desses projetos em destaque, desenvolvido em Nuxt.js, inclui um sistema completo de cadastro e login, funcionalidade de upload de arquivos e a criação de salas com chat em tempo real. <br>

Acredito que a verdadeira aprendizagem vem da prática e da resolução de problemas/desafios. Cada dificuldade que tive em todos esses projetos agregaram na minha evolução e fizeram eu melhorar cada vez mais. Mesmo quando me deparo com "tecnologias" ou arquiteturas desconhecidas ou que tenho pouca experiência, vejo isso como uma oportunidade de aprendizado e adaptação, confio de que posso dominá-las a tempo.`
            }
        },
        ChangeCountText(signal){
            signal === '+' ? this.countText += 1 : this.countText -= 1
            this.countText > 2 ? this.countText = 1 : this.countText < 1 ? this.countText = 2 : this.countText
        },
    }

}
</script>

<style scoped>
 .width100-height100 {
    width: 100%;
    height: 100%;
 }
 .apresentation-pc {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1000px;
 }
.menu{
    position: absolute;
    bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 0px 10px;
    width: 100%;
    
}
.menu-mobile {
    position: absolute;
    bottom: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 0px 10px;
    width: 100%;
    pointer-events: none;
}
#apresentation {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 10px 0px
}
.container {
    width: 100%;
    max-width: 980px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.information-container {
    width: 50%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

}
.informations {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px
}
h2, h3 {
    color: white;
}
h3 {
    font-size: 18px;
}

p {
    color: white;
    text-align: initial;
}
.img-container {
    height: 350px;
    width: 100%;
    max-width: 380px;
    border-radius: 6%;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, #0085FF 0%, #0D1258 100%);
}
.img-container img {
    width: calc(100% - 11px);
    height: calc(100% - 11px);
    border-radius: 6%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    
}
.descrition {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
}
.descrition p {
    width: 90%;
    max-height: 322px;
    max-width: 440px;
    overflow-y: auto;
}
.descrition h2 {
    margin-bottom: 10px;
}
.icon-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    margin-top: 5px;
}
.icons {
    width: 40%;
    min-width: 60px;
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    color: white;
    align-items: center;

}
.icons svg {
    cursor: pointer;
}
.numbers {
    color: #0085FF;
    font-size: 17px;

}
.hooks-enter-active {
    transition: 1s;

}

.hooks-enter-from{
    opacity: 0;
    transform: scale(0);

}
.hook-enter-to {
    opacity: 1;
    transform: scale(1);
}

@media screen and (max-height: 400px) {
    
.menu-mobile {
    justify-content: flex-start;
}
    
}


</style>