$(document).ready(function() {
    const chatBox = $('#chat-box');
    const messageInput = $('#message-input');
    const sendButton = $('#send-button');

    function addMessage(message, sender) {
        const messageElement = $('<div class="message"></div>').text(message);
        messageElement.addClass(sender);
        chatBox.append(messageElement);
        chatBox.scrollTop(chatBox[0].scrollHeight);
    }

    function addOptions(options) {
        options.forEach(option => {
            const optionButton = $('<button class="option-button"></button>').text(option.text);
            optionButton.click(function() {
                addMessage(option.text, 'customer');
                setTimeout(() => {
                    addMessage(option.response, 'vet');
                    if (option.text === "Look for a Vet") {
                        setTimeout(() => {
                            window.location.href = "vet.html";
                        }, 3000);  // 3 seconds delay
                    }
                    if (option.text === "What are your services?") {
                        setTimeout(() => {
                            window.location.href = "ServicePage.html";
                        }, 4000);  // 4 seconds delay
                    }
                    if (option.text === "How can I contact the clinic directly?") {
                        setTimeout(() => {
                            window.location.href = "ContactUs.html";
                        }, 3000);  // 3 seconds delay
                    }
                    if (option.text === "How can I set an appointment for my pet?") {
                        setTimeout(() => {
                            window.location.href = "vet.html";
                        }, 3000);  // 3 seconds delay
                    }
                    if (option.nextOptions) {
                        addOptions(option.nextOptions);
                    }
                }, 1000);
            });
            chatBox.append(optionButton);
        });
        chatBox.scrollTop(chatBox[0].scrollHeight);
    }

    sendButton.click(function() {
        const message = messageInput.val();
        if (message.trim() !== '') {
            addMessage(message, 'customer');
            messageInput.val('');

            // Simulate veterinarian response with options after a short delay
            setTimeout(() => {
                addMessage("Thank you for your message. How can I help you?", 'vet');
                const options = [
                    { text: "Look for a Vet", response: "Sure, I can help you find a vet. Please wait a second.", nextOptions: null },
                    { text: "What are your services?", response: "We offer various services including vaccinations, check-ups, surgeries, and more. I'll redirect you our service page to know more.", nextOptions: null },
                    { text: "How can I contact the clinic directly?", response: "There are many ways to contact the clinic directly. Please wait a second.", nextOptions: null },
                    { text: "How can I set an appointment for my pet?", response: "That's easy! You only need to fill-up a form. Please wait a second.", nextOptions: null },
                ];
                addOptions(options);
            }, 1000);
        }
    });

    messageInput.keypress(function(e) {
        if (e.which === 13) {
            sendButton.click();
        }
    });
});
