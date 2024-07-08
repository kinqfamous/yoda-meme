document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "In the middle of difficulty lies opportunity.",
        "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
        "Risk comes from not knowing what you are doing.",
        "The goal of a successful trader is to make the best trades. Money is secondary.",
        "Don't let the fear of losing be greater than the excitement of winning.",
        "Time in the market beats timing the market.",
        "The secret to investing is to figure out the value of something – and then pay a lot less.",
        "Opportunities don't happen. You create them.",
        "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        "Success in trading is a process of continually becoming.",
        "Successful trading is about managing risk, not avoiding it.",
        "You don’t have to be smarter than the next person. You have to be more disciplined.",
        "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
        "Patience is bitter, but its fruit is sweet.",
        "The market is a device for transferring money from the impatient to the patient.",
        "In trading, it's not about how much you make, but how much you don't lose.",
        "Trade with the trend until the end when it bends.",
        "The biggest risk is not taking any risk.",
        "It’s not whether you’re right or wrong that’s important, but how much money you make when you’re right and how much you lose when you’re wrong.",
        "Trade the market, not your opinion.",
        "Discipline is the bridge between goals and accomplishment.",
        "The markets are always changing, and they are always the same.",
        "Plan your trade and trade your plan.",
        "The best investment you can make is in yourself.",
        "To earn money, you need to take risks. To earn a lot of money, you need to take a lot of risks.",
        "It's not about how much you do, but how much love you put into what you do that counts.",
        "Cut your losses short and let your winners run.",
        "An investment in knowledge pays the best interest.",
        "Investing isn’t about beating others at their game. It’s about controlling yourself at your own game.",
        "The four most dangerous words in investing are: 'This time it's different.'",
        "Do not be embarrassed by your failures, learn from them and start again.",
        "Trade less, earn more.",
        "Successful investing is about managing risk, not avoiding it.",
        "Every trader has to learn a system and stick to it.",
        "Only buy something that you’d be perfectly happy to hold if the market shut down for ten years.",
        "You must gain control over your money or the lack of it will forever control you.",
        "A goal without a plan is just a wish.",
        "If you don’t find a way to make money while you sleep, you will work until you die.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Do one thing every day that scares you.",
        "The function of economic forecasting is to make astrology look respectable.",
        "The trend is your friend until the end when it bends.",
        "The goal is to find opportunities where risk-reward potential is heavily skewed in your favor.",
        "Your most valuable asset can be your willingness to persist longer than anyone else.",
        "A journey of a thousand miles begins with a single step.",
        "Fortune favors the brave.",
        "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "You miss 100% of the shots you don’t take.",
        "The best way to predict the future is to create it."
    ];

    const button = document.getElementById('quote-button');
    const quoteText = document.querySelector('.quote-text');

    button.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.textContent = `"${randomQuote}"`;
    });

    const ctx = document.getElementById('supplyChart').getContext('2d');
    const supplyChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Team', 'Community'],
            datasets: [{
                data: [1, 99],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
});
