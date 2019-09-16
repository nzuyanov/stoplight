<template>
    <div class="stoplight__container">
        <sl-colorbox color="green" :active="isGreen"></sl-colorbox>
        <sl-colorbox color="yellow" :active="isYellow"></sl-colorbox>
        <sl-colorbox color="red" :active="isRed"></sl-colorbox>
    </div>
</template>
 
<script>
  import slColorbox from './sl-colorbox.vue'
  export default {
    components: {
        slColorbox
    },
    props: ['activeColor'],
    data: function () {
        return {
            isGreen: false,
            isYellow: false,
            isRed: false,
        }
    },
    created() {
        switch (this.activeColor){
            case 'green':
                this.isGreen = true;
                break;
            case 'yellow':
                this.isYellow = true;
                break;
            case 'red':
                this.isRed = true;
                break;
        }
    },
}
</script>

<style scoped>

</style>