<template>
    <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img class="logo" src="/logo.png" alt="Logo Parks vermelho-site.png"
                    style="width:130px;height:30px;object-fit:cover" width="130" height="30" />
            </a>
            <form role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            </form>
            <button class="navbar-toggler" type="button" @click="toggleButton()" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample01">
                <ul class="navbar-nav me-auto mb-2">
                    <li class="nav-item" @click="goTo('home', '/')">
                        <a class="nav-link active" id="home" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-house-door" viewBox="0 0 16 16">
                                <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                            </svg>
                            <span> Home</span>
                        </a>
                    </li>
                    <li class="nav-item" @click="goTo('alerts', '/alerts')">
                        <a class="nav-link" id="alerts">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-bell" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                            <span> Alerts</span>
                        </a>
                    </li>
                    <li class="nav-item" @click="goTo('billing', '/billing')">
                        <a class="nav-link" id="billing">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-cart4" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                            <span> Billing</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.parks.com.br/quem-somos">
                            <span>About</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "DefaultNav",
    methods: {
        toggleButton() {
            const nav: any = document.getElementById("navbarsExample01");
            nav.classList.toggle("show")
        },
        goTo(id: string, path: string) {
            const idList = ["home", "alerts", "billing"]
            idList.forEach(element => {
                if (element != id) {
                    const el: any = document.getElementById(element);
                    el.classList.remove("active");
                }
            });
            const nav: any = document.getElementById(id);
            nav.classList.toggle("show")
            this.$router.push(path)
        }
    }
})
</script>
<style scoped>
.navbar {
    margin-bottom: 20px;
}

.logo {
    will-change: filter;
    transition: filter 300ms;
}

.nav-item {
    display: flex;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #ff6964aa);
}
</style>