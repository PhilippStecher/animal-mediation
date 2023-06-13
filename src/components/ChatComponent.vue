<template>
    <div class="chat-container">
        <template v-if="chatName">
            <div class="chat-header">
                <h2>Mein Chat über "{{ chatName }}"</h2>
            </div>
            <div class="chat-messages">
                <div class="message" v-for="message in formattedMessages" :key="message.id">
                    <div class="avatar" :class="{
                        'sender-avatar': message.sender === 'Ich',
                        'receiver-avatar': message.sender !== 'Ich'
                    }">
                        <i class="pi pi-user"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-header">
                            <span class="message-sender">{{ message.sender }}</span>
                            <span class="message-time">{{ message.time }}</span>
                        </div>
                        <div class="message-text">{{ message.text }}</div>
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="Schreibe eine Nachricht..." v-model="newMessage" @keyup.enter="sendMessage" />
                <button class="send-button" @click="sendMessage">
                    <i class="pi pi-send"></i>
                </button>
            </div>
        </template>
        <template v-else>
            <h2 class="no-requests-heading">Noch keine Anfragen</h2>
            <div class="chat-instructions">
                <p class="instruction-text">
                    Swipen Sie zuerst nach rechts und wählen Sie ein Tier aus, um einen Chat zu starten.
                </p>
                <p class="instruction-text">
                    Sobald Sie ein Tier ausgewählt haben, können Sie einen Chat mit dem Tierheim des Tiers beginnen.
                </p>
            </div>
        </template>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const chatName = route.params.name;
console.log(`Chat mit ${chatName}`);

const messages = ref([
    {
        id: 1,
        sender: "Ich",
        time: new Date(Date.now() - 600000),
        text: "Hallo, wie geht es Ihnen? Ich habe den " + chatName + " gesehen und mich sofort verliebt!",
    },
    {
        id: 2,
        sender: "Tierheim",
        time: new Date(Date.now() - 300000),
        text: "Mir geht es gut, danke! Ja " + chatName + " ist echt süß. Wie wäre es, wenn wir einen Termin vereinbaren!",
    },
    {
        id: 3,
        sender: "Ich",
        time: new Date(Date.now()),
        text: "Das freut mich zu hören! Hört sich super an, wann denn?",
    },
]);

const getTimeStamp = (time) => {
    const date = new Date(time);
    const hours = addLeadingZero(date.getHours());
    const minutes = addLeadingZero(date.getMinutes());
    return `${hours}:${minutes}`;
};

const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
};

const newMessage = ref("");

const sendMessage = () => {
    const timestamp = new Date();
    const formattedTimestamp = getTimeStamp(timestamp);
    messages.value.push({
        id: messages.value.length + 1,
        sender: "Ich",
        time: timestamp,
        text: newMessage.value,
    });
    newMessage.value = "";
};

const formattedMessages = computed(() => {
    return messages.value.map((message) => ({
        ...message,
        time: getTimeStamp(message.time),
    }));
});
</script>
  
<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 80vh;
    padding: 20px;
    background-color: #f7f8fa;
}

.chat-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.chat-header h2 {
    font-family: "NovaBold";
    color: #7135a1;
}

.chat-messages {
    flex: 1;
    width: 100%;
    max-width: 800px;
    overflow-y: auto;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.sender-avatar {
    background-color: #008080;
}

.receiver-avatar {
    background-color: #7135a1;
}

.pi {
    font-size: 20px;
    color: #fff;
}

.message-content {
    display: flex;
    flex-direction: column;
    width: calc(100% - 50px);
}

.message-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-weight: bold;
    margin-bottom: 5px;
}

.message-sender {
    color: #333;
    font-size: 16px;
    font-weight: bold;
}

.message-time {
    color: #777;
    font-size: 14px;
}

.message-text {
    color: #333;
    font-size: 14px;
}

.chat-input {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px;
}

.chat-input input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 8px;
    border-radius: 4px;
}

.chat-input button {
    background-color: #008080;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    font-size: 20px;
    color: #fff;
    padding: 6px 10px;
    border-radius: 4px;
}

.no-requests-heading {
    font-family: "NovaBold";
    font-size: 40px;
    font-weight: bold;
    color: black;
    margin-bottom: 5px;
}

.chat-instructions {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
}

.instruction-text {
    margin: 0;
    font-size: 16px;
    color: #333;
    padding-bottom: 10px;
}
</style>