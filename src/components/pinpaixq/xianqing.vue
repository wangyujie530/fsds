<template>
    <div>
        <div>
            <p><van-rate v-model="value" allow-half void-icon="star" void-color="#eee" size='12' />
        <span>服务态度</span>
        <span>4.3</span></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
             value: 4.3,
        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">

</style>
