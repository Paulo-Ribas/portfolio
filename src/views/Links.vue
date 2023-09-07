<template>
    <section id="links">
        <div class="menu">
            <MainMenu :MenuFixoProps="true" :ActivatedProps="'lk'"></MainMenu>
        </div>
        <div class="link-radius-container">
            <div class="link-container">
                <div class="slide-container">
                    <Icons @clicked="toLeft()" :prefixProps="'fas'" class="carret-left" iconNameProps="caret-left"></Icons>
                    <div class="slide-items">
                         <div class="slide-box email">
                                <Icons prefixProps="fas" iconNameProps="envelope"></Icons>
                            </div>
                        <div class="slide-box git">
                            <Icons prefixProps="fab" iconNameProps="github"></Icons>
                        </div>
                        <div class="slide-box whats">
                            <Icons prefixProps="fab" iconNameProps="whatsapp"></Icons>
                        </div>
                    </div>
                    <Icons @clicked="toRight()" :prefixProps="'fas'" class="carret-right" iconNameProps="caret-right"></Icons>
                </div> <!--fim do slide-container-->
                <ul class="links">
                    <TransitionGroup name="lisGroups">
                        <li class="link-box" v-if="selected === 'gitHub'">
                            <a href="https://github.com/Paulo-Ribas" target="_blank"><span class="link-background-icon"> <Icons prefixProps="fas" iconNameProps="link"></Icons></span>Meu GitHub (Paulo Ribas)</a>
                        </li>
                        <li class="link-box"  v-if="selected === 'gitHub'">
                            <a href="https://github.com/Paulo-Ribas" target="_blank"><span class="link-background-icon"> <Icons prefixProps="fas" iconNameProps="link"></Icons></span>Meu GitHub (Paulo Ribas)</a>
                        </li>
                        <li class="link-box " v-if="selected === 'email'">
                            <a href="mailto:https://github.com/Paulo-Ribas" target="_blank"><span class="link-background-icon"> <Icons prefixProps="fas" iconNameProps="link"></Icons></span>paulo13paulo423@gmail.com</a>
                        </li>
                        <li class="link-box"  v-if="selected === 'whats'">
                            <a href="https://wa.me/55992101585" target="_blank"><span class="link-background-icon"> <Icons prefixProps="fas" iconNameProps="link"></Icons></span>+55 55 9210-1585</a>
                        </li>
                    </TransitionGroup>
                </ul> <!--fim da ul links-->
            </div> <!--fim do link-container-->
        </div> <!--fim-do-link-radius-container-->
    </section>
    
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import Icons from "../components/Icons.vue"
export default {
    name: 'Links-',
    components:{
        MainMenu,
        Icons,
    },
    data(){
        return {
            selected: '',
            count: 0,
        }
    },
    mounted(){
        this.selected = 'gitHub'
        let arraySlideBox = document.querySelectorAll('.slide-box')
        arraySlideBox.forEach((slidebox, index) => {
            if(index === 0)slidebox.style.left = '10%'
            if(index === 1)slidebox.style.left = '40%'
            if(index === 2)slidebox.style.left = '70%'
        })
        arraySlideBox[1].style.transform = 'scale(1.2)'
    },
    methods:{
        slide(direction){
            let arraySlideBox =  document.querySelectorAll('.slide-box')
            arraySlideBox.forEach((slidebox) => {
                let leftCss = parseInt(slidebox.style.left.split('%')[0])
                slidebox.style.transform = 'scale(1)'
                slidebox.style.opacity = '0.7'
                if(leftCss === 10 && direction === 'left'){
                    slidebox.style.left = '70%'
                    return
                }
                if(leftCss === 70 && direction === 'right'){
                    slidebox.style.left = '10%'
                    return
                }
                if(direction === 'right') {
                    slidebox.style.left = `${leftCss + 30}%`
                }
                if (direction === 'left') {
                    slidebox.style.left = `${leftCss - 30}%`
                }
                if ((leftCss - 30) === 40 || (leftCss + 30) === 40) {
                    slidebox.style.transform = 'scale(1.2)'
                    slidebox.style.opacity = '1'
                   slidebox.classList.contains('git') ? this.selected = 'gitHub' : 
                   slidebox.classList.contains('email') ? this.selected = 'email' :
                   slidebox.classList.contains('whats') ? this.selected = 'whats' :
                   true

                }
            });
        },
        toLeft(){
            let number = this.count
            number -= 1
            if(number < 0) this.count = 2
            this.slide('left')
        },
        toRight(){
            let number = this.count
            number += 1
            if (number > 2) this.count = 0
            this.slide('right')
        },
        addCount(){

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
    z-index: 5;
    width: 100%;
}
#links {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link-radius-container {
    width: 95%;
    max-width: 400px;
    height: 95%;
    max-height: 400px;
    border-radius: 50%;
    border: 2.381px solid #FFF;
    background: linear-gradient(180deg, rgba(0, 133, 255, 0.75) 0%, rgba(13, 18, 88, 0.75) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.link-container {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}
.slide-container {
    width: 75%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.carret-left, .carret-right{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8em;
    z-index: 5;
    cursor: pointer;
}
.carret-left {
    left: 0;
    
}
.carret-right {
    right: 0;
}
.slide-items {
    width: 93%;
    height: 100%;
    font-size: 2.3em;
    position: relative;
}
.slide-box {
    background-color: #D9D9D9;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    left: 1%;
    position: absolute;
    transform: scale(1);
}
.slide-box svg:hover {
    color: var(--background);
}

.links {
    display: flex;
    width: 100%;
    flex-direction: column;
    list-style: none;
    height: 50%;
    gap: 10px;
}

.link-box {
    gap: 18px;
    width: 100%;
    display: flex;
    justify-content: center;

}
.link-box a {
    color: white;
    font-size: 15px;
    text-decoration: none;
    display: flex;
    gap: 12px;
    align-items: center;
    width: 73%;
   
}
.link-box  span {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-color: #D9D9D9;
    font-size: 1.3em;
    padding: 10px 10px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

</style>