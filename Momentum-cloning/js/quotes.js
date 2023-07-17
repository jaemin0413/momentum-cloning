const quotes = [
{
quote: 'I never dreamed about success, I worked for it',
author: 'Estee Lauder'
},
{
quote: 'Do not try to be original, just try to be good.',
author: 'Paul Rand'
},
{
quote: 'Do not be afraid to give up the good to go for the great',
author: 'John D. Rockefeller'
},
{
quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
author: 'Martin Luther King Jr.'
},
{
quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
author: 'Thomas Edison'
},
{
quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
author: 'REid Hoffman'
},
{
quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
author: 'Tim O Reilly'
},
{
quote: 'Some people dream of success, while other people get up every morning and make it happen',
author: 'Wayne Huizenga'
},
{
quote: 'The only thing worse than starting something and falling.. is not starting something',
author: 'SEth Godin'
},
{
quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
author: 'Jim Rohn'
},
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
/*	random은 0과 1 사이의 일정한 수를 출력하는 함수이다. 
	따라서 array의 요소 갯수만큼 수를 곱하고 소수점 이하 수를 버리면 0부터 요소 갯수-1 의 일정한 수를 구할 수 있다.
	이를 통해 랜덤한 명언을 출력할 수 있다.*/

quote.innerText= todayQuotes.quote;
author.innerText=todayQuotes.author;