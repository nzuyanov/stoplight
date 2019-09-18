<template>
  <div class="stoplight__color" :class="{ stoplight__color_green : isGreen, stoplight__color_yellow : isYellow,
    stoplight__color_red : isRed, stoplight__color_active : active,  stoplight__color_blinking : isBlinking }">
  </div>
</template>
 
<script>
  export default {
    props: ['color', 'active', 'blinking'],
    data: function () {
        return {
            isGreen: false,
            isYellow: false,
            isRed: false,
        }
    },
    created() {
        switch (this.color){
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
    computed: {
        isBlinking() {
            if (this.blinking){
                return true;
            }
            else{
                return false;
            }
        }
    },
}
</script>