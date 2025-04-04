const form = document.querySelector('#contact form');

const formSubmit = (e) => {
    e.preventDefault();
};

form.addEventListener('submit', formSubmit);

form.addEventListener('submit', () => {
    const message = document.querySelector('#mail').value; // Corrected selector
    const topic = document.querySelector('#topic_of_message').value;
    const messageText = document.querySelector('#message_text').value;
    console.log(message, topic, messageText);
});