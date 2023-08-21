<template>
    <section id="links">
        <div class="menu">
            <MainMenu :MenuFixoProps="true" :ActivatedProps="'lk'"></MainMenu>
        </div>
        <div class="links-container">
            <div class=""></div>
        </div>
    </section>
    
</template>

<script>
import MainMenu from "../components/NavegationMenu.vue";
import IconMenu from "../components/Icons.vue"
export default {
    name: 'Links-',
    components:{
        MainMenu,
        IconMenu,
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
}
.link-container {
    width: 100%;
    height: 100vh;
    position: relative;
}
.link-box {
    position: absolute;
    width: 220px;
    height: 120px;
    /* border: 2px solid var(--background-special); */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-top-right-radius: 33px;
}
h2 {
    font-size: 1.3em;
    color: white;
}
.box-1, .box-2, .box-3 {
    background: var(--special-gradient);
    background-color: white;
    cursor: pointer;
    transition: 0.25s ease-in;
    color: white;
    padding: 5px 0px;
}
a {
    color: white;
}
.box-1{
    top: 35%;
    left: 80%;
    transform: translate(-205%, -14%);
    opacity: 0.7;
}
.box-2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
}
.box-3 {
    top: 65%;
    left: 30%;
    transform: translate(44%, -87%);
    opacity: 0.9;
}
.box-1:hover{
    top: 30%;
    left: 80%;
    transform: translate(-205%, -1%);
    z-index: 2;
    opacity: 1;
}
.box-2:hover {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    opacity: 1;
    z-index: 2;
}
.box-3:hover {
    top: 70%;
    left: 30%;
    transform: translate(44%, -132%);
    opacity: 1;
    z-index: 2;
}
svg {
    font-size: 2em;
    color: var(--background)
}

</style>