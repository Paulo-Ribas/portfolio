<template>
    <div :class="{'container-card': true}">
        <Icons class="icon" iconNameProps="hourglass-half" prefixProps="fas" v-if="!finished"></Icons>
        <div :class="{'project-container': true, 'unfinished': !finished}">
            <div :class="{'icons-bar': true, 'absolute': showIcons}" >
                <div :class="{'carret-container': true, 'absolute-caret': showIcons}" @click="showIcons = !showIcons">
                    <Icons :iconNameProps="'caret-up'" :prefixProps="'fas'" v-show="showIcons"></Icons>
                    <Icons :iconNameProps="'caret-down'" :prefixProps="'fas'" v-show="!showIcons"></Icons>
                </div>
                <transition name="icons">
                    <div class="icons-container" v-if="showIcons">
                        <Icons v-for="(icon, index) in iconsArray" :key="index" :icon-name-props="icon.name" :prefixProps="icon.prefix"></Icons>
                    </div>
                </transition>
            </div>
            <div class="link-name-container">
                <h2>{{ name }}</h2>
                <a :href="link" target="_blank">{{ link }}</a>
            </div>
            <div class="img-and-text-container">
                <div class="img-container">
                    <img :src="imgUrl">
                </div>
                <div class="text">
                    {{ text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from '@/components/Icons.vue';
export default {
    data() {
        return {
            name: this.nameProps,
            link: this.linkProps,
            text: this.textProps,
            showIcons: false,
            iconsArray: this.iconsArrayProps,
            animation: false,
            finished: this.finishedProps,
        };
    },
    mounted(){
        this.showIcons = false
    },
    computed: {
        imgUrl(){
            return require(`@/assets/img/${this.$props.imgUrlProps}`)
        },
    },
    props: {
        nameProps: String,
        linkProps: String,
        imgUrlProps: String,
        textProps: String,
        iconsArrayProps: Array,
        finishedProps: Boolean
    },
    components: { Icons }
}
</script>

<style scoped>
.project-container {
    width: 100%;
    max-width: 350px;
    min-width: 300px;
    max-height: 350px;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #D9D9D9;
    overflow: hidden;
    transition: 0s;
}
.container-card {
    width: 100%;
    height: 100%;
    max-width: 350px;
    min-width: 300px;
    max-height: 350px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 30px;
}
.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    /* filter: drop-shadow(2px 4px 6px white); */
    font-size: 2.4rem;
    z-index: 11;
    filter: none !important;
    /* filter: brightness(14.5); */
}
.icons-bar {
    height: 24px;
    width: 100%;
    background: linear-gradient(to right, #0085FF 0%, #0D1258 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition:all  0.5s;
    position: absolute;
    z-index: 2;
}

.carret-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
}
.carret-container svg {
    color: white;
    font-size: 20px !important;
}

.icons-container {
    width: 100%;
    overflow-x: auto;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translateX(0px);
    font-size: 2.70em;
    display: flex;
    color: white;
    gap: 9%;
}

.link-name-container {
    width: 100%;
    text-align: left;
    padding-left: 3px;
    margin-top: 24px
}

.link-name-container h2 {
    background: linear-gradient(180deg, #0085FF 0%, #0D1258 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: capitalize;
    font-size: 28px;

}

.link-name-container a {
    color: #0D1258;
    font-size: 16px;
    font-weight: 499;
    text-decoration: none;
    line-height: 0px;
}

.img-and-text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
}

.img-and-text-container .img-container {
    width: 100%;
    height: 100%;
    max-height: 300px;
    position: relative;
    overflow: hidden;
}

.img-and-text-container .img-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 0.8s;
}
.img-and-text-container .img-container img:hover {
    transform: scale(1.05);
}

.text {
    font-size: 16px;
    color: #595959;
}
.margin-top {
    padding-top: 24px;
}
.absolute {
    position: absolute !important;
    top: 0;
    height: 100% !important;
    z-index: 2;
    background: linear-gradient(to right, #0084ffb9 0%, #0d1258c7 100%) !important;
    

}
.absolute-caret {
    bottom: 0 !important;
    position: absolute !important;
    height: 26px;
    width: 100%;
}
.unfinished {
    filter: brightness(0.5);
    pointer-events: none;

}
.filter {
    filter: brightness(0.5);
}
.icons-enter-active {
    transition: 0.8s;
    transition-delay: 0.3s;
}
.icons-leave-active {
    transition: 0.3s;
    
}
.icons-enter-from {
    transform: translateX(-400px);
}
.icons-enter-to {
    transform: translateX(0px);
}
.icons-leave-from{
    opacity: 1;
}
.icons-leave-to{
    opacity: 0;
}
</style>