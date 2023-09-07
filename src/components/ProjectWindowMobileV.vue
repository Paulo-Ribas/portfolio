<template>
    <div class="window-container">
        <div class="img-container">
            <img :class="{active}" :src="fileName" :label="{ ProjectName }" @click="emitirName(), toggleName(), toggleActive()">
        </div>
        <div class="nameProject">
            <h2 :class="{showName}">{{ ProjectName }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Window-Container-Mobile',
    data() {
        return {
            Img: this.ImgProps,
            ProjectName: this.ProjectNameProps,
            fileName: '',
            active: false,
            showName: false,
        }
    },
    beforeMount() {
        this.fileName = require(`@/assets/img/${this.Img}`)
        console.log(this.fileName)
    },
    props: {
        ImgProps: String,
        ProjectNameProps: String
    },
    methods: {
        emitirName() {
            this.$emit('project', this.ProjectName)
        },
        toggleActive() {
            this.active = !this.active
            setTimeout(() => {
                this.active = !this.active
            }, 1000);
        },
        toggleName(){
            this.showName = !this.showName
            setTimeout(() => {
                this.showName = !this.showName   
            }, 1000);
        },
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

.nameProject h2 {
    color: var(--texto-especial);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 10%);
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
}

.showName {
    transform: translate(-50%, 100%) !important;
    opacity: 1;
}

.active {
    transform: scale(1.4);
}
</style>