<script setup>
import Header from "@/components/Header.vue"
import Chat from "@/components/ChatComponent.vue"
</script>

<template>
    <Header currentRoute="chat"></Header>
    <Chat></Chat>
</template>

<style lang="scss">
.base {
    height: 100%;
    min-height: calc(100vh - 70px);//- Header height
    display: flex;
    position: relative;
    align-items: center;
    background-color: #d7d7d7;

    .page-content {
        position: relative;
        height: calc(100% + 200px);
        min-height: 85%;
        display: flex;
        margin: 40px;
        justify-content: space-between;
    }
}
</style>