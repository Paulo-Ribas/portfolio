<template>
    <section id="start">
            <div class="container"></div>
            <MainMenu/>
    </section>
</template>

<script>
import MainMenu from '../components/NavegationMenu.vue'
export default {
    name:'Start-',
    components: {
        MainMenu
    },
    data(){
        return {
            apresentation: false,
            skills: false,
            code: false,
            link: false,
            Event: false,
            left: false,
        }
    },
    methods: {
        setEvent(){
            setTimeout(() => {
                this.Event = true
               
            }, 400);
        },
        removeEvent(){
            this.Event = false
        },
        enterBox(data){
             data === 'ap' && this.Event ? this.apresentation = true : this.apresentation = false
            data === 'sk' && this.Event ? this.skills = true : this.skills = false
            data === 'cd' && this.Event ? this.code = true : this.code = false
            data === 'lk' && this.Event ? this.link = true : this.link = false
        }
    },
    beforeUnmount(){
        this.left = true
    }
}
</script>

<style scoped>
    h1 {
        color: var(--texto-especial);
    }
    #start {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .H-group-enter-active, .H-group-leave-active, .H-group-move{
        transition: all 1s;
    }
    .H-group-enter-from {
        left: 20%;
        opacity: 0.2;
    }
    .H-group-enter-to {
        left: 50%;
        opacity: 1;
    }
    .H-group-leave-from {
        left: 50%;
        opacity: 0.2;
    }
    .H-group-leave-to {
        left: 80%;
        opacity: 0;
    }

    
   svg:hover {
       color: var(--texto-especial);
       cursor: pointer;
   }
   .text-container {
       margin-top: 30px;
       width: 100%;
       position: relative;
       
   }
   h2 {
       font-size: 1.5em;
       color: var(--texto-especial);
       position: absolute;
       left: 50%;
       transform: translateX(-50%);
    
   }
    
</style>