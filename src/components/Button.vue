<template>
  <router-link class="texto-comum" :to="link"> {{label}}</router-link>
</template>

<script>
export default {
    name: 'btnRouter',
    data(){
        return {
            label: this.LabelProps,
            link: this.LinkProps,
        }
    },
    props: {
        LabelProps: String,
        LinkProps: String
    }
}
</script>

<style scoped>
    a{  
        padding: 10px 15px;
        background: var(--background-special);
        background: var(--special-gradient-support);
        background: var(--special-gradient);
        text-decoration: none;

        
    }

</style>