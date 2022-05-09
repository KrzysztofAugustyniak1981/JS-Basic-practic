function TimeDate() {
    const today = new Date();
    
    let hour = today.getHours()
    const minute = today.getMinutes()
    const second = today.getSeconds()
    /*if (minute<10) {
        if (second<10) {
            document.getElementById("time").innerHTML = today + hour + ":0" + minute + ":0" +second;
        }
        else {
            document.getElementById("time").innerHTML = today + hour + ":0" + minute + ":" +second;
        }
    }
    else {
        if (second<10) {
            document.getElementById("time").innerHTML = today + hour + ":" + minute + ":0" +second;
        }
            else {*/
        document.getElementById("time").innerHTML = today// + hour + ":" + minute + ":" + second;
            //}
            
        //}
    setTimeout(TimeDate, 1000);  
};
TimeDate()