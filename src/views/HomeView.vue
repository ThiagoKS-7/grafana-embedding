<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
    </div>

    <p>
        AWS IoT Core with C++ Device SDK, Rules-Engine, Timestream and Grafana example
    </p>
    <h1>Grafana Dashboard - ESP32 with DHT22</h1>
    <iframe class="iframe" src="http://172.17.0.2:3000/public-dashboards/d9de144100654c2cb6a9ccc6f7ae0576"
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
