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
    const loveYou = ['I love you', 'love you', 'love u', 'luv u', 'luv you', 'i luv you', 'i luv u', 'i love u', 'i love you', 'i like you', 'like you', 'like u']
    const howAreyou = ['how are you', 'how r u', 'how are u', 'how r you', 'how are you?', 'how r u?', 'how are u?', 'how r you?']
    const missYou = ['miss you', 'miss u', 'missing you', 'missing u', 'i miss you', 'i miss u', 'i am missing you', 'i am missing u']
    const love = ['❤️❤️','❤️','💖','💖💖','💖💖💖','💖💖💖💖','💖💖💖💖💖','💖💖💖💖💖💖','💖💖💖💖💖💖💖','💖💖💖💖💖💖💖💖','💖💖💖💖💖💖💖💖💖']

    const lowercaseMessage = message.toLowerCase();

    if (greetings.some((greeting) => lowercaseMessage.includes(greeting))) {
        return 'Hello! BABY! 😍';
    }
    if(byeMessage.some((bye) => lowercaseMessage.includes(bye))){
        return 'Goodbye baby! Have a great day! 😘';
    }
    if(okMessage.some((ok) => lowercaseMessage.includes(ok))){
        return 'Great!';
    }
    if(goodMorning.some((gm) => lowercaseMessage.includes(gm))){
        return 'Good Morning!❤️';
    }
    if(goodAfternoon.some((ga) => lowercaseMessage.includes(ga))){
        return 'Good Afternoon!❤️';
    }
    if(goodEvening.some((ge) => lowercaseMessage.includes(ge))){
        return 'Good Evening!❤️';
    }
    if(goodNight.some((gn) => lowercaseMessage.includes(gn))){
        return 'Good Night!';
    }
    if(loveYou.some((love) => lowercaseMessage.includes(love))){
        return 'I love you too! 💖 😘';
    }
    if(howAreyou.some((how) => lowercaseMessage.includes(how))){
        return 'I am good, Thank you! How are you?';
    }
    if(missYou.some((miss) => lowercaseMessage.includes(miss))){
        return 'I miss you too! 😔';
    }
    if(love.some((love) => lowercaseMessage.includes(love))){
        return ' 💖 😘';
    }
    return 'Sorry Baby, I did not understand that! 😕';
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