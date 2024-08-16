// Function to delay a message
function delayMessage(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Async function to handle multiple greetings with delay
async function delayedMultiGreeting(messages) {
    for (const msg of messages) {
        await delayMessage(msg.message, msg.delay);
    }
}

// Example usage
const messages = [
    { message: "Hello, world!", delay: 2000 },
    { message: "How are you?", delay: 1000 },
    { message: "Goodbye!", delay: 3000 }
];

delayedMultiGreeting(messages);
