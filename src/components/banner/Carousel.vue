<template>
    <div class="carousel"  @keydown="checkSlide($event)" tabindex="0">
        <slot></slot>
        <button @click="proximo" class="btn btn-proximo">Próximo</button>
        <button @click="anterior" class="btn btn-anterior">Anterior</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    
    mounted(){
        
    },
    methods: {
        proximo(){
            this.$emit('proximo')
        },
        anterior(){
            this.$emit('anterior')
        },
    }
}
</script>
<style scoped>

.carousel {
    position:relative;
    overflow: hidden;
    width:500px;
    height:500px;
    z-index:10;
}

.btn-proximo {
    top:50%;
    right:0;
}

.btn-anterior {
    top:50%;
    left:0;
}

.btn {
    padding:5px 10px;
    background-color:rgba(90,200,90,0.5);
    border:1px solid transparent;
    margin:5px 10px;
    color:#FFF;
    height:50px;
    width:80px;
    position:absolute;
    margin-top:-25px;
    z-index:2;
}

.btn:hover {
    cursor: pointer;
}

.btn:focus{
    outline:none;
}

</style>

