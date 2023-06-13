<script setup>
import { ref, computed } from 'vue'
import router from '../router/index'
import { useRoute } from 'vue-router';

const activeRoute = useRoute();
</script>

<template>
    <header>
        <div class="header-content">
            <div class="logo">
                <img src="/Logo.png">
                <div class="title">Haustier Tinder</div>
            </div>
            <div class="nav-list">
                <template v-for="route in router.getRoutes()">
                    <template v-if="route.props.default.hasOwnProperty('headerText')">
                        <router-link :to="route.path" class="nav-entry" :class="{active: route.name == activeRoute.name }"  >
                            {{ route.props.default.headerText }}
                        </router-link>
                    </template>
                </template>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header .header-content {
    font-family: "NovaBold";
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    position: relative;
    height: 70px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid grey;

    .logo {
        display: flex;
        flex-wrap: nowrap;
        font-size: 160%;
        align-items: center;
        position: relative;
        height: 90%;
        width: auto;
        padding-left: 10px;

        img {
            position: relative;
            height: 90%;
            width: auto;
        }
    }

    .nav-list {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        width: 30%;
        justify-content: space-around;
        max-width: 400px;

        .nav-entry {
            color: #555555;
            text-decoration: none;

        }

        .nav-entry.active {
            border-bottom: 2px solid #7135A1;
        }
    }
}
</style>