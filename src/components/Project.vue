<template>
    <div class="project-details">
        <div class="project">
            <div class="project-img">
                <img :src="imgFile" :alt="projectName">
            </div>
            <div class="project-info">
                <h2 class="name-project">
                    {{projectName}}
                </h2>
                <a class="link-project" :href="link" target="_blank">
                     {{link}}
                </a>
            </div>
        </div>
        <div class="project-icons-bar">
            <IconsProject :iconNameProps="'caret-right'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsProject>
        </div>
        <div class="project-icons">
            <div class="icons" v-for="icon in icons" :key="icon">
                <IconsProject v-if="!icon.costum" :iconNameProps="icon.nameIcon" :prefixProps="icon.prefix"></IconsProject>
                <CostumIconVue v-if="icon.costum" :whiteProps="icon.white" :fillProps="icon.fillProps" :iconClassNameProps="icon.iconClass" :sizeProps="icon.size" :iconNameProps="icon.nameIcon" :indexIconProps="icon.index"></CostumIconVue>
            </div>
        </div>
    </div> <!--fim do project-details -->

</template>

<script>
import  IconsProject from './Icons.vue'
import CostumIconVue from './svg/CostumIcon.vue'
export default {
    name: 'ProjectShow',
    components: {
        IconsProject,
        CostumIconVue
    },
    data(){
        return {
            projectName: this.projectNameProps,
            projectImg: this.projectImgProps,
            imgFile: '',
            link: this.linkProps,
            icons: this.iconsProps,
            
        }
    },
    beforeMount(){
        this.imgFile = require(`@/assets/img/${this.projectImgProps}`)
    },
    props: {
        projectNameProps: String,
        projectImgProps: String,
        linkProps: String,
        iconsProps: Array,

    }
    
}
</script>

<style scoped>
.project-details{
    width: 50%;
    min-height: 500px;
    display: flex;
    transition: width 0.6s;
    overflow: hidden;
    position: relative;
    border-top-right-radius: 27.99px;
}
.project-details:hover {
    width: 64% !important;
}
.project-details:hover > .project-icons-bar {
    opacity: 0;
}
.project-details:hover > .project-icons {
    width: 55px;
    overflow-y: auto;
}
.project-details:hover > .project-icons .icons svg {
    transform: translateX(0);
}
.project-details:hover > .project-icons .icons .costumIcons {
    transform: translateX(0)
}
.project-details:hover .project-icons-bar svg {
    color: transparent;
    transform: translateX(2px);
    transition: 0.2s;
}
.project{
    width: 95%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
}
.project-img{
    width: 100%;
    height: 85%;
    position: relative;
    overflow: hidden;
    position: relative;
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
.project-info{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    overflow: hidden;
    word-break: keep-all;
    white-space: pre;
}
.name-project{
    color: var(--texto-especial);
    font-size: 1.8em
}
.link-project {
    color: var(--texto-padrao);
    font-size: 1.2em;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;

}
.link-project:hover {
    color: var(--logo-titulo)
}
.project-icons-bar {
    width: 20px;
    height: 85%;
    background: linear-gradient(#0085FF, #0D1258);
    position: absolute;
    right: 5%;
    transform: translateX(20px);
    border-radius: 0px 27.99px 27.99px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;

}
.project-icons-bar svg {
    margin: 0px;
    transform: translateX(-1px);
    font-size: 1.8em;
}
.project-icons{
    width: 0%;
    height: 85%;
    display: flex;
    flex-direction: column;
    transition: 0.6s;
    background:linear-gradient(#0085FF, #0D1258);
    overflow-y: hidden;
    overflow-x: hidden;
    border-radius: 0px 27.99px 27.99px 0px;
;

}
svg {
    font-size: 2.3em;
    cursor: pointer;
    margin: 15px 0px;
    transform: translateX(-100px);
    transition: 0.5s;
    color: #fff
    
}
.costumIcons {
    cursor: pointer;
    transform: translateX(-100px);
    transition: 0.5s;
    color: #fff;
}
*>>>.costumIcons svg {
    margin-top: 17px !important;
    margin-bottom: 3px !important;
}
.project-icons::-webkit-scrollbar {
  width: 9px;
  height: 20px;
             
}

.project-icons::-webkit-scrollbar-track {
  background: var(--special-gradient);        /* color of the tracking area */
}
.project-icons::-webkit-scrollbar-thumb {
  background-color: #fff;    /* color of the scroll thumb */
  border-radius: 6px;
  height: 20px;       /* roundness of the scroll thumb */
}

</style>