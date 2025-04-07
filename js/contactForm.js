const form = document.querySelector('#contact form');

const formSubmit = (e) => {
    e.preventDefault();
    const message = document.querySelector('#mail').value; // Corrected selector
    const topic = document.querySelector('#topic_of_message').value;
    const messageText = document.querySelector('#message_text').value;
    
    console.log(message, topic, messageText);
};

form.addEventListener('submit', formSubmit);