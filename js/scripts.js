function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    var months = ['January', 'February',
        'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thrusday', 'Friday', 'Saturday'];
    var curDay = days[today.getDay()];
    var curDate = today.getDate();
    var year = today.getFullYear();
    var curMonth = months[today.getMonth()];
    var date = curDay + " " + curDate + " " + curMonth + " " + year;
    document.getElementById("date").innerHTML = date;
    var time = setTimeout(function () { startTime() }, 500);
}

function checkTime( i ) {
    if ( i < 10 ) {
        i = '0' + i;
    }
    return i;
}
