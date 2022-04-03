const quote = ["에너지를 올바른 곳에", "더 이상의 치트는 없다", "물을 많이 마시자",
    "일찍 자고 일찍 일어나자", "핸드폰을 자제하자", "좀 더 즐기자"
];

const quoteDisplay = document.querySelector(".quote")

function randomQuote() {
    let randNumber = Math.floor(Math.random() * (quote.length - 1));
    quoteDisplay.innerHTML = quote[randNumber]
};

setInterval(randomQuote, 10000);


quoteDisplay.innerHTML = quote[1];
console.log(quote.length);

function addQuote() {
    let newQuote = document.getElementById("newQuote")
    quote.push(newQuote.value);
    newQuote.value = "";
}

const quoteAdd = document.getElementById("quoteAdd");

quoteAdd.addEventListener("click", addQuote)