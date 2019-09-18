<template>
    <div class="stoplight__container">
        <sl-colorbox color="green" :active="isGreen" :blinking="isBlinkingGreen"></sl-colorbox>
        <sl-colorbox color="yellow" :active="isYellow" :blinking="isBlinkingYellow"></sl-colorbox>
        <sl-colorbox color="red" :active="isRed" :blinking="isBlinkingRed"></sl-colorbox>
    </div>
</template>
 
<script>
  import slColorbox from './sl-colorbox.vue'
  export default {
    components: {
        slColorbox
    },
    props: ['activeColor', 'solidTime'],
    data: function () {
        return {
            isGreen: false,
            isYellow: false,
            isRed: false,
            isBlinkingGreen: false,
            isBlinkingYellow: false,
            isBlinkingRed: false,
        }
    },
    created() {
        switch (this.activeColor){
            case 'green':
                setTimeout(() => {
                    this.isBlinkingGreen = true;
                    this.isBlinkingYellow = false;
                    this.isBlinkingRed = false;
                }, this.solidTime*1000);
                this.isGreen = true;
                break;
            case 'yellow':
                setTimeout(() => {
                    this.isBlinkingGreen = false;
                    this.isBlinkingYellow = true;
                    this.isBlinkingRed = false;
                }, this.solidTime*1000);
                this.isYellow = true;
                break;
            case 'red':
                setTimeout(() => {
                    this.isBlinkingGreen = false;
                    this.isBlinkingYellow = false;
                    this.isBlinkingRed = true;
                }, this.solidTime*1000);
                this.isRed = true;
                break;
        }
    },
}
</script>