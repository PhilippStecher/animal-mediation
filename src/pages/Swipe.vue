<script setup>
import { ref, onMounted } from 'vue'
import router from '../router/index'
import axios from 'axios';
import Header from "@/components/Header.vue"

const petName = ref('Gustav');

const names = ref([
    "Luka", "Mio", "Felix",
    "Max", "Moritz", "Abby",
    "Bella", "Daisy", "Ella",
    "Lucy", "Maple", "Melody",
    "Rosie", "Stormy", "Trixie",
    "Zoe", "Alex", "Bailey",
    "Balu", "Buddy", "Duke",
    "Elliot", "Gonzo", "Murphy",
    "Nino", "Percy", "Rambo",
    "Rufus", "Rusty", "Brutus",
    "Pumpkin", "Sammy", "Simba",
    "Struppy", "Teddi", "Tucker", 
    "Tigger", "Wiggle", "Leoplurd", 
    "Brendan", "Maggie", "Buttercup", 
    "Storm", "Ella", "Nightrunner", 
    "Benny", "Grinch", "Buckwheat", 
    "Striper", "Tommy", "SirMeowsAlot", 
    "Alexi", "Stripe", "Shrapnel", 
    "Oedipuss", "Lucky", "Waffles", 
    "Snoop", "Hooch", "Morgan", 
    "Killer", "Clam", "Trixie", 
    "Duo", "Pugnacious", "Chairmanmao", 
    "Felina", "Render", "Henry", 
    "Willow", "Foster", "Kimba", 
    "Paws", "Dream", "Sophie", 
    "Chocolate", "Princess", "ScratchFury", 
    "Audrey", "Striper", "Sugar", 
    "Tiny", "Twister", "Sandy", 
    "Daisy", "Haolie", "Gnawbone", 
    "WorldDestroyer", "PingPong", 
    "Hamham", "Harriet", "Skittles", 
    "Nyrana", "Purrina", "Snookums", 
    "Buckskin", "Shinx", "Tink", 
    "Scurry", "Mango", "Zander", 
    "Sphinx", "Sphinx", "Chino", 
    "Luna", "Smudge", "Hambert"]);
const petAge = ref(0);
const petAges = ref(["Year", "Month", "Week"]);
const petUrl = ref('https://loremflickr.com/450/800');
const imageKey = ref(0);

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


async function generatePet() {
    try {
        const response = await axios.get('https://loremflickr.com/450/800');
        petUrl.value = response.request.responseURL;
        petName.value = names.value[randomInRange(0, names.value.length)];

        var ageInt = randomInRange(1, 10);
        var ageIndicator = petAges.value[randomInRange(0, petAges.value.length)];

        if (ageInt > 1) {
            ageIndicator += "s";
        }

        petAge.value = ageInt + " " + ageIndicator;
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    generatePet();
})
</script>

<template>
    <Header></Header>
    <div class="base">
        <div class="container swiper">
            <div class="swiper-panel">
                <div class="swiper-pet-image">
                    <img :src="petUrl" :key="imageKey" alt="{{ petName }}" />
                    <div class="swiper-pet-name">
                        <div class="swiper-details">
                            Name: {{ petName }}
                        </div>
                        <div class="swiper-details">
                            Alter: {{ petAge }}
                        </div>
                        <div class="swiper-details">
                            Standort: Mustermann Straße :)
                        </div>
                        <div class="swiper-details">
                            Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum cumque magnam
                            odit et officiis ut perferendis laudantium? Ad quae cum illo esse quam minus vero nobis eveniet
                            cupiditate provident!
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-filter">
                <Button @click="void(0)" class="filter-button" icon="pi pi-filter" severity="secondary" rounded
                    aria-label="Filter" />
            </div>
            <div class="swiper-reactions">
                <Button @click="generatePet()" class="reaction-button" icon="pi pi-check" severity="success" rounded
                    aria-label="Smash" />
                <Button @click="router.push('/chat/' + petName)" icon="pi pi-comment" class="reaction-button"
                    severity="help" rounded aria-label="Message" />
                <Button @click="generatePet()" class="reaction-button" icon="pi pi-times" severity="danger" rounded
                    aria-label="Pass" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.base {
    height: 100%;
    min-height: calc(100vh - 70px); //- Header height
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #d7d7d7;

    .swiper {
        position: relative;
        height: calc(100% + 200px);
        min-height: 85%;
        display: flex;
        margin: 40px;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        .swiper-pet-image {
            display: flex;
            position: relative;
            height: 800px;
            width: 450px;
        }

        .swiper-pet-name {
            display: flex;
            flex-direction: column;
            padding-left: 10%;
            font-family: "NovaBold";
            position: absolute;
            top: 0px;
            right: -500px;
            width: 500px;
            height: 450px;
            z-index: 999;

            .swiper-details:not(:first-child) {
                margin-top: 20px;
            }
        }

        .swiper-filter {
            display: flex;
            position: absolute;
            top: 10px;
            right: 10px
        }

        .swiper-reactions {
            display: flex;
            position: absolute;
            bottom: 20px;
        }

        .swiper-reactions:not(:first-child) .reaction-button {
            margin-left: 20px;
        }

        .swiper-reactions:not(:last-child) .reaction-button {
            margin-right: 20px;
        }
    }
}
</style>