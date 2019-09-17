<template>
  <div class="stoplight__color" :class="{ stoplight__color_green : isGreen, stoplight__color_yellow : isYellow,
    stoplight__color_red : isRed, stoplight__color_active : active }">
  </div>
</template>
 
<script>
  export default {
    props: ['color', 'active'],
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
}
</script>

<style scoped>

</style>