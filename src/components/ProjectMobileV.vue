<template>
    <div class="project-details">
        <div class="project">
            <div class="project-img">
                <img id="project-img" :src="imgFile" :alt="projectName">
            </div>
            <div class="project-info">
                <h2 class="name-project">
                    {{ projectName }}
                </h2>
                <a class="link-project" href="https://www.youtube.com" target="_blank">
                    {{ link }}
                </a>
            </div>
        </div>
        <div class="project-icons-bar" id="icons-bar">
            <IconsProject v-if="!showIcons" idProps="caret-left" :iconNameProps="'caret-left'" :prefixProps="'fas'" :colorProps="'#fff'" @clicked="showIcons = !showIcons"></IconsProject>
        </div>
        <div :class="{'project-icons': true, showIcons}" id="icons">
            <div class="icons-container" v-for="icon in iconsArray" :key="icon">
                <TransitionGroup name="iconsGroup">
                        <IconsProject v-if="!icon.costum" :iconNameProps="icon.nameIcon" :prefixProps="icon.prefix"></IconsProject>
                        <CostumIconVue v-if="icon.costum" :fillProps="icon.fillProps" :iconClassNameProps="icon.iconClass" :sizeProps="icon.size" :iconNameProps="icon.nameIcon" :indexIconProps="icon.index"></CostumIconVue>
                    </TransitionGroup>
                </div>
        </div>
    </div> <!--fim do project-details -->
</template>

<script>
import IconsProject from './Icons.vue'
import CostumIconVue from './svg/CostumIcon.vue'
export default {
    name: 'ProjectShow',
    components: {
        IconsProject,
        CostumIconVue
    },
    data() {
        return {
            projectName: this.projectNameProps,
            projectImg: this.projectImgProps,
            imgFile: '',
            link: this.linkProps,
            iconsArray: this.iconsProps,
            showIcons: false,

        }
    },
    beforeMount() {
        this.imgFile = require(`@/assets/img/${this.projectImgProps}`)
    },
    mounted(){
        document.addEventListener('click', this.toggleClicked)
    },
    props: {
        projectNameProps: String,
        projectImgProps: String,
        linkProps: String,
        iconsProps: Array,

    },
    methods: {
        toggleClicked(e){
            console.log(e.target.nodeName)
            if (e.target.nodeName !== 'path' && this.showIcons === true) return this.showIcons = false
        },
    }

}
</script>

<style scoped>
.project-details {
    flex: 1.3;
    margin: auto;
    height: 100%;
    width: 98%;
    display: flex;
    transition: width 0.6s;
    overflow: hidden;
    position: relative;
    border-top-right-radius: 27.99px;
}



.project {
    width: 95%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
}

.project-img {
    width: 100%;
    height: 90%;
    position: relative;
    overflow: hidden;
}

.project-img img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 2;
    filter: grayscale(0%);
    object-fit: cover;
    cursor: pointer;

}

.project-img img:hover {
    filter: grayscale(0%);
}

.project-info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
    font-size: 0.9rem;

}

.name-project {
    color: var(--texto-especial);
    font-size: 1.8em;
    transform: translateX(5%)

}

.link-project {
    color: var(--texto-padrao);
    font-size: 1.2em;
    text-decoration: none;
    transform: translateX(5%);


}

.link-project:hover {
    color: var(--logo-titulo)
}

.project-icons-bar {
    width: 20px;
    height: calc(100% - 61px);
    background: linear-gradient(#0085FF, #0D1258);
    position: absolute;
    right: 5%;
    transform: translateX(20px);
    border-radius: 0px 27.99px 27.99px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.project-icons-bar svg {
    margin: 0px;
    transform: translateX(-1px);
    font-size: 1.8em;
}

.project-icons {
    width: 0%;
    height: calc(100% - 61px);
    display: flex;
    transition: 0.6s;
    background: linear-gradient(to right, #0084ffb9 0%, #0d1258c7 100%) !important;
    overflow-y: hidden;
    overflow-x: hidden;
    border-radius: 0px 27.99px 27.99px 0px;
    position: absolute;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
    

}
.showIcons {
    width: 100% !important;
    height: calc(100% - 61px) !important;
    position: absolute !important;
    z-index: 2 !important;
    right: 0;
}
.icons-container {
    transform: translateX(0px);
    font-size: 2.5rem;
    color: white;

}

svg {
    cursor: pointer;
    transition: 0.5s;
    color: #fff;
    font-size: 2.5rem
}

.project-icons::-webkit-scrollbar {
    width: 9px;
    height: 20px;

}

.project-icons::-webkit-scrollbar-track {
    background: var(--special-gradient);
    /* color of the tracking area */
}

.project-icons::-webkit-scrollbar-thumb {
    background-color: #fff;
    /* color of the scroll thumb */
    border-radius: 6px;
    height: 20px;
    /* roundness of the scroll thumb */
}
.iconsGroup-enter-active {
    transition: 0.8s !important;
    transition-delay: 0.3s !important;
}
.iconsGroup-leave-active {
    transition: 0.3s !important;
    
}
.iconsGroup-enter-from {
    opacity: 0 !important;
    transform: translateX(-400px) !important;
}
.iconsGroup-enter-to {
    opacity: 1 !important;
    transform: translateX(0px) !important;
}
.iconsGroup-leave-from{
    opacity: 1 !important;
}
.iconsGroup-leave-to{
    opacity: 0 !important;
}
@media screen and (max-height: 384px) {
    .project-details {
    width: 99%;
    min-width: 300px;
    height: 100%;
    margin: 0px;
    min-height: unset;
    display: flex;
    transition: width 0.6s;
    overflow: hidden;
    position: relative;
    border-top-right-radius: 27.99px;
    flex: 1;
    }
    .project {
        width: 95%;
        min-width: 300px;
        display: flex;
        flex-direction: column;
    }
    .project-info {
        font-size: 0.9rem;
    }
    .project-icons-bar {
        width: 20px;
        height: calc(100% - 61px);
        background: linear-gradient(#0085FF, #0D1258);
        position: absolute;
        right: 5%;
        transform: translateX(20px);
        border-radius: 0px 27.99px 27.99px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }
    .project-icons {
            width: 0%;
    height: calc(100% - 61px);
    display: flex;
    flex-direction: column;
    transition: 0.6s;
    background: linear-gradient(#0085FF, #0D1258);
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 0px 27.99px 27.99px 0px;
    z-index: 1;
    }

}
</style>