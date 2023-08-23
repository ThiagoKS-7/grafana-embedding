<template>
    <h1>{{ msg }}</h1>

    <p>
        AWS IoT Core with C++ Device SDK, Rules-Engine, Timestream and Grafana example
    </p>
    <h1>Grafana Dashboard - ESP32 with DHT22</h1>
    <iframe class="iframe"
        src="https://snapshots.raintank.io/dashboard/snapshot/2j5OSXqq8vXNKdTeO0pMtZL1f83WoqJV?orgId=2&from=1692727599064&to=1692727788061&kiosk"
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
