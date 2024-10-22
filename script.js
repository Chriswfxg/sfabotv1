// Load rules from localStorage (if any)
let rules = {
        "hello": "Hi! How can I help you today?",
        "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
        "bye": "Goodbye! Have a great day.",
        "hola": "heeeey",
        "What are the pipeline figures for this quarter?": "The total pipeline for this quarter is projected to be $500,000. This includes opportunities across multiple sectors, with $300,000 expected from new customers and $200,000 from existing customers. Would you like more details on the opportunity breakdown or forecasted close dates?",
        "What are the overall pipeline figures?": "The overall pipeline stands at $1.2 million, which includes $800,000 from existing customers and $400,000 from new customer opportunities. The pipeline is spread across various stages, with 60% in early stages and 40% in advanced stages. Would you like to see a more detailed breakdown or the projected close dates for specific deals?",
        "What are the closed revenues so far?": "The total closed revenue so far is $950,000. This includes $600,000 from existing customers and $350,000 from new business. The largest deal closed was worth $200,000. Would you like a breakdown by industry or by sales representative?",
        "Hey can you update the deal value of the Express Logistics SLA opp to 200,000?": "The deal value for the Express Logistics SLA opportunity has been successfully updated to $200,000. Is there anything else you’d like to adjust for this opportunity, such as the close date or stage?",
        "Hey, can you help me approve the quote that was sent for GenePoint": "Hey there, you cannot approve quotes directly in Copilot. Click <a href=\"https://whatfix-cc-dev-ed.lightning.force.com/lightning/o/SBQQ__Quote__c/list?c__wfx=a6d2ed20-c3b5-41e6-9974-cc8bd75182b5&c__wfx_stage=design&c__wfx_state=draft&filterName=__Recent\">approve quote</a> to do it on the application"
    };

// Function to send a message and get a response from the bot
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const messageBox = document.getElementById("message-box");

    // Clear the input field after sending the message
    document.getElementById("user-input").value = "";

    // Add user message to the chat
    const userMessageWrapper = document.createElement('div');
    userMessageWrapper.classList.add('message-wrapper');
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    userMessageWrapper.appendChild(userMessage);
    messageBox.appendChild(userMessageWrapper);

    // Scroll to the bottom
    messageBox.scrollTop = messageBox.scrollHeight;

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

        // Add bot response to the chat
        const botMessageWrapper = document.createElement('div');
        botMessageWrapper.classList.add('message-wrapper', 'bot-message-wrapper');
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = response;
        botMessageWrapper.appendChild(botMessage);
        messageBox.appendChild(botMessageWrapper);

        // Scroll to the bottom
        messageBox.scrollTop = messageBox.scrollHeight;
    }, 3000);
}
