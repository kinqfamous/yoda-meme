const quotes = [
    "Do or do not, there is no try.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Never let the fear of striking out keep you from playing the game.",
    "Money never sleeps.",
    "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    "In investing, what is comfortable is rarely profitable.",
    "Risk comes from not knowing what you're doing.",
    "It takes as much energy to wish as it does to plan.",
    "The four most dangerous words in investing are: 'This time it's different.'",
    "Wide diversification is only required when investors do not understand what they are doing.",
    "The individual investor should act consistently as an investor and not as a speculator.",
    "An investment in knowledge pays the best interest.",
    "Invest in yourself. Your career is the engine of your wealth.",
    "Know what you own, and know why you own it.",
    "In investing, there is no such thing as a free lunch.",
    "The goal of a successful trader is to make the best trades. Money is secondary.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The best way to predict the future is to invent it.",
    "A journey of a thousand miles begins with a single step.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don't watch the clock; do what it does. Keep going.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "The best revenge is massive success.",
    "Opportunities don't happen. You create them.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be afraid to give up the good to go for the great.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success seems to be connected with action. Successful people keep moving.",
    "In order to succeed, we must first believe that we can.",
    "The only place where success comes before work is in the dictionary.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "It is never too late to be what you might have been.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "If you can dream it, you can achieve it.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Never let the fear of striking out keep you from playing the game."
];

document.getElementById("quote-button").addEventListener("click", function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".quote-text").innerText = randomQuote;
});

const ctx = document.getElementById('supplyChart').getContext('2d');
const supplyChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Dev Team (1%)', 'Community (99%)'],
        datasets: [{
            data: [1, 99],
            backgroundColor: ['#FF6384', '#36A2EB'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});
git 