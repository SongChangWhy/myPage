const quote = ["에너지를 올바른 곳에", "더 이상의 치트는 없다", "물을 많이 마시자",
    "일찍 자고 일찍 일어나자", "핸드폰을 자제하자", "좀 더 즐기자", "웃자 하하하"
];

const quotes = document.getElementById("quotes");
const quoteDisplay = document.querySelector(".quote") // quote 전시 공간 지정

function randomQuote() {
    let randNumber = Math.floor(Math.random() * (quote.length));
    quoteDisplay.innerHTML = quote[randNumber]
};

setInterval(randomQuote, 30000);
randomQuote();

function addQuote(event) {
    event.preventDefault();
    let newQuote = document.getElementById("newQuote")
    quote.push(newQuote.value);
    quoteDisplay.innerHTML = newQuote.value;
    newQuote.value = "";
}

const quoteAdd = document.getElementById("quoteAdd");

quotes.addEventListener("submit", addQuote)