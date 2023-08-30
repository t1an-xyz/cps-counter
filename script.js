let active = false;
let startTime = null;
let myInterval = null;

function timer() {
    const timerLabel = document.getElementById('timer');
    let time = +timerLabel.innerText + 0.1;
    let clicks = +document.getElementById('counter').innerText;
    let cps = clicks / time;
    if (active) {
        timerLabel.innerText = time.toFixed(1);
        document.getElementById('cps').innerText = cps.toFixed(1);
    }
    if (timerLabel.innerText == "5.0") {
        active = false;
        alert('Clicks per second: ' + cps.toFixed(1));
        clearInterval(myInterval);
    }
}

function addClick() {
    if (!active) {
        document.getElementById('timer').innerText = 0.0;
        document.getElementById('counter').innerText = 0;
        startTime = Date.now();
        active = true;
        myInterval = setInterval(timer, 100);
    }
    if (active) {
        const label = document.getElementById('counter');
        let clicks = +label.innerText;
        label.innerText = ++clicks;
    }
}