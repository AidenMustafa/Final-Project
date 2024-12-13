//this just ended up reloading the video, so I just gave up
function playVideo(element) {
    var iframe = element.nextElementSibling;
    
    if (iframe && iframe.tagName === "IFRAME") {
        var src = iframe.src;
        
        if (src.includes("autoplay=1")) {
            iframe.src = src.replace("autoplay=1", "autoplay=0");
        } else {
            iframe.src = src.replace("autoplay=0", "autoplay=1");
        }
    }
}

var funMessages = [
    "The Knight ventures onward...",
    "The Infection is spreading!",
    "The Dreamers must be stopped!",
    "Hallownest is full of secrets...",
    "The Pale King awaits in the Temple..."
];

document.getElementById('magicButton').addEventListener('click', function() {
    document.querySelector('h1').innerHTML = `<span class="highlight">The Knight's Journey Begins!</span>`;

    document.body.style.backgroundColor = "#e1f5fe";

    //forgot how to do a random generator so I AI'd it
    var randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];

    document.getElementById('statusMessage').textContent = randomMessage;

    alert(randomMessage);
    
    //found this while looking at funny ideas for javascript
    setTimeout(function() {
        document.body.style.backgroundColor = "#f7f7f7";
        document.querySelector('h1').innerHTML = "Hollow Knight Story";
        document.getElementById('statusMessage').textContent = '';
    }, 5000);
});

var colorIndex = 0;

var colorArray = ["#e1f5fe", "#fce4ec", "#c8e6c9", "#fff3e0"];

//last part had me stumped, but ended up figuring it out
var colorChangeInterval = setInterval(function() {
    document.body.style.backgroundColor = colorArray[colorIndex];
    colorIndex = (colorIndex + 1) % colorArray.length;
}, 5000);

//more setTimeout functions
setTimeout(function() {
    clearInterval(colorChangeInterval);
}, 30000);

setTimeout(function() {
    window.scrollTo(0, 1000);
}, 3000);