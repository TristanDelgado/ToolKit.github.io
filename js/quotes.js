const quotes = [
  "Do or do not. There is no try. - Yoda",
  "Be the change that you wish to see in the world. - Mahatma Gandhi",
  "Stay hungry, stay foolish. - Steve Jobs",
  "I think, therefore I am. - René Descartes",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: It goes on. - Robert Frost",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Not all those who wander are lost. - J.R.R. Tolkien",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "It is never too late to be what you might have been. - George Eliot",
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "You must be the change you wish to see in the world. - Mahatma Gandhi",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Life is not about finding yourself. Life is about creating yourself. - George Bernard Shaw",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar"
];

function nextQuote(){
    var quote = document.getElementById("quote");
    var randomNum = Math.floor(Math.random() * 24);
    quote.innerHTML = quotes[randomNum];
}