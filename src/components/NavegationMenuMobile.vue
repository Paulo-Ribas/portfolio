<template>
    <Transition name="teste">
        <nav :class="{MenuFixo,'container-icons': true}" id="menu-mobile" @click.stop="toggleMenu">
            <div class="img-container"  v-if="closed">
                <img class="img-menu" src="../assets/img/menu.png">
            </div>
            <ul v-show="!closed">
                <li>
                    <Transition name="ap">
                        <router-link :class="{Activated: Active === 'ap'}" to="/apresentation" v-if="!Animation">
                            <IconMenu prefixProps="fas" iconNameProps="person-chalkboard" @enter="enterEmit('ap')"
                                @leave="leaveEmit('ap')"></IconMenu>
                        </router-link>
                    </Transition>
                </li>
                <li>
                    <Transition name="sk">
                        <router-link :class="{Activated: Active === 'sk'}" to="/skills" v-if="!Animation">
                            <IconMenu prefixProps="fas" iconNameProps="address-card" @enter="enterEmit('sk')"
                                @leave="leaveEmit('sk')"></IconMenu>
                        </router-link>
                    </Transition>
                </li>
                <li>
                    <Transition name="cd">
                        <router-link :class="{Activated: Active === 'cd'}" to="/projects" v-if="!Animation">
                            <IconMenu prefixProps="fas" iconNameProps="code" @enter="enterEmit('cd')"
                                @leave="leaveEmit('cd')"></IconMenu>
                        </router-link>
                    </Transition>
                </li>
               <li>
            <Transition name="cdg">
                <router-link :class="{Activated: Active === 'cdg'}" to="/projects-general" v-if="!Animation"><IconMenu prefixProps="fas" iconNameProps="laptop-code" @enter="enterEmit('cdg')" @leave="leaveEmit('cdg')"></IconMenu></router-link>
            </Transition>
            </li>
                <li>
                    <Transition name="lk">
                        <router-link :class="{Activated: Active === 'lk'}" to="/links" v-if="!Animation">
                            <IconMenu prefixProps="fas" iconNameProps="link" @enter="enterEmit('lk')"
                                @leave="leaveEmit('lk')"></IconMenu>
                        </router-link>
                    </Transition>
                </li>
            </ul>
        </nav>
    </Transition>
</template>

<script>
import IconMenu from './Icons.vue'
export default {
    name: "Menu-",
    components: {
        IconMenu,
    },
    data() {
        return {
            MenuFixo: this.MenuFixoProps,
            Animation: this.AnimationProps,
            Active: this.ActivatedProps,
            closed: this.closedProps,
        }
    },
    mounted() {
        this.Animation = false
        document.addEventListener('click', this.toggleClicked)

    },
    props: {
        MenuFixoProps: Boolean,
        AnimationProps: Boolean,
        ActivatedProps: String,
        closedProps: Boolean,
    },
    methods: {
        enterEmit(data) {
            this.$emit('enterEmit', data)
        },
        leaveEmit(data) {
            this.$emit(data)
        },
        toggleMenu(){
            this.closed = !this.closed
            this.MenuFixo = !this.closed
        },
        toggleClicked($event){
            let menu = document.getElementById('menu-mobile')
            console.log(this.closed, menu.contains($event.target))
            if(!menu.contains($event.target) && !this.closed) this.toggleMenu()
        }
    }
}
</script>

<style scoped>
.container-icons {
    width: 98%;
    max-width: 45px;
    height: 45px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: 0.5s;
    pointer-events: all;

}

.img-container {
    width: 45px;
    height: 45px;
    position: relative;
}
.img-menu {
    width: 60%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
}

.container-icons ul {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.3em
}


.MenuFixo {
    max-width: 500px !important;
    background: var(--special-gradient-support) !important;
    background: var(--special-gradient)!important;
    height: 45px !important;
    border-radius: 50px;
    margin: 0px;
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
    transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);
    ;
}

.ap-enter-to {
    opacity: 1;
    transform: translate(0, 0) rotate3d(0, 1, 0, 360deg);
    ;
}

/* ---------------------------------------------------------------*/
.cd-enter-active {
    transition: 1s;
}

.cd-enter-from {
    opacity: 0.2;
    transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);
    ;
}

.cd-enter-to {
    opacity: 1;
    transform: translate(0, 0) rotate3d(0, 1, 0, 360deg);
    ;
}

/* ---------------------------------------------------------------*/
.sk-enter-active {
    transition: 1s;
}

.sk-enter-from {
    opacity: 0.2;
    transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);
    ;
}

.sk-enter-to {
    opacity: 1;
    transform: translate(0, 0) rotate3d(0, 1, 0, 360deg);
    ;
}

/* ---------------------------------------------------------------*/
.lk-enter-active {
    transition: 1s;
}

.lk-enter-from {
    opacity: 0.2;
    transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);
    ;
}

.lk-enter-to {
    opacity: 1;
    transform: translate(0, 0) rotate3d(0, 1, 0, 360deg);
    ;
}

.teste-enter-active {
    transition: 1s;
}

.teste-enter-from {
    opacity: 0.2;
    transform: translate(-300%, -340%) rotate3d(0, 1, 0, 0deg);
    ;
}

.cd-enter-to {
    opacity: 1;
    transform: translate(0, 0) rotate3d(0, 1, 0, 360deg);
    ;
}</style>