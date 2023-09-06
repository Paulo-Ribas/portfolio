<template>
    <Transition name="teste">
    <nav :class="{MenuFixo,'container-icons': true}">
        <img v-show="closed" class="img-menu" src="../assets/img/menu.png">
        <ul v-show="!closed">
            <li>
                <Transition name="ap">
                    <router-link :class="{Activated: Active === 'ap'}" to="/apresentation" v-if="!Animation"><IconMenu prefixProps="fas" iconNameProps="person-chalkboard" @enter="enterEmit('ap')" @leave="leaveEmit('ap')"></IconMenu></router-link>
                </Transition>
            </li>
            <li>
                <Transition name="sk">
                    <router-link :class="{Activated: Active === 'sk'}" to="/skills" v-if="!Animation"><IconMenu prefixProps="fas" iconNameProps="address-card" @enter="enterEmit('sk')" @leave="leaveEmit('sk')"></IconMenu></router-link>
                </Transition>
            </li>
            <li>
            <Transition name="cd">
                <router-link :class="{Activated: Active === 'cd'}" to="/projects" v-if="!Animation"><IconMenu prefixProps="fas" iconNameProps="code" @enter="enterEmit('cd')" @leave="leaveEmit('cd')"></IconMenu></router-link>
            </Transition>
            </li>
            <li>
            <Transition name="cdg">
                <router-link :class="{Activated: Active === 'cdg'}" to="/projects-general" v-if="!Animation"><IconMenu prefixProps="fas" iconNameProps="laptop-code" @enter="enterEmit('cdg')" @leave="leaveEmit('cdg')"></IconMenu></router-link>
            </Transition>
            </li>
            <li>
                <Transition name="lk">
                <router-link :class="{Activated: Active === 'lk'}" to="/links" v-if="!Animation"><IconMenu prefixProps="fas" iconNameProps="link" @enter="enterEmit('lk')" @leave="leaveEmit('lk')"></IconMenu></router-link>
                </Transition>
            </li>
        </ul>
    </nav>
    </Transition>
</template>

<script>
import IconMenu from './Icons.vue'
export default {
    name:"Menu-",
    components:{
        IconMenu,
    },
    data(){
        return {
            MenuFixo: this.MenuFixoProps,
            Animation: this.AnimationProps,
            Active: this.ActivatedProps,
            closed: false,
        }
    },
    mounted(){
        this.Animation = false
    },
    props: {
        MenuFixoProps: Boolean,
        AnimationProps: Boolean,
        ActivatedProps: String,
    },
    methods: {
        enterEmit(data){
            this.$emit('enterEmit',data)
        },
        leaveEmit(data){
            this.$emit(data)
        }
    }
}
</script>

<style scoped>
    .container-icons {
        max-width: 140px;
        width: 100%;
        height: 50px;
        background: var(--background-special);
        background: var(--special-gradient-support);
        background: var(--special-gradient);
        border-radius: 50px;
        transition: 0.6s ease-in;
        font-size: 1.3em;
        padding: 0px 4px;
        
    }
    .img-menu  {
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
    .container-icons ul {
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .container-icons:hover {
        max-width: 500px !important;

    }
    .MenuFixo {
        max-width: 500px !important;
    }
    .Activated {
        color: #fff !important;
    }
    a {
        color: var(--background)
    }

    .ap-enter-active {
        transition: 1s;
    }
    .ap-enter-from {
        opacity: 0.2;
        transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);;
    }
    .ap-enter-to {
        opacity: 1;
        transform: translate(0,0) rotate3d(0, 1, 0, 360deg);;
    }
/* ---------------------------------------------------------------*/
    .cd-enter-active {
        transition: 1s;
    }
    .cd-enter-from {
        opacity: 0.2;
        transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);;
    }
    .cd-enter-to {
        opacity: 1;
        transform: translate(0,0) rotate3d(0, 1, 0, 360deg);;
    }
/* ---------------------------------------------------------------*/
    .sk-enter-active {
        transition: 1s;
    }
    .sk-enter-from {
        opacity: 0.2;
        transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);;
    }
    .sk-enter-to {
        opacity: 1;
        transform: translate(0,0) rotate3d(0, 1, 0, 360deg);;
    }
/* ---------------------------------------------------------------*/
    .lk-enter-active {
        transition: 1s;
    }
    .lk-enter-from {
        opacity: 0.2;
        transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);;
    }
    .lk-enter-to {
        opacity: 1;
        transform: translate(0,0) rotate3d(0, 1, 0, 360deg);;
    }

     .teste-enter-active {
        transition: 1s;
    }
    .teste-enter-from {
        opacity: 0.2;
        transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);;
    }
    .cd-enter-to {
        opacity: 1;
        transform: translate(0,0) rotate3d(0, 1, 0, 360deg);;
    }

</style>