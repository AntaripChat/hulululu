const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    // Add user's message to the chat window
    addMessage('user', message);
    messageInput.value = '';

    // Send message to the backend
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
        .then((response) => response.json())
        .then((data) => {
            // Add AI's response to the chat window
            addMessage('ai', data.response);
        })
        .catch((error) => {
            console.error('Error:', error);
            addMessage('ai', 'Failed to get a response from the AI.');
        });
}

function addMessage(role, content) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', role);
    messageElement.innerHTML = `<strong>${role === 'user' ? 'You' : 'AI'}:</strong> ${content}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
}