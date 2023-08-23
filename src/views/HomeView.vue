<template>
    <h1>{{ msg }}</h1>

    <p>
        AWS IoT Core with C++ Device SDK, Rules-Engine, Timestream and Grafana example
    </p>
    <h1>Grafana Dashboard - ESP32 with DHT22</h1>
    <iframe class="iframe"
        src="http://192.168.201.106:3000/public-dashboards/1a545f628d354161b01fba43fbd0883e?orgId=1&from=1692712767843&to=1692727788061"
        frameborder="0"></iframe>
</template>
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: "HomeView",
    props: {
        msg: String
    },
    setup(props) {
        props.msg // <-- type: string
    },
    data() {
        return {
            count: 0
        };
    },
});
</script>
<style scoped>
.read-the-docs {
    color: #888;
}

.frame-wrapper {
    position: relative;
    width: 700px;
    height: 80%;
    overflow-y: hidden;
    overflow-x: scroll;
}

.iframe {
    width: 80vw;
    height: 625px;
}
</style>
