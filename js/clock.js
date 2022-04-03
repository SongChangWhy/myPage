const timeDisplay = document.querySelector(".clock");

let year,month,day,hour,minute,second;

function showtime(){
    const date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    if(minute<10){minute = "0" + minute}
    if(second<10){second = "0" + second}
    if(hour<10){hour = "0" + hour}

    
    timeDisplay.innerHTML = `${year}.${month+1}.${day} | ${hour}:${minute}:${second}`;
}
showtime();
setInterval(showtime, 1000);