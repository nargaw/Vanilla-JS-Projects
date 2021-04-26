function countdown() {
    let now = new Date();
    let eventDate = new Date("Dec 25, 2021 00:00");
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime/1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);
  
    h %= 24;
    m %= 60;
    s %= 60;
    

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("day-count").innerHTML = d;
    document.getElementById("hour-count").innerHTML = h;
    document.getElementById("minute-count").innerHTML = m;
    document.getElementById("second-count").innerHTML = s;

    setTimeout(countdown, 1000);
}

countdown();

