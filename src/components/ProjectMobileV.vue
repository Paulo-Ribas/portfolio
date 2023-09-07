<template>
    <div class="project-details">
        <div class="project">
            <div class="project-img">
                <img :src="imgFile" :alt="projectName">
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
        <div class="project-icons-bar">
            <IconsProject :iconNameProps="'caret-right'" :prefixProps="'fas'" :colorProps="'#fff'"></IconsProject>
        </div>
        <div class="project-icons">
            <div class="icons" v-for="icon in icons" :key="icon">
                <IconsProject :iconNameProps="icon.nameIcon" :prefixProps="icon.prefix"></IconsProject>
            </div>
        </div>
    </div> <!--fim do project-details -->
</template>

<script>
import IconsProject from './Icons.vue'
export default {
    name: 'ProjectShow',
    components: {
        IconsProject,
    },
    data() {
        return {
            projectName: this.projectNameProps,
            projectImg: this.projectImgProps,
            imgFile: '',
            link: this.linkProps,
            icons: this.iconsProps,

        }
    },
    beforeMount() {
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
.project-details {
    width: 99%;
    margin: auto;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    transition: width 0.6s;
    overflow: hidden;
    position: relative;
    border-top-right-radius: 27.99px;
}

.project-details:hover>.project-icons {
    width: 15%;
    overflow-y: auto;
}

.project-details:hover>.project-icons .icons svg {
    transform: translateX(0);
}

.project-details:hover .project-icons-bar svg {
    color: transparent;
    transform: translateX(2px);
    transition: 0.2s;
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
    gap: 15px;
}

.name-project {
    color: var(--texto-especial);
    font-size: 1.8em
}

.link-project {
    color: var(--texto-padrao);
    font-size: 1.2em;
    text-decoration: none;

}

.link-project:hover {
    color: var(--logo-titulo)
}

.project-icons-bar {
    width: 20px;
    height: 90%;
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
    height: 90%;
    display: flex;
    flex-direction: column;
    transition: 0.6s;
    background: linear-gradient(#0085FF, #0D1258);
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
}</style>