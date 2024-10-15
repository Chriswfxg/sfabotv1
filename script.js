let rules = {
        "hello": "Hi! How can I help you today?",
        "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
        "bye": "Goodbye! Have a great day.",
        "hola": "heeeey"
    };

// Load rules from localStorage (if any)
// if (localStorage.getItem("rules")) {
//     rules = JSON.parse(localStorage.getItem("rules"));
// } else {
//     // Default rules if none exist
//     rules = {
//         "hello": "Hi! How can I help you today?",
//         "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
//         "bye": "Goodbye! Have a great day.",
//         "hola": "heyo"
//     };
//     localStorage.setItem("rules", JSON.stringify(rules));  // Store default rules
// }

// Send a message and get a response from the bot
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const messageBox = document.getElementById("message-box");

    // Show user input in chat (aligned to the left)
    messageBox.innerHTML += `<div class="message"><div class="user-message">${userInput}</div></div>`;
    document.getElementById("user-input").value = "";  // Clear the input field

    // Delay the bot's response by 3 seconds
    setTimeout(() => {
        let response = "Sorry, I don't understand that.";

        // Check if there's a matching rule
        for (let keyword in rules) {
            if (userInput.includes(keyword)) {
                response = rules[keyword];
                break;
            }
        }

        // Show the bot response (aligned to the right)
        messageBox.innerHTML += `<div class="message"><div class="bot-message">${response}</div></div>`;
        messageBox.scrollTop = messageBox.scrollHeight;  // Scroll to the bottom
    }, 3000);
}
