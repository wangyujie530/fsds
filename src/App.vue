<template>
    <div>
      
      <router-view/>
      <Foot></Foot>
    </div>
</template>

<script>
import Foot from './components/foot/Foot'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
     Foot
    },
};
</script>

<style scoped lang="less">

</style>
