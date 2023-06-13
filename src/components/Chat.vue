<template>
    <div class="chat-container">
        <div class="chat-header">
            <h2>Mein Chat</h2>
        </div>
        <div class="chat-messages">
            <div class="message" v-for="message in messages" :key="message.id">
                <div class="avatar"
                    :class="{ 'sender-avatar': message.sender === 'Ich', 'receiver-avatar': message.sender !== 'Ich' }">
                    <i class="pi pi-user"></i>
                </div>
                <div class="message-content">
                    <div class="message-header">
                        <span class="message-sender">{{ message.sender }}</span>
                        <span class="message-time">{{ getTimeStamp(message.time) }}</span>
                    </div>
                    <div class="message-text">{{ message.text }}</div>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <input type="text" placeholder="Schreibe eine Nachricht..." />
            <button>
                <i class="pi pi-send"></i>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            messages: [
                {
                    id: 1,
                    sender: "Ich",
                    time: new Date(Date.now() - 600000),
                    text: "Hallo, wie geht es dir?",
                },
                {
                    id: 2,
                    sender: "Benutzer2",
                    time: new Date(Date.now() - 300000),
                    text: "Mir geht es gut, danke!",
                },
                {
                    id: 3,
                    sender: "Ich",
                    time: new Date(Date.now()),
                    text: "Das freut mich zu hören!",
                },
            ],
        };
    },
    methods: {
        getTimeStamp(time) {
            const date = new Date(time);
            const hours = this.addLeadingZero(date.getHours());
            const minutes = this.addLeadingZero(date.getMinutes());
            return `${hours}:${minutes}`;
        },
        addLeadingZero(value) {
            return value < 10 ? `0${value}` : value;
        },
    },
};
</script>
  
<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
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
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    font-size: 20px;
    color: #7135a1;
}
</style>