let rules = {
        "hello": "Hi! How can I help you today?",
        "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
        "bye": "Goodbye! Have a great day.",
        "hola": "heeeey",
        "What are the pipeline figures for this quarter?": "The total pipeline for this quarter is projected to be $500,000. This includes opportunities across multiple sectors, with $300,000 expected from new customers and $200,000 from existing customers. Would you like more details on the opportunity breakdown or forecasted close dates?",
        "What are the overall pipeline figures?": "The overall pipeline stands at $1.2 million, which includes $800,000 from existing customers and $400,000 from new customer opportunities. The pipeline is spread across various stages, with 60% in early stages and 40% in advanced stages. Would you like to see a more detailed breakdown or the projected close dates for specific deals?",
        "What are the closed revenues so far?": "The total closed revenue so far is $950,000. This includes $600,000 from existing customers and $350,000 from new business. The largest deal closed was worth $200,000. Would you like a breakdown by industry or by sales representative?",
        "Hey can you update the deal value of the Express Logistics SLA opp to 200,000?": "The deal value for the Express Logistics SLA opportunity has been successfully updated to $200,000. Is there anything else you’d like to adjust for this opportunity, such as the close date or stage?"
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
    const userInput = document.getElementById("user-input");
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
