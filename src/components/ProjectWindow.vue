<template>
    <div class="window-container">
        <div class="img-container">
            <img :src="fileName" :label="{ProjectName}"  @click="emitirName()">
        </div>
        <div class="nameProject">
            <h2>{{ProjectName}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Window-Container',
    data(){
        return {
            Img: this.ImgProps,
            ProjectName: this.ProjectNameProps,
            fileName: ''
        }
    },
    beforeMount(){
        this.fileName = require(`@/assets/img/${this.Img}`)
        console.log(this.fileName)
    },
    props:{
        ImgProps: String,
        ProjectNameProps: String
    },
    methods: {
        emitirName(){
            this.$emit('project', this.ProjectName)
        },
        toggleActive(){
            let Img = document.querySelector('img')
            Img.classList.toggle('active')
            
        }
    }
}
</script>

<style scoped>

.window-container {
    display: flex;
    flex: 1;
    position: relative;
}
img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    object-fit: contain;
    cursor: pointer;
    transform: scale(1);
}
.nameProject h2{
    color: var(--texto-especial);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 10%);
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
}
.window-container:hover > .nameProject h2 {
    transform: translate(-50%, 100%);
    opacity: 1;
}
.window-container:hover > .img-container img {
    transform: scale(1.4);
   
}
.active {
    transform: scale(1.4);
}
</style>