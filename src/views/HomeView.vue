<template>
    <h1>{{ msg }}</h1>

    <p>
        AWS IoT Core with C++ Device SDK, Rules-Engine, Timestream and Grafana example
    </p>
    <h1>Grafana Dashboard - ESP32 with DHT22</h1>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <iframe class="iframe"
            src="https://snapshots.raintank.io/dashboard/snapshot/9XzWyt7vQPVrg7Gi3F8RhZ6Kne56FtDO?orgId=2&kiosk"
            frameborder="0"></iframe>
        <small>
            <a
                href="ec2-52-67-96-192.sa-east-1.compute.amazonaws.com:3000/public-dashboards/2c96353701cb430d9f092d0db1d39e3b?orgId=1&from=1692962612866&to=1692962908893&refresh=1m">
                Ver em tempo real
            </a>
        </small>
    </div>
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
