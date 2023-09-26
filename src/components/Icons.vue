<template>
        <Font-awesome-icon :id='id' :icon="[ prefix, iconName]" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="clickIcon"/>
</template>

<script>
    export default {
        name: 'icon-Menu',
        data(){
            return{
                iconName: this.iconNameProps,
                prefix: this.prefixProps,
                L: this.prefixProps,
                color: this.colorProps,
                name: this.nameProps,
                id: this.idProps
            }
        },
        props: {
            iconNameProps: String,
            prefixProps: String,
            LProps: String,
            colorProps: String,
            nameProps: String,
            idProps: String
          
        },
        components:{
            
        },
        methods: {
            mouseEnter(){
                this.$emit('enter')
            },
            mouseLeave(){
                this.$emit('leave')
            },
            clickIcon(){
                this.$emit('clicked',this.name)
            }

        }
    }

</script>


<style scoped>
   svg {
       padding: 0px 4px;
   }
   svg:hover {
       color: #fff;
   }
    

</style>