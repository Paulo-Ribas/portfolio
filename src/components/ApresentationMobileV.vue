<template>
    <div id="container-mobile">
        <div class="information-container">
            <div class="img-container">
                <img src="../assets/img/eu33.png" alt="minha foto">
            </div>
            <div class="informations">
                <h2>Paulo Ribas</h2>
                <h3>Desenvolvedor web</h3>
            </div>
        </div> <!-- fim information-container -->
        <div class="description">
            <h2 v-html="tittle"></h2>
            <p v-html="text"></p>
            <div class="icon-container">
                <div class="icons">
                    <IconsVue @clicked="ChangeCountText('-')" :iconNameProps="'caret-left'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsVue>
                    <div class="numbers">{{ countText }}/2</div>
                    <IconsVue @clicked="ChangeCountText('+')" :iconNameProps="'caret-right'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsVue>
                </div>
            </div>
        </div> <!--fim descrition-->
        <div class="next-before">
            <IconsVue class="left" iconNameProps="circle-left" prefixProps="fas" @clicked="arrowLeft()" ></IconsVue>
            <IconsVue class="right" iconNameProps="circle-right" prefixProps="fas" @clicked="arrowRight()"></IconsVue>
        </div>
    </div>
</template>

<script>
import IconsVue from './Icons.vue'
export default {
    name: 'apresentation-mobile',
    props: {
        tittleProps: String,
        textProps: String,
    },
    components:{
        IconsVue
    },
    data() {
        return {
            animation: false,
            text: this.$props.textProps,
            tittle:this.$props.tittleProps,
            countText: 0,
            moveCounter: 0,

        }
    },
    mounted() {
        this.animation = true
        this.countText = 1
        this.moveCounter = 0
    },
    watch: {
        countText() {
            this.ChangeText()
        }
    },

    methods: {
        ChangeText() {
            if (this.countText < 2) {
                this.tittle = "FreeLancer/Pessoa Comum"
                this.text = `Olá! Eu sou Paulo Ribas, um desenvolvedor web com 20 anos de idade. Minha jornada começou aos 17 anos, quando entrei no mundo da programação usando "linguagens" como HTML e CSS. Isso me permitiu dar vida às ideias criativas na web. <br>
    Com o tempo, aprofundei meu conhecimento e aprendi JavaScript, o que me possibilitou criar sites interativos e dinâmicos. Também tenho experiência em construir sistemas de servidor eficientes usando Node.js e criar soluções personalizadas para diferentes necessidades. <br>
    Em meus projetos mais recentes, desenvolvi soluções completas, como sistemas de cadastro, login, chat em tempo real e upload de arquivos. Isso me ensinou a resolver problemas complexos de forma criativa. <br>
    Estou capacitado para criar uma ampla gama de sites, desde landing pages até lojas virtuais, assim como o design de tais.


    `

            }
            if (this.countText > 1) {
                this.tittle = "Empresa/Programador"
                this.text = `Olá, sou Paulo Ribas, um entusiasta de programação de 20 anos de idade. Iniciei minha jornada no mundo do desenvolvimento aos 17 anos, focando inicialmente no HTML e CSS para criar páginas web. Com dedicação e estudo, aprimorei minhas habilidades e mergulhei profundamente no JavaScript. <br>

Explorando o JavaScript, aprofundei meu entendimento da lógica de programação e do Document Object Model (DOM). Isso me permitiu criar projetos práticos em JavaScript, sem depender de frameworks. <br>

Decidi então partir para o desenvolvimento back-end com Node.js, onde aprendi sobre rotas, protocolos e escopos da web. Criei minhas próprias APIs e aplicações para manipulação de arquivos locais, aprimorando minha capacidade técnica de solucionar desafios complexos. <br>

Trabalhei com bancos de dados relacionais e não relacionais, como MySQL e MongoDB, além de explorar frameworks como EJS, Express, Sequelize, Knex e Mongoose para desenvolver aplicativos robustos. <br>

Por fim, me apaixonei pelo Vue.js e dediquei tempo para aprofundar minhas habilidades nessa área, incluindo a exploração do Nuxt.js para aprimorar meu desenvolvimento front-end. <br>

Nos últimos anos, foquei em projetos desafiadores que ampliaram minha capacidade técnica e solução de problemas. Um desses projetos em destaque, desenvolvido em Nuxt.js, inclui um sistema completo de cadastro e login, funcionalidade de upload de arquivos e a criação de salas com chat em tempo real. <br>

Acredito que a verdadeira aprendizagem vem da prática e da resolução de problemas/desafios. Cada dificuldade que tive em todos esses projetos agregaram na minha evolução e fizeram eu melhorar cada vez mais. Mesmo quando me deparo com tecnologias ou arquiteturas desconhecidas, vejo isso como uma oportunidade de aprendizado e adaptação, confiante de que posso dominá-las com o tempo.`
            }
        },
        ChangeCountText(signal) {
            signal === '+' ? this.countText += 1 : this.countText -= 1
            this.countText > 2 ? this.countText = 1 : this.countText < 1 ? this.countText = 2 : this.countText
        },
        arrowLeft(){
            document.querySelector('.left').classList.toggle('clicked')
            this.moveContainer()
            setTimeout(() => {
                document.querySelector('.left').classList.toggle('clicked')
            }, 1000);
        },
        arrowRight() {
            document.querySelector('.right').classList.toggle('clicked')
            this.moveContainer()
            setTimeout(() => {
                document.querySelector('.right').classList.toggle('clicked')
            }, 1000);
        },
        moveContainer(){
            let container = document.getElementById('container-mobile')
            let nextBefore = document.querySelector('.next-before')
            this.moveCounter++
            if(this.moveCounter > 1 || this.moveCounter < 0) this.moveCounter = 0
            if(this.moveCounter === 1) {
                container.style.transform = 'translateX(-100%)'
                nextBefore.style.left = '125%'
                nextBefore.style.transform = 'translate(-50%, -50%)'
                console.log('é numero')
                return
            }
            container.style.transform = 'translateX(0%)'
            nextBefore.style.left = '25%'
            nextBefore.style.transform = 'translate(-50%, -50%)'
        },
        
    }
    
}
</script>

<style scoped>
    #container-mobile {
        width: 200%;
        height: 100%;
        position: relative;
        transition: 1.5s;
        transform: translateX(0%);
    }
    .information-container, .description {
        width: 50%;
        height: 100%;
        max-height: 400px;
        position: absolute;
    }
    .description {
        max-height: 400px;
        position: absolute;
        top: 150%;
        left: 150%;
        transform: translate(-150%, -150%);
    }
.next-before {
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    font-size: 2rem;
    color: white;
    top: 90%;
    left: 25%;
    transform: translate(-50%, -50%);
    transition: 1.6s;
    pointer-events: none;
}
.left, .right {
    transition: 0.2s;
    pointer-events: all;
}
.clicked {
    color: #0085FF !important;
}
.information-container {
    display: flex;
    width: 49%;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    max-height: 400px;
    top: 20%;
    left: 1%;
    transform: translate(-1%, -20%);
}
.informations {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0px
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
    height: 300px;
    width: 98%;
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
.description {
    max-height: 400px;
    width: 49%;
    position: absolute;
    top: 20%;
    /* overflow-y: auto; */
    display: flex;
    left: 98%;
    flex-direction: column;
    height: 90%;
    /* justify-content: start; */
    gap: 8px;
    align-items: center;
    transform: translate(6%, -20%);
   
}
.description p {
    width: 90%;
    max-height: 322px;
    max-width: 440px;
    overflow-y: auto;
}
.description h2 {
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
    .information-container {
        justify-content: center;
        
    }
    .img-container {
    height: 69%;
    width: 54%;
    max-width: 330px;
    max-height: 300;
    border-radius: 6%;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, #0085FF 0%, #0D1258 100%);
}
    
}


</style>