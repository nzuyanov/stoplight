<template>
    <div class="stoplight__timer stoplight__container">
         <p>{{ counter }}</p>
    </div>
</template>
 
<script>
  export default {
    props: ['counter'],
    data: function () {
        return {
        }
    },
}
</script>

<style scoped>

</style>