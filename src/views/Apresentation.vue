<template>
    <div class="menu">
        <MainMenu :MenuFixoProps="true" :ActivatedProps="'ap'"></MainMenu>
    </div>
    <Transition name="hooks">
    <section id="apresentation" v-if="animation">
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
                <h2>{{tittle}}</h2>
                <p>{{ text }}</p>
                <div class="icon-container">
                    <div class="icons">
                        <IconsProject @clicked="ChangeCountText('-')" :iconNameProps="'caret-left'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsProject>
                        <div class="numbers">{{countText}}/2</div>
                        <IconsProject @clicked="ChangeCountText('+')" :iconNameProps="'caret-right'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsProject>
                    </div>
                </div>
            </div> <!--fim descrition-->
        </div> <!--fim container-->
    </section>
    </Transition>
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import IconsProject from "../components/Icons.vue"
export default {
    name: 'Apresentation-',
    components:{ 
        MainMenu,
        IconsProject
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
                this.tittle = "FreeLancer/Pessoa Comum"
                this.text = `Olá! Eu sou [Seu Nome], um desenvolvedor web apaixonado com 20 anos de idade. Minha jornada começou aos 17 anos, quando entrei no mundo da programação e mergulhei em um universo de possibilidades.

    Minha paixão por criar começou com a construção de páginas web envolventes, onde utilizei HTML e CSS para dar vida a visões criativas. Aprofundando-me, dominei o JavaScript, uma linguagem que me permitiu criar projetos interativos e dinâmicos, expandindo meu conhecimento para além do código básico.

    Ao longo dos anos, aprimorei minhas habilidades no desenvolvimento de sistemas back-end eficientes com Node.js, explorando a criação de APIs personalizadas e soluções versáteis para manipulação de dados.

    Minha experiência abrange uma ampla gama de tecnologias, incluindo bancos de dados, onde tenho expertise em projetar e otimizar sistemas para atender às necessidades específicas de cada projeto.

    Além disso, minha jornada me levou a explorar uma variedade de frameworks, aprofundando-me em ferramentas como Vue.js para criar interfaces sofisticadas e altamente funcionais.

    Em meus projetos mais recentes, criei soluções abrangentes, incluindo sistemas de cadastro, login, chat em tempo real e upload de arquivos. Esses desafios me permitiram expandir minhas habilidades e aprender a enfrentar problemas complexos de forma criativa.

 Estou empolgado para colaborar em projetos que exijam uma abordagem versátil e soluções criativas. Se você está em busca de um desenvolvedor que entende a linguagem da web e tem o comprometimento de transformar conceitos em realidade, estou aqui para ajudar!`
                
            }
            if(this.countText > 1) {
                this.tittle = "Empresa/Programador"
                this.text = `"Olá, sou [Seu Nome], um apaixonado por programação de 20 anos de idade que deu os primeiros passos no mundo do desenvolvimento aos 17. Minha jornada começou com HTML semântico e CSS, onde mergulhei profundamente até alcançar a habilidade de criar páginas web impressionantes, desafiando os limites dessas linguagens.

Motivado pela busca constante de conhecimento, mergulhei na lógica de programação e explorei o vasto território do JavaScript. Como parte dessa jornada, dominei o Document Object Model (DOM), o que me permitiu criar projetos pessoais envolventes para aplicar meus conhecimentos práticos em JavaScript, sem depender de frameworks.

No entanto, minha sede por desafios me levou ao desenvolvimento back-end, onde me aventurei no mundo do Node.js. Ao explorar esse ecossistema, aprofundei meu entendimento de rotas, protocolos e escopos da web. Pude até criar minhas próprias APIs e aplicações para manipulação de arquivos locais, demonstrando minha capacidade de inovação e resolução de problemas.

À medida que minha jornada progredia, abracei os desafios e vantagens dos bancos de dados relacionais e não relacionais, como MySQL e MongoDB. No entanto, o próximo passo emocionante foi a exploração de frameworks. Explorei uma variedade de ferramentas, incluindo EJS, Express, Sequelize, Knex e Mongoose. Com cada novo framework, expandi minha capacidade de desenvolver aplicativos robustos e eficientes.

Mas foi o Vue.js que realmente capturou meu coração. Este incrível framework me encantou com sua elegância e flexibilidade. Investi tempo e esforço em me aprofundar no Vue.js e até explorei o Nuxt.js para levar minhas habilidades de desenvolvimento de front-end a um novo patamar.

Além disso, ao longo do último ano, mergulhei profundamente em uma fase de projetos específicos que considerava essenciais para meu crescimento como desenvolvedor. Durante esse período, busquei desafios que não apenas ampliassem minhas habilidades, mas também testassem minha capacidade de buscar soluções e adotar novas tecnologias por conta própria. Essa etapa representou um ponto de virada em minha jornada, onde deixei de depender exclusivamente de cursos ou livros, e aprendi a compreender documentações complexas e enfrentar erros inéditos com confiança.

Essa jornada de autoaprendizado contribuiu enormemente para o enriquecimento do meu conhecimento. Um projeto notável que realizei foi desenvolvido em Nuxt.js, com um sistema abrangente de cadastro e login, funcionalidade de upload de arquivos e a criação de salas com chat em tempo real, onde os usuários também podiam assistir a vídeos simultaneamente. Esse projeto desafiador se tornou um marco significativo em minha trajetória. Desde os primeiros obstáculos enfrentados na integração com a API até os detalhes finais do front-end, pude observar uma evolução sem precedentes.

O código-fonte do projeto conta a história da minha evolução como desenvolvedor. Ao analisar as diferentes táticas utilizadas, aprimoramentos aplicados e a crescente compreensão sobre serviços em nuvem, como AWS, percebo que minha jornada é claramente visível nas nuances do próprio código. Cada linha de código representa não apenas uma funcionalidade, mas um passo em direção ao domínio de tecnologias complexas e à resolução de problemas desafiadores.

Nessa jornada, descobri que a verdadeira aprendizagem está na experiência prática e na superação de obstáculos. Cada desafio superado e cada novo conhecimento adquirido me impulsionaram a avançar ainda mais. Estou animado para continuar enfrentando novos projetos desafiadores, expandir meu conjunto de habilidades e explorar novas fronteiras no mundo do desenvolvimento."`
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

.menu{
    position: absolute;
    bottom: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    width: 100%;
    
}
#apresentation {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    width: 100%;
    max-width: 980px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

}
.information-container {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

}
.informations {

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

</style>