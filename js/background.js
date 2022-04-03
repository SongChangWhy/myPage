const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

function randomBackground() {
    let randNumber = Math.floor(Math.random() * (images.length));
    return randNumber;
};

document.backgroundImage.src = `img/${randomBackground()}.jpg` ;