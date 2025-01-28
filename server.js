const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route for handling chat

const chatbotResponse = (message) => {
    const goodMorning = ['good morning', 'morning', 'gm', 'goodm'];
    const goodAfternoon = ['good afternoon', 'afternoon', 'ga', 'gooda'];
    const goodEvening = ['good evening', 'evening', 'ge', 'goode'];
    const goodNight = ['good night', 'night', 'gn', 'goodn'];
    const greetings = ['hi', 'hello', 'hey', 'howdy'];
    const byeMessage = ['bye', 'goodbye', 'see you', 'later'];
    const okMessage = ['ok', 'okay', 'sure', 'fine', 'good', 'great', 'awesome', 'cool', 'nice', 'super', 'fantastic', 'excellent', 'wonderful', 'amazing', 'brilliant', 'perfect', 'fabulous', 'terrific']
    const lowercaseMessage = message.toLowerCase();

    if (greetings.some((greeting) => lowercaseMessage.includes(greeting))) {
        return 'Hello! I am Antarip Chat Bot';
    }
    if(byeMessage.some((bye) => lowercaseMessage.includes(bye))){
        return 'Goodbye! Have a great day!';
    }
    if(okMessage.some((ok) => lowercaseMessage.includes(ok))){
        return 'Great!';
    }
    if(goodMorning.some((gm) => lowercaseMessage.includes(gm))){
        return 'Good Morning!';
    }
    if(goodAfternoon.some((ga) => lowercaseMessage.includes(ga))){
        return 'Good Afternoon!';
    }
    if(goodEvening.some((ge) => lowercaseMessage.includes(ge))){
        return 'Good Evening!';
    }
    if(goodNight.some((gn) => lowercaseMessage.includes(gn))){
        return 'Good Night!';
    }

    return 'Sorry Bro I am not a Google, Are Padhai Karlo Thoda.';
};

app.post('/chat', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Get chatbot response
    const response = chatbotResponse(message);
    res.json({ response });
});


// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});