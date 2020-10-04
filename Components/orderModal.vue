<template>
    <transition name="modal-fade">
        <div role="dialog">
            <button type="button" class="btn-close" @click="close">x</button>
            <p>Cool Paragraph</p>
        </div>
    </transition>
</template>

<script>
export default {
    name:'order-modal',
    methods:{
        close(){
            this.$emit('close');
        }
    }
};
</script>