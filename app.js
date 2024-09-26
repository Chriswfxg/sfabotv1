// Predefined questions and answers
const responses = {
    "hello": "Hi! How can I help you today?",
    "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
    "what is your name": "I am a simple chatbot created to assist you.",
    "bye": "Goodbye! Have a great day."
};

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const messageBox = document.getElementById("message-box");

    // Show user input in chat on the right side
    messageBox.innerHTML += `<div class="user-message">${userInput}</div>`;

    // Check if the input contains the word "pipeline"
    if (userInput.includes("pipeline")) {
        messageBox.innerHTML += `<div class="bot-message">The pipeline for the quarter and for new customers is 300,000. Is there anything else I can help you with?</div>`;
    } 
    // Predefined responses
    else if (responses[userInput]) {
        messageBox.innerHTML += `<div class="bot-message">${responses[userInput]}</div>`;
    } else {
        messageBox.innerHTML += `<div class="bot-message">Sorry, I don't understand that.</div>`;
    }

    // Scroll the message box to the bottom
    messageBox.scrollTop = messageBox.scrollHeight;

    // Clear the input field
    document.getElementById("user-input").value = "";
}
